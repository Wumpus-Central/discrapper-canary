r.d(n, { A: () => p });
var e = r(477900);
r(582128);
var o = r(562708),
    i = r(877624),
    a = r(62010),
    c = r(406810),
    s = r(139286);
function p(t) {
    let { componentId: n, promotionId: r, badgeCopy: p, acknowledgedBadgeCopy: u, isDismissed: m } = t;
    return ((0, s.A)({
        type: o.ImpressionTypes.VIEW,
        name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.PREMIUM_TAB, component_id: n, promotion_id: r },
    }),
    m)
        ? (0, e.jsx)(a.E, { type: { text: u }, icon: c.ClockIcon, variant: "secondary" })
        : (0, e.jsx)(a.E, { type: { text: p }, variant: "expressive" });
}
