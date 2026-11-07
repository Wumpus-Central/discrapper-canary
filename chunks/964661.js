var e = r(477900);
r(582128);
var o = r(613412),
    i = r(517352),
    a = r(805251),
    c = r(406810),
    s = r(139286);
r.d(
    n,
    {},
    {
        A: function (t) {
            let {
                componentId: n,
                componentType: r = i.oW.PREMIUM_TAB,
                promotionId: p,
                badgeCopy: u,
                acknowledgedBadgeCopy: m,
                isDismissed: d,
            } = t;
            return ((0, s.A)({
                type: o.ImpressionTypes.VIEW,
                name: o.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: { component_type: r, component_id: n, promotion_id: p },
            }),
            d)
                ? (0, e.jsx)(a.E, { type: { text: m }, icon: c.ClockIcon, variant: "secondary" })
                : (0, e.jsx)(a.E, { type: { text: u }, variant: "expressive" });
        },
    },
);
