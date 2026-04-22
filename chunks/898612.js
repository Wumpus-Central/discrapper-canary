n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var l = n(191023),
    r = n(140735),
    o = n(963027),
    a = n(47167),
    s = n(713654),
    u = n(403362),
    c = n(739455),
    d = n(2242),
    m = n(985018),
    f = n(60927);
function g(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        u = (0, a.Ay)(n);
    if (null == n) return `[${m.intl.string(m.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? l.x : (0, s._U)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(r.A, { children: (0, o.Ay)({ channel: n }) }),
            (0, i.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, i.jsx)(d, { className: f.K, "aria-hidden": !0 }), u],
            }),
        ],
    });
}
function p(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, i.jsx)(g, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, u.xb)(e);
    }
}
