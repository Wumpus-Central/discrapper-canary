n.d(t, { U: () => x }), n(388685), n(781311);
var r = n(255367),
    i = n(73800),
    o = n(688619),
    a = n.n(o),
    s = n(120356),
    l = n.n(s),
    c = n(608787),
    u = n(866442),
    d = n(19602),
    f = n(680018),
    _ = n(861066),
    p = n(481060),
    h = n(408886),
    m = n(233398),
    g = n(866419),
    E = n(771934),
    b = n(671147),
    y = n(388032),
    O = n(893986);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                v(e, t, n[t]);
            });
    }
    return e;
}
function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function S(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : T(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A() {
    return (0, r.jsx)("div", {
        className: O.loader,
        children: (0, r.jsx)(p.$jN, {}),
    });
}
let N = (0, c.Un)({
        createPromise: () => Promise.all([n.e("21153"), n.e("24530")]).then(n.bind(n, 932329)),
        webpackId: 932329,
        name: "CustomThemeColorPickerControl",
        renderLoader: A,
    }),
    C = 5,
    R = "#000000";
function P(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function w(e) {
    let { colors: t, selectedIndex: n, onColorSelect: o } = e,
        [a, s] = i.useMemo(() => {
            let e = t.map((e, n) => P(t, n)),
                n = t.map((t, n) => "".concat(t, " ").concat(e[n], "%")).join(", ");
            return [e, { background: "linear-gradient(to right, ".concat(n, ")") }];
        }, [t]);
    return (0, r.jsx)("div", {
        className: O.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let s = a[t],
                l = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(p.P3F, {
                            className: O.colorCircle,
                            style: {
                                left: "".concat(s, "%"),
                                backgroundColor: e,
                            },
                            onClick: () => o(t),
                            children: (0, r.jsx)("div", { className: O.colorCircleInner }),
                        }),
                        l &&
                            (0, r.jsx)("div", {
                                className: O.colorCircleSelectedTriangle,
                                style: { left: "".concat(s, "%") },
                            }),
                    ],
                },
                t,
            );
        }),
    });
}
function D(e) {
    let { color: t } = e,
        n = i.useMemo(() => ({ backgroundColor: (0, u.FX)(t) ? t : R }), [t]);
    return (0, r.jsx)("div", {
        className: O.hexColorPreview,
        style: n,
        "aria-label": "Color preview",
    });
}
function L(e) {
    if (!(0, u.FX)(e)) return e;
    let t = a()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}
function x(e) {
    let { value: t, onChange: n, className: o, colors: a, setColors: s } = e,
        c = (0, h.Z)(),
        [v, T] = i.useState(0),
        [A, R] = i.useState(t);
    i.useEffect(() => {
        if (a.length > 0 && v < a.length) {
            let e = a[v];
            (0, u.FX)(e) && (R(e), n(e));
        }
        v >= a.length && T(0);
    }, [v, a, n]);
    let P = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t;
        },
        x = (e) => {
            let t = P(e);
            if ((R(t), (0, u.FX)(t) && ((0, E.zW)(), n(t), a.length > 0))) {
                let e = [...a];
                (e[v] = t), s(e);
            }
        },
        M = i.useCallback((e) => {
            R(e.hex);
        }, []),
        k = (e) => {
            if (((0, E.P0)(), n(e.hex), a.length > 0)) {
                let t = [...a];
                (t[v] = e.hex), s(t);
            }
        },
        j = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, E.J4)(), x(e);
                } catch (e) {}
        },
        U = () => {
            if (a.length === C) return;
            0 === a.length && (0, g.ft)(), (0, E.gG)();
            let e = a.length > 0 ? a[a.length - 1] : A,
                t = a.length > 0 ? L(e) : e,
                n = [...a, t];
            s(n), T(n.length - 1);
        },
        G = (e) => {
            if (a.length > 1) {
                (0, E.JL)();
                let t = a.filter((t, n) => n !== e);
                s(t), v >= t.length ? T(t.length - 1) : v > e && T(v - 1);
            }
        },
        B = (e) => {
            T(e), (0, E.w8)();
        },
        Z = a.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(O.container, o),
        children: [
            Z &&
                (0, r.jsx)(w, {
                    colors: a,
                    selectedIndex: v,
                    onColorSelect: B,
                }),
            (0, r.jsx)(N, {
                onChange: M,
                onChangeComplete: k,
                color: A,
            }),
            (0, r.jsxs)("div", {
                className: O.hexInputContainer,
                children: [
                    (0, r.jsx)(D, { color: A }),
                    (0, r.jsx)("input", {
                        className: O.hexInput,
                        value: A.toUpperCase(),
                        onChange: (e) => x(e.target.value),
                        maxLength: 7,
                        placeholder: m.Dp,
                        type: "text",
                    }),
                    (0, r.jsxs)("div", {
                        className: O.trailingIcons,
                        children: [
                            null != c &&
                                (0, r.jsx)(p.ua7, {
                                    text: y.intl.string(b.default["8QXO8v"]),
                                    tooltipClassName: O.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            _.h,
                                            S(
                                                I(
                                                    {
                                                        variant: "icon-only",
                                                        size: "sm",
                                                    },
                                                    e,
                                                ),
                                                {
                                                    onClick: j,
                                                    icon: d.i,
                                                    "aria-label": y.intl.string(b.default["8QXO8v"]),
                                                },
                                            ),
                                        ),
                                }),
                            Z &&
                                (0, r.jsx)(p.ua7, {
                                    text: y.intl.string(b.default["rTik5+"]),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            _.h,
                                            S(I({}, e), {
                                                variant: "icon-only",
                                                size: "sm",
                                                onClick: () => G(v),
                                                icon: p.V_R,
                                                "aria-label": y.intl.string(b.default["rTik5+"]),
                                            }),
                                        ),
                                }),
                        ],
                    }),
                ],
            }),
            a.length < C &&
                (0, r.jsx)(f.z, {
                    variant: "secondary",
                    size: "md",
                    onClick: U,
                    icon: p.BRu,
                    text: y.intl.string(b.default.JUQcdX),
                    fullWidth: !0,
                }),
        ],
    });
}
