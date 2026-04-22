n.d(e, { w: () => c });
var a = n(627968),
    l = n(573613),
    r = n(834730),
    s = n(60888),
    i = n(750662);
function c(t) {
    let { url: e } = t,
        { protocol: n, hostname: c, theRestOfTheUrl: d } = (0, s.L)(e);
    return (0, a.jsxs)(l.Ip, {
        className: i.u,
        children: [
            (0, a.jsxs)(r.E, { tag: "span", variant: "text-md/normal", color: "text-muted", children: [n, "//"] }),
            (0, a.jsx)(r.E, { tag: "span", variant: "text-md/semibold", color: "text-default", children: c }),
            (0, a.jsx)(r.E, { tag: "span", variant: "text-md/normal", color: "text-muted", children: d }),
        ],
    });
}
