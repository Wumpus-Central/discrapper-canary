var l = n(613412),
    r = n(139286);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { componentType: t, componentId: n, promotionId: i, dismissibleContent: u } = e;
            return (
                (0, r.A)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                    properties: { component_type: t, component_id: n, promotion_id: i, dismissible_content: u },
                }),
                null
            );
        },
    },
);
