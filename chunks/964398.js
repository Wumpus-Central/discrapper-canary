n.d(t, { Z: () => x }), n(47120), n(411104);
var i = n(200651),
    l = n(192379),
    o = n(392711),
    s = n.n(o),
    a = n(481060),
    r = n(65205),
    c = n(388032),
    u = n(606532);
function d(e) {
    let { className: t } = e;
    return (0, i.jsxs)('svg', {
        className: t,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 48',
        children: [
            (0, i.jsx)('g', {
                filter: 'url(#a)',
                children: (0, i.jsx)('path', {
                    d: 'M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z',
                    fill: 'currentColor'
                })
            }),
            (0, i.jsx)('defs', {
                children: (0, i.jsxs)('filter', {
                    id: 'a',
                    x: '0',
                    y: '0',
                    width: '48',
                    height: '48',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                    children: [
                        (0, i.jsx)('feFlood', {
                            floodOpacity: '0',
                            result: 'BackgroundImageFix'
                        }),
                        (0, i.jsx)('feColorMatrix', {
                            in: 'SourceAlpha',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha'
                        }),
                        (0, i.jsx)('feOffset', { dy: '8' }),
                        (0, i.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                        (0, i.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                        (0, i.jsx)('feBlend', {
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_605_72103'
                        }),
                        (0, i.jsx)('feBlend', {
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
    f = h.length;
function N(e, t, n) {
    let i = e * t;
    return e > 0.5 ? i - n : e < 0.5 ? i : i - n / 2;
}
let g = (e, t) => {
        let n = Math.abs(t.x),
            i = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
            l = e / 2 - 28.8;
        return {
            x: Math.max(l * Math.cos((2 * Math.PI * i) / 360), 0),
            y: Math.max(l * Math.sin((2 * Math.PI * i) / 360), 0)
        };
    },
    x = l.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: x, itemHeight: p, showDeadZoneIndicator: C, activeItem: I, onItemSelect: v, onItemAction: m, interactive: T = !0, children: E } = e,
            O = l.useRef(null),
            _ = l.useRef([]),
            b = l.useRef(!1),
            y = l.useRef(null),
            [S, Z] = l.useState(0),
            [R, j] = l.useState({
                x: 0,
                y: 0
            }),
            A = Math.abs(R.x) + Math.abs(R.y) > 0,
            P = l.useMemo(() => s().chunk(E, f), [E]),
            w = l.useCallback(
                (e, t) => {
                    null == _.current[S] ? (_.current[S] = []) : (_.current[S][t] = e);
                },
                [S]
            ),
            k = l.useCallback(
                (e, t) => {
                    (y.current = t), v(f * e + t);
                },
                [v]
            ),
            D = l.useCallback(() => {
                (y.current = null), v(null);
            }, [v]),
            M = l.useCallback(
                (e) => {
                    D(), (b.current = e);
                },
                [D]
            ),
            F = l.useCallback((e, t, n) => {
                if (b.current) {
                    j({
                        x: 0,
                        y: 0
                    });
                    return;
                }
                let i = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    },
                    l = i.x < 0,
                    o = i.y < 0,
                    s = g(n, i);
                j({
                    x: (l ? Math.max(i.x, -s.x) : Math.min(i.x, s.x)) / 2,
                    y: (o ? Math.max(i.y, -s.y) : Math.min(i.y, s.y)) / 2
                });
            }, []),
            B = l.useCallback(
                (e) => {
                    null != y.current && (e.preventDefault(), e.stopPropagation(), null == m || m(f * S + y.current));
                },
                [m, S]
            ),
            L = l.useMemo(
                () =>
                    (0, o.throttle)((e) => {
                        if (null == O.current) return;
                        let i = O.current.getBoundingClientRect(),
                            l = {
                                x: i.left + i.width / 2,
                                y: i.top + i.height / 2
                            },
                            o = {
                                x: e.clientX,
                                y: e.clientY
                            };
                        if ((F(o, l, Math.max(t, n)), b.current)) {
                            null != I && D();
                            return;
                        }
                        let s = (0, r.ld)(l, o, Math.max(t, n));
                        for (let e = 0; e < _.current[S].length; e++) {
                            let t = _.current[S][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, r.Vr)(l, s, n)) {
                                k(S, e);
                                return;
                            }
                        }
                        D();
                    }, 16),
                [I, F, D, k, S, n, t]
            ),
            G = l.useCallback(
                (e) => {
                    if (!T) return;
                    let t = S + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < P.length && (null != y.current && (P[t].length > y.current ? k(t, y.current) : D()), Z(t));
                },
                [T, S, P, k, D]
            ),
            V = l.useMemo(
                () =>
                    P[S].map((e, l) => {
                        let o = h[l];
                        if (null == o) throw Error('Too many items supplied '.concat(E.length, ' expected max of ').concat(h.length));
                        let s = N(o.x, t, x),
                            a = N(o.y, n, p);
                        return (0, i.jsx)(
                            'div',
                            {
                                ref: (e) => w(e, l),
                                className: u.chatWheelItem,
                                style: {
                                    left: s,
                                    top: a,
                                    width: x,
                                    height: p
                                },
                                children: e
                            },
                            l
                        );
                    }),
                [P, S, t, x, n, p, E.length, w]
            );
        return (0, i.jsx)(a.P3F, {
            className: u.chatWheelMouseInput,
            onMouseMove: L,
            onWheel: G,
            onClick: B,
            children: (0, i.jsxs)('div', {
                ref: O,
                className: u.chatWheel,
                style: {
                    width: t,
                    height: n
                },
                children: [
                    (0, i.jsxs)('svg', {
                        className: u.chatWheelBackground,
                        viewBox: '0 0 288 288',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                            (0, i.jsxs)('filter', {
                                id: 'soundboard-wheel-background-shadow',
                                x: '0',
                                y: '0',
                                width: '288',
                                height: '288',
                                filterUnits: 'userSpaceOnUse',
                                colorInterpolationFilters: 'sRGB',
                                children: [
                                    (0, i.jsx)('feFlood', {
                                        floodOpacity: '0',
                                        result: 'BackgroundImageFix'
                                    }),
                                    (0, i.jsx)('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha'
                                    }),
                                    (0, i.jsx)('feOffset', { dy: '8' }),
                                    (0, i.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                                    (0, i.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                                    (0, i.jsx)('feBlend', {
                                        in2: 'BackgroundImageFix',
                                        result: 'effect1_dropShadow_489_60382'
                                    }),
                                    (0, i.jsx)('feBlend', {
                                        in: 'SourceGraphic',
                                        in2: 'effect1_dropShadow_489_60382',
                                        result: 'shape'
                                    })
                                ]
                            }),
                            (0, i.jsxs)('g', {
                                filter: 'url(#soundboard-wheel-background-shadow)',
                                children: [
                                    (0, i.jsx)('circle', {
                                        className: u.chatWheelBackground,
                                        cx: '144',
                                        cy: '144',
                                        r: '103.68',
                                        strokeWidth: '40.32'
                                    }),
                                    C &&
                                        (0, i.jsx)('circle', {
                                            className: u.chatWheelDeadZone,
                                            onMouseEnter: () => M(!0),
                                            onMouseLeave: () => M(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    A &&
                                        (0, i.jsx)('circle', {
                                            className: u.chatWheelCenter,
                                            cx: 144 + R.x,
                                            cy: 144 + R.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            C &&
                                (0, i.jsx)('circle', {
                                    className: u.chatWheelDeadZone,
                                    onMouseEnter: () => M(!0),
                                    onMouseLeave: () => M(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8,
                                    stroke: 'none'
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: u.innerContent,
                        children: [
                            C && (0, i.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                            T && P.length > 1
                                ? (0, i.jsx)('div', {
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
