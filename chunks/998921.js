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
        e.on("data", (t) => {
            try {
                i.read(t);
            } catch (t) {
                e.end(A(p.CLOSE, { code: 1003, message: t.message })), e.destroy();
            }
        });
        let r = () => {
                try {
                    e.end(A(p.CLOSE, { code: _.YI$.CLOSE_NORMAL, message: "test client going away" })), e.destroy();
                } catch (e) {}
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
    clientId = null;
    constructor(e, t) {
        super("ipc", _.dL4, t), (this.socket = e), E(e, !1);
    }
    copyBuffer(e, t, n) {
        let r = i.Buffer.allocUnsafe(n - t);
        return e.copy(r, 0, t, n), r;
    }
    send(e) {
        h.info(`Socket Emit: ${this.id}`, (0, u.A)(e)), this.socket.write(A(p.FRAME, e));
    }
    close(e, t) {
        this.socket.end(A(p.CLOSE, { code: e, message: t })), this.socket.destroy();
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
            case p.PING:
                e.emit("ping", n), e.write(A(p.PONG, n));
                break;
            case p.PONG:
                e.emit("pong", n);
                break;
            case p.HANDSHAKE:
                this.handleHandshake(e, n), e.emit("handshake", n);
                break;
            case p.FRAME:
                if (!m(e)) throw Error("did not handshake");
                e.emit("request", n);
                break;
            case p.CLOSE:
                e.end(A(p.CLOSE, { code: _.YI$.CLOSE_NORMAL, message: "client disconnect" })), e.destroy();
        }
    }
    handleHandshake(e, t) {
        if (m(e)) throw Error("already did handshake");
        (this.clientId = t.client_id), this.checkRpcVersion(+t.v), E(e, !0);
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
            } catch (e) {}
            e.destroy();
            return;
        }
        this.activeConnections++;
        let t = new I(e, "json");
        e.on("close", () => {
            this.activeConnections--,
                h.info(`Socket Close: ${t.id} (active: ${this.activeConnections})`),
                t.abortController.abort(),
                this.emit("disconnect", t);
        });
        let n = setTimeout(() => {
            h.warn("Handshake timeout for connection, closing socket");
            try {
                e.end(A(p.CLOSE, { code: _.YI$.CLOSE_ABNORMAL, message: "Handshake timeout" }));
            } catch (e) {}
            e.destroy();
        }, 1e4);
        e.on("readable", () => {
            let n = e.read();
            null != n && t.read(i.Buffer.from(n));
        }),
            e.on("data", (r) => {
                try {
                    t.read(i.Buffer.from(r));
                } catch (t) {
                    clearTimeout(n),
                        h.error(`Socket Error: ${t.message}`),
                        e.end(A(p.CLOSE, { code: _.YI$.CLOSE_UNSUPPORTED, message: t.message })),
                        e.destroy();
                }
            }),
            e.once("handshake", () => {
                clearTimeout(n);
                let i = t.clientId;
                h.info(`Socket Opened: ${t.id} (active: ${this.activeConnections})`),
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
