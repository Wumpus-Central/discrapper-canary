(n.d(t, { Z: () => y }), n(388685), n(415506));
var r = n(255367),
    l = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(481060),
    s = n(65205),
    u = n(388032),
    c = n(670161);
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
let f = [
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
    h = f.length;
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
    y = l.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: y, itemHeight: O, showDeadZoneIndicator: b, activeItem: N, onItemSelect: v, onItemAction: m, interactive: x = !0, onClose: E, children: C } = e,
            I = l.useRef(null),
            T = l.useRef([]),
            j = l.useRef(!1),
            S = l.useRef(null),
            [P, _] = l.useState(0),
            [Z, A] = l.useState({
                x: 0,
                y: 0
            }),
            w = Math.abs(Z.x) + Math.abs(Z.y) > 0,
            R = l.useMemo(() => o().chunk(C, h), [C]),
            D = l.useCallback(
                (e, t) => {
                    null == T.current[P] ? (T.current[P] = []) : (T.current[P][t] = e);
                },
                [P]
            ),
            U = l.useCallback(
                (e, t) => {
                    ((S.current = t), v(h * e + t));
                },
                [v]
            ),
            k = l.useCallback(() => {
                ((S.current = null), v(null));
            }, [v]),
            M = l.useCallback(
                (e) => {
                    (k(), (j.current = e));
                },
                [k]
            ),
            L = l.useCallback((e, t, n) => {
                if (j.current)
                    return void A({
                        x: 0,
                        y: 0
                    });
                let r = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    },
                    l = r.x < 0,
                    i = r.y < 0,
                    o = g(n, r);
                A({
                    x: (l ? Math.max(r.x, -o.x) : Math.min(r.x, o.x)) / 2,
                    y: (i ? Math.max(r.y, -o.y) : Math.min(r.y, o.y)) / 2
                });
            }, []),
            B = l.useCallback(
                (e) => {
                    null != S.current && (e.preventDefault(), e.stopPropagation(), null == m || m(h * P + S.current));
                },
                [m, P]
            ),
            G = l.useMemo(
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
                        if ((L(i, l, Math.max(t, n)), j.current)) {
                            null != N && k();
                            return;
                        }
                        let o = (0, s.ld)(l, i, Math.max(t, n));
                        for (let e = 0; e < T.current[P].length; e++) {
                            let t = T.current[P][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, s.Vr)(l, o, n)) return void U(P, e);
                        }
                        k();
                    }, 16),
                [N, L, k, U, P, n, t]
            ),
            V = l.useCallback(
                (e) => {
                    if (!x) return;
                    let t = P + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < R.length && (null != S.current && (R[t].length > S.current ? U(t, S.current) : k()), _(t));
                },
                [x, P, R, U, k]
            ),
            F = l.useMemo(
                () =>
                    R[P].map((e, l) => {
                        let i = f[l];
                        if (null == i) throw Error('Too many items supplied '.concat(C.length, ' expected max of ').concat(f.length));
                        let o = p(i.x, t, y),
                            a = p(i.y, n, O);
                        return (0, r.jsx)(
                            'div',
                            {
                                ref: (e) => D(e, l),
                                className: c.chatWheelItem,
                                style: {
                                    left: o,
                                    top: a,
                                    width: y,
                                    height: O
                                },
                                children: e
                            },
                            l
                        );
                    }),
                [R, P, t, y, n, O, C.length, D]
            );
        return (0, r.jsx)(a.P3F, {
            className: c.chatWheelMouseInput,
            onMouseMove: G,
            onWheel: V,
            onClick: B,
            children: (0, r.jsxs)('div', {
                ref: I,
                className: c.chatWheel,
                style: {
                    width: t,
                    height: n
                },
                children: [
                    (0, r.jsxs)('svg', {
                        className: c.chatWheelBackground,
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
                                        className: c.chatWheelBackground,
                                        cx: '144',
                                        cy: '144',
                                        r: '103.68',
                                        strokeWidth: '40.32'
                                    }),
                                    b &&
                                        (0, r.jsx)('circle', {
                                            className: c.chatWheelDeadZone,
                                            onMouseEnter: () => M(!0),
                                            onMouseLeave: () => M(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    w &&
                                        (0, r.jsx)('circle', {
                                            className: c.chatWheelCenter,
                                            cx: 144 + Z.x,
                                            cy: 144 + Z.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            b &&
                                (0, r.jsx)('circle', {
                                    className: c.chatWheelDeadZone,
                                    onMouseEnter: () => M(!0),
                                    onMouseLeave: () => M(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8,
                                    stroke: 'none'
                                })
                        ]
                    }),
                    (0, r.jsxs)('div', {
                        className: c.innerContent,
                        children: [
                            b &&
                                (0, r.jsx)(a.P3F, {
                                    className: c.chatWheelDeadZoneIcon,
                                    onClick: E,
                                    children: (0, r.jsx)(d, { className: c.chatWheelDeadZoneIcon })
                                }),
                            x && R.length > 1
                                ? (0, r.jsx)('div', {
                                      className: c.paginationHint,
                                      children: u.intl.string(u.t['Xy+S09'])
                                  })
                                : null
                        ]
                    }),
                    F
                ]
            })
        });
    });
