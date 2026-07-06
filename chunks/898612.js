n.d(t, { A: () => C });
var l = n(627968);
n(64700);
var r = n(191023),
    i = n(140735),
    a = n(963027),
    o = n(47167),
    s = n(713654),
    u = n(403362),
    c = n(739455),
    d = n(2242),
    m = n(375708),
    E = n(60927);
function p(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        u = (0, o.Ay)(n);
    if (null == n) return `[${m.intl.string(m.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? r.x : (0, s._U)(n.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.A, { children: (0, a.Ay)({ channel: n }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, l.jsx)(d, { className: E.K, "aria-hidden": !0 }), u],
            }),
        ],
    });
}
function C(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, l.jsx)(p, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, u.xb)(e);
    }
}
