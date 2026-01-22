n.d(t, { A: () => u });
var r = n(627968),
    i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(899728),
    l = n(88001),
    c = n(183954);
function u(e) {
    let { className: t, premiumGroupRole: n } = e,
        i = (0, o.A)(n, !0);
    if (null == i) return null;
    let { subheaderString: u, bodyString: d } = i;
    return (0, r.jsxs)("div", {
        className: a()(c.kL, t),
        children: [
            (0, r.jsxs)(s.BJc, {
                direction: "horizontal",
                gap: 8,
                align: "center",
                className: c.wx,
                children: [
                    (0, r.jsx)(s.Heading, {
                        variant: "display-md",
                        className: c.Ss,
                        children: (0, l.DP)(),
                    }),
                    (0, r.jsx)(s.Exy, {
                        type: "beta",
                        variant: "expressive",
                    }),
                ],
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                className: c.m_,
                color: "text-default",
                children: u,
            }),
            (0, r.jsx)(s.Text, {
                variant: "text-md/medium",
                color: "text-default",
                children: d,
            }),
        ],
    });
}
