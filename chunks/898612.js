i.d(t, { A: () => h });
var n = i(627968);
i(64700);
var l = i(191023),
    s = i(140735),
    r = i(963027),
    a = i(47167),
    u = i(713654),
    o = i(403362),
    c = i(739455),
    d = i(2242),
    f = i(375708),
    A = i(60927);
function g(e) {
    let { channelId: t } = e,
        i = (0, c.fE)(t),
        o = (0, a.Ay)(i);
    if (null == i) return `[${f.intl.string(f.t.bz1PZX)}]`;
    let d = i.isMediaChannel() ? l.x : (0, u._U)(i.type);
    return (0, n.jsxs)(n.Fragment, {
        children: [
            (0, n.jsx)(s.A, { children: (0, r.Ay)({ channel: i }) }),
            (0, n.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, n.jsx)(d, { className: A.K, "aria-hidden": !0 }), o],
            }),
        ],
    });
}
function h(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, n.jsx)(g, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, o.xb)(e);
    }
}
