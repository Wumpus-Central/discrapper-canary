(n.d(t, { Z: () => N }), n(388685), n(415506));
var r = n(255367),
    l = n(73800),
    i = n(392711),
    s = n.n(i),
    a = n(481060),
    o = n(65205),
    c = n(388032),
    u = n(670161);
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
function g(e, t, n) {
    let r = e * t;
    return e > 0.5 ? r - n : e < 0.5 ? r : r - n / 2;
}
let p = (e, t) => {
        let n = Math.abs(t.x),
            r = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
            l = e / 2 - 28.8;
        return {
            x: Math.max(l * Math.cos((2 * Math.PI * r) / 360), 0),
            y: Math.max(l * Math.sin((2 * Math.PI * r) / 360), 0)
        };
    },
    N = l.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: N, itemHeight: O, showDeadZoneIndicator: x, activeItem: y, onItemSelect: b, onItemAction: E, interactive: m = !0, onClose: C, children: T } = e,
            I = l.useRef(null),
            v = l.useRef([]),
            j = l.useRef(!1),
            _ = l.useRef(null),
            [S, P] = l.useState(0),
            [A, R] = l.useState({
                x: 0,
                y: 0
            }),
            w = Math.abs(A.x) + Math.abs(A.y) > 0,
            D = l.useMemo(() => s().chunk(T, f), [T]),
            Z = l.useCallback(
                (e, t) => {
                    null == v.current[S] ? (v.current[S] = []) : (v.current[S][t] = e);
                },
                [S]
            ),
            k = l.useCallback(
                (e, t) => {
                    ((_.current = t), b(f * e + t));
                },
                [b]
            ),
            M = l.useCallback(() => {
                ((_.current = null), b(null));
            }, [b]),
            U = l.useCallback(
                (e) => {
                    (M(), (j.current = e));
                },
                [M]
            ),
            B = l.useCallback((e, t, n) => {
                if (j.current)
                    return void R({
                        x: 0,
                        y: 0
                    });
                let r = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    },
                    l = r.x < 0,
                    i = r.y < 0,
                    s = p(n, r);
                R({
                    x: (l ? Math.max(r.x, -s.x) : Math.min(r.x, s.x)) / 2,
                    y: (i ? Math.max(r.y, -s.y) : Math.min(r.y, s.y)) / 2
                });
            }, []),
            L = l.useCallback(
                (e) => {
                    null != _.current && (e.preventDefault(), e.stopPropagation(), null == E || E(f * S + _.current));
                },
                [E, S]
            ),
            V = l.useMemo(
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
                        if ((B(i, l, Math.max(t, n)), j.current)) {
                            null != y && M();
                            return;
                        }
                        let s = (0, o.ld)(l, i, Math.max(t, n));
                        for (let e = 0; e < v.current[S].length; e++) {
                            let t = v.current[S][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, o.Vr)(l, s, n)) return void k(S, e);
                        }
                        M();
                    }, 16),
                [y, B, M, k, S, n, t]
            ),
            F = l.useCallback(
                (e) => {
                    if (!m) return;
                    let t = S + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < D.length && (null != _.current && (D[t].length > _.current ? k(t, _.current) : M()), P(t));
                },
                [m, S, D, k, M]
            ),
            G = l.useMemo(
                () =>
                    D[S].map((e, l) => {
                        let i = h[l];
                        if (null == i) throw Error('Too many items supplied '.concat(T.length, ' expected max of ').concat(h.length));
                        let s = g(i.x, t, N),
                            a = g(i.y, n, O);
                        return (0, r.jsx)(
                            'div',
                            {
                                ref: (e) => Z(e, l),
                                className: u.chatWheelItem,
                                style: {
                                    left: s,
                                    top: a,
                                    width: N,
                                    height: O
                                },
                                children: e
                            },
                            l
                        );
                    }),
                [D, S, t, N, n, O, T.length, Z]
            );
        return (0, r.jsx)(a.P3F, {
            className: u.chatWheelMouseInput,
            onMouseMove: V,
            onWheel: F,
            onClick: L,
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
                                    x &&
                                        (0, r.jsx)('circle', {
                                            className: u.chatWheelDeadZone,
                                            onMouseEnter: () => U(!0),
                                            onMouseLeave: () => U(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    w &&
                                        (0, r.jsx)('circle', {
                                            className: u.chatWheelCenter,
                                            cx: 144 + A.x,
                                            cy: 144 + A.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            x &&
                                (0, r.jsx)('circle', {
                                    className: u.chatWheelDeadZone,
                                    onMouseEnter: () => U(!0),
                                    onMouseLeave: () => U(!1),
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
                            x &&
                                (0, r.jsx)(a.P3F, {
                                    className: u.chatWheelDeadZoneIcon,
                                    onClick: C,
                                    children: (0, r.jsx)(d, { className: u.chatWheelDeadZoneIcon })
                                }),
                            m && D.length > 1
                                ? (0, r.jsx)('div', {
                                      className: u.paginationHint,
                                      children: c.intl.string(c.t['Xy+S09'])
                                  })
                                : null
                        ]
                    }),
                    G
                ]
            })
        });
    });
