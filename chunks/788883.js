_.d(t, { A: () => l });
var A = _(562708),
    n = _(139286);
function l(e) {
    let { componentType: t, componentId: _, promotionId: l, dismissibleContent: E } = e;
    return (
        (0, n.A)({
            type: A.ImpressionTypes.VIEW,
            name: A.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: t, component_id: _, promotion_id: l, dismissible_content: E },
        }),
        null
    );
}
