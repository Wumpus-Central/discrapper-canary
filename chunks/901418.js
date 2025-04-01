n.d(t, { Z: () => d });
var r = n(200651),
    s = n(359013),
    o = n(26141),
    i = n(401258),
    a = n(477839),
    c = n(413076),
    l = n(71032),
    u = n(673696);
function d(e) {
    let { isPaused: t } = e,
        n = s.Mq[a.yN.SUNFLOWER];
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(i.Z, {
                interval: 1000,
                pointsPerInterval: n.points,
                isPaused: t,
                itemId: a.yN.SUNFLOWER
            }),
            (0, r.jsx)(o.Z, {
                className: c.sunflower,
                isPaused: t,
                interval: 1000,
                sources: [l, u]
            })
        ]
    });
}
