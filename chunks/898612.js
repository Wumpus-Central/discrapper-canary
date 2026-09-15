t.d(n, { A: () => C });
var r = t(477900);
t(582128);
var l = t(191023),
    i = t(140735),
    s = t(963027),
    o = t(47167),
    a = t(713654),
    u = t(403362),
    c = t(739455),
    d = t(2242),
    h = t(375708),
    E = t(669748);
function m(e) {
    let { channelId: n } = e,
        t = (0, c.fE)(n),
        u = (0, o.Ay)(t);
    if (null == t) return `[${h.intl.string(h.t.bz1PZX)}]`;
    let d = t.isMediaChannel() ? l.ImageIcon : (0, a._U)(t.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.A, { children: (0, s.Ay)({ channel: t }) }),
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, r.jsx)(d, { className: E.K, "aria-hidden": !0 }), u],
            }),
        ],
    });
}
function C(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, r.jsx)(m, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, u.xb)(e);
    }
}
