n.d(t, { A: () => f });
var i = n(627968);
n(64700);
var l = n(397927),
    r = n(963027),
    o = n(713654),
    a = n(403362),
    s = n(739455),
    u = n(2242),
    c = n(985018),
    d = n(758382);
function m(e) {
    let { channelId: t } = e,
        n = (0, s.fE)(t);
    if (null == n) return `[${c.intl.string(c.t.bz1PZX)}]`;
    let a = n.isMediaChannel() ? l.xfq : (0, o._U)(n.type);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(l.AC4, { children: (0, r.Ay)({ channel: n }) }),
            (0, i.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != a && (0, i.jsx)(a, { className: d.K, "aria-hidden": !0 }), n.name],
            }),
        ],
    });
}
function f(e) {
    switch (e.ref_type) {
        case u.bN.CHANNEL:
            return (0, i.jsx)(m, { channelId: e.ref_id });
        case u.bN.INTANGIBLE:
            return e.name;
        default:
            (0, a.xb)(e);
    }
}
