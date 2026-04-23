n.d(t, { d: () => r });
var i = n(627968),
    s = n(64700),
    l = n(331322),
    a = n(534514);
function r(e) {
    let { title: t, children: n } = e,
        r = s.useId();
    return (0, i.jsxs)(l.B, {
        role: "group",
        "aria-labelledby": r,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, i.jsx)(a.D, { id: r, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, i.jsx)(l.B, { role: "list", gap: "xl", children: n }),
        ],
    });
}
