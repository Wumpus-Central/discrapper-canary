i.d(t, { A: () => r });
var s = i(562708),
    n = i(139286);
function r(e) {
    let { componentType: t, componentId: i, promotionId: r, dismissibleContent: l } = e;
    return (
        (0, n.A)({
            type: s.ImpressionTypes.VIEW,
            name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: t, component_id: i, promotion_id: r, dismissible_content: l },
        }),
        null
    );
}
