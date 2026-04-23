r.d(t, { b: () => g });
var i = r(627968);
r(64700);
var n = r(877624),
    a = r(311907),
    s = r(834730),
    l = r(937008),
    o = r(807098),
    c = r(412260),
    d = r(810498),
    u = r(985018),
    m = r(756974);
function g() {
    let { claimableRewards: e } = (0, l.Pv)(),
        t = (0, a.bG)([c.A], () => {
            let e = c.A.getMarketingComponentByType(n.C.GIFT_PLAN_SELECTION_CARD_BANNER);
            return null == e || "giftPlanSelectionCardBanner" !== e.properties.properties.oneofKind
                ? null
                : e.properties.properties.giftPlanSelectionCardBanner;
        }),
        r = (0, o.T)(t?.bannerAsset),
        g = (0, o.T)(t?.avatarAsset);
    if (null == t || null == e || 0 === e.length) return null;
    let x = (0, d.gc)(r),
        p = t?.gradient,
        T =
            null != p && null != p.colors && p.colors.length >= 2
                ? (0, d.K5)({ gradient: p.colors, angle: p.angle ?? void 0 })
                : void 0,
        h = (0, d.x)(x, T);
    return (0, i.jsxs)("div", {
        className: m.kL,
        style: h,
        children: [
            (0, i.jsxs)("div", {
                className: m.V_,
                children: [
                    (0, i.jsx)(s.E, {
                        variant: "text-md/bold",
                        color: "always-white",
                        children: u.intl.string(u.t.OEtqpm),
                    }),
                    (0, i.jsx)(s.E, {
                        variant: "text-md/medium",
                        color: "always-white",
                        children: u.intl.formatToPlainString(u.t["2h5M+X"], { availableCount: e.length }),
                    }),
                ],
            }),
            null != g && (0, i.jsx)("img", { alt: "gift promotion reward", src: g, className: m.my }),
        ],
    });
}
