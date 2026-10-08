t.d(n, { A: () => f });
var l = t(477900);
t(582128);
var r = t(191023),
    i = t(140735),
    a = t(963027),
    s = t(47167),
    u = t(713654),
    c = t(403362),
    o = t(739455),
    d = t(2242),
    m = t(660183),
    h = t(669748);
function E(e) {
    let { channelId: n } = e,
        t = (0, o.fE)(n),
        c = (0, s.Ay)(t);
    if (null == t) return `[${m.intl.string(m.t.bz1PZX)}]`;
    let d = t.isMediaChannel() ? r.ImageIcon : (0, u._U)(t.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.A, { children: (0, a.Ay)({ channel: t }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, l.jsx)(d, { className: h.K, "aria-hidden": !0 }), c],
            }),
        ],
    });
}
function f(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, l.jsx)(E, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, c.xb)(e);
    }
}
