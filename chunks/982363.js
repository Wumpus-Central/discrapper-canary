n.d(t, { q: () => r });
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(985018);
function r(e) {
    let { text: t, censor: n, revealLabel: r, hideLabel: o, redesign: d = !1 } = e,
        [c, u] = s.useState(!1),
        m = c ? t : n(t);
    return (0, i.jsxs)(l.BJc, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: d ? "end" : "start",
        children: [
            d ? (0, i.jsx)(l.Text, { variant: "text-md/medium", children: m }) : m,
            (0, i.jsx)(l.QWc, {
                variant: "primary",
                textVariant: d ? "text-md/medium" : "text-sm/medium",
                "aria-label": c ? o : r,
                onClick: () => u(!c),
                text: c ? a.intl.string(a.t.fgq1gs) : a.intl.string(a.t.dcztdU),
            }),
        ],
    });
}
