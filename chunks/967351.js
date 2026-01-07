n.d(t, { Z: () => I }), n(388685), n(415506), n(49124);
var r = n(413135),
    i = n(836560),
    l = n(392711),
    a = n.n(l),
    o = n(710845),
    s = n(998502),
    c = n(901077),
    u = n(76238),
    d = n(852926),
    p = n(981631);
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
let g = s.ZP.requireModule("discord_rpc").RPCIPC,
    m = new o.Z("RPCServer:IPC"),
    h = {
        HANDSHAKE: 0,
        FRAME: 1,
        CLOSE: 2,
        PING: 3,
        PONG: 4,
    };
function b(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function _(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function E(e) {
    return new Promise((t, n) => {
        "string" == typeof e && (e = g.net.createConnection(e));
        let r = new v(e, "json");
        e.on("data", (t) => {
            try {
                r.read(t);
            } catch (t) {
                e.end(
                    O(h.CLOSE, {
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
                        O(h.CLOSE, {
                            code: p.$VG.CLOSE_NORMAL,
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
                    setTimeout(() => t(Error("socket alive timeout")), 1000);
                }),
            ]).then(
                () => {
                    i();
                },
                (e) => {
                    throw (i(), e);
                },
            );
        return e.write(O(h.PING, a().uniqueId())), l.then(t, n);
    });
}
function O(e, t) {
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
class v extends u.Z {
    copyBuffer(e, t, n) {
        let i = r.Buffer.allocUnsafe(n - t);
        return e.copy(i, 0, t, n), i;
    }
    send(e) {
        m.info("Socket Emit: ".concat(this.id), (0, c.Z)(e)), this.socket.write(O(h.FRAME, e));
    }
    close(e, t) {
        this.socket.end(
            O(h.CLOSE, {
                code: e,
                message: t,
            }),
        ),
            this.socket.destroy();
    }
    read(e) {
        if (this.messageBuffer.byteLength + e.byteLength > this.MAX_BUFFER_SIZE)
            throw Error("total buffer size exceeded");
        (this.messageBuffer = (function (e, t) {
            let n = r.Buffer.alloc(e.byteLength + t.byteLength);
            return n.set(e), n.set(t, e.byteLength), n;
        })(this.messageBuffer, e)),
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
                    !Object.values(h).includes(this.currentHeader.opcode) || this.currentHeader.size < 0)
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
            case h.PING:
                e.emit("ping", n), e.write(O(h.PONG, n));
                break;
            case h.PONG:
                e.emit("pong", n);
                break;
            case h.HANDSHAKE:
                this.handleHandshake(e, n), e.emit("handshake", n);
                break;
            case h.FRAME:
                if (!_(e)) throw Error("did not handshake");
                e.emit("request", n);
                break;
            case h.CLOSE:
                e.end(
                    O(h.CLOSE, {
                        code: p.$VG.CLOSE_NORMAL,
                        message: "client disconnect",
                    }),
                ),
                    e.destroy();
        }
    }
    handleHandshake(e, t) {
        if (_(e)) throw Error("already did handshake");
        (this.clientId = t.client_id), this.checkRpcVersion(+t.v), b(e, !0);
    }
    constructor(e, t) {
        super("ipc", p.X6Q, t),
            f(this, "messageBuffer", r.Buffer.alloc(0)),
            f(this, "currentHeader", null),
            f(this, "MAX_BUFFER_SIZE", 5242880),
            f(this, "socket", void 0),
            f(this, "clientId", null),
            (this.socket = e),
            b(e, !1);
    }
}
class y extends i.EventEmitter {
    handleConnection(e) {
        let t = new v(e, "json"),
            n = setTimeout(() => {
                m.warn("Handshake timeout for connection, closing socket");
                try {
                    e.end(
                        O(h.CLOSE, {
                            code: p.$VG.CLOSE_ABNORMAL,
                            message: "Handshake timeout",
                        }),
                    );
                } catch (e) {}
                e.destroy();
            }, 10000);
        e.on("readable", () => {
            let n = e.read();
            null != n && t.read(r.Buffer.from(n));
        }),
            e.on("data", (i) => {
                try {
                    t.read(r.Buffer.from(i));
                } catch (t) {
                    clearTimeout(n),
                        m.error("Socket Error: ".concat(t.message)),
                        e.end(
                            O(h.CLOSE, {
                                code: p.$VG.CLOSE_UNSUPPORTED,
                                message: t.message,
                            }),
                        ),
                        e.destroy();
                }
            }),
            e.once("handshake", () => {
                clearTimeout(n);
                let r = t.clientId;
                m.info("Socket Opened: ".concat(t.id)),
                    e.on("error", (e) => m.error("Socket Error: ".concat(e.message))),
                    e.on("close", () => {
                        m.info("Socket Close: ".concat(t.id)), this.emit("disconnect", t);
                    }),
                    (0, d.em)(t, null, r)
                        .then(() => {
                            e.on("request", (e) => {
                                m.info("Socket Message: ".concat(t.id), (0, c.Z)(e)), this.emit("request", t, e);
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
        let e = g.net.createServer((e) => this.handleConnection(e));
        e.on("error", (e) => m.error("Error: ".concat(e.message))),
            g.getAvailableSocket(E).then((t) => {
                e.listen(t, () => {
                    ("function" == typeof e.listening ? e.listening() : e.listening) &&
                        m.info("Starting on ".concat(e.address()));
                });
            });
    }
}
let I = new y();
