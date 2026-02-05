n.d(e, { w: () => l });
var a = n(627968),
    r = n(397927),
    i = n(60888),
    s = n(117013);
function l(t) {
    let { url: e } = t,
        { protocol: n, hostname: l, theRestOfTheUrl: o } = (0, i.L)(e);
    return (0, a.jsxs)(r.HOs, {
        className: s.u,
        children: [
            (0, a.jsxs)(r.Text, { tag: "span", variant: "text-md/normal", color: "text-muted", children: [n, "//"] }),
            (0, a.jsx)(r.Text, { tag: "span", variant: "text-md/semibold", color: "text-default", children: l }),
            (0, a.jsx)(r.Text, { tag: "span", variant: "text-md/normal", color: "text-muted", children: o }),
        ],
    });
}
