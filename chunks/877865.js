n.d(t, { U: () => R }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(608787),
    u = n(866442),
    d = n(19602),
    f = n(490236),
    _ = n(28664),
    p = n(159691),
    h = n(481060),
    m = n(408886),
    g = n(233398),
    E = n(866419),
    b = n(771934),
    y = n(119475),
    O = n(388032),
    v = n(531604);
function I() {
    return (0, r.jsx)("div", {
        className: v.loader,
        children: (0, r.jsx)(h.$jN, {}),
    });
}
let T = (0, c.Un)({
        createPromise: () => Promise.all([n.e("3115"), n.e("24530")]).then(n.bind(n, 932329)),
        webpackId: 932329,
        name: "CustomThemeColorPickerControl",
        renderLoader: I,
    }),
    S = 5;
function A(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function C(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => A(t, n)),
                n = t.map((t, n) => "".concat(t, " ").concat(e[n], "%")).join(", ");
            return [e, { background: "linear-gradient(to right, ".concat(n, ")") }];
        }, [t]);
    return (0, r.jsx)("div", {
        className: v.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let s = o[t],
                l = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(h.P3F, {
                            className: v.colorCircle,
                            style: {
                                left: "".concat(s, "%"),
                                backgroundColor: e,
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)("div", { className: v.colorCircleInner }),
                        }),
                        l &&
                            (0, r.jsx)("div", {
                                className: v.colorCircleSelectedTriangle,
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
    if (!(0, u.FX)(e)) return e;
    let t = o()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}
function R(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        c = (0, m.Z)(),
        [I, A] = i.useState(0),
        [R, P] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && I < o.length) {
            let e = o[I];
            (0, u.FX)(e) && (P(e), n(e));
        }
        I >= o.length && A(0);
    }, [I, o, n]);
    let w = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t;
        },
        D = (e) => {
            let t = w(e);
            if ((P(t), (0, u.FX)(t) && ((0, b.zW)(), n(t), o.length > 0))) {
                let e = [...o];
                (e[I] = t), s(e);
            }
        },
        L = i.useCallback((e) => {
            P(e.hex);
        }, []),
        x = (e) => {
            if (((0, b.P0)(), n(e.hex), o.length > 0)) {
                let t = [...o];
                (t[I] = e.hex), s(t);
            }
        },
        M = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, b.J4)(), D(e);
                } catch (e) {}
        },
        j = () => {
            if (o.length === S) return;
            0 === o.length && (0, E.ft)(), (0, b.gG)();
            let e = o.length > 0 ? o[o.length - 1] : R,
                t = o.length > 0 ? N(e) : e,
                n = [...o, t];
            s(n), A(n.length - 1);
        },
        k = (e) => {
            if (o.length > 1) {
                (0, b.JL)();
                let t = o.filter((t, n) => n !== e);
                s(t), I >= t.length ? A(t.length - 1) : I > e && A(I - 1);
            }
        },
        U = (e) => {
            A(e), (0, b.w8)();
        },
        G = o.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(v.container, a),
        children: [
            (0, r.jsxs)("div", {
                className: v.headerContainer,
                children: [
                    (0, r.jsx)(h.Text, {
                        variant: "text-sm/medium",
                        children: O.intl.string(y.default["8ZcEfn"]),
                    }),
                    (0, r.jsx)(_.u, {
                        asContainer: !0,
                        text: O.intl.string(y.default["61KGaW"]),
                        shouldShow: o.length === S,
                        children: (0, r.jsx)(h.P3F, {
                            onClick: o.length === S ? void 0 : j,
                            className: l()(v.addColorButton, { [v.disabled]: o.length === S }),
                            children: (0, r.jsx)(h.Text, {
                                variant: "text-sm/medium",
                                className: v.addColorButtonText,
                                children: O.intl.string(y.default["+tTysr"]),
                            }),
                        }),
                    }),
                ],
            }),
            G &&
                (0, r.jsx)(C, {
                    colors: o,
                    selectedIndex: I,
                    onColorSelect: U,
                }),
            (0, r.jsx)(T, {
                onChange: L,
                onChangeComplete: x,
                color: R,
            }),
            (0, r.jsxs)("div", {
                className: v.hexInputContainer,
                children: [
                    (0, r.jsx)("input", {
                        className: v.hexInput,
                        value: R.toUpperCase(),
                        onChange: (e) => D(e.target.value),
                        maxLength: 7,
                        placeholder: g.Dp,
                        type: "text",
                    }),
                    (0, r.jsxs)("div", {
                        className: v.trailingIcons,
                        children: [
                            null != c &&
                                (0, r.jsx)(_.u, {
                                    text: O.intl.string(y.default["8QXO8v"]),
                                    children: (0, r.jsx)(p.hU, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: M,
                                        icon: d.i,
                                        "aria-label": O.intl.string(y.default["8QXO8v"]),
                                    }),
                                }),
                            G &&
                                (0, r.jsx)(_.u, {
                                    text: O.intl.string(y.default["rTik5+"]),
                                    children: (0, r.jsx)(p.hU, {
                                        variant: "icon-only",
                                        size: "sm",
                                        onClick: () => k(I),
                                        icon: f.X,
                                        "aria-label": O.intl.string(y.default["rTik5+"]),
                                    }),
                                }),
                        ],
                    }),
                ],
            }),
        ],
    });
}
