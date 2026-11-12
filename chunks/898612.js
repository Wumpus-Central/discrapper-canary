var l = t(477900);
t(582128);
var n = t(191023),
    r = t(140735),
    s = t(963027),
    i = t(47167),
    u = t(713654),
    o = t(403362),
    c = t(739455),
    h = t(2242),
    d = t(792996),
    m = t(669748);
function p(e) {
    let { channelId: a } = e,
        t = (0, c.fE)(a),
        o = (0, i.Ay)(t);
    if (null == t) return `[${d.intl.string(d.t.bz1PZX)}]`;
    let h = t.isMediaChannel() ? n.ImageIcon : (0, u._U)(t.type);
    return (0, l.jsxs)(l.Fragment, {
        children: [
            (0, l.jsx)(r.A, { children: (0, s.Ay)({ channel: t }) }),
            (0, l.jsxs)("div", {
                "aria-hidden": !0,
                children: [null != h && (0, l.jsx)(h, { className: m.K, "aria-hidden": !0 }), o],
            }),
        ],
    });
}
t.d(
    a,
    {},
    {
        A: function (e) {
            switch (e.ref_type) {
                case h.bN.CHANNEL:
                    return (0, l.jsx)(p, { channelId: e.ref_id });
                case h.bN.INTANGIBLE:
                    return e.name;
                default:
                    (0, o.xb)(e);
            }
        },
    },
);
