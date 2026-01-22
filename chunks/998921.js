n.d(t, {
    A: () => I,
}),
    n(896048),
    n(65821),
    n(457529);
var r = n(264572),
    i = n(143236),
    l = n(735438),
    a = n.n(l),
    s = n(626584),
    o = n(837921),
    c = n(84002),
    u = n(313731),
    d = n(546983),
    p = n(652215);

function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let h = o.Ay.requireModule("discord_rpc").RPCIPC,
    A = new s.A("RPCServer:IPC"),
    g = {
        HANDSHAKE: 0,
        FRAME: 1,
        CLOSE: 2,
        PING: 3,
        PONG: 4,
    };

function m(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}

function b(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}

function _(e) {
    return new Promise((t, n) => {
        "string" == typeof e && (e = h.net.createConnection(e));
        let r = new O(e, "json");
        e.on("data", (t) => {
            try {
                r.read(t);
            } catch (t) {
                e.end(
                    E(g.CLOSE, {
                        code: 1003,
                        message: t.message,
                    }),
                ),
                    e.destroy();
            }
        });
        let i = () => {
                try {
                    e.end(
                        E(g.CLOSE, {
                            code: p.YI$.CLOSE_NORMAL,
                            message: "test client going away",
                        }),
                    ),
                        e.destroy();
                } catch (e) {}
            },
            l = Promise.race([
                new Promise((t) => e.on("error", () => t())),
                new Promise((t, n) => {
                    e.on("pong", () => n(Error("socket responded with pong")));
                }),
                new Promise((e, t) => {
                    setTimeout(() => t(Error("socket alive timeout")), 1e3);
                }),
            ]).then(
                () => {
                    i();
                },
                (e) => {
                    throw (i(), e);
                },
            );
        return e.write(E(g.PING, a().uniqueId())), l.then(t, n);
    });
}

function E(e, t) {
    t = JSON.stringify(t);
    let n = r.Buffer.byteLength(t),
        i = r.Buffer.alloc(8 + n);
    return (
        i.writeInt32LE(e, 0),
        i.writeInt32LE(n, 4),
        i.write(t, 8, n),
        i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength)
    );
}
class O extends u.A {
    copyBuffer(e, t, n) {
        let i = r.Buffer.allocUnsafe(n - t);
        return e.copy(i, 0, t, n), i;
    }
    send(e) {
        A.info("Socket Emit: ".concat(this.id), (0, c.A)(e)), this.socket.write(E(g.FRAME, e));
    }
    close(e, t) {
        this.socket.end(
            E(g.CLOSE, {
                code: e,
                message: t,
            }),
        ),
            this.socket.destroy();
    }
    read(e) {
        var t;
        let n;
        if (this.messageBuffer.byteLength + e.byteLength > this.MAX_BUFFER_SIZE)
            throw Error("total buffer size exceeded");
        (this.messageBuffer =
            ((t = this.messageBuffer),
            (n = r.Buffer.alloc(t.byteLength + e.byteLength)).set(t),
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
                    !Object.values(g).includes(this.currentHeader.opcode) || this.currentHeader.size < 0)
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
            case g.PING:
                e.emit("ping", n), e.write(E(g.PONG, n));
                break;
            case g.PONG:
                e.emit("pong", n);
                break;
            case g.HANDSHAKE:
                this.handleHandshake(e, n), e.emit("handshake", n);
                break;
            case g.FRAME:
                if (!b(e)) throw Error("did not handshake");
                e.emit("request", n);
                break;
            case g.CLOSE:
                e.end(
                    E(g.CLOSE, {
                        code: p.YI$.CLOSE_NORMAL,
                        message: "client disconnect",
                    }),
                ),
                    e.destroy();
        }
    }
    handleHandshake(e, t) {
        if (b(e)) throw Error("already did handshake");
        (this.clientId = t.client_id), this.checkRpcVersion(+t.v), m(e, !0);
    }
    constructor(e, t) {
        super("ipc", p.dL4, t),
            f(this, "messageBuffer", r.Buffer.alloc(0)),
            f(this, "currentHeader", null),
            f(this, "MAX_BUFFER_SIZE", 5242880),
            f(this, "socket", void 0),
            f(this, "clientId", null),
            (this.socket = e),
            m(e, !1);
    }
}
class y extends i.EventEmitter {
    handleConnection(e) {
        let t = new O(e, "json"),
            n = setTimeout(() => {
                A.warn("Handshake timeout for connection, closing socket");
                try {
                    e.end(
                        E(g.CLOSE, {
                            code: p.YI$.CLOSE_ABNORMAL,
                            message: "Handshake timeout",
                        }),
                    );
                } catch (e) {}
                e.destroy();
            }, 1e4);
        e.on("readable", () => {
            let n = e.read();
            null != n && t.read(r.Buffer.from(n));
        }),
            e.on("data", (i) => {
                try {
                    t.read(r.Buffer.from(i));
                } catch (t) {
                    clearTimeout(n),
                        A.error("Socket Error: ".concat(t.message)),
                        e.end(
                            E(g.CLOSE, {
                                code: p.YI$.CLOSE_UNSUPPORTED,
                                message: t.message,
                            }),
                        ),
                        e.destroy();
                }
            }),
            e.once("handshake", () => {
                clearTimeout(n);
                let r = t.clientId;
                A.info("Socket Opened: ".concat(t.id)),
                    e.on("error", (e) => A.error("Socket Error: ".concat(e.message))),
                    e.on("close", () => {
                        A.info("Socket Close: ".concat(t.id)), this.emit("disconnect", t);
                    }),
                    (0, d.j7)(t, null, r)
                        .then(() => {
                            e.on("request", (e) => {
                                A.info("Socket Message: ".concat(t.id), (0, c.A)(e)), this.emit("request", t, e);
                            }),
                                this.emit("connect", t);
                        })
                        .catch((e) => {
                            let { code: n, message: r } = e;
                            t.close(n, r);
                        });
            });
    }
    constructor() {
        super();
        const e = h.net.createServer((e) => this.handleConnection(e));
        e.on("error", (e) => A.error("Error: ".concat(e.message))),
            h.getAvailableSocket(_).then((t) => {
                e.listen(t, () => {
                    ("function" == typeof e.listening ? e.listening() : e.listening) &&
                        A.info("Starting on ".concat(e.address()));
                });
            });
    }
}
let I = new y();
