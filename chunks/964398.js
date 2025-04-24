n.d(t, { Z: () => y }), n(388685), n(415506);
var l = n(200651),
    r = n(192379),
    i = n(392711),
    a = n.n(i),
    o = n(481060),
    s = n(65205),
    u = n(388032),
    c = n(670161);
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
function g(e, t, n) {
    let l = e * t;
    return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
}
let p = (e, t) => {
        let n = Math.abs(t.x),
            l = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
            r = e / 2 - 28.8;
        return {
            x: Math.max(r * Math.cos((2 * Math.PI * l) / 360), 0),
            y: Math.max(r * Math.sin((2 * Math.PI * l) / 360), 0)
        };
    },
    y = r.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: y, itemHeight: O, showDeadZoneIndicator: m, activeItem: v, onItemSelect: E, onItemAction: b, interactive: N = !0, onClose: C, children: x } = e,
            I = r.useRef(null),
            S = r.useRef([]),
            T = r.useRef(!1),
            P = r.useRef(null),
            [_, Z] = r.useState(0),
            [j, A] = r.useState({
                x: 0,
                y: 0
            }),
            w = Math.abs(j.x) + Math.abs(j.y) > 0,
            R = r.useMemo(() => a().chunk(x, h), [x]),
            D = r.useCallback(
                (e, t) => {
                    null == S.current[_] ? (S.current[_] = []) : (S.current[_][t] = e);
                },
                [_]
            ),
            M = r.useCallback(
                (e, t) => {
                    (P.current = t), E(h * e + t);
                },
                [E]
            ),
            k = r.useCallback(() => {
                (P.current = null), E(null);
            }, [E]),
            U = r.useCallback(
                (e) => {
                    k(), (T.current = e);
                },
                [k]
            ),
            L = r.useCallback((e, t, n) => {
                if (T.current)
                    return void A({
                        x: 0,
                        y: 0
                    });
                let l = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    },
                    r = l.x < 0,
                    i = l.y < 0,
                    a = p(n, l);
                A({
                    x: (r ? Math.max(l.x, -a.x) : Math.min(l.x, a.x)) / 2,
                    y: (i ? Math.max(l.y, -a.y) : Math.min(l.y, a.y)) / 2
                });
            }, []),
            G = r.useCallback(
                (e) => {
                    null != P.current && (e.preventDefault(), e.stopPropagation(), null == b || b(h * _ + P.current));
                },
                [b, _]
            ),
            V = r.useMemo(
                () =>
                    (0, i.throttle)((e) => {
                        if (null == I.current) return;
                        let l = I.current.getBoundingClientRect(),
                            r = {
                                x: l.left + l.width / 2,
                                y: l.top + l.height / 2
                            },
                            i = {
                                x: e.clientX,
                                y: e.clientY
                            };
                        if ((L(i, r, Math.max(t, n)), T.current)) {
                            null != v && k();
                            return;
                        }
                        let a = (0, s.ld)(r, i, Math.max(t, n));
                        for (let e = 0; e < S.current[_].length; e++) {
                            let t = S.current[_][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, s.Vr)(r, a, n)) return void M(_, e);
                        }
                        k();
                    }, 16),
                [v, L, k, M, _, n, t]
            ),
            B = r.useCallback(
                (e) => {
                    if (!N) return;
                    let t = _ + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < R.length && (null != P.current && (R[t].length > P.current ? M(t, P.current) : k()), Z(t));
                },
                [N, _, R, M, k]
            ),
            F = r.useMemo(
                () =>
                    R[_].map((e, r) => {
                        let i = f[r];
                        if (null == i) throw Error('Too many items supplied '.concat(x.length, ' expected max of ').concat(f.length));
                        let a = g(i.x, t, y),
                            o = g(i.y, n, O);
                        return (0, l.jsx)(
                            'div',
                            {
                                ref: (e) => D(e, r),
                                className: c.chatWheelItem,
                                style: {
                                    left: a,
                                    top: o,
                                    width: y,
                                    height: O
                                },
                                children: e
                            },
                            r
                        );
                    }),
                [R, _, t, y, n, O, x.length, D]
            );
        return (0, l.jsx)(o.P3F, {
            className: c.chatWheelMouseInput,
            onMouseMove: V,
            onWheel: B,
            onClick: G,
            children: (0, l.jsxs)('div', {
                ref: I,
                className: c.chatWheel,
                style: {
                    width: t,
                    height: n
                },
                children: [
                    (0, l.jsxs)('svg', {
                        className: c.chatWheelBackground,
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
                                        className: c.chatWheelBackground,
                                        cx: '144',
                                        cy: '144',
                                        r: '103.68',
                                        strokeWidth: '40.32'
                                    }),
                                    m &&
                                        (0, l.jsx)('circle', {
                                            className: c.chatWheelDeadZone,
                                            onMouseEnter: () => U(!0),
                                            onMouseLeave: () => U(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    w &&
                                        (0, l.jsx)('circle', {
                                            className: c.chatWheelCenter,
                                            cx: 144 + j.x,
                                            cy: 144 + j.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            m &&
                                (0, l.jsx)('circle', {
                                    className: c.chatWheelDeadZone,
                                    onMouseEnter: () => U(!0),
                                    onMouseLeave: () => U(!1),
                                    cx: 144,
                                    cy: 144,
                                    r: 28.8,
                                    stroke: 'none'
                                })
                        ]
                    }),
                    (0, l.jsxs)('div', {
                        className: c.innerContent,
                        children: [
                            m &&
                                (0, l.jsx)(o.P3F, {
                                    className: c.chatWheelDeadZoneIcon,
                                    onClick: C,
                                    children: (0, l.jsx)(d, { className: c.chatWheelDeadZoneIcon })
                                }),
                            N && R.length > 1
                                ? (0, l.jsx)('div', {
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
