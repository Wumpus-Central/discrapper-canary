n.d(t, { U: () => x }), n(388685), n(781311);
var r = n(951288),
    i = n(647438),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(608787),
    u = n(866442),
    d = n(19602),
    f = n(159691),
    _ = n(481060),
    p = n(408886),
    h = n(233398),
    m = n(866419),
    g = n(507962),
    E = n(119475),
    b = n(388032),
    y = n(209289);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function S() {
    return (0, r.jsx)("div", {
        className: y.loader,
        children: (0, r.jsx)(_.$jN, {}),
    });
}
let A = (0, c.Un)({
        createPromise: () => Promise.all([n.e("3115"), n.e("35855")]).then(n.bind(n, 164267)),
        webpackId: 164267,
        name: "CustomThemeColorPickerControlV2",
        renderLoader: S,
    }),
    C = 5,
    N = "#000000";
function R(e, t) {
    return e.length < 1 ? 0 : (t / (e.length - 1)) * 80 + 10;
}
function P(e) {
    let { colors: t, selectedIndex: n, onColorSelect: a } = e,
        [o, s] = i.useMemo(() => {
            let e = t.map((e, n) => R(t, n)),
                n = t.map((t, n) => "".concat(t, " ").concat(e[n], "%")).join(", ");
            return [e, { background: "linear-gradient(to right, ".concat(n, ")") }];
        }, [t]);
    return (0, r.jsx)("div", {
        className: y.gradientBar,
        style: s,
        children: t.map((e, t) => {
            let s = o[t],
                c = t === n;
            return (0, r.jsxs)(
                i.Fragment,
                {
                    children: [
                        (0, r.jsx)(_.P3F, {
                            className: l()(y.colorSquare, { [y.selected]: c }),
                            style: {
                                left: "".concat(s, "%"),
                                backgroundColor: e,
                            },
                            onClick: () => a(t),
                            children: (0, r.jsx)("div", { className: y.colorSquareInner }),
                        }),
                        c &&
                            (0, r.jsx)("div", {
                                className: y.colorSquareSelectedTriangle,
                                style: { left: "".concat(s, "%") },
                            }),
                    ],
                },
                t,
            );
        }),
    });
}
function w(e) {
    let { color: t } = e,
        n = i.useMemo(() => ({ backgroundColor: (0, u.FX)(t) ? t : N }), [t]);
    return (0, r.jsx)("div", {
        className: y.hexColorPreview,
        style: n,
        "aria-label": "Color preview",
    });
}
function D(e) {
    if (!(0, u.FX)(e)) return e;
    let t = o()(e);
    return t.set("hsl.h", (t.get("hsl.h") + 15) % 360).hex();
}
function x(e) {
    let { value: t, onChange: n, className: a, colors: o, setColors: s } = e,
        c = (0, p.Z)(),
        [O, I] = i.useState(0),
        [S, N] = i.useState(t);
    i.useEffect(() => {
        if (o.length > 0 && O < o.length) {
            let e = o[O];
            (0, u.FX)(e) && (N(e), n(e));
        }
        O >= o.length && I(0);
    }, [O, o, n]);
    let R = (e) => {
            let t = e.trim();
            return t.startsWith("#") ? t : t.length > 0 ? "#".concat(t) : t;
        },
        x = (e) => {
            let t = R(e);
            if ((N(t), (0, u.FX)(t) && ((0, g.zW)(), n(t), o.length > 0))) {
                let e = [...o];
                (e[O] = t), s(e);
            }
        },
        L = i.useCallback((e) => {
            N(e.hex);
        }, []),
        j = (e) => {
            if (((0, g.P0)(), n(e.hex), o.length > 0)) {
                let t = [...o];
                (t[O] = e.hex), s(t);
            }
        },
        k = async () => {
            if (null != c)
                try {
                    let { sRGBHex: e } = await c.open();
                    (0, g.J4)(), x(e);
                } catch (e) {}
        },
        M = () => {
            if (o.length === C) return;
            0 === o.length && (0, m.ft)(), (0, g.gG)();
            let e = o.length > 0 ? o[o.length - 1] : S,
                t = o.length > 0 ? D(e) : e,
                n = [...o, t];
            s(n), I(n.length - 1);
        },
        U = (e) => {
            if (o.length > 1) {
                (0, g.JL)();
                let t = o.filter((t, n) => n !== e);
                s(t), O >= t.length ? I(t.length - 1) : O > e && I(O - 1);
            }
        },
        G = (e) => {
            I(e), (0, g.w8)();
        },
        B = o.length > 1;
    return (0, r.jsxs)("div", {
        className: l()(y.container, a),
        children: [
            B &&
                (0, r.jsx)(P, {
                    colors: o,
                    selectedIndex: O,
                    onColorSelect: G,
                }),
            (0, r.jsx)(A, {
                onChange: L,
                onChangeComplete: j,
                color: S,
            }),
            (0, r.jsxs)("div", {
                className: y.hexInputContainer,
                children: [
                    (0, r.jsx)(w, { color: S }),
                    (0, r.jsx)("input", {
                        className: y.hexInput,
                        value: S.toUpperCase(),
                        onChange: (e) => x(e.target.value),
                        maxLength: 7,
                        placeholder: h.Dp,
                        type: "text",
                    }),
                    (0, r.jsxs)("div", {
                        className: y.trailingIcons,
                        children: [
                            null != c &&
                                (0, r.jsx)(_.ua7, {
                                    text: b.intl.string(E.default["NCFz+P"]),
                                    tooltipClassName: y.eyeDropperTooltip,
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.hU,
                                            T(
                                                v(
                                                    {
                                                        variant: "icon-only",
                                                        size: "sm",
                                                    },
                                                    e,
                                                ),
                                                {
                                                    onClick: k,
                                                    icon: d.i,
                                                    "aria-label": b.intl.string(E.default["NCFz+P"]),
                                                },
                                            ),
                                        ),
                                }),
                            B &&
                                (0, r.jsx)(_.ua7, {
                                    text: b.intl.string(b.t.N86XcH),
                                    children: (e) =>
                                        (0, r.jsx)(
                                            f.hU,
                                            T(v({}, e), {
                                                variant: "icon-only",
                                                size: "sm",
                                                onClick: () => U(O),
                                                icon: _.V_R,
                                                "aria-label": b.intl.string(b.t.N86XcH),
                                            }),
                                        ),
                                }),
                        ],
                    }),
                ],
            }),
            o.length < C &&
                (0, r.jsx)(f.zxk, {
                    variant: "secondary",
                    size: "md",
                    onClick: M,
                    icon: _.BRu,
                    text: b.intl.string(E.default.JUQcdX),
                    fullWidth: !0,
                }),
        ],
    });
}
