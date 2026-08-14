n.d(t, { A: () => l });
var r = n(562708),
    i = n(139286);
function l(e) {
    let { componentType: t, componentId: n, promotionId: l, dismissibleContent: o } = e;
    return (
        (0, i.A)({
            type: r.ImpressionTypes.VIEW,
            name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: t, component_id: n, promotion_id: l, dismissible_content: o },
        }),
        null
    );
}
