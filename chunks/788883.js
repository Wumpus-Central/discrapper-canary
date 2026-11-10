var A = _(613412),
    n = _(139286);
_.d(
    t,
    {},
    {
        A: function (e) {
            let { componentType: t, componentId: _, promotionId: l, dismissibleContent: r } = e;
            return (
                (0, n.A)({
                    type: A.ImpressionTypes.VIEW,
                    name: A.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                    properties: { component_type: t, component_id: _, promotion_id: l, dismissible_content: r },
                }),
                null
            );
        },
    },
);
