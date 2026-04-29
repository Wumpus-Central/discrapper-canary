t.d(s, { Premium3PRewardsModalEntry: () => y });
var i = t(627968);
t(64700);
var r = t(17928),
    a = t(31502),
    n = t(287809),
    l = t(927578),
    d = t(289873),
    c = t(189213),
    o = t(975571),
    u = t(792656),
    m = t(597758),
    h = t(35587),
    x = t(194261),
    b = t(534514),
    p = t(144165),
    f = t(985018),
    j = t(237146),
    v = t(75662);
function N() {
    return (0, i.jsx)("div", {
        className: v.lA,
        children: (0, i.jsxs)("div", {
            className: v.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: v.JN,
                    children: [
                        (0, i.jsx)("div", { className: v.MC, children: (0, i.jsx)(x.X, { size: "refresh_sm" }) }),
                        (0, i.jsxs)("div", {
                            className: v.yO,
                            children: [
                                (0, i.jsx)(b.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: f.intl.string(j.default.oDfh3O),
                                }),
                                (0, i.jsx)(b.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: f.intl.string(j.default.nDEuO1),
                                }),
                            ],
                        }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: v.R4,
                    children: (0, i.jsx)(p._, {
                        src: "https://cdn.discordapp.com/assets/content/7ce3849519c8d8cd4657b08bd2c689ea934bb60f53b959a04eb3b1db5d2f002a.png",
                        className: v.Ys,
                        width: 100,
                        height: 100,
                        zoomable: !1,
                        imageClassName: v.EM,
                    }),
                }),
            ],
        }),
    });
}
var g = t(593687),
    C = t(294219),
    P = t(788868),
    R = t(652215);
function _(e) {
    let { transitionState: s, onClose: t, partnerIds: r } = e,
        n = (0, C.G)(r),
        { promotionsLoaded: l } = (0, h.y7)(),
        x = (0, a.l)("Premium3PRewardsLockedModal");
    if (!1 === l) return (0, i.jsx)(d.y, {});
    let b = o.A.getArticleURL(R.MVz.NITRO_2_POINT_0),
        p = x ? N : null;
    return (0, i.jsxs)(c.Modal, {
        title: f.intl.string(f.t.NG1e6l),
        subtitle: f.intl.format(j.default.zS4GBR, { termsLink: b }),
        actions: [],
        preview: (0, i.jsx)(u.A, {
            subscriptionTier: P.pe.TIER_2,
            fullWidth: !0,
            onClick: () => {
                t();
            },
            onSubscribeModalClose: (e) => {
                if (e) return m.Ay.fetchActivePromotions();
            },
        }),
        transitionState: s,
        onClose: t,
        children: [null != p && (0, i.jsx)(p, {}), (0, i.jsx)(g._, { partnerIds: n })],
    });
}
var w = t(382259);
function y(e) {
    let { transitionState: s, onClose: t, partnerIds: d } = e,
        c = (0, a.l)("NitroRewards3PRewardsModalEntry"),
        o = (0, r.bG)([n.default], () => n.default.getCurrentUser()),
        u = !1 === l.Ay.isPremiumExactly(o, P.PremiumTypes.TIER_2),
        m = o?.isFractionalPremiumWithNoStandardSub();
    return (null == o || u || m) && c
        ? (0, i.jsx)(_, { transitionState: s, onClose: t, partnerIds: d })
        : (0, i.jsx)(w.w, { transitionState: s, onClose: t, partnerIds: d });
}
