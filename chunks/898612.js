var l = n(477900);
n(582128);
var o = n(191023),
    i = n(140735),
    r = n(963027),
    u = n(47167),
    a = n(713654),
    s = n(403362),
    c = n(739455),
    d = n(2242),
    C = n(792996),
    p = n(669748);
function h(e) {
    let { channelId: t } = e,
        n = (0, c.fE)(t),
        s = (0, u.Ay)(n);
    if (null == n) return `[${C.intl.string(C.t.bz1PZX)}]`;
    let d = n.isMediaChannel() ? o.ImageIcon : (0, a._U)(n.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(i.A, { children: (0, r.Ay)({ channel: n }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != d && (0, l.jsx)(d, { className: p.K, "aria-hidden": !0 }), s],
            }),
        ],
    });
}
n.d(
    t,
    {},
    {
        A: function (e) {
            switch (e.ref_type) {
                case d.bN.CHANNEL:
                    return (0, l.jsx)(h, { channelId: e.ref_id });
                case d.bN.INTANGIBLE:
                    return e.name;
                default:
                    (0, s.xb)(e);
            }
        },
    },
);
