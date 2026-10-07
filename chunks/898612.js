l.d(n, { A: () => E });
var t = l(477900);
l(582128);
var r = l(191023),
    i = l(140735),
    a = l(963027),
    s = l(47167),
    u = l(713654),
    c = l(403362),
    o = l(739455),
    d = l(2242),
    m = l(660183),
    h = l(669748);
function f(e) {
    let { channelId: n } = e,
        l = (0, o.fE)(n),
        c = (0, s.Ay)(l);
    if (null == l) return `[${m.intl.string(m.t.bz1PZX)}]`;
    let d = l.isMediaChannel() ? r.ImageIcon : (0, u._U)(l.type);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(i.A, { children: (0, a.Ay)({ channel: l }) }),
            (0, t.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, t.jsx)(d, { className: h.K, "aria-hidden": !0 }), c],
            }),
        ],
    });
}
function E(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, t.jsx)(f, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, c.xb)(e);
    }
}
