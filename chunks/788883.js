i.d(t, { A: () => r });
var n = i(562708),
    s = i(139286);
function r(e) {
    let { componentType: t, componentId: i, promotionId: r, dismissibleContent: l } = e;
    return (
        (0, s.A)({
            type: n.ImpressionTypes.VIEW,
            name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: t, component_id: i, promotion_id: r, dismissible_content: l },
        }),
        null
    );
}
