n(47120), n(411104);
var l = n(200651),
    r = n(192379),
    s = n(392711),
    o = n.n(s),
    i = n(481060),
    a = n(65205),
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
        r = e / 2 - 28.8;
    return {
        x: Math.max(r * Math.cos((2 * Math.PI * l) / 360), 0),
        y: Math.max(r * Math.sin((2 * Math.PI * l) / 360), 0)
    };
};
t.Z = r.memo(function (e) {
    let { wheelWidth: t, wheelHeight: n, itemWidth: C, itemHeight: f, showDeadZoneIndicator: m, activeItem: p, onItemSelect: E, onItemAction: T, interactive: v = !0, children: I } = e,
        O = r.useRef(null),
        j = r.useRef([]),
        y = r.useRef(!1),
        b = r.useRef(null),
        [S, R] = r.useState(0),
        [_, A] = r.useState({
            x: 0,
            y: 0
        }),
        Z = Math.abs(_.x) + Math.abs(_.y) > 0,
        P = r.useMemo(() => o().chunk(I, x), [I]),
        k = r.useCallback(
            (e, t) => {
                null == j.current[S] ? (j.current[S] = []) : (j.current[S][t] = e);
            },
            [S]
        ),
        B = r.useCallback(
            (e, t) => {
                (b.current = t), E(x * e + t);
            },
            [E]
        ),
        w = r.useCallback(() => {
            (b.current = null), E(null);
        }, [E]),
        D = r.useCallback(
            (e) => {
                w(), (y.current = e);
            },
            [w]
        ),
        M = r.useCallback((e, t, n) => {
            if (y.current) {
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
                r = l.x < 0,
                s = l.y < 0,
                o = N(n, l),
                i = r ? Math.max(l.x, -o.x) : Math.min(l.x, o.x);
            A({
                x: i / 2,
                y: (s ? Math.max(l.y, -o.y) : Math.min(l.y, o.y)) / 2
            });
        }, []),
        L = r.useCallback(
            (e) => {
                if (null != b.current) e.preventDefault(), e.stopPropagation(), null == T || T(x * S + b.current);
            },
            [T, S]
        ),
        G = r.useMemo(
            () =>
                (0, s.throttle)((e) => {
                    if (null == O.current) return;
                    let l = O.current.getBoundingClientRect(),
                        r = l.left + l.width / 2,
                        s = {
                            x: r,
                            y: l.top + l.height / 2
                        },
                        o = {
                            x: e.clientX,
                            y: e.clientY
                        };
                    if ((M(o, s, Math.max(t, n)), y.current)) {
                        null != p && w();
                        return;
                    }
                    let i = (0, a.ld)(s, o, Math.max(t, n));
                    for (let e = 0; e < j.current[S].length; e++) {
                        let t = j.current[S][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, a.Vr)(s, i, n)) {
                            B(S, e);
                            return;
                        }
                    }
                    w();
                }, 16),
            [p, M, w, B, S, n, t]
        ),
        U = r.useCallback(
            (e) => {
                if (!v) return;
                let t = S + (e.deltaY > 0 ? 1 : -1);
                t >= 0 && t < P.length && (null != b.current && (P[t].length > b.current ? B(t, b.current) : w()), R(t));
            },
            [v, S, P, B, w]
        ),
        V = r.useMemo(
            () =>
                P[S].map((e, r) => {
                    let s = h[r];
                    if (null == s) throw Error('Too many items supplied '.concat(I.length, ' expected max of ').concat(h.length));
                    let o = g(s.x, t, C),
                        i = g(s.y, n, f);
                    return (0, l.jsx)(
                        'div',
                        {
                            ref: (e) => k(e, r),
                            className: u.chatWheelItem,
                            style: {
                                left: o,
                                top: i,
                                width: C,
                                height: f
                            },
                            children: e
                        },
                        r
                    );
                }),
            [P, S, t, C, n, f, I.length, k]
        );
    return (0, l.jsx)(i.Clickable, {
        className: u.chatWheelMouseInput,
        onMouseMove: G,
        onWheel: U,
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
                                        onMouseEnter: () => D(!0),
                                        onMouseLeave: () => D(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8
                                    }),
                                Z &&
                                    (0, l.jsx)('circle', {
                                        className: u.chatWheelCenter,
                                        cx: 144 + _.x,
                                        cy: 144 + _.y,
                                        r: 28.8
                                    })
                            ]
                        }),
                        m &&
                            (0, l.jsx)('circle', {
                                className: u.chatWheelDeadZone,
                                onMouseEnter: () => D(!0),
                                onMouseLeave: () => D(!1),
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
                        v && P.length > 1
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
