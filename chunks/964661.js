n.d(t, { A: () => u });
var o = n(627968);
n(64700);
var a = n(562708),
    l = n(877624),
    r = n(508770),
    i = n(406810),
    d = n(139286);
function u(e) {
    let { componentId: t, badgeCopy: n, acknowledgedBadgeCopy: u, isDismissed: s } = e;
    return ((0, d.A)({
        type: a.ImpressionTypes.VIEW,
        name: a.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: l.C.PREMIUM_TAB, component_id: t },
    }),
    s)
        ? (0, o.jsx)(r.E, { type: { text: u }, icon: i.O, variant: "default" })
        : (0, o.jsx)(r.E, { type: { text: n }, variant: "expressive" });
}
