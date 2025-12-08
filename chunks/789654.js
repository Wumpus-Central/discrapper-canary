n.d(t, {
    Z: () => T,
    q: () => N,
}),
    n(804061),
    n(704826),
    n(35282),
    n(388685),
    n(190126),
    n(368063),
    n(65234),
    n(111804),
    n(490233),
    n(97749),
    n(410992),
    n(227481),
    n(730884),
    n(20464),
    n(341884),
    n(364341),
    n(629680),
    n(505025),
    n(918970),
    n(121784),
    n(644351),
    n(146733),
    n(361932),
    n(187205),
    n(49124);
var a = n(54381),
    l = n(473749),
    r = n(688619),
    i = n.n(r),
    s = n(392711),
    o = n.n(s),
    c = n(131271),
    d = n(521904),
    u = n(407146),
    m = n(668339),
    p = n(755721),
    h = n(481060),
    x = n(410030),
    f = n(705262),
    g = n(374794),
    b = n(58755),
    v = n(246992),
    j = n(500949),
    _ = n(416825);
function y(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (a = a.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            a.forEach(function (t) {
                var a;
                (a = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: a,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = a);
            });
    }
    return e;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      n.push.apply(n, a);
                  }
                  return n;
              })(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let { SemanticColors: S } = d.V;
function E(e) {
    return e.replaceAll(/_|\./g, "-").toLowerCase();
}
function O(e) {
    return e.replaceAll(/_|-/g, ".").toLowerCase();
}
function N(e, t) {
    let n = new Blob([t], { type: "application/json" }),
        a = URL.createObjectURL(n),
        l = document.createElement("a"),
        r = new TextEncoder().encode(t);
    crypto.subtle.digest("SHA-256", r).then((t) => {
        let n = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("");
        (l.href = a),
            (l.download = "".concat(e, "-").concat(n.slice(0, 8), ".json")),
            l.click(),
            URL.revokeObjectURL(a);
    });
}
function T() {
    let e = (0, x.Fg)(),
        [t, n, r, s, d, u] = (0, j.zn)(),
        { semanticColorOverrides: m, rawColorOverrides: v, tab: S, scales: O } = t,
        T = l.useMemo(() => {
            let t = Object.entries(m).map((t) => {
                    let [n, a] = t,
                        { colors: l, highlight: r } = a,
                        i = l[e];
                    if (null == i) return "";
                    let s = E(n);
                    if (r) return "--".concat(s, ": magenta !important;");
                    let o = E(i.color),
                        c = i.opacity,
                        d = c < 1 ? "hsl(var(--".concat(o, "-hsl) / ").concat(c, ")") : "var(--".concat(o, ")");
                    return "--"
                        .concat(s, ": color-mix(\n        in oklab,\n        ")
                        .concat(
                            d,
                            " 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );",
                        );
                }),
                n = Object.keys(v).flatMap((e) => {
                    let t = v[e],
                        {
                            h: n,
                            s: a,
                            l,
                        } = (function (e) {
                            let [t, n, a] = "transparent" === e ? [0, 0, 0] : i()(e).hsl(),
                                l = isNaN(t) ? 0 : o().round(t, 1),
                                r = o().round(100 * a, 1);
                            return {
                                h: l,
                                s: o().round(100 * n, 1),
                                l: r,
                            };
                        })(t.highlight ? "#FF00FF" : t.color),
                        r = o().kebabCase(e);
                    return [
                        "--"
                            .concat(r, "-hsl: ")
                            .concat(n, " calc(var(--saturation-factor, 1) * ")
                            .concat(a, "%) ")
                            .concat(l, "% !important;"),
                        "--".concat(r, ": hsl(var(--").concat(r, "-hsl)) !important;"),
                    ];
                }),
                a = O.reduce((e, t) => {
                    let { name: n } = t,
                        a = (0, j.XM)(t),
                        l = (0, j.W6)(a, n);
                    return (
                        e +
                        Object.keys(l).reduce((e, t) => {
                            let n = l[t],
                                r = a[t],
                                i = (0, j.HI)(r);
                            return "".concat(e, "\n--").concat(n, ": ").concat(i, ";");
                        }, "")
                    );
                }, "");
            return "\n      :root {\n        "
                .concat(a, "\n      }\n\n      .theme-")
                .concat(e, " {\n        ")
                .concat(t.join("\n"), "\n      }\n\n      html {\n        ")
                .concat(n.join("\n"), "\n      }\n    ");
        }, [v, O, m, e]);
    return (0, a.jsxs)("div", {
        className: _.panel,
        children: [
            (0, a.jsxs)("div", {
                className: _.toolbar,
                style: {
                    "--custom-theme-selection-selection-size": "40px",
                    "--custom-theme-selection-group-column-gap": "var(--spacing-8)",
                },
                children: [
                    (0, a.jsxs)(h.njP, {
                        className: _.tabBar,
                        type: "top",
                        look: "brand",
                        selectedItem: S,
                        onItemSelect: (e) => {
                            n((t) => C(y({}, t), { tab: e }));
                        },
                        children: [
                            (0, a.jsx)(h.njP.Item, {
                                id: j.H8.TOKENS,
                                children: "Tokens",
                            }),
                            (0, a.jsx)(h.njP.Item, {
                                id: j.H8.PALETTES,
                                children: "Palettes",
                            }),
                        ],
                    }),
                    (0, a.jsx)(f.ZP, {
                        type: f.yH.SETTINGS,
                        children: (0, a.jsx)(f.ZP.Basic, {
                            className: _.toolbarThemeSelector,
                            hideSystemSelector: !0,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: _.toolbarButtons,
                        children: [
                            (0, a.jsx)(h.hU, {
                                variant: "secondary",
                                size: "md",
                                icon: h.UEU,
                                onClick: r,
                                disabled: !d,
                                "aria-label": "Undo",
                            }),
                            (0, a.jsx)(h.hU, {
                                variant: "secondary",
                                size: "md",
                                icon: h.zGS,
                                onClick: s,
                                disabled: !u,
                                "aria-label": "Redo",
                            }),
                            (0, a.jsx)(g.Z, {
                                "aria-label": "Import",
                                filters: [
                                    {
                                        name: "JSON",
                                        extensions: ["json"],
                                    },
                                ],
                                onChange: (e) => {
                                    let t = e.currentTarget.files,
                                        a = null == t ? void 0 : t[0];
                                    if (null == a) return;
                                    let l = new FileReader();
                                    (l.onload = () => {
                                        let e = l.result;
                                        if ("string" == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                n(t);
                                            } catch (e) {}
                                    }),
                                        l.readAsText(a);
                                },
                                size: p.zx.Sizes.ICON,
                                color: p.zx.Colors.TRANSPARENT,
                                look: p.zx.Looks.BLANK,
                                children: (0, a.jsx)(h.rG2, {}),
                            }),
                            (0, a.jsx)(h.hU, {
                                variant: "secondary",
                                size: "md",
                                icon: h._8t,
                                onClick: () => {
                                    N("color-overrides", JSON.stringify(y({}, t), null, 2));
                                },
                                "aria-label": "Export",
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: _.tab,
                hidden: S !== j.H8.TOKENS,
                children: (0, a.jsx)(P, {
                    state: t,
                    setState: n,
                }),
            }),
            (0, a.jsx)("div", {
                className: _.tab,
                hidden: S !== j.H8.PALETTES,
                children: (0, a.jsx)(b.P, {
                    state: t,
                    setState: n,
                }),
            }),
            (0, a.jsx)(c.ql, {
                children: (0, a.jsx)("style", {
                    id: "devtools-color-overrides",
                    children: T,
                }),
            }),
        ],
    });
}
function P(e) {
    let { state: t, setState: n } = e,
        r = (0, x.Fg)(),
        { semanticColorOverrides: i, rawColorOverrides: s } = t,
        o = l.useMemo(
            () =>
                Object.keys(u.b).reduce(
                    (e, t) => [
                        ...e,
                        {
                            value: t,
                            label: t,
                        },
                    ],
                    [],
                ),
            [],
        ),
        c = l.useCallback(
            (e) => {
                n((t) => {
                    var n;
                    let { semanticColorOverrides: a } = t,
                        l = null != (n = a[e]) ? n : (0, j.$R)(e);
                    return C(y({}, t), { semanticColorOverrides: C(y({}, a), { [e]: l }) });
                });
            },
            [n],
        ),
        d = l.useCallback(
            (e) => {
                n((t) => {
                    let { rawColorOverrides: n } = t;
                    return null == n[e]
                        ? C(y({}, t), {
                              rawColorOverrides: C(y({}, n), {
                                  [e]: {
                                      color: u.b[e].hex,
                                      highlight: !1,
                                  },
                              }),
                          })
                        : t;
                });
            },
            [n],
        ),
        p = l.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = y({}, n);
                    return delete a[e], C(y({}, t), { semanticColorOverrides: a });
                });
            },
            [n],
        ),
        f = l.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = n[e];
                    if (null == a) return t;
                    let l = y({}, n);
                    return (l[e] = (0, j.GU)(a)), C(y({}, t), { semanticColorOverrides: l });
                });
            },
            [n],
        ),
        g = Object.keys(S).map((e) => ({
            value: e,
            label: E(e),
        })),
        b = Object.keys(u.b).map((e) => ({
            value: e,
            label: e,
        }));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(h.Text, {
                variant: "text-lg/semibold",
                children: "Semantic Tokens",
            }),
            (0, a.jsx)(m.d, {
                options: g,
                placeholder: "Search for a semantic token...",
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, a.jsx)("div", {
                              "data-theme": r,
                              className: _.colorPreview,
                              style: { "--custom-color": "var(--".concat(e.label, ")") },
                          }),
                popoutLayerContext: v.O$,
            }),
            (0, a.jsx)("ul", {
                className: _.overrides,
                children: Object.entries(i).map((e) => {
                    let [t, l] = e,
                        i = l.colors[r];
                    if (null == i) return null;
                    let s = O(i.color),
                        c = i.opacity,
                        d = j.jC[t][r];
                    return (0, a.jsx)(
                        I,
                        {
                            title: E(t),
                            subtitle:
                                1 === d.opacity ? O(d.raw) : "".concat(O(d.raw), " @ ").concat(100 * d.opacity, "%"),
                            highlight: l.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let a = (0, j.$R)(t);
                                    return C(y({}, e), { semanticColorOverrides: C(y({}, n), { [t]: a }) });
                                });
                            },
                            onRemove: () => p(t),
                            onHighlightToggle: () => f(t),
                            children: (0, a.jsxs)("div", {
                                className: _.semanticOverride,
                                children: [
                                    (0, a.jsx)(m.d, {
                                        value: s,
                                        options: o,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: a } = n,
                                                    l = a[t];
                                                if (null == l) return n;
                                                let i = l.colors[r];
                                                if (null == i) return n;
                                                let s = (0, j.lT)(l, t, e, i.opacity, r);
                                                return C(y({}, n), { semanticColorOverrides: C(y({}, a), { [t]: s }) });
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll(".", "-");
                                            return (0, a.jsx)("div", {
                                                "data-theme": r,
                                                className: _.colorPreview,
                                                style: { "--custom-color": "var(--".concat(t, ")") },
                                            });
                                        },
                                        popoutLayerContext: v.O$,
                                    }),
                                    (0, a.jsx)(h.oil, {
                                        inputClassName: _.opacityInput,
                                        type: "number",
                                        value: c,
                                        min: 0,
                                        max: 1,
                                        step: 0.01,
                                        onChange: (e) => {
                                            let a = parseFloat(e);
                                            isNaN(a) ||
                                                n((e) => {
                                                    let { semanticColorOverrides: n } = e,
                                                        l = n[t];
                                                    if (null == l) return e;
                                                    let i = l.colors[r];
                                                    if (null == i) return e;
                                                    let s = (0, j.lT)(l, t, i.color, a, r);
                                                    return C(y({}, e), {
                                                        semanticColorOverrides: C(y({}, n), { [t]: s }),
                                                    });
                                                });
                                        },
                                    }),
                                ],
                            }),
                        },
                        t,
                    );
                }),
            }),
            (0, a.jsx)("div", { className: _.divider }),
            (0, a.jsx)(h.Text, {
                variant: "text-lg/semibold",
                children: "Raw Tokens",
            }),
            (0, a.jsx)(m.d, {
                options: b,
                placeholder: "Search for a raw color...",
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll(".", "-");
                    return (0, a.jsx)("div", {
                        "data-theme": r,
                        className: _.colorPreview,
                        style: { "--custom-color": "var(--".concat(t, ")") },
                    });
                },
                popoutLayerContext: v.O$,
            }),
            (0, a.jsx)("ul", {
                className: _.rawOverrides,
                children: Object.entries(s).map((e) => {
                    let [t, l] = e;
                    return (0, a.jsxs)(
                        I,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: l.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = y({}, n);
                                    return (
                                        (a[t] = {
                                            color: u.b[t].hex,
                                            highlight: !1,
                                        }),
                                        C(y({}, e), { rawColorOverrides: a })
                                    );
                                });
                            },
                            onRemove: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = y({}, n);
                                    return delete a[t], C(y({}, e), { rawColorOverrides: a });
                                });
                            },
                            onHighlightToggle: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = n[t];
                                    if (null == a) return e;
                                    let l = y({}, n);
                                    return (
                                        (l[t] = C(y({}, a), { highlight: !a.highlight })),
                                        C(y({}, e), { rawColorOverrides: l })
                                    );
                                });
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    className: _.colorInput,
                                    type: "color",
                                    value: l.color,
                                    onChange: (e) => {
                                        let a = e.target.value;
                                        n((e) => {
                                            let { rawColorOverrides: n } = e;
                                            return C(y({}, e), {
                                                rawColorOverrides: C(y({}, n), {
                                                    [t]: {
                                                        color: a,
                                                        highlight: !1,
                                                    },
                                                }),
                                            });
                                        });
                                    },
                                }),
                                (0, a.jsx)(h.Text, {
                                    variant: "text-sm/medium",
                                    tabularNumbers: !0,
                                    children: l.color,
                                }),
                            ],
                        },
                        t,
                    );
                }),
            }),
        ],
    });
}
function I(e) {
    let { title: t, subtitle: n, highlight: l, onReset: r, onRemove: i, onHighlightToggle: s, children: o } = e;
    return (0, a.jsxs)("li", {
        className: _.override,
        "data-highlight": l,
        children: [
            (0, a.jsxs)("div", {
                className: _.overrideHeader,
                children: [
                    (0, a.jsxs)("div", {
                        className: _.title,
                        children: [
                            (0, a.jsx)(h.Text, {
                                lineClamp: 1,
                                variant: "text-md/medium",
                                className: _.overrideHeading,
                                tabularNumbers: !0,
                                children: t,
                            }),
                            null != n
                                ? (0, a.jsx)(h.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-subtle",
                                      tabularNumbers: !0,
                                      children: n,
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(h.P3F, {
                        onClick: s,
                        className: _.clickabeIcon,
                        children: (0, a.jsx)(h.tEF, {
                            size: "xs",
                            color: l ? "var(--text-brand)" : "currentColor",
                        }),
                    }),
                    (0, a.jsx)(h.P3F, {
                        className: _.clickabeIcon,
                        onClick: r,
                        children: (0, a.jsx)(h.DuK, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                    (0, a.jsx)(h.P3F, {
                        className: _.removeOverride,
                        onClick: i,
                        children: (0, a.jsx)(h.Dio, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: _.overrideContent,
                children: o,
            }),
        ],
    });
}
