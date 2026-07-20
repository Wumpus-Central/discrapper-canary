n.d(t, { A: () => _ });
var l = n(627968);
n(64700);
var r = n(191023),
    i = n(140735),
    o = n(963027),
    s = n(47167),
    a = n(713654),
    u = n(403362),
    c = n(739455),
    d = n(2242),
    E = n(375708),
    C = n(355711);
function h(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        u = (0, s.Ay)(n);
    if (null == n) return `[${E.intl.string(E.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? r.x : (0, a._U)(n.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.A, { children: (0, o.Ay)({ channel: n }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, l.jsx)(d, { className: C.K, "aria-hidden": !0 }), u],
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
            (0, u.xb)(e);
    }
}
