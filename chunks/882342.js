n.d(t, { A: () => m });
var r = n(627968);
n(64700);
var a = n(990078),
    i = n(397927),
    s = n(580630),
    l = n(993408),
    o = n(641563),
    c = n(652215),
    d = n(985018),
    u = n(480313);
function m(e) {
    let { product: t, onTrackClick: n } = e,
        m = (0, l.yt)(t, c.lid.PREMIUM_TIER_2);
    if (null == m) return null;
    let h = (0, s.RS)(m.amount, m.currency);
    return (0, r.jsxs)("div", {
        className: u.k,
        children: [
            (0, r.jsx)(a.m, {
                text: d.intl.string(d.t.MPFyJ5),
                "aria-label": d.intl.string(d.t.X3Ekj8),
                children: (0, r.jsx)(i.tvc, { size: "md", color: "currentColor", className: u.o }),
            }),
            (0, r.jsx)(i.Text, {
                variant: "text-xs/medium",
                children: d.intl.format(d.t.Sv8iic, {
                    price: h,
                    subscribeNowHook: (e) => (0, r.jsx)(o.Z, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
