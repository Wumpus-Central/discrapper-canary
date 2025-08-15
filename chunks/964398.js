n.d(t, { Z: () => p }), n(388685), n(415506);
var r = n(951288),
    l = n(647438),
    i = n(392711),
    o = n.n(i),
    s = n(481060),
    a = n(65205),
    c = n(388032),
    u = n(504964);
function d(e) {
    let { className: t } = e;
    return (0, r.jsxs)("svg", {
        className: t,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        children: [
            (0, r.jsx)("g", {
                filter: "url(#a)",
                children: (0, r.jsx)("path", {
                    d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                    fill: "currentColor",
                }),
            }),
            (0, r.jsx)("defs", {
                children: (0, r.jsxs)("filter", {
                    id: "a",
                    x: "0",
                    y: "0",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, r.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                        }),
                        (0, r.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, r.jsx)("feOffset", { dy: "8" }),
                        (0, r.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                        (0, r.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                        (0, r.jsx)("feBlend", {
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_605_72103",
                        }),
                        (0, r.jsx)("feBlend", {
                            in: "SourceGraphic",
                            in2: "effect1_dropShadow_605_72103",
                            result: "shape",
                        }),
                    ],
                }),
            }),
        ],
    });
}
let f = [
        {
            x: 0.5,
            y: 0.05,
        },
        {
            x: 0.95,
            y: 0.2,
        },
        {
            x: 1,
            y: 0.5,
        },
        {
            x: 0.95,
            y: 0.8,
        },
        {
            x: 0.5,
            y: 0.95,
        },
        {
            x: 0.05,
            y: 0.8,
        },
        {
            x: 0,
            y: 0.5,
        },
        {
            x: 0.05,
            y: 0.2,
        },
    ],
    h = f.length;
