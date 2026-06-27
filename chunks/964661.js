"use strict";
n.d(t, { A: () => u });
var i = n(627968);
n(64700);
var r = n(562708),
    s = n(877624),
    a = n(508770),
    o = n(406810),
    l = n(139286);
function u(e) {
    let { componentId: t, badgeCopy: n, acknowledgedBadgeCopy: u, isDismissed: c } = e;
    return ((0, l.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: s.C.PREMIUM_TAB, component_id: t },
    }),
    c)
        ? (0, i.jsx)(a.E, { type: { text: u }, icon: o.O, variant: "default" })
        : (0, i.jsx)(a.E, { type: { text: n }, variant: "expressive" });
}
