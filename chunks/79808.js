(n.d(t, { Z: () => f }), n(388685));
var a = n(255367),
    i = n(73800),
    o = n(120356),
    r = n.n(o),
    s = n(873546),
    l = n(636298),
    d = n(404975),
    c = n(178167),
    u = n(254204);
function f(e) {
    let { onClose: t, config: n, initialSetting: o } = e,
        [f, m] = i.useState(!0),
        [h, x] = i.useState(o);
    return (0, a.jsxs)('div', {
        className: r()(u.container, {
            [u.mobile]: s.tq,
            [u.mobileNavigationOpen]: f
        }),
        children: [
            (0, a.jsx)(c.d, { onClose: t }),
            (0, a.jsx)(d.P, {}),
            (0, a.jsx)(l.Z, {
                onClose: t,
                setShowNavigationMobile: m,
                setting: h
            })
        ]
    });
}
