n.d(t, { Z: () => I }), n(47120), n(411104), n(26686);
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
let h = s.ZP.requireModule('discord_rpc').RPCIPC,
    f = new o.Z('RPCServer:IPC'),
    g = {
        HANDSHAKE: 0,
        FRAME: 1,
        CLOSE: 2,
        PING: 3,
        PONG: 4
    };
function m(e, t) {
    null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : (e._didHandshake = t);
}
function b(e) {
    return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}
function _(e) {
    return new Promise((t, n) => {
        'string' == typeof e && (e = h.net.createConnection(e)),
            e.pause(),
            e.on('readable', () => {
                try {
                    O(e);
                } catch (t) {
                    e.end(
                        E(g.CLOSE, {
                            code: 1003,
                            message: t.message
                        })
                    ),
                        e.destroy();
                }
            });
        let r = () => {
                try {
                    e.end(
                        E(g.CLOSE, {
                            code: p.$VG.CLOSE_NORMAL,
                            message: 'test client going away'
                        })
                    ),
                        e.destroy();
                } catch (e) {}
            },
            i = Promise.race([
                new Promise((t) => e.on('error', () => t())),
                new Promise((t, n) => {
                    e.on('pong', () => n(Error('socket responded with pong')));
                }),
                new Promise((e, t) => {
                    setTimeout(() => t(Error('socket alive timeout')), 1000);
                })
            ]).then(
                () => {
                    r();
                },
                (e) => {
                    throw (r(), e);
                }
            );
        return e.write(E(g.PING, a().uniqueId())), i.then(t, n);
    });
}
function E(e, t) {
    t = JSON.stringify(t);
    let n = r.Buffer.byteLength(t),
        i = r.Buffer.alloc(8 + n);
    return i.writeInt32LE(e, 0), i.writeInt32LE(n, 4), i.write(t, 8, n), i.buffer.slice(i.byteOffset, i.byteOffset + i.byteLength);
}
function O(e) {
    let t = e.read(8);
    if (null == t) return;
    let n = r.Buffer.from(t),
        i = n.readInt32LE(0),
        l = n.readInt32LE(4);
    if (!Object.values(g).includes(i) || l < 0) throw Error('protocol error');
    if (null == (t = e.read(l))) throw Error('data size does not match what was received');
    let a = JSON.parse((n = r.Buffer.from(t)).toString());
    switch (i) {
        case g.PING:
            e.emit('ping', a), e.write(E(g.PONG, a));
            break;
        case g.PONG:
            e.emit('pong', a);
            break;
        case g.HANDSHAKE:
            if (b(e)) throw Error('already did handshake');
            m(e, !0), e.emit('handshake', a);
            break;
        case g.FRAME:
            if (!b(e)) throw Error('did not handshake');
            e.emit('request', a);
            break;
        case g.CLOSE:
            e.end(
                E(g.CLOSE, {
                    code: p.$VG.CLOSE_NORMAL,
                    message: 'client disconnect'
                })
            ),
                e.destroy();
    }
    O(e);
}
class N extends u.Z {
    send(e) {
        f.info('Socket Emit: '.concat(this.id), (0, c.Z)(e)), this.socket.write(E(g.FRAME, e));
    }
    close(e, t) {
        this.socket.end(
            E(g.CLOSE, {
                code: e,
                message: t
            })
        ),
            this.socket.destroy();
    }
    constructor(e, t, n) {
        var r, i;
        super('ipc', t, n),
            (i = void 0),
            (r = 'socket') in this
                ? Object.defineProperty(this, r, {
                      value: i,
                      enumerable: !0,
                      configurable: !0,
                      writable: !0
                  })
                : (this[r] = i),
            (this.socket = e);
    }
}
class y extends i.EventEmitter {
    handleConnection(e) {
        m(e, !1),
            e.pause(),
            e.on('readable', () => {
                try {
                    O(e);
                } catch (t) {
                    e.end(
                        E(g.CLOSE, {
                            code: p.$VG.CLOSE_UNSUPPORTED,
                            message: t.message
                        })
                    ),
                        e.destroy();
                }
            }),
            e.once('handshake', (t) => {
                let n,
                    r = t.client_id,
                    i = +t.v;
                try {
                    n = new N(e, i, 'json');
                } catch (t) {
                    e.end(
                        E(g.CLOSE, {
                            code: t.code,
                            message: t.message
                        })
                    ),
                        e.destroy();
                    return;
                }
                f.info('Socket Opened: '.concat(n.id)),
                    e.on('error', (e) => f.error('Socket Error: '.concat(e.message))),
                    e.on('close', () => {
                        f.info('Socket Close: '.concat(n.id)), this.emit('disconnect', n);
                    }),
                    (0, d.em)(n, null, r)
                        .then(() => {
                            e.on('request', (e) => {
                                f.info('Socket Message: '.concat(n.id), (0, c.Z)(e)), this.emit('request', n, e);
                            }),
                                this.emit('connect', n);
                        })
                        .catch((e) => {
                            let { code: t, message: r } = e;
                            return n.close(t, r);
                        });
            });
    }
    constructor() {
        super();
        let e = h.net.createServer((e) => this.handleConnection(e));
        e.on('error', (e) => f.error('Error: '.concat(e.message))),
            h.getAvailableSocket(_).then((t) => {
                e.listen(t, () => {
                    ('function' == typeof e.listening ? e.listening() : e.listening) && f.info('Starting on '.concat(e.address()));
                });
            });
    }
}
let I = new y();
