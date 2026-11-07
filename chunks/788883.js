var A = _(613412),
    n = _(139286);
_.d(
    e,
    {},
    {
        A: function (t) {
            let { componentType: e, componentId: _, promotionId: l, dismissibleContent: T } = t;
            return (
                (0, n.A)({
                    type: A.ImpressionTypes.VIEW,
                    name: A.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
                    properties: { component_type: e, component_id: _, promotion_id: l, dismissible_content: T },
                }),
                null
            );
        },
    },
);
