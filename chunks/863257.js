n.d(t, { Z: () => u });
var r = n(54381),
    i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(961150),
    l = n(282793),
    c = n(73051);
function u(e) {
    let { className: t, premiumGroupRole: n } = e,
        i = (0, s.Z)(n, !0);
    if (null == i) return null;
    let { subheaderString: u, bodyString: d } = i;
    return (0, r.jsxs)("div", {
        className: a()(c.container, t),
        children: [
            (0, r.jsxs)(o.Kqy, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: c.header,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: "display-md",
                        className: c.wordmark,
                        children: (0, l.sO)(),
                    }),
                    (0, r.jsx)(o.Cts, {
                        type: "beta",
                        variant: "expressive",
                    }),
                ],
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                className: c.subheader,
                color: "text-default",
                children: u,
            }),
            (0, r.jsx)(o.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: d,
            }),
        ],
    });
}
