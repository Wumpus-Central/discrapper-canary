n.d(t, { A: () => g });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(963027),
    o = n(47167),
    a = n(713654),
    s = n(403362),
    u = n(739455),
    c = n(2242),
    d = n(985018),
    m = n(60927);
function f(e) {
    let { channelId: t } = e,
        n = (0, u.fE)(t),
        s = (0, o.Ay)(n);
    if (null == n) return `[${d.intl.string(d.t.bz1PZX)}]`;
    let c = n.isMediaChannel() ? l.xfq : (0, a._U)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.AC4, { children: (0, r.Ay)({ channel: n }) }),
            (0, i.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != c && (0, i.jsx)(c, { className: m.K, "aria-hidden": !0 }), s],
            }),
        ],
    });
}
function g(e) {
    switch (e.ref_type) {
        case c.bN.CHANNEL:
            return (0, i.jsx)(f, { channelId: e.ref_id });
        case c.bN.INTANGIBLE:
            return e.name;
        default:
            (0, s.xb)(e);
    }
}
