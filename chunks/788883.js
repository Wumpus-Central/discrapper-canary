t.d(e, { A: () => l });
var A = t(562708),
    n = t(139286);
function l(_) {
    let { componentType: e, componentId: t, promotionId: l, dismissibleContent: T } = _;
    return (
        (0, n.A)({
            type: A.ImpressionTypes.VIEW,
            name: A.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: e, component_id: t, promotion_id: l, dismissible_content: T },
        }),
        null
    );
}
