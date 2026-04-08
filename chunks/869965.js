n.d(t, { d: () => a });
var i = n(627968),
    s = n(64700),
    l = n(158954);
function a(e) {
    let { title: t, children: n } = e,
        a = s.useId();
    return (0, i.jsxs)(l.BJc, {
        role: "group",
        "aria-labelledby": a,
        gap: "xl",
        padding: { top: 8, bottom: 8 },
        children: [
            (0, i.jsx)(l.DZT, { id: a, variant: "heading-md/semibold", color: "text-muted", children: t }),
            (0, i.jsx)(l.BJc, { role: "list", gap: "xl", children: n }),
        ],
    });
}
