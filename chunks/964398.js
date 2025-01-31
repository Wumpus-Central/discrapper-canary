n.d(t, { Z: () => C }), n(47120), n(411104);
var l = n(200651),
    s = n(192379),
    r = n(392711),
    a = n.n(r),
    i = n(481060),
    o = n(65205),
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
    x = h.length;
function g(e, t, n) {
    let l = e * t;
    return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
}
let N = (e, t) => {
        let n = Math.abs(t.x),
            l = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
            s = e / 2 - 28.8;
        return {
            x: Math.max(s * Math.cos((2 * Math.PI * l) / 360), 0),
            y: Math.max(s * Math.sin((2 * Math.PI * l) / 360), 0)
        };
    },
    C = s.memo(function (e) {
        let { wheelWidth: t, wheelHeight: n, itemWidth: C, itemHeight: f, showDeadZoneIndicator: m, activeItem: E, onItemSelect: p, onItemAction: T, interactive: v = !0, children: I } = e,
            O = s.useRef(null),
            j = s.useRef([]),
            y = s.useRef(!1),
            S = s.useRef(null),
            [_, b] = s.useState(0),
            [R, P] = s.useState({
                x: 0,
                y: 0
            }),
            Z = Math.abs(R.x) + Math.abs(R.y) > 0,
            A = s.useMemo(() => a().chunk(I, x), [I]),
            w = s.useCallback(
                (e, t) => {
                    null == j.current[_] ? (j.current[_] = []) : (j.current[_][t] = e);
                },
                [_]
            ),
            D = s.useCallback(
                (e, t) => {
                    (S.current = t), p(x * e + t);
                },
                [p]
            ),
            k = s.useCallback(() => {
                (S.current = null), p(null);
            }, [p]),
            B = s.useCallback(
                (e) => {
                    k(), (y.current = e);
                },
                [k]
            ),
            M = s.useCallback((e, t, n) => {
                if (y.current) {
                    P({
                        x: 0,
                        y: 0
                    });
                    return;
                }
                let l = {
                        x: e.x - t.x,
                        y: e.y - t.y
                    },
                    s = l.x < 0,
                    r = l.y < 0,
                    a = N(n, l);
                P({
                    x: (s ? Math.max(l.x, -a.x) : Math.min(l.x, a.x)) / 2,
                    y: (r ? Math.max(l.y, -a.y) : Math.min(l.y, a.y)) / 2
                });
            }, []),
            L = s.useCallback(
                (e) => {
                    null != S.current && (e.preventDefault(), e.stopPropagation(), null == T || T(x * _ + S.current));
                },
                [T, _]
            ),
            G = s.useMemo(
                () =>
                    (0, r.throttle)((e) => {
                        if (null == O.current) return;
                        let l = O.current.getBoundingClientRect(),
                            s = {
                                x: l.left + l.width / 2,
                                y: l.top + l.height / 2
                            },
                            r = {
                                x: e.clientX,
                                y: e.clientY
                            };
                        if ((M(r, s, Math.max(t, n)), y.current)) {
                            null != E && k();
                            return;
                        }
                        let a = (0, o.ld)(s, r, Math.max(t, n));
                        for (let e = 0; e < j.current[_].length; e++) {
                            let t = j.current[_][e];
                            if (null == t) continue;
                            let n = t.getBoundingClientRect();
                            if ((0, o.Vr)(s, a, n)) {
                                D(_, e);
                                return;
                            }
                        }
                        k();
                    }, 16),
                [E, M, k, D, _, n, t]
            ),
            V = s.useCallback(
                (e) => {
                    if (!v) return;
                    let t = _ + (e.deltaY > 0 ? 1 : -1);
                    t >= 0 && t < A.length && (null != S.current && (A[t].length > S.current ? D(t, S.current) : k()), b(t));
                },
                [v, _, A, D, k]
            ),
            U = s.useMemo(
                () =>
                    A[_].map((e, s) => {
                        let r = h[s];
                        if (null == r) throw Error('Too many items supplied '.concat(I.length, ' expected max of ').concat(h.length));
                        let a = g(r.x, t, C),
                            i = g(r.y, n, f);
                        return (0, l.jsx)(
                            'div',
                            {
                                ref: (e) => w(e, s),
                                className: u.chatWheelItem,
                                style: {
                                    left: a,
                                    top: i,
                                    width: C,
                                    height: f
                                },
                                children: e
                            },
                            s
                        );
                    }),
                [A, _, t, C, n, f, I.length, w]
            );
        return (0, l.jsx)(i.P3F, {
            className: u.chatWheelMouseInput,
            onMouseMove: G,
            onWheel: V,
            onClick: L,
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
                                    m &&
                                        (0, l.jsx)('circle', {
                                            className: u.chatWheelDeadZone,
                                            onMouseEnter: () => B(!0),
                                            onMouseLeave: () => B(!1),
                                            cx: 144,
                                            cy: 144,
                                            r: 28.8
                                        }),
                                    Z &&
                                        (0, l.jsx)('circle', {
                                            className: u.chatWheelCenter,
                                            cx: 144 + R.x,
                                            cy: 144 + R.y,
                                            r: 28.8
                                        })
                                ]
                            }),
                            m &&
                                (0, l.jsx)('circle', {
                                    className: u.chatWheelDeadZone,
                                    onMouseEnter: () => B(!0),
                                    onMouseLeave: () => B(!1),
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
                            m && (0, l.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                            v && A.length > 1
                                ? (0, l.jsx)('div', {
                                      className: u.paginationHint,
                                      children: c.intl.string(c.t['Xy+S09'])
                                  })
                                : null
                        ]
                    }),
                    U
                ]
            })
        });
    });
