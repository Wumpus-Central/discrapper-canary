var i = n(264572),
    r = n(143236),
    a = n(435558),
    s = n.n(a),
    l = n(626584),
    o = n(253400),
    d = n(861621),
    c = n(313731),
    u = n(546983),
    _ = n(613057),
    E = n(652215);
let A = o.Ay.requireModule("discord_rpc").RPCIPC,
    f = new l.A("RPCServer:IPC"),
    h = { HANDSHAKE: 0, FRAME: 1, CLOSE: 2, PING: 3, PONG: 4 };
function I(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function p(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function m(e) {
    return new Promise((t, n) => {
        "string" == typeof e && (e = A.net.createConnection(e));
        let i = new T(e, "json");
        function r() {
            i.close(E.YI$.CLOSE_NORMAL, "test client going away");
        }
        e.on("data", (e) => {
            try {
                i.read(e);
            } catch (e) {
                i.close(E.YI$.CLOSE_UNSUPPORTED, e.message);
            }
        });
        let a = Promise.race([
            new Promise((t) => e.on("error", () => t())),
            new Promise((t, n) => {
                e.on("pong", () => n(Error("socket responded with pong")));
            }),
            new Promise((e, t) => {
                setTimeout(() => t(Error("socket alive timeout")), 1e3);
            }),
        ]).then(
            () => {
                r();
            },
            (e) => {
                throw (r(), e);
            },
        );
        return (e.write(g(h.PING, s().uniqueId())), a.then(t, n));
    });
}
function g(e, t) {
    t = JSON.stringify(t);
    let n = i.hp.byteLength(t),
        r = i.hp.alloc(8 + n);
    return (
        r.writeInt32LE(e, 0),
        r.writeInt32LE(n, 4),
        r.write(t, 8, n),
        r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength)
    );
}
class T extends c.A {
    messageBuffer = i.hp.alloc(0);
    currentHeader = null;
    MAX_BUFFER_SIZE = 5242880;
    socket;
    onClose = null;
    clientId = null;
    constructor(e, t, n = null) {
        (super({ type: _.z4.IPC }, E.dL4, t),
            (this.socket = e),
            (this.onClose = n),
            I(e, !1),
            this.socket.on("close", () => {
                null != this.onClose && (this.onClose(), (this.onClose = null));
            }));
    }
    copyBuffer(e, t, n) {
        let r = i.hp.allocUnsafe(n - t);
        return (e.copy(r, 0, t, n), r);
    }
    send(e) {
        (f.info(`Socket Emit: ${this.id}`, (0, d.A)(e)), this.socket.write(g(h.FRAME, e)));
    }
    close(e, t) {
        try {
            this.socket.end(g(h.CLOSE, { code: e, message: t }));
        } catch (e) {
            f.error(`Socket End Error: ${e.message}`);
        }
        try {
            this.socket.destroy();
        } catch (e) {
            f.error(`Socket Destroy Error: ${e.message}`);
        }
        null != this.onClose && (this.onClose(), (this.onClose = null));
    }
    read(e) {
        var t;
        let n;
        if (this.messageBuffer.byteLength + e.byteLength > this.MAX_BUFFER_SIZE)
            throw Error("total buffer size exceeded");
        ((this.messageBuffer =
            ((t = this.messageBuffer),
            (n = i.hp.alloc(t.byteLength + e.byteLength)).set(t),
            n.set(e, t.byteLength),
            n)),
            this.processMessages());
    }
    processMessages() {
        for (; this.messageBuffer.byteLength >= 8;) {
            if (null === this.currentHeader) {
                if (
                    ((this.currentHeader = {
                        opcode: this.messageBuffer.readInt32LE(0),
                        size: this.messageBuffer.readInt32LE(4),
                    }),
                    !Object.values(h).includes(this.currentHeader.opcode) || this.currentHeader.size < 0)
                )
                    throw Error("protocol error");
                if (this.currentHeader.size > 3145728) throw Error("message too large");
                this.messageBuffer = this.copyBuffer(this.messageBuffer, 8, this.messageBuffer.byteLength);
            }
            if (this.messageBuffer.byteLength >= this.currentHeader.size) {
                let e = JSON.parse(this.copyBuffer(this.messageBuffer, 0, this.currentHeader.size).toString());
                (this.dispatchMessage(this.currentHeader.opcode, e),
                    (this.messageBuffer = this.copyBuffer(
                        this.messageBuffer,
                        this.currentHeader.size,
                        this.messageBuffer.byteLength,
                    )),
                    (this.currentHeader = null));
            } else break;
        }
    }
    dispatchMessage(e, t) {
        switch (e) {
            case h.PING:
                (this.socket.emit("ping", t), this.socket.write(g(h.PONG, t)));
                break;
            case h.PONG:
                this.socket.emit("pong", t);
                break;
            case h.HANDSHAKE:
                (this.handleHandshake(t), this.socket.emit("handshake", t));
                break;
            case h.FRAME:
                if (!p(this.socket)) throw Error("did not handshake");
                this.socket.emit("request", t);
                break;
            case h.CLOSE:
                this.close(E.YI$.CLOSE_NORMAL, "client disconnect");
        }
    }
    handleHandshake(e) {
        if (p(this.socket)) throw Error("already did handshake");
        ((this.clientId = e.client_id), this.checkRpcVersion(+e.v), I(this.socket, !0));
    }
}
class S extends r.EventEmitter {
    activeConnections = 0;
    MAX_CONNECTIONS = 100;
    constructor() {
        super();
        let e = A.net.createServer((e) => this.handleConnection(e));
        (e.on("error", (e) => f.error(`Error: ${e.message}`)),
            A.getAvailableSocket(m).then((t) => {
                e.listen(t, () => {
                    ("function" == typeof e.listening ? e.listening() : e.listening) &&
                        f.info(`Starting on ${e.address()}`);
                });
            }));
    }
    handleConnection(e) {
        if (this.activeConnections >= this.MAX_CONNECTIONS) {
            f.warn(`Connection limit reached (${this.MAX_CONNECTIONS}), rejecting connection`);
            try {
                e.end(g(h.CLOSE, { code: E.YI$.CLOSE_ABNORMAL, message: "Server at capacity" }));
            } catch (e) {
                f.error(`Socket End Error: ${e.message}`);
            }
            try {
                e.destroy();
            } catch (e) {
                f.error(`Socket Destroy Error: ${e.message}`);
            }
            return;
        }
        this.activeConnections++;
        let t = new T(e, "json", () => {
                (this.activeConnections--,
                    f.info(`Socket Close: ${t.id} ${t.clientId ?? "unknown"} (active: ${this.activeConnections})`),
                    t.abortController.abort(),
                    this.emit("disconnect", t));
            }),
            n = setTimeout(() => {
                (f.warn("Handshake timeout for connection, closing socket"),
                    t.close(E.YI$.CLOSE_ABNORMAL, "Handshake timeout"));
            }, 1e4);
        (e.on("readable", () => {
            let n = e.read();
            null != n && t.read(i.hp.from(n));
        }),
            e.on("data", (e) => {
                try {
                    t.read(i.hp.from(e));
                } catch (e) {
                    (clearTimeout(n),
                        f.error(`Socket Error: ${e.message}`),
                        t.close(E.YI$.CLOSE_UNSUPPORTED, e.message));
                }
            }),
            e.once("handshake", () => {
                clearTimeout(n);
                let i = t.clientId;
                (f.info(`Socket Opened: ${t.id} ${i ?? "unknown"} (active: ${this.activeConnections})`),
                    e.on("error", (e) => f.error(`Socket Error: ${e.message}`)),
                    (0, u.j7)(t, null, i)
                        .then(() => {
                            t.abortController.signal.aborted ||
                                (e.on("request", (e) => {
                                    (f.info(`Socket Message: ${t.id}`, (0, d.A)(e)), this.emit("request", t, e));
                                }),
                                this.emit("connect", t));
                        })
                        .catch((e) => {
                            let { code: n, message: i } = e;
                            t.abortController.signal.aborted || t.close(n, i);
                        }));
            }));
    }
}
let N = new S();
n.d(t, {}, { A: N });
