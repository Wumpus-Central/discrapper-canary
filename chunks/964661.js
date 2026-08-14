p.d(t, { A: () => c });
var s = p(477900);
p(582128);
var i = p(562708),
    n = p(877624),
    r = p(508770),
    o = p(406810),
    a = p(139286);
function c(e) {
    let { componentId: t, promotionId: p, badgeCopy: c, acknowledgedBadgeCopy: d, isDismissed: _ } = e;
    return ((0, a.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: n.C.PREMIUM_TAB, component_id: t, promotion_id: p },
    }),
    _)
        ? (0, s.jsx)(r.E, { type: { text: d }, icon: o.O, variant: "default" })
        : (0, s.jsx)(r.E, { type: { text: c }, variant: "expressive" });
}