function g(e, t, n) {
    let r = e * t;
    return e > 0.5 ? r - n : e < 0.5 ? r : r - n / 2;
}
let p = l.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: p,
            itemHeight: O,
            showDeadZoneIndicator: y,
            activeItem: N,
            onItemSelect: b,
            onItemAction: x,
            interactive: E = !0,
            onClose: m,
            children: C,
        } = e,
        v = l.useRef(null),
        T = l.useRef([]),
        j = l.useRef(!1),
        I = l.useRef(null),
        [S, _] = l.useState(0),
        [P, A] = l.useState({
            x: 0,
            y: 0,
        }),
        R = Math.abs(P.x) + Math.abs(P.y) > 0,
        w = l.useMemo(() => o().chunk(C, h), [C]),
        D = l.useCallback(
            (e, t) => {
                null == T.current[S] ? (T.current[S] = []) : (T.current[S][t] = e);
            },
            [S],
        ),
        Z = l.useCallback(
            (e, t) => {
                (I.current = t), b(h * e + t);
            },
            [b],
        ),
        k = l.useCallback(() => {
            (I.current = null), b(null);
        }, [b]),
        U = l.useCallback(
            (e) => {
                k(), (j.current = e);
            },
            [k],
        ),
        M = l.useCallback((e, t, n) => {
            if (j.current)
                return void A({
                    x: 0,
                    y: 0,
                });
            let r = {
                    x: e.x - t.x,
                    y: e.y - t.y,
                },
                l = r.x < 0,
                i = r.y < 0,
                o = ((e, t) => {
                    let n = Math.abs(t.x),
                        r = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
                        l = e / 2 - 28.8;
                    return {
                        x: Math.max(l * Math.cos((2 * Math.PI * r) / 360), 0),
                        y: Math.max(l * Math.sin((2 * Math.PI * r) / 360), 0),
                    };
                })(n, r);
            A({
                x: (l ? Math.max(r.x, -o.x) : Math.min(r.x, o.x)) / 2,
                y: (i ? Math.max(r.y, -o.y) : Math.min(r.y, o.y)) / 2,
            });
        }, []),
        B = l.useCallback(
            (e) => {
                null != I.current && (e.preventDefault(), e.stopPropagation(), null == x || x(h * S + I.current));
            },
            [x, S],
        ),
        L = l.useMemo(
            () =>
                (0, i.throttle)((e) => {
                    if (null == v.current) return;
                    let r = v.current.getBoundingClientRect(),
                        l = {
                            x: r.left + r.width / 2,
                            y: r.top + r.height / 2,
                        },
                        i = {
                            x: e.clientX,
                            y: e.clientY,
                        };
                    if ((M(i, l, Math.max(t, n)), j.current)) {
                        null != N && k();
                        return;
                    }
                    let o = (0, a.ld)(l, i, Math.max(t, n));
                    for (let e = 0; e < T.current[S].length; e++) {
                        let t = T.current[S][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, a.Vr)(l, o, n)) return void Z(S, e);
                    }
                    k();
                }, 16),
            [N, M, k, Z, S, n, t],
        ),
        V = l.useCallback(
            (e) => {
                if (!E) return;
                let t = S + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < w.length &&
                    (null != I.current && (w[t].length > I.current ? Z(t, I.current) : k()), _(t));
            },
            [E, S, w, Z, k],
        ),
        F = l.useMemo(
            () =>
                w[S].map((e, l) => {
                    let i = f[l];
                    if (null == i)
                        throw Error("Too many items supplied ".concat(C.length, " expected max of ").concat(f.length));
                    let o = g(i.x, t, p),
                        s = g(i.y, n, O);
                    return (0, r.jsx)(
                        "div",
                        {
                            ref: (e) => D(e, l),
                            className: u.chatWheelItem,
                            style: {
                                left: o,
                                top: s,
                                width: p,
                                height: O,
                            },
                            children: e,
                        },
                        l,
                    );
                }),
            [w, S, t, p, n, O, C.length, D],
        );
    return (0, r.jsx)(s.P3F, {
        className: u.chatWheelMouseInput,
        onMouseMove: L,
        onWheel: V,
        onClick: B,
        children: (0, r.jsxs)("div", {
            ref: v,
            className: u.chatWheel,
            style: {
                width: t,
                height: n,
            },
            children: [
                (0, r.jsxs)("svg", {
                    className: u.chatWheelBackground,
                    viewBox: "0 0 288 288",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, r.jsxs)("filter", {
                            id: "soundboard-wheel-background-shadow",
                            x: "0",
                            y: "0",
                            width: "288",
                            height: "288",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, r.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix",
                                }),
                                (0, r.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, r.jsx)("feOffset", { dy: "8" }),
                                (0, r.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                                (0, r.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                                (0, r.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382",
                                }),
                                (0, r.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, r.jsxs)("g", {
                            filter: "url(#soundboard-wheel-background-shadow)",
                            children: [
                                (0, r.jsx)("circle", {
                                    className: u.chatWheelBackground,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                y &&
                                    (0, r.jsx)("circle", {
                                        className: u.chatWheelDeadZone,
                                        onMouseEnter: () => U(!0),
                                        onMouseLeave: () => U(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                R &&
                                    (0, r.jsx)("circle", {
                                        className: u.chatWheelCenter,
                                        cx: 144 + P.x,
                                        cy: 144 + P.y,
                                        r: 28.8,
                                    }),
                            ],
                        }),
                        y &&
                            (0, r.jsx)("circle", {
                                className: u.chatWheelDeadZone,
                                onMouseEnter: () => U(!0),
                                onMouseLeave: () => U(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, r.jsxs)("div", {
                    className: u.innerContent,
                    children: [
                        y &&
                            (0, r.jsx)(s.P3F, {
                                className: u.chatWheelDeadZoneIcon,
                                onClick: m,
                                children: (0, r.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                            }),
                        E && w.length > 1
                            ? (0, r.jsx)("div", {
                                  className: u.paginationHint,
                                  children: c.intl.string(c.t["Xy+S09"]),
                              })
                            : null,
                    ],
                }),
                F,
            ],
        }),
    });
});
