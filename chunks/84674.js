n.d(t, { i: () => f });
var l = n(477900),
    i = n(582128),
    r = n(517352),
    a = n(316363),
    s = n(641436),
    o = n(613412),
    u = n(251843),
    c = n(262427),
    d = n(139286),
    m = n(462718);
function p(e) {
    let {
        componentId: t,
        componentType: n = r.oW.PAYMENT_MODAL_BANNER,
        promotionId: i,
        promotionBannerMarketingComponentFields: a,
    } = e;
    (0, d.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: n, component_id: t, promotion_id: i },
    });
    let s = (0, l.jsx)(u._, { src: a.assetUrl, width: 48, height: 48, zoomable: !1 });
    return (0, l.jsx)(c.J, { className: m.No, customGraphic: s, text: a.body });
}
var C = n(418200),
    h = n(682901);
function f(e) {
    let { planSkuId: t, invoice: n } = e,
        { isGift: o } = (0, C.Pv)(),
        u = (0, a.t4)((e) => e.get("selectedPlanAttributes").isPremiumGroupPurchase),
        c = (0, s.u)(r.oW.PAYMENT_MODAL_BANNER);
    return i.useMemo(() => {
        if (
            o ||
            u ||
            t !== h.pe.TIER_2 ||
            null == c ||
            (c.properties.contentIdentifier === h.iu && n?.orbsReward !== 1e4)
        )
            return null;
        let { surface: e, id: i, promotionId: r, componentType: a } = c;
        return (0, l.jsx)(p, {
            componentId: i,
            componentType: a,
            promotionId: r,
            promotionBannerMarketingComponentFields: e,
        });
    }, [o, u, t, c, n?.orbsReward]);
}
