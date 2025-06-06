n.d(t, { Z: () => O }), n(388685), n(415506);
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
    O = l.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: O, itemHeight: y, showDeadZoneIndicator: N, activeItem: b, onItemSelect: v, onItemAction: m, interactive: E = !0, onClose: C, children: x } = e,
            I = l.useRef(null),
            T = l.useRef([]),
            P = l.useRef(!1),
            S = l.useRef(null),
            [j, Z] = l.useState(0),
            [A, _] = l.useState({
                x: 0,
                y: 0
            }),
            w = Math.abs(A.x) + Math.abs(A.y) > 0,
            R = l.useMemo(() => o().chunk(x, h), [x]),
            D = l.useCallback(
                (e, t) => {
                    null == T.current[j] ? (T.current[j] = []) : (T.current[j][t] = e);
                },
                [j]
            ),
            U = l.useCallback(
                (e, t) => {
                    (S.current = t), v(h * e + t);
                },
                [v]
            ),
            L = l.useCallback(() => {
                (S.current = null), v(null);
            }, [v]),
            M = l.useCallback(
                (e) => {
                    L(), (P.current = e);
                },
                [L]
            ),
            k = l.useCallback((e, t, n) => {
                if (P.current)
                    return void _({
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
                _({
                    x: (l ? Math.max(r.x, -o.x) : Math.min(r.x, o.x)) / 2,
                    y: (i ? Math.max(r.y, -o.y) : Math.min(r.y, o.y)) / 2
                });
            }, []),
            B = l.useCallback(
                (e) => {
                    null != S.current && (e.preventDefault(), e.stopPropagation(), null == m || m(h * j + S.current));
                },
                [m, j]
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
                        if ((k(i, l, Math.max(t, n)), P.current)) {
                            null != b && L();
                            return;
                        }
                        let o = (0, s.ld)(l, i, Math.max(t, n));
                        for (let e = 0; e < T.current[j].length; e++) {
                            let t = T.current[j][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, s.Vr)(l, o, n)) return void U(j, e);
                        }
                        L();
                    }, 16),
                [b, k, L, U, j, n, t]
            ),
            G = l.useCallback(
                (e) => {
                    if (!E) return;
                    let t = j + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < R.length && (null != S.current && (R[t].length > S.current ? U(t, S.current) : L()), Z(t));
                },
                [E, j, R, U, L]
            ),
            F = l.useMemo(
                () =>
                    R[j].map((e, l) => {
                        let i = f[l];
                        if (null == i) throw Error('Too many items supplied '.concat(x.length, ' expected max of ').concat(f.length));
                        let o = p(i.x, t, O),
                            a = p(i.y, n, y);
                        return (0, r.jsx)(
                            'div',
                            {
                                ref: (e) => D(e, l),
                                className: c.chatWheelItem,
                                style: {
                                    left: o,
                                    top: a,
                                    width: O,
                                    height: y
                                },
                                children: e
                            },
                            l
                        );
                    }),
                [R, j, t, O, n, y, x.length, D]
            );
        return (0, r.jsx)(a.P3F, {
            className: c.chatWheelMouseInput,
            onMouseMove: V,
            onWheel: G,
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
                                    N &&
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
                                            cx: 144 + A.x,
                                            cy: 144 + A.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            N &&
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
                            N &&
                                (0, r.jsx)(a.P3F, {
                                    className: c.chatWheelDeadZoneIcon,
                                    onClick: C,
                                    children: (0, r.jsx)(d, { className: c.chatWheelDeadZoneIcon })
                                }),
                            E && R.length > 1
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
