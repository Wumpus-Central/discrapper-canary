n.d(t, { U: () => R }), n(388685), n(781311);
var r = n(54381),
    i = n(473749),
    o = n(688619),
    a = n.n(o),
    s = n(120356),
    l = n.n(s),
    c = n(608787),
    u = n(866442),
    d = n(19602),
    f = n(28664),
    p = n(159691),
    _ = n(481060),
    m = n(408886),
    h = n(233398),
    g = n(866419),
    E = n(771934),
    b = n(5570),
    y = n(388032),
    O = n(209289);
function v() {
    return (0, r.jsx)("div", {
        className: O.loader,
        children: (0, r.jsx)(_.$jN, {}),
    });
}
let S = (0, c.Un)({
        createPromise: () => Promise.all([n.e("66382"), n.e("35855")]).then(n.bind(n, 164267)),
        webpackId: 164267,
        name: "CustomThemeColorPickerControlV2",
        renderLoader: v,
    }),
    I = 5,
    T = "#000000";
function C(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function A(e) {
    let { colors: t, selectedIndex: n, onColorSelect: o } = e,
        [a, s] = i.useMemo(() => {
            let e = t.map((e, n) => C(t, n)),
                n = t.map((t, n) => "".concat(t, " ").concat(e[n], "%")).join(", ");
            return [e, { background: "linear-gradient(to right, ".concat(n, ")") }];
        }, [t]);
    return (0, r.jsx)("div", {
        className: O.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let s = a[t],
                c = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.P3F, {
                            className: l()(O.colorSquare, { [O.selected]: c }),
                            style: {
                                left: "".concat(s, "%"),
                                backgroundColor: e,
                            },
                            onClick: () => o(t),
                            children: (0, r.jsx)("div", { className: O.colorSquareInner }),
                        }),
                        c &&
                            (0, r.jsx)("div", {
                                className: O.colorSquareSelectedTriangle,
                                style: { left: "".concat(s, "%") },
                            }),
                    ],
                },
                t,
            );
        }),
    });
}
function N(e) {
    let { color: t } = e,
        n = i.useMemo(() => ({ backgroundColor: (0, u.FX)(t) ? t : T }), [t]);
    return (0, r.jsx)("div", {
        className: O.hexColorPreview,
        style: n,
        "aria-label": "Color preview",
    });
}
function P(e) {
    if (!(0, u.FX)(e)) return e;
    let t = a()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}
function R(e) {
    let { value: t, onChange: n, className: o, colors: a, setColors: s } = e,
        c = (0, m.Z)(),
        [v, T] = i.useState(0),
        [C, R] = i.useState(t);
    i.useEffect(() => {
        if (a.length > 0 && v < a.length) {
            let e = a[v];
            (0, u.FX)(e) && (R(e), n(e));
        }
        v >= a.length && T(0);
    }, [v, a, n]);
    let w = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t;
        },
        D = (e) => {
            let t = w(e);
            if ((R(t), (0, u.FX)(t) && ((0, E.zW)(), n(t), a.length > 0))) {
                let e = [...a];
                (e[v] = t), s(e);
            }
        },
        x = i.useCallback((e) => {
            R(e.hex);
        }, []),
        L = (e) => {
            if (((0, E.P0)(), n(e.hex), a.length > 0)) {
                let t = [...a];
                (t[v] = e.hex), s(t);
            }
        },
        j = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, E.J4)(), D(e);
                } catch (e) {}
        },
        M = () => {
            if (a.length === I) return;
            0 === a.length && (0, g.ft)(), (0, E.gG)();
            let e = a.length > 0 ? a[a.length - 1] : C,
                t = a.length > 0 ? P(e) : e,
                n = [...a, t];
            s(n), T(n.length - 1);
        },
        k = (e) => {
            if (a.length > 1) {
                (0, E.JL)();
                let t = a.filter((t, n) => n !== e);
                s(t), v >= t.length ? T(t.length - 1) : v > e && T(v - 1);
            }
        },
        U = (e) => {
            T(e), (0, E.w8)();
        },
        G = a.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(O.container, o),
        children: [
            G &&
                (0, r.jsx)(A, {
                    colors: a,
                    selectedIndex: v,
                    onColorSelect: U,
                }),
            (0, r.jsx)(S, {
                onChange: x,
                onChangeComplete: L,
                color: C,
            }),
            (0, r.jsxs)("div", {
                className: O.hexInputContainer,
                children: [
                    (0, r.jsx)(N, { color: C }),
                    (0, r.jsx)("input", {
                        className: O.hexInput,
                        value: C.toUpperCase(),
                        onChange: (e) => D(e.target.value),
                        maxLength: 7,
                        placeholder: h.Dp,
                        type: "text",
                    }),
                    (0, r.jsxs)("div", {
                        className: O.trailingIcons,
                        children: [
                            null != c &&
                                (0, r.jsx)(f.u, {
                                    text: y.intl.string(b.default["NCFz+N"]),
                                    children: (0, r.jsx)(p.hU, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: j,
                                        icon: d.i,
                                        "aria-label": y.intl.string(b.default["NCFz+N"]),
                                    }),
                                }),
                            G &&
                                (0, r.jsx)(f.u, {
                                    text: y.intl.string(y.t.N86XcP),
                                    children: (0, r.jsx)(p.hU, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () => k(v),
                                        icon: _.V_R,
                                        "aria-label": y.intl.string(y.t.N86XcP),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
            a.length < I &&
                (0, r.jsx)(p.zxk, {
                    variant: "secondary",
                    size: "md",
                    onClick: M,
                    icon: _.BRu,
                    text: y.intl.string(b.default.JUQcdT),
                    fullWidth: !0,
                }),
        ],
    });
}
