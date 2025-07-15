(n.d(t, { Z: () => f }), n(388685));
var i = n(255367),
    a = n(73800),
    s = n(120356),
    o = n.n(s),
    r = n(873546),
    l = n(636298),
    d = n(404975),
    c = n(178167),
    u = n(254204);
function f(e) {
    let { onClose: t, config: n, initialSetting: s } = e,
        [f, m] = a.useState(!0),
        [h, x] = a.useState(s);
    return (0, i.jsxs)('div', {
        className: o()(u.container, {
            [u.mobile]: r.tq,
            [u.mobileNavigationOpen]: f
        }),
        children: [
            (0, i.jsx)(c.d, { onClose: t }),
            (0, i.jsx)(d.P, {}),
            (0, i.jsx)(l.Z, {
                onClose: t,
                setShowNavigationMobile: m,
                setting: h
            })
        ]
    });
}
