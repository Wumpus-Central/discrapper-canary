n.d(t, {
    Z: () => N,
    q: () => T,
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
var a = n(951288),
    i = n(647438),
    l = n(688619),
    r = n.n(l),
    s = n(392711),
    o = n.n(s),
    c = n(352206),
    d = n(521904),
    u = n(407146),
    m = n(755721),
    p = n(481060),
    h = n(410030),
    x = n(705262),
    g = n(374794),
    f = n(58755),
    b = n(246992),
    v = n(500949),
    j = n(416825);
function _(e) {
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
function y(e, t) {
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
let { SemanticColors: C } = d.V;
function S(e) {
    return e.replaceAll(/_|\./g, "-").toLowerCase();
}
function E(e) {
    return e.replaceAll(/_|-/g, ".").toLowerCase();
}
function T(e, t) {
    let n = new Blob([t], { type: "application/json" }),
        a = URL.createObjectURL(n),
        i = document.createElement("a"),
        l = new TextEncoder().encode(t);
    crypto.subtle.digest("SHA-256", l).then((t) => {
        let n = Array.from(new Uint8Array(t))
            .map((e) => e.toString(16).padStart(2, "0"))
            .join("");
        (i.href = a),
            (i.download = "".concat(e, "-").concat(n.slice(0, 8), ".json")),
            i.click(),
            URL.revokeObjectURL(a);
    });
}
function N() {
    let e = (0, h.Fg)(),
        [t, n, l, s, d, u] = (0, v.zn)(),
        { semanticColorOverrides: b, rawColorOverrides: C, tab: E, scales: N } = t,
        P = i.useMemo(() => {
            let t = Object.entries(b).map((t) => {
                    let [n, a] = t,
                        { colors: i, highlight: l } = a,
                        r = i[e];
                    if (null == r) return "";
                    let s = S(n);
                    if (l) return "--".concat(s, ": magenta !important;");
                    let o = S(r.color),
                        c = r.opacity,
                        d = c < 1 ? "hsl(var(--".concat(o, "-hsl) / ").concat(c, ")") : "var(--".concat(o, ")");
                    return "--"
                        .concat(s, ": color-mix(\n        in oklab,\n        ")
                        .concat(
                            d,
                            " 100%,\n        var(--theme-base-color, black) var(--theme-base-color-amount, 0%)\n      );",
                        );
                }),
                n = Object.keys(C).flatMap((e) => {
                    let t = C[e],
                        {
                            h: n,
                            s: a,
                            l: i,
                        } = (function (e) {
                            let [t, n, a] = "transparent" === e ? [0, 0, 0] : r()(e).hsl(),
                                i = isNaN(t) ? 0 : o().round(t, 1),
                                l = o().round(100 * a, 1);
                            return {
                                h: i,
                                s: o().round(100 * n, 1),
                                l: l,
                            };
                        })(t.highlight ? "#FF00FF" : t.color),
                        l = o().kebabCase(e);
                    return [
                        "--"
                            .concat(l, "-hsl: ")
                            .concat(n, " calc(var(--saturation-factor, 1) * ")
                            .concat(a, "%) ")
                            .concat(i, "% !important;"),
                        "--".concat(l, ": hsl(var(--").concat(l, "-hsl)) !important;"),
                    ];
                }),
                a = N.reduce((e, t) => {
                    let { name: n } = t,
                        a = (0, v.XM)(t),
                        i = (0, v.W6)(a, n);
                    return (
                        e +
                        Object.keys(i).reduce((e, t) => {
                            let n = i[t],
                                l = a[t],
                                r = (0, v.HI)(l);
                            return "".concat(e, "\n--").concat(n, ": ").concat(r, ";");
                        }, "")
                    );
                }, "");
            return "\n      :root {\n        "
                .concat(a, "\n      }\n\n      .theme-")
                .concat(e, " {\n        ")
                .concat(t.join("\n"), "\n      }\n\n      html {\n        ")
                .concat(n.join("\n"), "\n      }\n    ");
        }, [C, N, b, e]);
    return (0, a.jsxs)("div", {
        className: j.panel,
        children: [
            (0, a.jsxs)("div", {
                className: j.toolbar,
                style: {
                    "--custom-theme-selection-selection-size": "40px",
                    "--custom-theme-selection-group-column-gap": "var(--spacing-8)",
                },
                children: [
                    (0, a.jsxs)(p.njP, {
                        className: j.tabBar,
                        type: "top",
                        look: "brand",
                        selectedItem: E,
                        onItemSelect: (e) => {
                            n((t) => y(_({}, t), { tab: e }));
                        },
                        children: [
                            (0, a.jsx)(p.njP.Item, {
                                id: v.H8.TOKENS,
                                children: "Tokens",
                            }),
                            (0, a.jsx)(p.njP.Item, {
                                id: v.H8.PALETTES,
                                children: "Palettes",
                            }),
                        ],
                    }),
                    (0, a.jsx)(x.ZP, {
                        type: x.yH.SETTINGS,
                        children: (0, a.jsx)(x.ZP.Basic, {
                            className: j.toolbarThemeSelector,
                            hideSystemSelector: !0,
                        }),
                    }),
                    (0, a.jsxs)("div", {
                        className: j.toolbarButtons,
                        children: [
                            (0, a.jsx)(m.zx, {
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                onClick: l,
                                disabled: !d,
                                children: (0, a.jsx)(p.UEU, {}),
                            }),
                            (0, a.jsx)(m.zx, {
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                onClick: s,
                                disabled: !u,
                                children: (0, a.jsx)(p.zGS, {}),
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
                                    let i = new FileReader();
                                    (i.onload = () => {
                                        let e = i.result;
                                        if ("string" == typeof e)
                                            try {
                                                let t = JSON.parse(e);
                                                if (null == t) return;
                                                n(t);
                                            } catch (e) {}
                                    }),
                                        i.readAsText(a);
                                },
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                children: (0, a.jsx)(p.rG2, {}),
                            }),
                            (0, a.jsx)(m.zx, {
                                size: m.zx.Sizes.ICON,
                                color: m.zx.Colors.TRANSPARENT,
                                look: m.zx.Looks.BLANK,
                                onClick: () => {
                                    T("color-overrides", JSON.stringify(_({}, t), null, 2));
                                },
                                children: (0, a.jsx)(p._8t, {}),
                            }),
                        ],
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: j.tab,
                hidden: E !== v.H8.TOKENS,
                children: (0, a.jsx)(O, {
                    state: t,
                    setState: n,
                }),
            }),
            (0, a.jsx)("div", {
                className: j.tab,
                hidden: E !== v.H8.PALETTES,
                children: (0, a.jsx)(f.P, {
                    state: t,
                    setState: n,
                }),
            }),
            (0, a.jsx)(c.ql, {
                children: (0, a.jsx)("style", {
                    id: "devtools-color-overrides",
                    children: P,
                }),
            }),
        ],
    });
}
function O(e) {
    let { state: t, setState: n } = e,
        l = (0, h.Fg)(),
        { semanticColorOverrides: r, rawColorOverrides: s } = t,
        o = i.useMemo(
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
        c = i.useCallback(
            (e) => {
                n((t) => {
                    var n;
                    let { semanticColorOverrides: a } = t,
                        i = null != (n = a[e]) ? n : (0, v.$R)(e);
                    return y(_({}, t), { semanticColorOverrides: y(_({}, a), { [e]: i }) });
                });
            },
            [n],
        ),
        d = i.useCallback(
            (e) => {
                n((t) => {
                    let { rawColorOverrides: n } = t;
                    return null == n[e]
                        ? y(_({}, t), {
                              rawColorOverrides: y(_({}, n), {
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
        m = i.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = _({}, n);
                    return delete a[e], y(_({}, t), { semanticColorOverrides: a });
                });
            },
            [n],
        ),
        x = i.useCallback(
            (e) => {
                n((t) => {
                    let { semanticColorOverrides: n } = t,
                        a = n[e];
                    if (null == a) return t;
                    let i = _({}, n);
                    return (i[e] = (0, v.GU)(a)), y(_({}, t), { semanticColorOverrides: i });
                });
            },
            [n],
        ),
        g = Object.keys(C).map((e) => ({
            value: e,
            label: S(e),
        })),
        f = Object.keys(u.b).map((e) => ({
            value: e,
            label: e,
        }));
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)(p.Text, {
                variant: "text-lg/semibold",
                children: "Semantic Tokens",
            }),
            (0, a.jsx)(p.VcW, {
                options: g,
                placeholder: "Search for a semantic token...",
                value: void 0,
                onChange: c,
                renderOptionPrefix: (e) =>
                    null == e
                        ? null
                        : (0, a.jsx)("div", {
                              "data-theme": l,
                              className: j.colorPreview,
                              style: { "--custom-color": "var(--".concat(e.label, ")") },
                          }),
                popoutLayerContext: b.O$,
            }),
            (0, a.jsx)("ul", {
                className: j.overrides,
                children: Object.entries(r).map((e) => {
                    let [t, i] = e,
                        r = i.colors[l];
                    if (null == r) return null;
                    let s = E(r.color),
                        c = r.opacity,
                        d = v.jC[t][l];
                    return (0, a.jsx)(
                        P,
                        {
                            title: S(t),
                            subtitle:
                                1 === d.opacity ? E(d.raw) : "".concat(E(d.raw), " @ ").concat(100 * d.opacity, "%"),
                            highlight: i.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { semanticColorOverrides: n } = e;
                                    if (null == n[t]) return e;
                                    let a = (0, v.$R)(t);
                                    return y(_({}, e), { semanticColorOverrides: y(_({}, n), { [t]: a }) });
                                });
                            },
                            onRemove: () => m(t),
                            onHighlightToggle: () => x(t),
                            children: (0, a.jsxs)("div", {
                                className: j.semanticOverride,
                                children: [
                                    (0, a.jsx)(p.VcW, {
                                        value: s,
                                        options: o,
                                        onChange: (e) => {
                                            n((n) => {
                                                let { semanticColorOverrides: a } = n,
                                                    i = a[t];
                                                if (null == i) return n;
                                                let r = i.colors[l];
                                                if (null == r) return n;
                                                let s = (0, v.lT)(i, t, e, r.opacity, l);
                                                return y(_({}, n), { semanticColorOverrides: y(_({}, a), { [t]: s }) });
                                            });
                                        },
                                        renderOptionPrefix: (e) => {
                                            if (null == e) return null;
                                            let t = e.label.replaceAll(".", "-");
                                            return (0, a.jsx)("div", {
                                                "data-theme": l,
                                                className: j.colorPreview,
                                                style: { "--custom-color": "var(--".concat(t, ")") },
                                            });
                                        },
                                        popoutLayerContext: b.O$,
                                    }),
                                    (0, a.jsx)(p.oil, {
                                        inputClassName: j.opacityInput,
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
                                                        i = n[t];
                                                    if (null == i) return e;
                                                    let r = i.colors[l];
                                                    if (null == r) return e;
                                                    let s = (0, v.lT)(i, t, r.color, a, l);
                                                    return y(_({}, e), {
                                                        semanticColorOverrides: y(_({}, n), { [t]: s }),
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
            (0, a.jsx)("div", { className: j.divider }),
            (0, a.jsx)(p.Text, {
                variant: "text-lg/semibold",
                children: "Raw Tokens",
            }),
            (0, a.jsx)(p.VcW, {
                options: f,
                placeholder: "Search for a raw color...",
                value: void 0,
                onChange: d,
                renderOptionPrefix: (e) => {
                    if (null == e) return null;
                    let t = e.label.replaceAll(".", "-");
                    return (0, a.jsx)("div", {
                        "data-theme": l,
                        className: j.colorPreview,
                        style: { "--custom-color": "var(--".concat(t, ")") },
                    });
                },
                popoutLayerContext: b.O$,
            }),
            (0, a.jsx)("ul", {
                className: j.rawOverrides,
                children: Object.entries(s).map((e) => {
                    let [t, i] = e;
                    return (0, a.jsxs)(
                        P,
                        {
                            title: t,
                            subtitle: u.b[t].hex,
                            highlight: i.highlight,
                            onReset: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = _({}, n);
                                    return (
                                        (a[t] = {
                                            color: u.b[t].hex,
                                            highlight: !1,
                                        }),
                                        y(_({}, e), { rawColorOverrides: a })
                                    );
                                });
                            },
                            onRemove: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = _({}, n);
                                    return delete a[t], y(_({}, e), { rawColorOverrides: a });
                                });
                            },
                            onHighlightToggle: () => {
                                n((e) => {
                                    let { rawColorOverrides: n } = e,
                                        a = n[t];
                                    if (null == a) return e;
                                    let i = _({}, n);
                                    return (
                                        (i[t] = y(_({}, a), { highlight: !a.highlight })),
                                        y(_({}, e), { rawColorOverrides: i })
                                    );
                                });
                            },
                            children: [
                                (0, a.jsx)("input", {
                                    className: j.colorInput,
                                    type: "color",
                                    value: i.color,
                                    onChange: (e) => {
                                        let a = e.target.value;
                                        n((e) => {
                                            let { rawColorOverrides: n } = e;
                                            return y(_({}, e), {
                                                rawColorOverrides: y(_({}, n), {
                                                    [t]: {
                                                        color: a,
                                                        highlight: !1,
                                                    },
                                                }),
                                            });
                                        });
                                    },
                                }),
                                (0, a.jsx)(p.Text, {
                                    variant: "text-sm/medium",
                                    tabularNumbers: !0,
                                    children: i.color,
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
function P(e) {
    let { title: t, subtitle: n, highlight: i, onReset: l, onRemove: r, onHighlightToggle: s, children: o } = e;
    return (0, a.jsxs)("li", {
        className: j.override,
        "data-highlight": i,
        children: [
            (0, a.jsxs)("div", {
                className: j.overrideHeader,
                children: [
                    (0, a.jsxs)("div", {
                        className: j.title,
                        children: [
                            (0, a.jsx)(p.Text, {
                                lineClamp: 1,
                                variant: "text-md/medium",
                                className: j.overrideHeading,
                                tabularNumbers: !0,
                                children: t,
                            }),
                            null != n
                                ? (0, a.jsx)(p.Text, {
                                      variant: "text-sm/medium",
                                      color: "text-secondary",
                                      tabularNumbers: !0,
                                      children: n,
                                  })
                                : null,
                        ],
                    }),
                    (0, a.jsx)(p.P3F, {
                        onClick: s,
                        className: j.clickabeIcon,
                        children: (0, a.jsx)(p.tEF, {
                            size: "xs",
                            color: i ? "var(--text-brand)" : "currentColor",
                        }),
                    }),
                    (0, a.jsx)(p.P3F, {
                        className: j.clickabeIcon,
                        onClick: l,
                        children: (0, a.jsx)(p.DuK, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                    (0, a.jsx)(p.P3F, {
                        className: j.removeOverride,
                        onClick: r,
                        children: (0, a.jsx)(p.Dio, {
                            size: "xs",
                            color: "currentColor",
                        }),
                    }),
                ],
            }),
            (0, a.jsx)("div", {
                className: j.overrideContent,
                children: o,
            }),
        ],
    });
}
