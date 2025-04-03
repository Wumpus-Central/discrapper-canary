n.d(t, { Z: () => m });
var r = n(200651),
    s = n(120356),
    o = n.n(s),
    a = n(642128),
    i = n(481060),
    c = n(763283),
    l = n(622802),
    u = n(388032),
    d = n(122846),
    f = n(733);
function p(e) {
    let { id: t, points: n, onFinished: s } = e,
        o = (0, i.q_F)({
            from: {
                x: 0,
                y: 0,
                opacity: 1
            },
            to: {
                x: 0,
                y: -50,
                opacity: 0
            },
            config: {
                tension: 280,
                friction: 100
            },
            onRest: () => s(t)
        });
    return (0, r.jsxs)(a.animated.div, {
        className: d.point,
        style: o,
        children: [
            (0, r.jsxs)(c.Z, {
                variant: 'text-lg/medium',
                color: n > 0 ? 'always-white' : 'status-danger',
                children: [n > 0 ? '+' : '', n]
            }),
            (0, r.jsx)('img', {
                src: f,
                alt: u.NW.string(l.Z.BropER)
            })
        ]
    });
}
function m(e) {
    let {
        renderedPoints: t,
        onRemovePoint: n,
        offset: s = {
            x: 0,
            y: 0
        },
        fullWidth: a = !0
    } = e;
    return (0, r.jsx)('div', {
        className: o()(d.pointsAnimation, { [d.fullWidth]: a }),
        style: {
            left: s.x,
            top: s.y
        },
        children: Object.keys(t).map((e) =>
            (0, r.jsx)(
                p,
                {
                    id: e,
                    points: t[e],
                    onFinished: n
                },
                e
            )
        )
    });
}
