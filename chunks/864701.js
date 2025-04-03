n.d(t, { Z: () => Z }), n(653041);
var r = n(200651),
    s = n(192379),
    o = n(392711),
    a = n.n(o),
    i = n(668826),
    c = n(359013),
    l = n(115092),
    u = n(3072),
    d = n(477839),
    f = n(658865),
    p = n(420893),
    m = n(682980),
    g = n(161829);
let b = n(742914),
    y = [0, 1, 2, 3],
    h = {
        0: 0,
        3: 16,
        1: 32,
        2: 48
    },
    x = {
        0: 0,
        1: 16,
        2: 32,
        3: 48
    },
    N = [
        {
            x: 0,
            y: 11
        },
        {
            x: 0,
            y: 12
        },
        {
            x: 0,
            y: 13
        },
        {
            x: 0,
            y: 14
        }
    ],
    v = new Image();
v.src = g.Z;
let O = new Image();
O.src = p.Z;
let j = new Image();
function Z(e) {
    let { isPaused: t } = e,
        n = (0, s.useRef)(null),
        o = c.Mq[d.yN.SNEK],
        p = (0, u.eR)(b),
        m = (0, s.useRef)(
            N.map((e, t) => {
                let { x: n, y: r } = e;
                return {
                    x: n,
                    y: r,
                    direction: 0,
                    type: 0 === t ? 0 : t === N.length - 1 ? 2 : 1
                };
            })
        ),
        g = (0, s.useRef)([]),
        Z = (0, s.useCallback)(() => {
            for (let n = m.current.length - 1; n >= 0; n--)
                if (0 === n) {
                    var e, t;
                    let r = null != (e = 0 === (t = m.current[n]).x && t.y <= 0 ? 3 : 23 === t.x && t.y >= 14 ? 2 : t.x <= 0 && 14 === t.y ? 0 : t.x >= 23 && 0 === t.y ? 1 : void 0) ? e : m.current[n].direction,
                        s = (function (e, t) {
                            switch (t) {
                                case 0:
                                    return {
                                        x: e.x,
                                        y: e.y - 1
                                    };
                                case 1:
                                    return {
                                        x: e.x,
                                        y: e.y + 1
                                    };
                                case 2:
                                    return {
                                        x: e.x - 1,
                                        y: e.y
                                    };
                                case 3:
                                    return {
                                        x: e.x + 1,
                                        y: e.y
                                    };
                            }
                        })(m.current[n], r);
                    (m.current[n].direction = r), (m.current[n].x = s.x), (m.current[n].y = s.y);
                } else (m.current[n].direction = m.current[n - 1].direction), (m.current[n].x = m.current[n - 1].x), (m.current[n].y = m.current[n - 1].y);
            for (let e = 1; e < m.current.length - 1; e++) m.current[e].type = m.current[e - 1].direction !== m.current[e].direction ? 3 : 1;
        }, []),
        _ = (0, s.useCallback)((e) => {
            (e.fillStyle = '#7f986a'), e.fillRect(0, 0, 422.4, 278.4), e.drawImage(j, 0, 0, 422.4, 278.4);
        }, []),
        P = (0, s.useCallback)((e) => {
            m.current.forEach((t, n) => {
                let r = (function (e, t) {
                    if (3 === e.type)
                        switch (e.direction) {
                            case 0:
                                return 2;
                            case 3:
                                return 3;
                            case 1:
                                return 0;
                            case 2:
                                return 1;
                        }
                    return 2 === e.type && null != t ? t.direction : e.direction;
                })(t, m.current[n - 1]);
                e.drawImage(v, h[r], x[t.type], 16, 16, 16 * t.x + 19.2, 16 * t.y + 19.2, 16, 16);
            });
        }, []),
        C = (0, s.useCallback)((e) => {
            g.current.forEach((t) => {
                e.drawImage(O, 16 * t.x + 19.2, 16 * t.y + 19.2, 16, 16);
            });
        }, []),
        w = (0, s.useCallback)(() => {
            let e = {
                    x: m.current[0].x,
                    y: m.current[0].y
                },
                t = g.current.filter((t) => t.x !== e.x || t.y !== e.y),
                n = g.current.length - t.length;
            (g.current = t), n > 0 && (p(), (0, i.KH)(d.yN.SNEK, o.getPoints(n)));
        }, [p, o]),
        E = (0, s.useCallback)(() => {
            var e;
            let t = null == (e = n.current) ? void 0 : e.getContext('2d');
            null != t && (Z(), w(), t.clearRect(0, 0, 422.4, 278.4), _(t), P(t), C(t));
        }, [w, _, C, P, Z]),
        S = (0, s.useCallback)(() => {
            if (g.current.length < 10 && 0.2 > Math.random()) {
                let e = (function e(t) {
                    let n = (function () {
                        switch (a().sample(y)) {
                            case 0:
                                return {
                                    x: a().random(0, 23),
                                    y: 0
                                };
                            case 2:
                                return {
                                    x: a().random(0, 23),
                                    y: 14
                                };
                            case 3:
                                return {
                                    x: 0,
                                    y: a().random(0, 14)
                                };
                            case 1:
                                return {
                                    x: 23,
                                    y: a().random(0, 14)
                                };
                        }
                        return {
                            x: 0,
                            y: 0
                        };
                    })();
                    return t.some((e) => e.x === n.x && e.y === n.y) ? e(t) : n;
                })(m.current);
                g.current.push(e);
            }
        }, []);
    return (
        (0, l.Z)({
            isPaused: t,
            onInterval: E,
            interval: 500
        }),
        (0, l.Z)({
            isPaused: t,
            onInterval: S,
            interval: 1000
        }),
        (0, r.jsx)('canvas', {
            ref: n,
            className: f.canvas,
            width: 422.4,
            height: 278.4
        })
    );
}
j.src = m.Z;
