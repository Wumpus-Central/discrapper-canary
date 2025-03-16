n.d(t, { Z: () => y }), n(47120), n(411104);
var r = n(200651),
    l = n(192379),
    o = n(392711),
    i = n.n(o),
    a = n(481060),
    s = n(65205),
    c = n(388032),
    u = n(440403);
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
    y = l.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: y, itemHeight: v, showDeadZoneIndicator: O, activeItem: b, onItemSelect: N, onItemAction: m, interactive: x = !0, onClose: C, children: E } = e,
            j = l.useRef(null),
            P = l.useRef([]),
            I = l.useRef(!1),
            S = l.useRef(null),
            [w, T] = l.useState(0),
            [Z, _] = l.useState({
                x: 0,
                y: 0
            }),
            R = Math.abs(Z.x) + Math.abs(Z.y) > 0,
            A = l.useMemo(() => i().chunk(E, f), [E]),
            D = l.useCallback(
                (e, t) => {
                    null == P.current[w] ? (P.current[w] = []) : (P.current[w][t] = e);
                },
                [w]
            ),
            W = l.useCallback(
                (e, t) => {
                    (S.current = t), N(f * e + t);
                },
                [N]
            ),
            k = l.useCallback(() => {
                (S.current = null), N(null);
            }, [N]),
            M = l.useCallback(
                (e) => {
                    k(), (I.current = e);
                },
                [k]
            ),
            B = l.useCallback((e, t, n) => {
                if (I.current) {
                    _({
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
                    o = r.y < 0,
                    i = g(n, r);
                _({
                    x: (l ? Math.max(r.x, -i.x) : Math.min(r.x, i.x)) / 2,
                    y: (o ? Math.max(r.y, -i.y) : Math.min(r.y, i.y)) / 2
                });
            }, []),
            U = l.useCallback(
                (e) => {
                    null != S.current && (e.preventDefault(), e.stopPropagation(), null == m || m(f * w + S.current));
                },
                [m, w]
            ),
            L = l.useMemo(
                () =>
                    (0, o.throttle)((e) => {
                        if (null == j.current) return;
                        let r = j.current.getBoundingClientRect(),
                            l = {
                                x: r.left + r.width / 2,
                                y: r.top + r.height / 2
                            },
                            o = {
                                x: e.clientX,
                                y: e.clientY
                            };
                        if ((B(o, l, Math.max(t, n)), I.current)) {
                            null != b && k();
                            return;
                        }
                        let i = (0, s.ld)(l, o, Math.max(t, n));
                        for (let e = 0; e < P.current[w].length; e++) {
                            let t = P.current[w][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, s.Vr)(l, i, n)) {
                                W(w, e);
                                return;
                            }
                        }
                        k();
                    }, 16),
                [b, B, k, W, w, n, t]
            ),
            V = l.useCallback(
                (e) => {
                    if (!x) return;
                    let t = w + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < A.length && (null != S.current && (A[t].length > S.current ? W(t, S.current) : k()), T(t));
                },
                [x, w, A, W, k]
            ),
            G = l.useMemo(
                () =>
                    A[w].map((e, l) => {
                        let o = h[l];
                        if (null == o) throw Error('Too many items supplied '.concat(E.length, ' expected max of ').concat(h.length));
                        let i = p(o.x, t, y),
                            a = p(o.y, n, v);
                        return (0, r.jsx)(
                            'div',
                            {
                                ref: (e) => D(e, l),
                                className: u.chatWheelItem,
                                style: {
                                    left: i,
                                    top: a,
                                    width: y,
                                    height: v
                                },
                                children: e
                            },
                            l
                        );
                    }),
                [A, w, t, y, n, v, E.length, D]
            );
        return (0, r.jsx)(a.P3F, {
            className: u.chatWheelMouseInput,
            onMouseMove: L,
            onWheel: V,
            onClick: U,
            children: (0, r.jsxs)('div', {
                ref: j,
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
                                            onMouseEnter: () => M(!0),
                                            onMouseLeave: () => M(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    R &&
                                        (0, r.jsx)('circle', {
                                            className: u.chatWheelCenter,
                                            cx: 144 + Z.x,
                                            cy: 144 + Z.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            O &&
                                (0, r.jsx)('circle', {
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
                    (0, r.jsxs)('div', {
                        className: u.innerContent,
                        children: [
                            O &&
                                (0, r.jsx)(a.P3F, {
                                    className: u.chatWheelDeadZoneIcon,
                                    onClick: C,
                                    children: (0, r.jsx)(d, { className: u.chatWheelDeadZoneIcon })
                                }),
                            x && A.length > 1
                                ? (0, r.jsx)('div', {
                                      className: u.paginationHint,
                                      children: c.NW.string(c.t['Xy+S09'])
                                  })
                                : null
                        ]
                    }),
                    G
                ]
            })
        });
    });
