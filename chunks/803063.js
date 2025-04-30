n.d(t, { Z: () => g });
var r = n(200651),
    s = n(359013),
    o = n(529942),
    a = n(26141),
    i = n(3072),
    c = n(401258),
    l = n(477839),
    u = n(364491),
    d = n(131336),
    f = n(149436);
let p = n(358786);
function m(e) {
    let { isPaused: t, width: n } = e;
    return (0, r.jsx)(o.Z, {
        className: u.snail,
        width: n,
        minSpeed: 10,
        maxSpeed: 20,
        imageSize: 80,
        isPaused: t,
        children: (e) =>
            (0, r.jsx)(a.Z, {
                className: 'left' === e ? u.imageFlipped : u.image,
                isPaused: t,
                interval: 1000,
                sources: [d, f]
            })
    });
}
function g(e) {
    let { isPaused: t, width: n } = e,
        o = s.Mq[l.yN.SNAIL];
    return (
        (0, i.is)(p, t),
        (0, r.jsxs)(r.Fragment, {
            children: [
                (0, r.jsx)(c.Z, {
                    interval: 1000,
                    pointsPerInterval: o.points,
                    isPaused: t,
                    itemId: l.yN.SNAIL
                }),
                (0, r.jsx)(m, {
                    isPaused: t,
                    width: n
                })
            ]
        })
    );
}
