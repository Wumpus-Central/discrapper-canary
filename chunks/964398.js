n.d(t, { Z: () => x }), n(47120), n(411104);
var l = n(200651),
    i = n(192379),
    s = n(392711),
    o = n.n(s),
    a = n(481060),
    r = n(65205),
    c = n(388032),
    u = n(390317);
function d(e) {
    let { className: t } = e;
    return (0, l.jsxs)('svg', {
        className: t,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 48',
        children: [
            (0, l.jsx)('g', {
                filter: 'url(#a)',
                children: (0, l.jsx)('path', {
                    d: 'M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z',
                    fill: 'currentColor'
                })
            }),
            (0, l.jsx)('defs', {
                children: (0, l.jsxs)('filter', {
                    id: 'a',
                    x: '0',
                    y: '0',
                    width: '48',
                    height: '48',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                    children: [
                        (0, l.jsx)('feFlood', {
                            floodOpacity: '0',
                            result: 'BackgroundImageFix'
                        }),
                        (0, l.jsx)('feColorMatrix', {
                            in: 'SourceAlpha',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha'
                        }),
                        (0, l.jsx)('feOffset', { dy: '8' }),
                        (0, l.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                        (0, l.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                        (0, l.jsx)('feBlend', {
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_605_72103'
                        }),
                        (0, l.jsx)('feBlend', {
                            in: 'SourceGraphic',
                            in2: 'effect1_dropShadow_605_72103',
                            result: 'shape'
                        })
                    ]
                })
            })
        ]
    });
}
let h = [
        {
            x: 0.5,
            y: 0.05
        },
        {
            x: 0.95,
            y: 0.2
        },
        {
            x: 1,
            y: 0.5
        },
        {
            x: 0.95,
            y: 0.8
        },
        {
            x: 0.5,
            y: 0.95
        },
        {
            x: 0.05,
            y: 0.8
        },
        {
            x: 0,
            y: 0.5
        },
        {
            x: 0.05,
            y: 0.2
        }
    ],
    N = h.length;
function f(e, t, n) {
    let l = e * t;
    return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
}
let g = (e, t) => {
        let n = Math.abs(t.x),
            l = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
            i = e / 2 - 28.8;
        return {
            x: Math.max(i * Math.cos((2 * Math.PI * l) / 360), 0),
            y: Math.max(i * Math.sin((2 * Math.PI * l) / 360), 0)
        };
    },
    x = i.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: x, itemHeight: C, showDeadZoneIndicator: p, activeItem: I, onItemSelect: v, onItemAction: m, interactive: T = !0, children: E } = e,
            O = i.useRef(null),
            _ = i.useRef([]),
            y = i.useRef(!1),
            b = i.useRef(null),
            [S, j] = i.useState(0),
            [R, Z] = i.useState({
                x: 0,
                y: 0
            }),
            A = Math.abs(R.x) + Math.abs(R.y) > 0,
            P = i.useMemo(() => o().chunk(E, N), [E]),
            w = i.useCallback(
                (e, t) => {
                    null == _.current[S] ? (_.current[S] = []) : (_.current[S][t] = e);
                },
                [S]
            ),
            k = i.useCallback(
                (e, t) => {
                    (b.current = t), v(N * e + t);
                },
                [v]
            ),
            D = i.useCallback(() => {
                (b.current = null), v(null);
            }, [v]),
            F = i.useCallback(
                (e) => {
                    D(), (y.current = e);
                },
                [D]
            ),
            M = i.useCallback((e, t, n) => {
                if (y.current) {
                    Z({
                        x: 0,
                        y: 0
                    });
                    return;
                }
                let l = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    },
                    i = l.x < 0,
                    s = l.y < 0,
                    o = g(n, l);
                Z({
                    x: (i ? Math.max(l.x, -o.x) : Math.min(l.x, o.x)) / 2,
                    y: (s ? Math.max(l.y, -o.y) : Math.min(l.y, o.y)) / 2
                });
            }, []),
            B = i.useCallback(
                (e) => {
                    null != b.current && (e.preventDefault(), e.stopPropagation(), null == m || m(N * S + b.current));
                },
                [m, S]
            ),
            L = i.useMemo(
                () =>
                    (0, s.throttle)((e) => {
                        if (null == O.current) return;
                        let l = O.current.getBoundingClientRect(),
                            i = {
                                x: l.left + l.width / 2,
                                y: l.top + l.height / 2
                            },
                            s = {
                                x: e.clientX,
                                y: e.clientY
                            };
                        if ((M(s, i, Math.max(t, n)), y.current)) {
                            null != I && D();
                            return;
                        }
                        let o = (0, r.ld)(i, s, Math.max(t, n));
                        for (let e = 0; e < _.current[S].length; e++) {
                            let t = _.current[S][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, r.Vr)(i, o, n)) {
                                k(S, e);
                                return;
                            }
                        }
                        D();
                    }, 16),
                [I, M, D, k, S, n, t]
            ),
            G = i.useCallback(
                (e) => {
                    if (!T) return;
                    let t = S + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < P.length && (null != b.current && (P[t].length > b.current ? k(t, b.current) : D()), j(t));
                },
                [T, S, P, k, D]
            ),
            V = i.useMemo(
                () =>
                    P[S].map((e, i) => {
                        let s = h[i];
                        if (null == s) throw Error('Too many items supplied '.concat(E.length, ' expected max of ').concat(h.length));
                        let o = f(s.x, t, x),
                            a = f(s.y, n, C);
                        return (0, l.jsx)(
                            'div',
                            {
                                ref: (e) => w(e, i),
                                className: u.chatWheelItem,
                                style: {
                                    left: o,
                                    top: a,
                                    width: x,
                                    height: C
                                },
                                children: e
                            },
                            i
                        );
                    }),
                [P, S, t, x, n, C, E.length, w]
            );
        return (0, l.jsx)(a.P3F, {
            className: u.chatWheelMouseInput,
            onMouseMove: L,
            onWheel: G,
            onClick: B,
            children: (0, l.jsxs)('div', {
                ref: O,
                className: u.chatWheel,
                style: {
                    width: t,
                    height: n
                },
                children: [
                    (0, l.jsxs)('svg', {
                        className: u.chatWheelBackground,
                        viewBox: '0 0 288 288',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                            (0, l.jsxs)('filter', {
                                id: 'soundboard-wheel-background-shadow',
                                x: '0',
                                y: '0',
                                width: '288',
                                height: '288',
                                filterUnits: 'userSpaceOnUse',
                                colorInterpolationFilters: 'sRGB',
                                children: [
                                    (0, l.jsx)('feFlood', {
                                        floodOpacity: '0',
                                        result: 'BackgroundImageFix'
                                    }),
                                    (0, l.jsx)('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha'
                                    }),
                                    (0, l.jsx)('feOffset', { dy: '8' }),
                                    (0, l.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                                    (0, l.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                                    (0, l.jsx)('feBlend', {
                                        in2: 'BackgroundImageFix',
                                        result: 'effect1_dropShadow_489_60382'
                                    }),
                                    (0, l.jsx)('feBlend', {
                                        in: 'SourceGraphic',
                                        in2: 'effect1_dropShadow_489_60382',
                                        result: 'shape'
                                    })
                                ]
                            }),
                            (0, l.jsxs)('g', {
                                filter: 'url(#soundboard-wheel-background-shadow)',
                                children: [
                                    (0, l.jsx)('circle', {
                                        className: u.chatWheelBackground,
                                        cx: '144',
                                        cy: '144',
                                        r: '103.68',
                                        strokeWidth: '40.32'
                                    }),
                                    p &&
                                        (0, l.jsx)('circle', {
                                            className: u.chatWheelDeadZone,
                                            onMouseEnter: () => F(!0),
                                            onMouseLeave: () => F(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    A &&
                                        (0, l.jsx)('circle', {
                                            className: u.chatWheelCenter,
                                            cx: 144 + R.x,
                                            cy: 144 + R.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            p &&
                                (0, l.jsx)('circle', {
                                    className: u.chatWheelDeadZone,
                                    onMouseEnter: () => F(!0),
                                    onMouseLeave: () => F(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8,
                                    stroke: 'none'
                                })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: u.innerContent,
                        children: [
                            p && (0, l.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                            T && P.length > 1
                                ? (0, l.jsx)('div', {
                                      className: u.paginationHint,
                                      children: c.intl.string(c.t['Xy+S09'])
                                  })
                                : null
                        ]
                    }),
                    V
                ]
            })
        });
    });
