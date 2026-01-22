n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var l = n(990078),
    a = n(397927),
    i = n(580630),
    s = n(993408),
    c = n(641563),
    o = n(652215),
    d = n(985018),
    u = n(778052);
function m(e) {
    let { product: t } = e,
        n = (0, s.yt)(t, o.lid.PREMIUM_TIER_2);
    if (null == n) return null;
    let m = (0, i.RS)(n.amount, n.currency);
    return (0, r.jsxs)("div", {
        className: u.k,
        children: [
            (0, r.jsx)(l.m, {
                text: d.intl.string(d.t.MPFyJ5),
                "aria-label": d.intl.string(d.t.X3Ekj8),
                children: (0, r.jsx)(a.tvc, {
                    size: "md",
                    color: "currentColor",
                    className: u.o,
                }),
            }),
            (0, r.jsx)(a.Text, {
                variant: "text-xs/medium",
                children: d.intl.format(d.t.Sv8iic, {
                    price: m,
                    subscribeNowHook: (e) => (0, r.jsx)(c.Z, { text: e }),
                }),
            }),
        ],
    });
}
