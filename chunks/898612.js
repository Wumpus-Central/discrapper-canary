l.d(n, { A: () => f });
var t = l(477900);
l(582128);
var r = l(191023),
    i = l(140735),
    u = l(963027),
    s = l(47167),
    a = l(713654),
    o = l(403362),
    c = l(739455),
    d = l(2242),
    m = l(375708),
    E = l(669748);
function h(e) {
    let { channelId: n } = e,
        l = (0, c.fE)(n),
        o = (0, s.Ay)(l);
    if (null == l) return `[${m.intl.string(m.t.bz1PZX)}]`;
    let d = l.isMediaChannel() ? r.ImageIcon : (0, a._U)(l.type);
    return (0, t.jsxs)(t.Fragment, {
        children: [
            (0, t.jsx)(i.A, { children: (0, u.Ay)({ channel: l }) }),
            (0, t.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, t.jsx)(d, { className: E.K, "aria-hidden": !0 }), o],
            }),
        ],
    });
}
function f(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, t.jsx)(h, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, o.xb)(e);
    }
}
