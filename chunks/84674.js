n.d(t, { i: () => E });
var l = n(477900),
    i = n(582128),
    r = n(517352),
    a = n(682689),
    s = n(641436),
    o = n(613412),
    u = n(297204),
    c = n(251843),
    d = n(262427),
    m = n(139286),
    p = n(462718);
function h(e) {
    let {
        componentId: t,
        componentType: n = r.oW.PAYMENT_MODAL_BANNER,
        promotionId: i,
        promotionBannerMarketingComponentFields: a,
    } = e;
    (0, m.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: n, component_id: t, promotion_id: i },
    });
    let s = (0, l.jsx)(c._, { src: a.assetUrl, width: 48, height: 48, zoomable: !1, className: p.LY });
    return (0, l.jsx)(d.J, {
        className: p.No,
        gradientColor: a.gradient === u.y.NITRO_PINK ? "nitro-pink" : "default",
        customGraphic: s,
        text: a.body,
    });
}
var C = n(418200),
    f = n(682901);
function E(e) {
    let { planSkuId: t, invoice: n } = e,
        { isGift: o } = (0, C.Pv)(),
        u = (0, a.t4)((e) => e.get("selectedPlanAttributes").isPremiumGroupPurchase),
        c = (0, s.uF)(r.oW.PAYMENT_MODAL_BANNER);
    return i.useMemo(() => {
        if (
            o ||
            u ||
            t !== f.pe.TIER_2 ||
            null == c ||
            (c.properties.contentIdentifier === f.iu && n?.orbsReward !== 1e4)
        )
            return null;
        let { surface: e, id: i, promotionId: r, componentType: a } = c;
        return (0, l.jsx)(h, {
            componentId: i,
            componentType: a,
            promotionId: r,
            promotionBannerMarketingComponentFields: e,
        });
    }, [o, u, t, c, n?.orbsReward]);
}
