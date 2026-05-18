"use strict";
n.d(t, { A: () => S });
var i = n(264572),
    r = n(143236),
    s = n(735438),
    a = n.n(s),
    o = n(626584),
    l = n(19575),
    u = n(861621),
    c = n(313731),
    d = n(546983),
    _ = n(652215);
let f = l.Ay.requireModule("discord_rpc").RPCIPC,
    h = new o.A("RPCServer:IPC"),
    p = { HANDSHAKE: 0, FRAME: 1, CLOSE: 2, PING: 3, PONG: 4 };
function E(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function m(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function g(e) {
    return new Promise((t, n) => {
        "string" == typeof e && (e = f.net.createConnection(e));
        let i = new I(e, "json");
        e.on("data", (e) => {
            try {
                i.read(e);
            } catch (e) {
                i.close(_.YI$.CLOSE_UNSUPPORTED, e.message);
            }
        });
        let r = () => {
                i.close(_.YI$.CLOSE_NORMAL, "test client going away");
            },
            s = Promise.race([
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
        return e.write(A(p.PING, a().uniqueId())), s.then(t, n);
    });
}
function A(e, t) {
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
class I extends c.A {
    messageBuffer = i.Buffer.alloc(0);
    currentHeader = null;
    MAX_BUFFER_SIZE = 5242880;
    socket;
    onClose = null;
    clientId = null;
    constructor(e, t, n = null) {
        super("ipc", _.dL4, t),
            (this.socket = e),
            (this.onClose = n),
            E(e, !1),
            this.socket.on("close", () => {
                null != this.onClose && (this.onClose(), (this.onClose = null));
            });
    }
    copyBuffer(e, t, n) {
        let r = i.Buffer.allocUnsafe(n - t);
        return e.copy(r, 0, t, n), r;
    }
    send(e) {
        h.info(`Socket Emit: ${this.id}`, (0, u.A)(e)), this.socket.write(A(p.FRAME, e));
    }
    close(e, t) {
        try {
            this.socket.end(A(p.CLOSE, { code: e, message: t }));
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
                    !Object.values(p).includes(this.currentHeader.opcode) || this.currentHeader.size < 0)
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
            case p.PING:
                this.socket.emit("ping", t), this.socket.write(A(p.PONG, t));
                break;
            case p.PONG:
                this.socket.emit("pong", t);
                break;
            case p.HANDSHAKE:
                this.handleHandshake(t), this.socket.emit("handshake", t);
                break;
            case p.FRAME:
                if (!m(this.socket)) throw Error("did not handshake");
                this.socket.emit("request", t);
                break;
            case p.CLOSE:
                this.close(_.YI$.CLOSE_NORMAL, "client disconnect");
        }
    }
    handleHandshake(e) {
        if (m(this.socket)) throw Error("already did handshake");
        (this.clientId = e.client_id), this.checkRpcVersion(+e.v), E(this.socket, !0);
    }
}
class T extends r.EventEmitter {
    activeConnections = 0;
    MAX_CONNECTIONS = 100;
    constructor() {
        super();
        const e = f.net.createServer((e) => this.handleConnection(e));
        e.on("error", (e) => h.error(`Error: ${e.message}`)),
            f.getAvailableSocket(g).then((t) => {
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
                e.end(A(p.CLOSE, { code: _.YI$.CLOSE_ABNORMAL, message: "Server at capacity" }));
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
        let t = new I(e, "json", () => {
                this.activeConnections--,
                    h.info(`Socket Close: ${t.id} ${t.clientId ?? "unknown"} (active: ${this.activeConnections})`),
                    t.abortController.abort(),
                    this.emit("disconnect", t);
            }),
            n = setTimeout(() => {
                h.warn("Handshake timeout for connection, closing socket"),
                    t.close(_.YI$.CLOSE_ABNORMAL, "Handshake timeout");
            }, 1e4);
        e.on("readable", () => {
            let n = e.read();
            null != n && t.read(i.Buffer.from(n));
        }),
            e.on("data", (e) => {
                try {
                    t.read(i.Buffer.from(e));
                } catch (e) {
                    clearTimeout(n), h.error(`Socket Error: ${e.message}`), t.close(_.YI$.CLOSE_UNSUPPORTED, e.message);
                }
            }),
            e.once("handshake", () => {
                clearTimeout(n);
                let i = t.clientId;
                h.info(`Socket Opened: ${t.id} ${i ?? "unknown"} (active: ${this.activeConnections})`),
                    e.on("error", (e) => h.error(`Socket Error: ${e.message}`)),
                    (0, d.j7)(t, null, i)
                        .then(() => {
                            t.abortController.signal.aborted ||
                                (e.on("request", (e) => {
                                    h.info(`Socket Message: ${t.id}`, (0, u.A)(e)), this.emit("request", t, e);
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
let S = new T();
