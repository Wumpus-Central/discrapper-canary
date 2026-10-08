t.d(a, { A: () => E });
var l = t(477900);
t(582128);
var n = t(191023),
    r = t(140735),
    i = t(963027),
    s = t(47167),
    u = t(713654),
    o = t(403362),
    c = t(739455),
    h = t(2242),
    d = t(660183),
    m = t(669748);
function A(e) {
    let { channelId: a } = e,
        t = (0, c.fE)(a),
        o = (0, s.Ay)(t);
    if (null == t) return `[${d.intl.string(d.t.bz1PZX)}]`;
    let h = t.isMediaChannel() ? n.ImageIcon : (0, u._U)(t.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.A, { children: (0, i.Ay)({ channel: t }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != h && (0, l.jsx)(h, { className: m.K, "aria-hidden": !0 }), o],
            }),
        ],
    });
}
function E(e) {
    switch (e.ref_type) {
        case h.bN.CHANNEL:
            return (0, l.jsx)(A, { channelId: e.ref_id });
        case h.bN.INTANGIBLE:
            return e.name;
        default:
            (0, o.xb)(e);
    }
}
