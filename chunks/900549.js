a.d(e, { w: () => l });
var n = a(627968),
    r = a(397927),
    i = a(60888),
    s = a(117013);
function l(t) {
    let { url: e } = t,
        { protocol: a, hostname: l, theRestOfTheUrl: o } = (0, i.L)(e);
    return (0, n.jsxs)(r.HOs, {
        className: s.u,
        children: [
            (0, n.jsxs)(r.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: [a, "//"],
            }),
            (0, n.jsx)(r.Text, {
                tag: "span",
                variant: "text-md/semibold",
                color: "text-default",
                children: l,
            }),
            (0, n.jsx)(r.Text, {
                tag: "span",
                variant: "text-md/normal",
                color: "text-muted",
                children: o,
            }),
        ],
    });
}
