"use strict";
n.d(t, { A: () => N });
var i = n(264572),
    r = n(143236),
    a = n(435558),
    s = n.n(a),
    l = n(626584),
    o = n(19575),
    d = n(861621),
    c = n(313731),
    u = n(546983),
    _ = n(613057),
    E = n(652215);
let A = o.Ay.requireModule("discord_rpc").RPCIPC,
    h = new l.A("RPCServer:IPC"),
    I = { HANDSHAKE: 0, FRAME: 1, CLOSE: 2, PING: 3, PONG: 4 };
function f(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function p(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function T(e) {
    return new Promise((t, n) => {
        "string" == typeof e && (e = A.net.createConnection(e));
        let i = new g(e, "json");
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
        return e.write(m(I.PING, s().uniqueId())), a.then(t, n);
    });
}
function m(e, t) {
    t = JSON.stringify(t);
    let n = i.Buffer.byteLength(t),
        r = i.Buffer.alloc(8 + n);
    return (
        r.writeInt32LE(e, 0),
        r.writeInt32LE(n, 4),
        r.write(t, 8, n),
        r.buffer.slice(r.byteOffset, r.byteOffset + r.byteLength)
    );
}
class g extends c.A {
    messageBuffer = i.Buffer.alloc(0);
    currentHeader = null;
    MAX_BUFFER_SIZE = 5242880;
    socket;
    onClose = null;
    clientId = null;
    constructor(e, t, n = null) {
        super({ type: _.z4.IPC }, E.dL4, t),
            (this.socket = e),
            (this.onClose = n),
            f(e, !1),
            this.socket.on("close", () => {
                null != this.onClose && (this.onClose(), (this.onClose = null));
            });
    }
    copyBuffer(e, t, n) {
        let r = i.Buffer.allocUnsafe(n - t);
        return e.copy(r, 0, t, n), r;
    }
    send(e) {
        h.info(`Socket Emit: ${this.id}`, (0, d.A)(e)), this.socket.write(m(I.FRAME, e));
    }
    close(e, t) {
        try {
            this.socket.end(m(I.CLOSE, { code: e, message: t }));
        } catch (e) {
            h.error(`Socket End Error: ${e.message}`);
        }
        try {
            this.socket.destroy();
        } catch (e) {
            h.error(`Socket Destroy Error: ${e.message}`);
        }
        null != this.onClose && (this.onClose(), (this.onClose = null));
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
                this.dispatchMessage(this.currentHeader.opcode, e),
                    (this.messageBuffer = this.copyBuffer(
                        this.messageBuffer,
                        this.currentHeader.size,
                        this.messageBuffer.byteLength,
                    )),
                    (this.currentHeader = null);
            } else break;
        }
    }
    dispatchMessage(e, t) {
        switch (e) {
            case I.PING:
                this.socket.emit("ping", t), this.socket.write(m(I.PONG, t));
                break;
            case I.PONG:
                this.socket.emit("pong", t);
                break;
            case I.HANDSHAKE:
                this.handleHandshake(t), this.socket.emit("handshake", t);
                break;
            case I.FRAME:
                if (!p(this.socket)) throw Error("did not handshake");
                this.socket.emit("request", t);
                break;
            case I.CLOSE:
                this.close(E.YI$.CLOSE_NORMAL, "client disconnect");
        }
    }
    handleHandshake(e) {
        if (p(this.socket)) throw Error("already did handshake");
        (this.clientId = e.client_id), this.checkRpcVersion(+e.v), f(this.socket, !0);
    }
}
class S extends r.EventEmitter {
    activeConnections = 0;
    MAX_CONNECTIONS = 100;
    constructor() {
        super();
        const e = A.net.createServer((e) => this.handleConnection(e));
        e.on("error", (e) => h.error(`Error: ${e.message}`)),
            A.getAvailableSocket(T).then((t) => {
                e.listen(t, () => {
                    ("function" == typeof e.listening ? e.listening() : e.listening) &&
                        h.info(`Starting on ${e.address()}`);
                });
            });
    }
    handleConnection(e) {
        if (this.activeConnections >= this.MAX_CONNECTIONS) {
            h.warn(`Connection limit reached (${this.MAX_CONNECTIONS}), rejecting connection`);
            try {
                e.end(m(I.CLOSE, { code: E.YI$.CLOSE_ABNORMAL, message: "Server at capacity" }));
            } catch (e) {
                h.error(`Socket End Error: ${e.message}`);
            }
            try {
                e.destroy();
            } catch (e) {
                h.error(`Socket Destroy Error: ${e.message}`);
            }
            return;
        }
        this.activeConnections++;
        let t = new g(e, "json", () => {
                this.activeConnections--,
                    h.info(`Socket Close: ${t.id} ${t.clientId ?? "unknown"} (active: ${this.activeConnections})`),
                    t.abortController.abort(),
                    this.emit("disconnect", t);
            }),
            n = setTimeout(() => {
                h.warn("Handshake timeout for connection, closing socket"),
                    t.close(E.YI$.CLOSE_ABNORMAL, "Handshake timeout");
            }, 1e4);
        e.on("readable", () => {
            let n = e.read();
            null != n && t.read(i.Buffer.from(n));
        }),
            e.on("data", (e) => {
                try {
                    t.read(i.Buffer.from(e));
                } catch (e) {
                    clearTimeout(n), h.error(`Socket Error: ${e.message}`), t.close(E.YI$.CLOSE_UNSUPPORTED, e.message);
                }
            }),
            e.once("handshake", () => {
                clearTimeout(n);
                let i = t.clientId;
                h.info(`Socket Opened: ${t.id} ${i ?? "unknown"} (active: ${this.activeConnections})`),
                    e.on("error", (e) => h.error(`Socket Error: ${e.message}`)),
                    (0, u.j7)(t, null, i)
                        .then(() => {
                            t.abortController.signal.aborted ||
                                (e.on("request", (e) => {
                                    h.info(`Socket Message: ${t.id}`, (0, d.A)(e)), this.emit("request", t, e);
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
let N = new S();
