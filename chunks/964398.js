n.d(t, { Z: () => p }), n(388685), n(415506);
var r = n(951288),
    l = n(647438),
    s = n(392711),
    i = n.n(s),
    a = n(481060),
    o = n(65205),
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
let h = [
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
    f = h.length;
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
            activeItem: x,
            onItemSelect: b,
            onItemAction: N,
            interactive: m = !0,
            onClose: E,
            children: C,
        } = e,
        j = l.useRef(null),
        v = l.useRef([]),
        T = l.useRef(!1),
        I = l.useRef(null),
        [P, S] = l.useState(0),
        [_, R] = l.useState({
            x: 0,
            y: 0,
        }),
        w = Math.abs(_.x) + Math.abs(_.y) > 0,
        D = l.useMemo(() => i().chunk(C, f), [C]),
        A = l.useCallback(
            (e, t) => {
                null == v.current[P] ? (v.current[P] = []) : (v.current[P][t] = e);
            },
            [P],
        ),
        Z = l.useCallback(
            (e, t) => {
                (I.current = t), b(f * e + t);
            },
            [b],
        ),
        k = l.useCallback(() => {
            (I.current = null), b(null);
        }, [b]),
        M = l.useCallback(
            (e) => {
                k(), (T.current = e);
            },
            [k],
        ),
        B = l.useCallback((e, t, n) => {
            if (T.current)
                return void R({
                    x: 0,
                    y: 0,
                });
            let r = {
                    x: e.x - t.x,
                    y: e.y - t.y,
                },
                l = r.x < 0,
                s = r.y < 0,
                i = ((e, t) => {
                    let n = Math.abs(t.x),
                        r = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
                        l = e / 2 - 28.8;
                    return {
                        x: Math.max(l * Math.cos((2 * Math.PI * r) / 360), 0),
                        y: Math.max(l * Math.sin((2 * Math.PI * r) / 360), 0),
                    };
                })(n, r);
            R({
                x: (l ? Math.max(r.x, -i.x) : Math.min(r.x, i.x)) / 2,
                y: (s ? Math.max(r.y, -i.y) : Math.min(r.y, i.y)) / 2,
            });
        }, []),
        L = l.useCallback(
            (e) => {
                null != I.current && (e.preventDefault(), e.stopPropagation(), null == N || N(f * P + I.current));
            },
            [N, P],
        ),
        U = l.useMemo(
            () =>
                (0, s.throttle)((e) => {
                    if (null == j.current) return;
                    let r = j.current.getBoundingClientRect(),
                        l = {
                            x: r.left + r.width / 2,
                            y: r.top + r.height / 2,
                        },
                        s = {
                            x: e.clientX,
                            y: e.clientY,
                        };
                    if ((B(s, l, Math.max(t, n)), T.current)) {
                        null != x && k();
                        return;
                    }
                    let i = (0, o.ld)(l, s, Math.max(t, n));
                    for (let e = 0; e < v.current[P].length; e++) {
                        let t = v.current[P][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, o.Vr)(l, i, n)) return void Z(P, e);
                    }
                    k();
                }, 16),
            [x, B, k, Z, P, n, t],
        ),
        V = l.useCallback(
            (e) => {
                if (!m) return;
                let t = P + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < D.length &&
                    (null != I.current && (D[t].length > I.current ? Z(t, I.current) : k()), S(t));
            },
            [m, P, D, Z, k],
        ),
        G = l.useMemo(
            () =>
                D[P].map((e, l) => {
                    let s = h[l];
                    if (null == s)
                        throw Error("Too many items supplied ".concat(C.length, " expected max of ").concat(h.length));
                    let i = g(s.x, t, p),
                        a = g(s.y, n, O);
                    return (0, r.jsx)(
                        "div",
                        {
                            ref: (e) => A(e, l),
                            className: u.chatWheelItem,
                            style: {
                                left: i,
                                top: a,
                                width: p,
                                height: O,
                            },
                            children: e,
                        },
                        l,
                    );
                }),
            [D, P, t, p, n, O, C.length, A],
        );
    return (0, r.jsx)(a.P3F, {
        className: u.chatWheelMouseInput,
        onMouseMove: U,
        onWheel: V,
        onClick: L,
        children: (0, r.jsxs)("div", {
            ref: j,
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
                                        onMouseEnter: () => M(!0),
                                        onMouseLeave: () => M(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                w &&
                                    (0, r.jsx)("circle", {
                                        className: u.chatWheelCenter,
                                        cx: 144 + _.x,
                                        cy: 144 + _.y,
                                        r: 28.8,
                                    }),
                            ],
                        }),
                        y &&
                            (0, r.jsx)("circle", {
                                className: u.chatWheelDeadZone,
                                onMouseEnter: () => M(!0),
                                onMouseLeave: () => M(!1),
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
                            (0, r.jsx)(a.P3F, {
                                className: u.chatWheelDeadZoneIcon,
                                onClick: E,
                                children: (0, r.jsx)(d, { className: u.chatWheelDeadZoneIcon }),
                            }),
                        m && D.length > 1
                            ? (0, r.jsx)("div", {
                                  className: u.paginationHint,
                                  children: c.intl.string(c.t["Xy+S09"]),
                              })
                            : null,
                    ],
                }),
                G,
            ],
        }),
    });
});
