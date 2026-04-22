a.d(t, { U: () => p });
var n = a(627968),
    l = a(64700),
    i = a(331322),
    s = a(834730),
    r = a(408278),
    o = a(624479),
    d = a(534514),
    c = a(151196),
    u = a(473336),
    m = a(3838);
function h(e) {
    let { yaml: t, label: a } = e,
        d = l.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, n.jsxs)(i.B, {
        gap: 4,
        children: [
            (0, n.jsxs)(i.B, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, n.jsx)(s.E, { variant: "text-md/semibold", children: a }),
                    (0, n.jsx)(r.K, {
                        icon: o.T,
                        "aria-label": `Copy ${a} YAML`,
                        onClick: d,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, n.jsx)("pre", { className: m.RP, children: t }),
        ],
    });
}
function p(e) {
    let { allResolvedStops: t } = e,
        a = l.useMemo(
            () =>
                c._V.map((e, a) => {
                    let n;
                    return (
                        (n = c.F$.map((e) => {
                            let { value: n } = e,
                                l = c.KC[n],
                                i = t[n];
                            return `  ${l}:
    color: ${(0, u.b5)(i.colors[a])}
    opacity: ${i.opacities[a]}`;
                        }).join("\n")),
                        `type: background
colors:
${n}
gradient-colors:
  color-mix: false
codegen:
  web: true
  mobile: false`
                    );
                }),
            [t],
        );
    return (0, n.jsxs)(i.B, {
        gap: 16,
        children: [
            (0, n.jsx)(d.D, { variant: "heading-sm/semibold", children: "Token YAML" }),
            c._V.map((e, t) => (0, n.jsx)(h, { yaml: a[t], label: e }, e)),
        ],
    });
}
