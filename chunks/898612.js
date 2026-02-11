"use strict";
n.d(t, { A: () => f });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(963027),
    s = n(713654),
    o = n(403362),
    l = n(739455),
    u = n(2242),
    c = n(985018),
    d = n(12512);
function _(e) {
    let { channelId: t } = e,
        n = (0, l.fE)(t);
    if (null == n) return `[${c.intl.string(c.t.bz1PZX)}]`;
    let o = n.isMediaChannel() ? i.xfq : (0, s._U)(n.type);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.AC4, { children: (0, a.Ay)({ channel: n }) }),
            (0, r.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != o && (0, r.jsx)(o, { className: d.K, "aria-hidden": !0 }), n.name],
            }),
        ],
    });
}
function f(e) {
    switch (e.ref_type) {
        case u.bN.CHANNEL:
            return (0, r.jsx)(_, { channelId: e.ref_id });
        case u.bN.INTANGIBLE:
            return e.name;
        default:
            (0, o.xb)(e);
    }
}
