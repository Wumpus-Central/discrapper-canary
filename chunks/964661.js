p.d(t, { A: () => c });
var s = p(477900);
p(582128);
var n = p(562708),
    i = p(877624),
    o = p(508770),
    r = p(406810),
    a = p(139286);
function c(e) {
    let { componentId: t, promotionId: p, badgeCopy: c, acknowledgedBadgeCopy: d, isDismissed: _ } = e;
    return ((0, a.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.PREMIUM_TAB, component_id: t, promotion_id: p },
    }),
    _)
        ? (0, s.jsx)(o.E, { type: { text: d }, icon: r.ClockIcon, variant: "default" })
        : (0, s.jsx)(o.E, { type: { text: c }, variant: "expressive" });
}
