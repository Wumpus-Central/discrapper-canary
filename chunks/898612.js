n.d(t, { A: () => f });
var r = n(477900);
n(582128);
var l = n(191023),
    i = n(140735),
    s = n(963027),
    u = n(47167),
    o = n(713654),
    a = n(403362),
    c = n(739455),
    d = n(2242),
    E = n(375708),
    h = n(669748);
function A(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        a = (0, u.Ay)(n);
    if (null == n) return `[${E.intl.string(E.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? l.ImageIcon : (0, o._U)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.A, { children: (0, s.Ay)({ channel: n }) }),
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, r.jsx)(d, { className: h.K, "aria-hidden": !0 }), a],
            }),
        ],
    });
}
function f(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, r.jsx)(A, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, a.xb)(e);
    }
}
