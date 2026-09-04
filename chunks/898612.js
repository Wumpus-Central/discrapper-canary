n.d(t, { A: () => p });
var r = n(477900);
n(582128);
var l = n(191023),
    o = n(140735),
    i = n(963027),
    a = n(47167),
    s = n(713654),
    u = n(403362),
    c = n(739455),
    d = n(2242),
    h = n(375708),
    C = n(669748);
function m(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        u = (0, a.Ay)(n);
    if (null == n) return `[${h.intl.string(h.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? l.ImageIcon : (0, s._U)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(o.A, { children: (0, i.Ay)({ channel: n }) }),
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, r.jsx)(d, { className: C.K, "aria-hidden": !0 }), u],
            }),
        ],
    });
}
function p(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, r.jsx)(m, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, u.xb)(e);
    }
}
