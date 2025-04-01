n.d(t, { Z: () => d });
var r = n(200651),
    s = n(359013),
    o = n(26141),
    i = n(401258),
    a = n(477839),
    c = n(413076),
    l = n(239956),
    u = n(658327);
function d(e) {
    let { isPaused: t } = e,
        n = s.Mq[a.yN.ORCHID];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Z, {
                interval: 1000,
                pointsPerInterval: n.points,
                isPaused: t,
                itemId: a.yN.ORCHID
            }),
            (0, r.jsx)(o.Z, {
                className: c.orchid,
                isPaused: t,
                interval: 1000,
                sources: [l, u]
            })
        ]
    });
}
