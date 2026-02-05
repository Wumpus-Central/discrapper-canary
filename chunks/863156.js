n.d(t, { A: () => d });
var i = n(627968),
    s = n(503698),
    r = n.n(s),
    a = n(397927),
    l = n(899728),
    o = n(88001),
    c = n(183954);
function d(e) {
    let { className: t, premiumGroupRole: n } = e,
        s = (0, l.A)(n, !0);
    if (null == s) return null;
    let { subheaderString: d, bodyString: u } = s;
    return (0, i.jsxs)("div", {
        className: r()(c.kL, t),
        children: [
            (0, i.jsxs)(a.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: c.wx,
                children: [
                    (0, i.jsx)(a.Heading, { variant: "display-md", className: c.Ss, children: (0, o.DP)() }),
                    (0, i.jsx)(a.Exy, { type: "beta", variant: "expressive" }),
                ],
            }),
            (0, i.jsx)(a.Text, { variant: "text-md/medium", className: c.m_, color: "text-default", children: d }),
            (0, i.jsx)(a.Text, { variant: "text-md/medium", color: "text-default", children: u }),
        ],
    });
}
