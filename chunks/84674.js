n.d(t, { i: () => E });
var l = n(477900),
    i = n(582128),
    r = n(877624),
    a = n(316363),
    s = n(24981),
    o = n(613412),
    u = n(517352),
    c = n(251843),
    d = n(262427),
    m = n(139286),
    p = n(462718);
function C(e) {
    let {
        componentId: t,
        componentType: n = u.oW.PAYMENT_MODAL_BANNER,
        promotionId: i,
        promotionBannerMarketingComponentFields: r,
    } = e;
    (0, m.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: n, component_id: t, promotion_id: i },
    });
    let a = (0, l.jsx)(c._, { src: r.assetUrl, width: 48, height: 48, zoomable: !1 });
    return (0, l.jsx)(d.J, { className: p.No, customGraphic: a, text: r.body });
}
var h = n(418200),
    f = n(682901);
function E(e) {
    let { planSkuId: t, invoice: n } = e,
        { isGift: o } = (0, h.Pv)(),
        u = (0, a.t4)((e) => e.get("selectedPlanAttributes").isPremiumGroupPurchase),
        c = (0, s.c)(r.C.PAYMENT_MODAL_BANNER);
    return i.useMemo(
        () =>
            o ||
            u ||
            t !== f.pe.TIER_2 ||
            null == c ||
            "paymentModalBanner" !== c.properties.properties.oneofKind ||
            (c.properties.contentIdentifier === f.iu && n?.orbsReward !== 1e4)
                ? null
                : (0, l.jsx)(C, {
                      componentId: c.id,
                      promotionId: c.promotionId,
                      promotionBannerMarketingComponentFields: c.properties.properties.paymentModalBanner,
                  }),
        [o, u, t, c, n?.orbsReward],
    );
}
