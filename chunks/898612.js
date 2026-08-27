n.d(t, { A: () => _ });
var l = n(477900);
n(582128);
var r = n(191023),
    i = n(140735),
    o = n(963027),
    u = n(47167),
    s = n(713654),
    a = n(403362),
    c = n(739455),
    d = n(2242),
    C = n(375708),
    E = n(669748);
function h(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        a = (0, u.Ay)(n);
    if (null == n) return `[${C.intl.string(C.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? r.ImageIcon : (0, s._U)(n.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.A, { children: (0, o.Ay)({ channel: n }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, l.jsx)(d, { className: E.K, "aria-hidden": !0 }), a],
            }),
        ],
    });
}
function _(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, l.jsx)(h, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, a.xb)(e);
    }
}
