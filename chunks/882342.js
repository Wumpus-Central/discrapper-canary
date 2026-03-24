"use strict";
r.d(t, { A: () => m });
var n = r(627968);
r(64700);
var i = r(990078),
    s = r(397927),
    a = r(580630),
    l = r(993408),
    c = r(641563),
    o = r(652215),
    d = r(985018),
    u = r(778052);
function m(e) {
    let { product: t } = e,
        r = (0, l.yt)(t, o.lid.PREMIUM_TIER_2);
    if (null == r) return null;
    let m = (0, a.RS)(r.amount, r.currency);
    return (0, n.jsxs)("div", {
        className: u.k,
        children: [
            (0, n.jsx)(i.m, {
                text: d.intl.string(d.t.MPFyJ5),
                "aria-label": d.intl.string(d.t.X3Ekj8),
                children: (0, n.jsx)(s.tvc, { size: "md", color: "currentColor", className: u.o }),
            }),
            (0, n.jsx)(s.Text, {
                variant: "text-xs/medium",
                children: d.intl.format(d.t.Sv8iic, {
                    price: m,
                    subscribeNowHook: (e) => (0, n.jsx)(c.Z, { text: e }),
                }),
            }),
        ],
    });
}
