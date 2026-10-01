n.d(t, { A: () => _ });
var A = n(562708),
    l = n(139286);
function _(e) {
    let { componentType: t, componentId: n, promotionId: _, dismissibleContent: r } = e;
    return (
        (0, l.A)({
            type: A.ImpressionTypes.VIEW,
            name: A.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: t, component_id: n, promotion_id: _, dismissible_content: r },
        }),
        null
    );
}
