n.d(t, { Z: () => T }), n(47120), n(411104);
var i = n(413135),
    l = n(836560),
    r = n(392711),
    a = n.n(r),
    s = n(710845),
    o = n(998502),
    c = n(901077),
    d = n(76238),
    u = n(852926),
    h = n(981631);
let m = o.ZP.requireModule('discord_rpc').RPCIPC,
    p = new s.Z('RPCServer:IPC'),
    g = {
        HANDSHAKE: 0,
        FRAME: 1,
        CLOSE: 2,
        PING: 3,
        PONG: 4
    };
function _(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function f(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function E(e) {
    return new Promise((t, n) => {
        'string' == typeof e && (e = m.net.createConnection(e)),
            e.pause(),
            e.on('readable', () => {
                try {
                    C(e);
                } catch (t) {
                    e.end(
                        I(g.CLOSE, {
                            code: 1003,
                            message: t.message
                        })
                    ),
                        e.destroy();
                }
            });
        let i = () => {
                try {
                    e.end(), e.destroy();
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
        return e.write(I(g.PING, a().uniqueId())), l.then(t, n);
    });
}
function I(e, t) {
    t = JSON.stringify(t);
    let n = i.Buffer.byteLength(t),
        l = i.Buffer.alloc(8 + n);
    return l.writeInt32LE(e, 0), l.writeInt32LE(n, 4), l.write(t, 8, n), l.buffer.slice(l.byteOffset, l.byteOffset + l.byteLength);
}
function C(e) {
    let t = e.read(8);
    if (null == t) return;
    let n = i.Buffer.from(t),
        l = n.readInt32LE(0),
        r = n.readInt32LE(4);
    if (!Object.values(g).includes(l) || r < 0) throw Error('protocol error');
    if (null == (t = e.read(r))) throw Error('data size does not match what was received');
    let a = JSON.parse((n = i.Buffer.from(t)).toString());
    switch (l) {
        case g.PING:
            e.emit('ping', a), e.write(I(g.PONG, a));
            break;
        case g.PONG:
            e.emit('pong', a);
            break;
        case g.HANDSHAKE:
            if (f(e)) throw Error('already did handshake');
            _(e, !0), e.emit('handshake', a);
            break;
        case g.FRAME:
            if (!f(e)) throw Error('did not handshake');
            e.emit('request', a);
            break;
        case g.CLOSE:
            e.end(), e.destroy();
    }
    C(e);
}
class N extends d.Z {
    send(e) {
        p.info('Socket Emit: '.concat(this.id), (0, c.Z)(e)), this.socket.write(I(g.FRAME, e));
    }
    close(e, t) {
        this.socket.end(
            I(g.CLOSE, {
                code: e,
                message: t
            })
        ),
            this.socket.destroy();
    }
    constructor(e, t, n) {
        var i, l;
        super('ipc', t, n),
            (l = void 0),
            (i = 'socket') in this
                ? Object.defineProperty(this, i, {
                      value: l,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[i] = l),
            (this.socket = e);
    }
}
class v extends l.EventEmitter {
    handleConnection(e) {
        _(e, !1),
            e.pause(),
            e.on('readable', () => {
                try {
                    C(e);
                } catch (t) {
                    e.end(
                        I(g.CLOSE, {
                            code: h.$VG.CLOSE_UNSUPPORTED,
                            message: t.message
                        })
                    ),
                        e.destroy();
                }
            }),
            e.once('handshake', (t) => {
                let n;
                let i = t.client_id,
                    l = +t.v;
                try {
                    n = new N(e, l, 'json');
                } catch (t) {
                    e.end(
                        I(g.CLOSE, {
                            code: t.code,
                            message: t.message
                        })
                    ),
                        e.destroy();
                    return;
                }
                p.info('Socket Opened: '.concat(n.id)),
                    e.on('error', (e) => p.error('Socket Error: '.concat(e.message))),
                    e.on('close', () => {
                        p.info('Socket Close: '.concat(n.id)), this.emit('disconnect', n);
                    }),
                    (0, u.em)(n, null, i)
                        .then(() => {
                            e.on('request', (e) => {
                                p.info('Socket Message: '.concat(n.id), (0, c.Z)(e)), this.emit('request', n, e);
                            }),
                                this.emit('connect', n);
                        })
                        .catch((e) => {
                            let { code: t, message: i } = e;
                            return n.close(t, i);
                        });
            });
    }
    constructor() {
        super();
        let e = m.net.createServer((e) => this.handleConnection(e));
        e.on('error', (e) => p.error('Error: '.concat(e.message))),
            m.getAvailableSocket(E).then((t) => {
                e.listen(t, () => {
                    ('function' == typeof e.listening ? e.listening() : e.listening) && p.info('Starting on '.concat(e.address()));
                });
            });
    }
}
let T = new v();
