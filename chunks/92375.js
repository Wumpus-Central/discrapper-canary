n.d(t, { Premium3PRewardsModalEntry: () => k });
var i = n(627968);
n(64700);
var s = n(17928),
    d = n(31502),
    r = n(287809),
    a = n(927578),
    l = n(289873),
    h = n(189213),
    b = n(975571),
    o = n(792656),
    c = n(597758),
    u = n(35587),
    m = n(194261),
    f = n(534514),
    p = n(144165),
    x = n(985018),
    j = n(237146),
    v = n(75662);
function N() {
    return (0, i.jsx)("div", {
        className: v.lA,
        children: (0, i.jsxs)("div", {
            className: v.LV,
            children: [
                (0, i.jsxs)("div", {
                    className: v.JN,
                    children: [
                        (0, i.jsx)("div", { className: v.MC, children: (0, i.jsx)(m.X, { size: "refresh_sm" }) }),
                        (0, i.jsxs)("div", {
                            className: v.yO,
                            children: [
                                (0, i.jsx)(f.D, {
                                    variant: "heading-lg/semibold",
                                    color: "text-strong",
                                    children: x.intl.string(j.default.oDfh3O),
                                }),
                                (0, i.jsx)(f.D, {
                                    variant: "heading-sm/medium",
                                    color: "text-subtle",
                                    children: x.intl.string(j.default.nDEuO1),
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
                    }),
                }),
            ],
        }),
    });
}
var g = n(593687),
    R = n(294219),
    S = n(788868),
    C = n(652215);
function P(e) {
    let { transitionState: t, onClose: n, partnerIds: s } = e,
        r = (0, R.G)(s),
        { promotionsLoaded: a } = (0, u.y7)(),
        m = (0, d.l)("Premium3PRewardsLockedModal");
    if (!1 === a) return (0, i.jsx)(l.y, {});
    let f = b.A.getArticleURL(C.MVz.NITRO_2_POINT_0),
        p = m ? N : null;
    return (0, i.jsxs)(h.Modal, {
        title: x.intl.string(x.t.NG1e6l),
        subtitle: x.intl.format(j.default.zS4GBR, { termsLink: f }),
        actions: [],
        preview: (0, i.jsx)(o.A, {
            subscriptionTier: S.pe.TIER_2,
            fullWidth: !0,
            onClick: () => {
                n();
            },
            onSubscribeModalClose: (e) => {
                if (e) return c.Ay.fetchActivePromotions();
            },
        }),
        transitionState: t,
        onClose: n,
        children: [null != p && (0, i.jsx)(p, {}), (0, i.jsx)(g._, { partnerIds: r })],
    });
}
var _ = n(382259);
function k(e) {
    let { transitionState: t, onClose: n, partnerIds: l } = e,
        h = (0, d.l)("NitroRewards3PRewardsModalEntry"),
        b = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        o = !1 === a.Ay.isPremiumExactly(b, S.PremiumTypes.TIER_2),
        c = b?.isFractionalPremiumWithNoStandardSub();
    return (null == b || o || c) && h
        ? (0, i.jsx)(P, { transitionState: t, onClose: n, partnerIds: l })
        : (0, i.jsx)(_.w, { transitionState: t, onClose: n, partnerIds: l });
}
