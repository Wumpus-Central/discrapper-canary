n.d(t, { A: () => m });
var r = n(477900);
n(582128);
var l = n(191023),
    i = n(140735),
    o = n(963027),
    a = n(47167),
    s = n(713654),
    u = n(403362),
    c = n(739455),
    d = n(2242),
    C = n(375708),
    h = n(669748);
function E(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        u = (0, a.Ay)(n);
    if (null == n) return `[${C.intl.string(C.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? l.ImageIcon : (0, s._U)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.A, { children: (0, o.Ay)({ channel: n }) }),
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, r.jsx)(d, { className: h.K, "aria-hidden": !0 }), u],
            }),
        ],
    });
}
function m(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, r.jsx)(E, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, u.xb)(e);
    }
}
