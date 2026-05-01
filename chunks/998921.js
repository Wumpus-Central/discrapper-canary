n.d(t, { A: () => m });
var i = n(264572),
    a = n(143236),
    r = n(735438),
    s = n.n(r),
    l = n(626584),
    o = n(19575),
    d = n(861621),
    c = n(313731),
    _ = n(546983),
    E = n(652215);
let u = o.Ay.requireModule("discord_rpc").RPCIPC,
    A = new l.A("RPCServer:IPC"),
    I = { HANDSHAKE: 0, FRAME: 1, CLOSE: 2, PING: 3, PONG: 4 };
function T(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function h(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function S(e) {
    return new Promise((t, n) => {
        "string" == typeof e && (e = u.net.createConnection(e));
        let i = new f(e, "json");
        e.on("data", (t) => {
            try {
                i.read(t);
            } catch (t) {
                e.end(N(I.CLOSE, { code: 1003, message: t.message })), e.destroy();
            }
        });
        let a = () => {
                try {
                    e.end(N(I.CLOSE, { code: E.YI$.CLOSE_NORMAL, message: "test client going away" })), e.destroy();
                } catch (e) {}
            },
            r = Promise.race([
                new Promise((t) => e.on("error", () => t())),
                new Promise((t, n) => {
                    e.on("pong", () => n(Error("socket responded with pong")));
                }),
                new Promise((e, t) => {
                    setTimeout(() => t(Error("socket alive timeout")), 1e3);
                }),
            ]).then(
                () => {
                    a();
                },
                (e) => {
                    throw (a(), e);
                },
            );
        return e.write(N(I.PING, s().uniqueId())), r.then(t, n);
    });
}
function N(e, t) {
    t = JSON.stringify(t);
    let n = i.Buffer.byteLength(t),
        a = i.Buffer.alloc(8 + n);
    return (
        a.writeInt32LE(e, 0),
        a.writeInt32LE(n, 4),
        a.write(t, 8, n),
        a.buffer.slice(a.byteOffset, a.byteOffset + a.byteLength)
    );
}
class f extends c.A {
    messageBuffer = i.Buffer.alloc(0);
    currentHeader = null;
    MAX_BUFFER_SIZE = 5242880;
    socket;
    clientId = null;
    constructor(e, t) {
        super("ipc", E.dL4, t), (this.socket = e), T(e, !1);
    }
    copyBuffer(e, t, n) {
        let a = i.Buffer.allocUnsafe(n - t);
        return e.copy(a, 0, t, n), a;
    }
    send(e) {
        A.info(`Socket Emit: ${this.id}`, (0, d.A)(e)), this.socket.write(N(I.FRAME, e));
    }
    close(e, t) {
        this.socket.end(N(I.CLOSE, { code: e, message: t })), this.socket.destroy();
    }
    read(e) {
        var t;
        let n;
        if (this.messageBuffer.byteLength + e.byteLength > this.MAX_BUFFER_SIZE)
            throw Error("total buffer size exceeded");
        (this.messageBuffer =
            ((t = this.messageBuffer),
            (n = i.Buffer.alloc(t.byteLength + e.byteLength)).set(t),
            n.set(e, t.byteLength),
            n)),
            this.processMessages();
    }
    processMessages() {
        for (; this.messageBuffer.byteLength >= 8; ) {
            if (null === this.currentHeader) {
                if (
                    ((this.currentHeader = {
                        opcode: this.messageBuffer.readInt32LE(0),
                        size: this.messageBuffer.readInt32LE(4),
                    }),
                    !Object.values(I).includes(this.currentHeader.opcode) || this.currentHeader.size < 0)
                )
                    throw Error("protocol error");
                if (this.currentHeader.size > 3145728) throw Error("message too large");
                this.messageBuffer = this.copyBuffer(this.messageBuffer, 8, this.messageBuffer.byteLength);
            }
            if (this.messageBuffer.byteLength >= this.currentHeader.size) {
                let e = JSON.parse(this.copyBuffer(this.messageBuffer, 0, this.currentHeader.size).toString());
                this.dispatchMessage(this.socket, this.currentHeader.opcode, e),
                    (this.messageBuffer = this.copyBuffer(
                        this.messageBuffer,
                        this.currentHeader.size,
                        this.messageBuffer.byteLength,
                    )),
                    (this.currentHeader = null);
            } else break;
        }
    }
    dispatchMessage(e, t, n) {
        switch (t) {
            case I.PING:
                e.emit("ping", n), e.write(N(I.PONG, n));
                break;
            case I.PONG:
                e.emit("pong", n);
                break;
            case I.HANDSHAKE:
                this.handleHandshake(e, n), e.emit("handshake", n);
                break;
            case I.FRAME:
                if (!h(e)) throw Error("did not handshake");
                e.emit("request", n);
                break;
            case I.CLOSE:
                e.end(N(I.CLOSE, { code: E.YI$.CLOSE_NORMAL, message: "client disconnect" })), e.destroy();
        }
    }
    handleHandshake(e, t) {
        if (h(e)) throw Error("already did handshake");
        (this.clientId = t.client_id), this.checkRpcVersion(+t.v), T(e, !0);
    }
}
class p extends a.EventEmitter {
    activeConnections = 0;
    MAX_CONNECTIONS = 100;
    constructor() {
        super();
        const e = u.net.createServer((e) => this.handleConnection(e));
        e.on("error", (e) => A.error(`Error: ${e.message}`)),
            u.getAvailableSocket(S).then((t) => {
                e.listen(t, () => {
                    ("function" == typeof e.listening ? e.listening() : e.listening) &&
                        A.info(`Starting on ${e.address()}`);
                });
            });
    }
    handleConnection(e) {
        if (this.activeConnections >= this.MAX_CONNECTIONS) {
            A.warn(`Connection limit reached (${this.MAX_CONNECTIONS}), rejecting connection`);
            try {
                e.end(N(I.CLOSE, { code: E.YI$.CLOSE_ABNORMAL, message: "Server at capacity" }));
            } catch (e) {}
            e.destroy();
            return;
        }
        this.activeConnections++;
        let t = new f(e, "json");
        e.on("close", () => {
            this.activeConnections--,
                A.info(`Socket Close: ${t.id} (active: ${this.activeConnections})`),
                t.abortController.abort(),
                this.emit("disconnect", t);
        });
        let n = setTimeout(() => {
            A.warn("Handshake timeout for connection, closing socket");
            try {
                e.end(N(I.CLOSE, { code: E.YI$.CLOSE_ABNORMAL, message: "Handshake timeout" }));
            } catch (e) {}
            e.destroy();
        }, 1e4);
        e.on("readable", () => {
            let n = e.read();
            null != n && t.read(i.Buffer.from(n));
        }),
            e.on("data", (a) => {
                try {
                    t.read(i.Buffer.from(a));
                } catch (t) {
                    clearTimeout(n),
                        A.error(`Socket Error: ${t.message}`),
                        e.end(N(I.CLOSE, { code: E.YI$.CLOSE_UNSUPPORTED, message: t.message })),
                        e.destroy();
                }
            }),
            e.once("handshake", () => {
                clearTimeout(n);
                let i = t.clientId;
                A.info(`Socket Opened: ${t.id} (active: ${this.activeConnections})`),
                    e.on("error", (e) => A.error(`Socket Error: ${e.message}`)),
                    (0, _.j7)(t, null, i)
                        .then(() => {
                            t.abortController.signal.aborted ||
                                (e.on("request", (e) => {
                                    A.info(`Socket Message: ${t.id}`, (0, d.A)(e)), this.emit("request", t, e);
                                }),
                                this.emit("connect", t));
                        })
                        .catch((e) => {
                            let { code: n, message: i } = e;
                            t.abortController.signal.aborted || t.close(n, i);
                        });
            });
    }
}
let m = new p();
