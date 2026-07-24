p.d(t, { A: () => c });
var s = p(627968);
p(64700);
var n = p(562708),
    i = p(877624),
    r = p(508770),
    a = p(406810),
    o = p(139286);
function c(e) {
    let { componentId: t, badgeCopy: p, acknowledgedBadgeCopy: c, isDismissed: d } = e;
    return ((0, o.A)({
        type: n.ImpressionTypes.VIEW,
        name: n.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: { component_type: i.C.PREMIUM_TAB, component_id: t },
    }),
    d)
        ? (0, s.jsx)(r.E, { type: { text: c }, icon: a.O, variant: "default" })
        : (0, s.jsx)(r.E, { type: { text: p }, variant: "expressive" });
}
