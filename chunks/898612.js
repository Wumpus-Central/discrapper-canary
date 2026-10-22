n.d(t, { A: () => m });
var l = n(477900);
n(582128);
var o = n(191023),
    r = n(140735),
    i = n(963027),
    a = n(47167),
    u = n(713654),
    s = n(403362),
    c = n(739455),
    d = n(2242),
    C = n(105292),
    h = n(669748);
function p(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        s = (0, a.Ay)(n);
    if (null == n) return `[${C.intl.string(C.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? o.ImageIcon : (0, u._U)(n.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.A, { children: (0, i.Ay)({ channel: n }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, l.jsx)(d, { className: h.K, "aria-hidden": !0 }), s],
            }),
        ],
    });
}
function m(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, l.jsx)(p, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, s.xb)(e);
    }
}
