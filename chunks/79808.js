(t.d(e, { Z: () => x }), t(388685));
var o = t(255367),
    a = t(73800),
    i = t(120356),
    s = t.n(i),
    r = t(873546),
    c = t(636298),
    d = t(404975),
    l = t(178167),
    u = t(254204);
function x(n) {
    let { onClose: e } = n,
        [t, i] = (0, a.useState)(!0);
    return (0, o.jsxs)('div', {
        className: s()(u.container, {
            [u.mobile]: r.tq,
            [u.mobileNavigationOpen]: t
        }),
        children: [
            (0, o.jsx)(l.d, { onClose: e }),
            (0, o.jsx)(d.P, {}),
            (0, o.jsx)(c.P, {
                onClose: e,
                setShowNavigationMobile: i
            })
        ]
    });
}
