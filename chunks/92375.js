t.d(s, { Premium3PRewardsModalEntry: () => M });
var i = t(627968);
t(64700);
var r = t(17928),
    n = t(531260),
    a = t(31502),
    l = t(166403),
    d = t(264779),
    c = t(289873),
    o = t(189213),
    u = t(975571),
    m = t(792656),
    h = t(962644),
    b = t(35587),
    p = t(194261),
    x = t(534514),
    j = t(144165),
    f = t(375708),
    v = t(151001),
    N = t(738894);
function g() {
    return (0, i.jsx)("div", {
        className: N.lA,
        children: (0, i.jsxs)("div", {
            className: N.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: N.JN,
                    children: [
                        (0, i.jsx)("div", { className: N.MC, children: (0, i.jsx)(p.X, { size: "refresh_sm" }) }),
                        (0, i.jsxs)("div", {
                            className: N.yO,
                            children: [
                                (0, i.jsx)(x.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: f.intl.string(v.default.oDfh3O),
                                }),
                                (0, i.jsx)(x.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: f.intl.string(v.default.nDEuO1),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: N.R4,
                    children: (0, i.jsx)(j._, {
                        src: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
                        className: N.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1,
                        imageClassName: N.EM,
                    }),
                }),
            ],
        }),
    });
}
var w = t(593687),
    C = t(294219),
    _ = t(788868),
    A = t(652215);
function R(e) {
    let { transitionState: s, onClose: t, partnerIds: r } = e,
        n = (0, C.G)(r, { isLockedCardView: !0 }),
        { promotionsLoaded: l } = (0, b.y7)(),
        d = (0, a.l)("Premium3PRewardsLockedModal");
    if (!1 === l) return (0, i.jsx)(c.y, {});
    let p = u.A.getArticleURL(A.MVz.NITRO_2_POINT_0),
        x = d ? g : null;
    return (0, i.jsxs)(o.Modal, {
        title: f.intl.string(f.t.NG1e6l),
        subtitle: f.intl.format(v.default.zS4GBR, { termsLink: p }),
        actions: [],
        preview: (0, i.jsx)(m.A, {
            subscriptionTier: _.pe.TIER_2,
            fullWidth: !0,
            onClick: () => {
                t();
            },
            onSubscribeModalClose: (e) => {
                if (e) return h.Ay.fetchActivePromotions();
            },
        }),
        transitionState: s,
        onClose: t,
        children: [null != x && (0, i.jsx)(x, {}), (0, i.jsx)(w._, { partnerIds: n })],
    });
}
var k = t(382259);
function M(e) {
    let { transitionState: s, onClose: t, partnerIds: c } = e,
        o = (0, a.l)("NitroRewards3PRewardsModalEntry"),
        u = (0, r.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        { fractionalState: m } = (0, n.A)();
    return (0, d.$_)(u, m) && o
        ? (0, i.jsx)(R, { transitionState: s, onClose: t, partnerIds: c })
        : (0, i.jsx)(k.w, { transitionState: s, onClose: t, partnerIds: c });
}
