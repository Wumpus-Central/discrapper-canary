r.d(n, { A: () => E });
var t = r(477900);
r(582128);
var l = r(191023),
    i = r(140735),
    s = r(963027),
    o = r(47167),
    a = r(713654),
    c = r(403362),
    u = r(739455),
    d = r(2242),
    h = r(375708),
    m = r(669748);
function x(e) {
    let { channelId: n } = e,
        r = (0, u.fE)(n),
        c = (0, o.Ay)(r);
    if (null == r) return `[${h.intl.string(h.t.bz1PZX)}]`;
    let d = r.isMediaChannel() ? l.ImageIcon : (0, a._U)(r.type);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(i.A, { children: (0, s.Ay)({ channel: r }) }),
            (0, t.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, t.jsx)(d, { className: m.K, "aria-hidden": !0 }), c],
            }),
        ],
    });
}
function E(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, t.jsx)(x, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, c.xb)(e);
    }
}
