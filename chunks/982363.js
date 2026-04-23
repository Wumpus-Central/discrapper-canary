n.d(t, { q: () => d });
var i = n(627968),
    s = n(64700),
    l = n(331322),
    a = n(834730),
    r = n(123292),
    o = n(985018);
function d(e) {
    let { text: t, censor: n, revealLabel: d, hideLabel: u, redesign: c = !1 } = e,
        [g, m] = s.useState(!1),
        _ = g ? t : n(t);
    return (0, i.jsxs)(l.B, {
        direction: "horizontal",
        align: "center",
        gap: 4,
        justify: c ? "end" : "start",
        children: [
            c ? (0, i.jsx)(a.E, { variant: "text-md/medium", children: _ }) : _,
            (0, i.jsx)(r.Q, {
                variant: "primary",
                textVariant: c ? "text-md/medium" : "text-sm/medium",
                "aria-label": g ? u : d,
                onClick: () => m(!g),
                text: g ? o.intl.string(o.t.fgq1gs) : o.intl.string(o.t.dcztdU),
            }),
        ],
    });
}
