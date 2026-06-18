"use strict";
n.d(t, { A: () => p });
var i = n(627968);
n(64700);
var r = n(191023),
    s = n(140735),
    a = n(963027),
    o = n(47167),
    l = n(713654),
    u = n(403362),
    c = n(739455),
    d = n(2242),
    _ = n(375708),
    h = n(60927);
function f(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        u = (0, o.Ay)(n);
    if (null == n) return `[${_.intl.string(_.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? r.x : (0, l._U)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(s.A, { children: (0, a.Ay)({ channel: n }) }),
            (0, i.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, i.jsx)(d, { className: h.K, "aria-hidden": !0 }), u],
            }),
        ],
    });
}
function p(e) {
    switch (e.ref_type) {
        case d.bN.CHANNEL:
            return (0, i.jsx)(f, { channelId: e.ref_id });
        case d.bN.INTANGIBLE:
            return e.name;
        default:
            (0, u.xb)(e);
    }
}
