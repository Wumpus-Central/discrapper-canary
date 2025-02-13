n.d(t, { Z: () => N }), n(47120), n(411104);
var l = n(200651),
    i = n(192379),
    a = n(392711),
    r = n.n(a),
    o = n(481060),
    s = n(65205),
    c = n(388032),
    u = n(606532);
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
    f = h.length;
function g(e, t, n) {
    let l = e * t;
    return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
}
let p = (e, t) => {
        let n = Math.abs(t.x),
            l = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
            i = e / 2 - 28.8;
        return {
            x: Math.max(i * Math.cos((2 * Math.PI * l) / 360), 0),
            y: Math.max(i * Math.sin((2 * Math.PI * l) / 360), 0)
        };
    },
    N = i.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: N, itemHeight: v, showDeadZoneIndicator: x, activeItem: m, onItemSelect: C, onItemAction: I, interactive: E = !0, children: T } = e,
            y = i.useRef(null),
            Z = i.useRef([]),
            O = i.useRef(!1),
            b = i.useRef(null),
            [_, S] = i.useState(0),
            [w, A] = i.useState({
                x: 0,
                y: 0
            }),
            P = Math.abs(w.x) + Math.abs(w.y) > 0,
            j = i.useMemo(() => r().chunk(T, f), [T]),
            R = i.useCallback(
                (e, t) => {
                    null == Z.current[_] ? (Z.current[_] = []) : (Z.current[_][t] = e);
                },
                [_]
            ),
            k = i.useCallback(
                (e, t) => {
                    (b.current = t), C(f * e + t);
                },
                [C]
            ),
            D = i.useCallback(() => {
                (b.current = null), C(null);
            }, [C]),
            F = i.useCallback(
                (e) => {
                    D(), (O.current = e);
                },
                [D]
            ),
            M = i.useCallback((e, t, n) => {
                if (O.current) {
                    A({
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
                    a = l.y < 0,
                    r = p(n, l);
                A({
                    x: (i ? Math.max(l.x, -r.x) : Math.min(l.x, r.x)) / 2,
                    y: (a ? Math.max(l.y, -r.y) : Math.min(l.y, r.y)) / 2
                });
            }, []),
            B = i.useCallback(
                (e) => {
                    null != b.current && (e.preventDefault(), e.stopPropagation(), null == I || I(f * _ + b.current));
                },
                [I, _]
            ),
            U = i.useMemo(
                () =>
                    (0, a.throttle)((e) => {
                        if (null == y.current) return;
                        let l = y.current.getBoundingClientRect(),
                            i = {
                                x: l.left + l.width / 2,
                                y: l.top + l.height / 2
                            },
                            a = {
                                x: e.clientX,
                                y: e.clientY
                            };
                        if ((M(a, i, Math.max(t, n)), O.current)) {
                            null != m && D();
                            return;
                        }
                        let r = (0, s.ld)(i, a, Math.max(t, n));
                        for (let e = 0; e < Z.current[_].length; e++) {
                            let t = Z.current[_][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, s.Vr)(i, r, n)) {
                                k(_, e);
                                return;
                            }
                        }
                        D();
                    }, 16),
                [m, M, D, k, _, n, t]
            ),
            L = i.useCallback(
                (e) => {
                    if (!E) return;
                    let t = _ + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < j.length && (null != b.current && (j[t].length > b.current ? k(t, b.current) : D()), S(t));
                },
                [E, _, j, k, D]
            ),
            V = i.useMemo(
                () =>
                    j[_].map((e, i) => {
                        let a = h[i];
                        if (null == a) throw Error('Too many items supplied '.concat(T.length, ' expected max of ').concat(h.length));
                        let r = g(a.x, t, N),
                            o = g(a.y, n, v);
                        return (0, l.jsx)(
                            'div',
                            {
                                ref: (e) => R(e, i),
                                className: u.chatWheelItem,
                                style: {
                                    left: r,
                                    top: o,
                                    width: N,
                                    height: v
                                },
                                children: e
                            },
                            i
                        );
                    }),
                [j, _, t, N, n, v, T.length, R]
            );
        return (0, l.jsx)(o.P3F, {
            className: u.chatWheelMouseInput,
            onMouseMove: U,
            onWheel: L,
            onClick: B,
            children: (0, l.jsxs)('div', {
                ref: y,
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
                                    x &&
                                        (0, l.jsx)('circle', {
                                            className: u.chatWheelDeadZone,
                                            onMouseEnter: () => F(!0),
                                            onMouseLeave: () => F(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    P &&
                                        (0, l.jsx)('circle', {
                                            className: u.chatWheelCenter,
                                            cx: 144 + w.x,
                                            cy: 144 + w.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            x &&
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
                            x && (0, l.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                            E && j.length > 1
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
