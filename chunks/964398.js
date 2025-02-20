n.d(t, { Z: () => N }), n(47120), n(411104);
var r = n(200651),
    l = n(192379),
    i = n(392711),
    o = n.n(i),
    a = n(481060),
    s = n(65205),
    c = n(388032),
    u = n(870571);
function d(e) {
    let { className: t } = e;
    return (0, r.jsxs)('svg', {
        className: t,
        fill: 'none',
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '0 0 48 48',
        children: [
            (0, r.jsx)('g', {
                filter: 'url(#a)',
                children: (0, r.jsx)('path', {
                    d: 'M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z',
                    fill: 'currentColor'
                })
            }),
            (0, r.jsx)('defs', {
                children: (0, r.jsxs)('filter', {
                    id: 'a',
                    x: '0',
                    y: '0',
                    width: '48',
                    height: '48',
                    filterUnits: 'userSpaceOnUse',
                    colorInterpolationFilters: 'sRGB',
                    children: [
                        (0, r.jsx)('feFlood', {
                            floodOpacity: '0',
                            result: 'BackgroundImageFix'
                        }),
                        (0, r.jsx)('feColorMatrix', {
                            in: 'SourceAlpha',
                            values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                            result: 'hardAlpha'
                        }),
                        (0, r.jsx)('feOffset', { dy: '8' }),
                        (0, r.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                        (0, r.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                        (0, r.jsx)('feBlend', {
                            in2: 'BackgroundImageFix',
                            result: 'effect1_dropShadow_605_72103'
                        }),
                        (0, r.jsx)('feBlend', {
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
function p(e, t, n) {
    let r = e * t;
    return e > 0.5 ? r - n : e < 0.5 ? r : r - n / 2;
}
let g = (e, t) => {
        let n = Math.abs(t.x),
            r = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
            l = e / 2 - 28.8;
        return {
            x: Math.max(l * Math.cos((2 * Math.PI * r) / 360), 0),
            y: Math.max(l * Math.sin((2 * Math.PI * r) / 360), 0)
        };
    },
    N = l.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: N, itemHeight: v, showDeadZoneIndicator: O, activeItem: y, onItemSelect: m, onItemAction: b, interactive: x = !0, children: C } = e,
            I = l.useRef(null),
            E = l.useRef([]),
            T = l.useRef(!1),
            j = l.useRef(null),
            [w, P] = l.useState(0),
            [S, Z] = l.useState({
                x: 0,
                y: 0
            }),
            _ = Math.abs(S.x) + Math.abs(S.y) > 0,
            A = l.useMemo(() => o().chunk(C, f), [C]),
            R = l.useCallback(
                (e, t) => {
                    null == E.current[w] ? (E.current[w] = []) : (E.current[w][t] = e);
                },
                [w]
            ),
            k = l.useCallback(
                (e, t) => {
                    (j.current = t), m(f * e + t);
                },
                [m]
            ),
            D = l.useCallback(() => {
                (j.current = null), m(null);
            }, [m]),
            W = l.useCallback(
                (e) => {
                    D(), (T.current = e);
                },
                [D]
            ),
            F = l.useCallback((e, t, n) => {
                if (T.current) {
                    Z({
                        x: 0,
                        y: 0
                    });
                    return;
                }
                let r = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    },
                    l = r.x < 0,
                    i = r.y < 0,
                    o = g(n, r);
                Z({
                    x: (l ? Math.max(r.x, -o.x) : Math.min(r.x, o.x)) / 2,
                    y: (i ? Math.max(r.y, -o.y) : Math.min(r.y, o.y)) / 2
                });
            }, []),
            M = l.useCallback(
                (e) => {
                    null != j.current && (e.preventDefault(), e.stopPropagation(), null == b || b(f * w + j.current));
                },
                [b, w]
            ),
            B = l.useMemo(
                () =>
                    (0, i.throttle)((e) => {
                        if (null == I.current) return;
                        let r = I.current.getBoundingClientRect(),
                            l = {
                                x: r.left + r.width / 2,
                                y: r.top + r.height / 2
                            },
                            i = {
                                x: e.clientX,
                                y: e.clientY
                            };
                        if ((F(i, l, Math.max(t, n)), T.current)) {
                            null != y && D();
                            return;
                        }
                        let o = (0, s.ld)(l, i, Math.max(t, n));
                        for (let e = 0; e < E.current[w].length; e++) {
                            let t = E.current[w][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, s.Vr)(l, o, n)) {
                                k(w, e);
                                return;
                            }
                        }
                        D();
                    }, 16),
                [y, F, D, k, w, n, t]
            ),
            U = l.useCallback(
                (e) => {
                    if (!x) return;
                    let t = w + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < A.length && (null != j.current && (A[t].length > j.current ? k(t, j.current) : D()), P(t));
                },
                [x, w, A, k, D]
            ),
            L = l.useMemo(
                () =>
                    A[w].map((e, l) => {
                        let i = h[l];
                        if (null == i) throw Error('Too many items supplied '.concat(C.length, ' expected max of ').concat(h.length));
                        let o = p(i.x, t, N),
                            a = p(i.y, n, v);
                        return (0, r.jsx)(
                            'div',
                            {
                                ref: (e) => R(e, l),
                                className: u.chatWheelItem,
                                style: {
                                    left: o,
                                    top: a,
                                    width: N,
                                    height: v
                                },
                                children: e
                            },
                            l
                        );
                    }),
                [A, w, t, N, n, v, C.length, R]
            );
        return (0, r.jsx)(a.P3F, {
            className: u.chatWheelMouseInput,
            onMouseMove: B,
            onWheel: U,
            onClick: M,
            children: (0, r.jsxs)('div', {
                ref: I,
                className: u.chatWheel,
                style: {
                    width: t,
                    height: n
                },
                children: [
                    (0, r.jsxs)('svg', {
                        className: u.chatWheelBackground,
                        viewBox: '0 0 288 288',
                        xmlns: 'http://www.w3.org/2000/svg',
                        children: [
                            (0, r.jsxs)('filter', {
                                id: 'soundboard-wheel-background-shadow',
                                x: '0',
                                y: '0',
                                width: '288',
                                height: '288',
                                filterUnits: 'userSpaceOnUse',
                                colorInterpolationFilters: 'sRGB',
                                children: [
                                    (0, r.jsx)('feFlood', {
                                        floodOpacity: '0',
                                        result: 'BackgroundImageFix'
                                    }),
                                    (0, r.jsx)('feColorMatrix', {
                                        in: 'SourceAlpha',
                                        values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0',
                                        result: 'hardAlpha'
                                    }),
                                    (0, r.jsx)('feOffset', { dy: '8' }),
                                    (0, r.jsx)('feGaussianBlur', { stdDeviation: '8' }),
                                    (0, r.jsx)('feColorMatrix', { values: '0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0' }),
                                    (0, r.jsx)('feBlend', {
                                        in2: 'BackgroundImageFix',
                                        result: 'effect1_dropShadow_489_60382'
                                    }),
                                    (0, r.jsx)('feBlend', {
                                        in: 'SourceGraphic',
                                        in2: 'effect1_dropShadow_489_60382',
                                        result: 'shape'
                                    })
                                ]
                            }),
                            (0, r.jsxs)('g', {
                                filter: 'url(#soundboard-wheel-background-shadow)',
                                children: [
                                    (0, r.jsx)('circle', {
                                        className: u.chatWheelBackground,
                                        cx: '144',
                                        cy: '144',
                                        r: '103.68',
                                        strokeWidth: '40.32'
                                    }),
                                    O &&
                                        (0, r.jsx)('circle', {
                                            className: u.chatWheelDeadZone,
                                            onMouseEnter: () => W(!0),
                                            onMouseLeave: () => W(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    _ &&
                                        (0, r.jsx)('circle', {
                                            className: u.chatWheelCenter,
                                            cx: 144 + S.x,
                                            cy: 144 + S.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            O &&
                                (0, r.jsx)('circle', {
                                    className: u.chatWheelDeadZone,
                                    onMouseEnter: () => W(!0),
                                    onMouseLeave: () => W(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8,
                                    stroke: 'none'
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: u.innerContent,
                        children: [
                            O && (0, r.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                            x && A.length > 1
                                ? (0, r.jsx)('div', {
                                      className: u.paginationHint,
                                      children: c.NW.string(c.t['Xy+S09'])
                                  })
                                : null
                        ]
                    }),
                    L
                ]
            })
        });
    });
