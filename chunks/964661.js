"use strict";
n.d(t, { A: () => d });
var i = n(477900);
n(582128);
var r = n(562708),
    a = n(877624),
    s = n(508770),
    l = n(406810),
    o = n(139286);
function d(e) {
    let { componentId: t, promotionId: n, badgeCopy: d, acknowledgedBadgeCopy: c, isDismissed: u } = e;
    return ((0, o.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: a.C.PREMIUM_TAB, component_id: t, promotion_id: n },
    }),
    u)
        ? (0, i.jsx)(s.E, { type: { text: c }, icon: l.O, variant: "default" })
        : (0, i.jsx)(s.E, { type: { text: d }, variant: "expressive" });
}
