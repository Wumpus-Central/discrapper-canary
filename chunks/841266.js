n.d(t, { U: () => c });
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(151196),
    r = n(473336),
    o = n(222094);
function d(e) {
    let { yaml: t, label: n } = e,
        l = i.useCallback(() => {
            navigator.clipboard.writeText(t);
        }, [t]);
    return (0, a.jsxs)(s.BJc, {
        gap: 4,
        children: [
            (0, a.jsxs)(s.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                justify: "space-between",
                children: [
                    (0, a.jsx)(s.EYj, { variant: "text-md/semibold", children: n }),
                    (0, a.jsx)(s.K0, {
                        icon: s.TdU,
                        "aria-label": `Copy ${n} YAML`,
                        onClick: l,
                        variant: "secondary",
                        size: "sm",
                    }),
                ],
            }),
            (0, a.jsx)("pre", { className: o.RP, children: t }),
        ],
    });
}
function c(e) {
    let { allResolvedStops: t } = e,
        n = i.useMemo(
            () =>
                l._V.map((e, n) => {
                    let a;
                    return (
                        (a = l.F$.map((e) => {
                            let { value: a } = e,
                                i = l.KC[a],
                                s = t[a];
                            return `  ${i}:
    color: ${(0, r.b5)(s.colors[n])}
    opacity: ${s.opacities[n]}`;
                        }).join("\n")),
                        `type: background
colors:
${a}
gradient-colors:
  color-mix: false
codegen:
  web: true
  mobile: false`
                    );
                }),
            [t],
        );
    return (0, a.jsxs)(s.BJc, {
        gap: 16,
        children: [
            (0, a.jsx)(s.DZT, { variant: "heading-sm/semibold", children: "Token YAML" }),
            l._V.map((e, t) => (0, a.jsx)(d, { yaml: n[t], label: e }, e)),
        ],
    });
}
