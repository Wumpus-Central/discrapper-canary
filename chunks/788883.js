"use strict";
n.d(t, { A: () => a });
var i = n(562708),
    r = n(139286);
function a(e) {
    let { componentType: t, componentId: n, promotionId: a, dismissibleContent: s } = e;
    return (
        (0, r.A)({
            type: i.ImpressionTypes.VIEW,
            name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
            properties: { component_type: t, component_id: n, promotion_id: a, dismissible_content: s },
        }),
        null
    );
}
