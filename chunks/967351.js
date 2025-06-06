n.d(t, { Z: () => v }), n(388685), n(415506), n(49124);
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
function h(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let f = s.ZP.requireModule('discord_rpc').RPCIPC,
    g = new o.Z('RPCServer:IPC'),
    m = {
        HANDSHAKE: 0,
        FRAME: 1,
        CLOSE: 2,
        PING: 3,
        PONG: 4
    };
function b(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function _(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function E(e) {
    return new Promise((t, n) => {
        'string' == typeof e && (e = f.net.createConnection(e));
        let r = new I(e, 'json');
        e.on('data', (t) => {
            try {
                r.read(t);
            } catch (t) {
                e.end(
                    O(m.CLOSE, {
                        code: 1003,
                        message: t.message
                    })
                ),
                    e.destroy();
            }
        });
        let i = () => {
                try {
                    e.end(
                        O(m.CLOSE, {
                            code: p.$VG.CLOSE_NORMAL,
                            message: 'test client going away'
                        })
                    ),
                        e.destroy();
                } catch (e) {}
            },
            l = Promise.race([
                new Promise((t) => e.on('error', () => t())),
                new Promise((t, n) => {
                    e.on('pong', () => n(Error('socket responded with pong')));
                }),
                new Promise((e, t) => {
                    setTimeout(() => t(Error('socket alive timeout')), 1000);
                })
            ]).then(
                () => {
                    i();
                },
                (e) => {
                    throw (i(), e);
                }
            );
        return e.write(O(m.PING, a().uniqueId())), l.then(t, n);
    });
}
function O(e, t) {
    t = JSON.stringify(t);
    let n = r.Buffer.byteLength(t),
        i = r.Buffer.alloc(8 + n);
    return i.writeInt32LE(e, 0), i.writeInt32LE(n, 4), i.write(t, 8, n), i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength);
}
class I extends u.Z {
    copyBuffer(e, t, n) {
        let i = r.Buffer.allocUnsafe(n - t);
        return e.copy(i, 0, t, n), i;
    }
    send(e) {
        g.info('Socket Emit: '.concat(this.id), (0, c.Z)(e)), this.socket.write(O(m.FRAME, e));
    }
    close(e, t) {
        this.socket.end(
            O(m.CLOSE, {
                code: e,
                message: t
            })
        ),
            this.socket.destroy();
    }
    read(e) {
        if (this.messageBuffer.byteLength + e.byteLength > this.MAX_BUFFER_SIZE) throw Error('total buffer size exceeded');
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
                        size: this.messageBuffer.readInt32LE(4)
                    }),
                    !Object.values(m).includes(this.currentHeader.opcode) || this.currentHeader.size < 0)
                )
                    throw Error('protocol error');
                if (this.currentHeader.size > 3145728) throw Error('message too large');
                this.messageBuffer = this.copyBuffer(this.messageBuffer, 8, this.messageBuffer.byteLength);
            }
            if (this.messageBuffer.byteLength >= this.currentHeader.size) {
                let e = JSON.parse(this.copyBuffer(this.messageBuffer, 0, this.currentHeader.size).toString());
                this.dispatchMessage(this.socket, this.currentHeader.opcode, e), (this.messageBuffer = this.copyBuffer(this.messageBuffer, this.currentHeader.size, this.messageBuffer.byteLength)), (this.currentHeader = null);
            } else break;
        }
    }
    dispatchMessage(e, t, n) {
        switch (t) {
            case m.PING:
                e.emit('ping', n), e.write(O(m.PONG, n));
                break;
            case m.PONG:
                e.emit('pong', n);
                break;
            case m.HANDSHAKE:
                this.handleHandshake(e, n), e.emit('handshake', n);
                break;
            case m.FRAME:
                if (!_(e)) throw Error('did not handshake');
                e.emit('request', n);
                break;
            case m.CLOSE:
                e.end(
                    O(m.CLOSE, {
                        code: p.$VG.CLOSE_NORMAL,
                        message: 'client disconnect'
                    })
                ),
                    e.destroy();
        }
    }
    handleHandshake(e, t) {
        if (_(e)) throw Error('already did handshake');
        (this.clientId = t.client_id), this.checkRpcVersion(+t.v), b(e, !0);
    }
    constructor(e, t) {
        super('ipc', p.X6Q, t), h(this, 'messageBuffer', r.Buffer.alloc(0)), h(this, 'currentHeader', null), h(this, 'MAX_BUFFER_SIZE', 5242880), h(this, 'socket', void 0), h(this, 'clientId', null), (this.socket = e), b(e, !1);
    }
}
class y extends i.EventEmitter {
    handleConnection(e) {
        let t = new I(e, 'json');
        e.on('readable', () => {
            let n = e.read();
            null != n && t.read(r.Buffer.from(n));
        }),
            e.on('data', (n) => {
                try {
                    t.read(r.Buffer.from(n));
                } catch (t) {
                    g.error('Socket Error: '.concat(t.message)),
                        e.end(
                            O(m.CLOSE, {
                                code: p.$VG.CLOSE_UNSUPPORTED,
                                message: t.message
                            })
                        ),
                        e.destroy();
                }
            }),
            e.once('handshake', () => {
                let n = t.clientId;
                g.info('Socket Opened: '.concat(t.id)),
                    e.on('error', (e) => g.error('Socket Error: '.concat(e.message))),
                    e.on('close', () => {
                        g.info('Socket Close: '.concat(t.id)), this.emit('disconnect', t);
                    }),
                    (0, d.em)(t, null, n)
                        .then(() => {
                            e.on('request', (e) => {
                                g.info('Socket Message: '.concat(t.id), (0, c.Z)(e)), this.emit('request', t, e);
                            }),
                                this.emit('connect', t);
                        })
                        .catch((e) => {
                            let { code: n, message: r } = e;
                            t.close(n, r);
                        });
            });
    }
    constructor() {
        super();
        let e = f.net.createServer((e) => this.handleConnection(e));
        e.on('error', (e) => g.error('Error: '.concat(e.message))),
            f.getAvailableSocket(E).then((t) => {
                e.listen(t, () => {
                    ('function' == typeof e.listening ? e.listening() : e.listening) && g.info('Starting on '.concat(e.address()));
                });
            });
    }
}
let v = new y();
