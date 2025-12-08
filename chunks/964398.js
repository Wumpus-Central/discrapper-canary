n.d(t, { Z: () => p }), n(388685), n(415506);
var l = n(54381),
    i = n(473749),
    r = n(392711),
    a = n.n(r),
    o = n(481060),
    s = n(65205),
    u = n(388032),
    c = n(504964);
function d(e) {
    let { className: t } = e;
    return (0, l.jsxs)("svg", {
        className: t,
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        children: [
            (0, l.jsx)("g", {
                filter: "url(#a)",
                children: (0, l.jsx)("path", {
                    d: "M30.4 8 24 14.4 17.6 8 16 9.6l6.4 6.4-6.4 6.4 1.6 1.6 6.4-6.4 6.4 6.4 1.6-1.6-6.4-6.4L32 9.6 30.4 8Z",
                    fill: "currentColor",
                }),
            }),
            (0, l.jsx)("defs", {
                children: (0, l.jsxs)("filter", {
                    id: "a",
                    x: "0",
                    y: "0",
                    width: "48",
                    height: "48",
                    filterUnits: "userSpaceOnUse",
                    colorInterpolationFilters: "sRGB",
                    children: [
                        (0, l.jsx)("feFlood", {
                            floodOpacity: "0",
                            result: "BackgroundImageFix",
                        }),
                        (0, l.jsx)("feColorMatrix", {
                            in: "SourceAlpha",
                            values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                            result: "hardAlpha",
                        }),
                        (0, l.jsx)("feOffset", { dy: "8" }),
                        (0, l.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                        (0, l.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                        (0, l.jsx)("feBlend", {
                            in2: "BackgroundImageFix",
                            result: "effect1_dropShadow_605_72103",
                        }),
                        (0, l.jsx)("feBlend", {
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
    g = f.length;
function h(e, t, n) {
    let l = e * t;
    return e > 0.5 ? l - n : e < 0.5 ? l : l - n / 2;
}
let p = i.memo(function (e) {
    let {
            wheelWidth: t,
            wheelHeight: n,
            itemWidth: p,
            itemHeight: E,
            showDeadZoneIndicator: N,
            activeItem: O,
            onItemSelect: y,
            onItemAction: C,
            interactive: T = !0,
            onClose: _,
            children: m,
        } = e,
        I = i.useRef(null),
        S = i.useRef([]),
        b = i.useRef(!1),
        v = i.useRef(null),
        [x, P] = i.useState(0),
        [Z, A] = i.useState({
            x: 0,
            y: 0,
        }),
        j = Math.abs(Z.x) + Math.abs(Z.y) > 0,
        R = i.useMemo(() => a().chunk(m, g), [m]),
        D = i.useCallback(
            (e, t) => {
                null == S.current[x] ? (S.current[x] = []) : (S.current[x][t] = e);
            },
            [x],
        ),
        w = i.useCallback(
            (e, t) => {
                (v.current = t), y(g * e + t);
            },
            [y],
        ),
        k = i.useCallback(() => {
            (v.current = null), y(null);
        }, [y]),
        M = i.useCallback(
            (e) => {
                k(), (b.current = e);
            },
            [k],
        ),
        U = i.useCallback((e, t, n) => {
            if (b.current)
                return void A({
                    x: 0,
                    y: 0,
                });
            let l = {
                    x: e.x - t.x,
                    y: e.y - t.y,
                },
                i = l.x < 0,
                r = l.y < 0,
                a = ((e, t) => {
                    let n = Math.abs(t.x),
                        l = (180 / Math.PI) * Math.atan2(Math.abs(t.y), n),
                        i = e / 2 - 28.8;
                    return {
                        x: Math.max(i * Math.cos((2 * Math.PI * l) / 360), 0),
                        y: Math.max(i * Math.sin((2 * Math.PI * l) / 360), 0),
                    };
                })(n, l);
            A({
                x: (i ? Math.max(l.x, -a.x) : Math.min(l.x, a.x)) / 2,
                y: (r ? Math.max(l.y, -a.y) : Math.min(l.y, a.y)) / 2,
            });
        }, []),
        L = i.useCallback(
            (e) => {
                null != v.current && (e.preventDefault(), e.stopPropagation(), null == C || C(g * x + v.current));
            },
            [C, x],
        ),
        G = i.useMemo(
            () =>
                (0, r.throttle)((e) => {
                    if (null == I.current) return;
                    let l = I.current.getBoundingClientRect(),
                        i = {
                            x: l.left + l.width / 2,
                            y: l.top + l.height / 2,
                        },
                        r = {
                            x: e.clientX,
                            y: e.clientY,
                        };
                    if ((U(r, i, Math.max(t, n)), b.current)) {
                        null != O && k();
                        return;
                    }
                    let a = (0, s.ld)(i, r, Math.max(t, n));
                    for (let e = 0; e < S.current[x].length; e++) {
                        let t = S.current[x][e];
                        if (null == t) continue;
                        let n = t.getBoundingClientRect();
                        if ((0, s.Vr)(i, a, n)) return void w(x, e);
                    }
                    k();
                }, 16),
            [O, U, k, w, x, n, t],
        ),
        V = i.useCallback(
            (e) => {
                if (!T) return;
                let t = x + (e.deltaY > 0 ? 1 : -1);
                t >= 0 &&
                    t < R.length &&
                    (null != v.current && (R[t].length > v.current ? w(t, v.current) : k()), P(t));
            },
            [T, x, R, w, k],
        ),
        F = i.useMemo(
            () =>
                R[x].map((e, i) => {
                    let r = f[i];
                    if (null == r)
                        throw Error("Too many items supplied ".concat(m.length, " expected max of ").concat(f.length));
                    let a = h(r.x, t, p),
                        o = h(r.y, n, E);
                    return (0, l.jsx)(
                        "div",
                        {
                            ref: (e) => D(e, i),
                            className: c.chatWheelItem,
                            style: {
                                left: a,
                                top: o,
                                width: p,
                                height: E,
                            },
                            children: e,
                        },
                        i,
                    );
                }),
            [R, x, t, p, n, E, m.length, D],
        );
    return (0, l.jsx)(o.P3F, {
        className: c.chatWheelMouseInput,
        onMouseMove: G,
        onWheel: V,
        onClick: L,
        children: (0, l.jsxs)("div", {
            ref: I,
            className: c.chatWheel,
            style: {
                width: t,
                height: n,
            },
            children: [
                (0, l.jsxs)("svg", {
                    className: c.chatWheelBackground,
                    viewBox: "0 0 288 288",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [
                        (0, l.jsxs)("filter", {
                            id: "soundboard-wheel-background-shadow",
                            x: "0",
                            y: "0",
                            width: "288",
                            height: "288",
                            filterUnits: "userSpaceOnUse",
                            colorInterpolationFilters: "sRGB",
                            children: [
                                (0, l.jsx)("feFlood", {
                                    floodOpacity: "0",
                                    result: "BackgroundImageFix",
                                }),
                                (0, l.jsx)("feColorMatrix", {
                                    in: "SourceAlpha",
                                    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",
                                    result: "hardAlpha",
                                }),
                                (0, l.jsx)("feOffset", { dy: "8" }),
                                (0, l.jsx)("feGaussianBlur", { stdDeviation: "8" }),
                                (0, l.jsx)("feColorMatrix", { values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.16 0" }),
                                (0, l.jsx)("feBlend", {
                                    in2: "BackgroundImageFix",
                                    result: "effect1_dropShadow_489_60382",
                                }),
                                (0, l.jsx)("feBlend", {
                                    in: "SourceGraphic",
                                    in2: "effect1_dropShadow_489_60382",
                                    result: "shape",
                                }),
                            ],
                        }),
                        (0, l.jsxs)("g", {
                            filter: "url(#soundboard-wheel-background-shadow)",
                            children: [
                                (0, l.jsx)("circle", {
                                    className: c.chatWheelBackground,
                                    cx: "144",
                                    cy: "144",
                                    r: "103.68",
                                    strokeWidth: "40.32",
                                }),
                                N &&
                                    (0, l.jsx)("circle", {
                                        className: c.chatWheelDeadZone,
                                        onMouseEnter: () => M(!0),
                                        onMouseLeave: () => M(!1),
                                        cx: 144,
                                        cy: 144,
                                        r: 28.8,
                                    }),
                                j &&
                                    (0, l.jsx)("circle", {
                                        className: c.chatWheelCenter,
                                        cx: 144 + Z.x,
                                        cy: 144 + Z.y,
                                        r: 28.8,
                                    }),
                            ],
                        }),
                        N &&
                            (0, l.jsx)("circle", {
                                className: c.chatWheelDeadZone,
                                onMouseEnter: () => M(!0),
                                onMouseLeave: () => M(!1),
                                cx: 144,
                                cy: 144,
                                r: 28.8,
                                stroke: "none",
                            }),
                    ],
                }),
                (0, l.jsxs)("div", {
                    className: c.innerContent,
                    children: [
                        N &&
                            (0, l.jsx)(o.P3F, {
                                className: c.chatWheelDeadZoneIcon,
                                onClick: _,
                                children: (0, l.jsx)(d, { className: c.chatWheelDeadZoneIcon }),
                            }),
                        T && R.length > 1
                            ? (0, l.jsx)("div", {
                                  className: c.paginationHint,
                                  children: u.intl.string(u.t["Xy+S02"]),
                              })
                            : null,
                    ],
                }),
                F,
            ],
        }),
    });
});
