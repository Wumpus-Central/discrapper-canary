var s = p(477900);
p(582128);
var n = p(613412),
    o = p(517352),
    i = p(805251),
    r = p(406810),
    a = p(139286);
p.d(
    t,
    {},
    {
        A: function (e) {
            let {
                componentId: t,
                componentType: p = o.oW.PREMIUM_TAB,
                promotionId: c,
                badgeCopy: d,
                acknowledgedBadgeCopy: _,
                isDismissed: m,
            } = e;
            return ((0, a.A)({
                type: n.ImpressionTypes.VIEW,
                name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                properties: { component_type: p, component_id: t, promotion_id: c },
            }),
            m)
                ? (0, s.jsx)(i.E, { type: { text: _ }, icon: r.ClockIcon, variant: "secondary" })
                : (0, s.jsx)(i.E, { type: { text: d }, variant: "expressive" });
        },
    },
);
