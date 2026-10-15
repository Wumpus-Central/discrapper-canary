A.d(t, { A: () => l });
var _ = A(562708),
    n = A(139286);
function l(e) {
    let { componentType: t, componentId: A, promotionId: l, dismissibleContent: E } = e;
    return (
        (0, n.A)({
            type: _.ImpressionTypes.VIEW,
            name: _.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: t, component_id: A, promotion_id: l, dismissible_content: E },
        }),
        null
    );
}
