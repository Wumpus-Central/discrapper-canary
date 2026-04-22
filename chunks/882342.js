n.d(t, { A: () => m });
var i = n(627968);
n(64700);
var r = n(990078),
    a = n(403581),
    l = n(834730),
    s = n(580630),
    o = n(993408),
    c = n(641563),
    d = n(652215),
    u = n(985018),
    _ = n(805961);
function m(e) {
    let { product: t, onTrackClick: n } = e,
        m = (0, o.yt)(t, d.lid.PREMIUM_TIER_2);
    if (null == m) return null;
    let p = (0, s.RS)(m.amount, m.currency);
    return (0, i.jsxs)("div", {
        className: _.k,
        children: [
            (0, i.jsx)(r.m, {
                text: u.intl.string(u.t.MPFyJ5),
                "aria-label": u.intl.string(u.t.X3Ekj8),
                children: (0, i.jsx)(a.t, { size: "md", color: "currentColor", className: _.o }),
            }),
            (0, i.jsx)(l.E, {
                variant: "text-xs/medium",
                children: u.intl.format(u.t.Sv8iic, {
                    price: p,
                    subscribeNowHook: (e) => (0, i.jsx)(c.Z, { text: e, onTrackClick: n }),
                }),
            }),
        ],
    });
}
