n.d(t, {
    g: () => u,
    m: () => d
});
var r = n(200651),
    i = n(120356),
    l = n.n(i),
    o = n(156732),
    a = n(535396),
    s = n(4308),
    c = n(942570);
function u(e) {
    let { className: t } = e;
    return (0, r.jsx)('img', {
        className: t,
        alt: '',
        src: c
    });
}
function d(e) {
    let { className: t, powerup: n, isHovering: i } = e,
        c = (0, o.Z)(n, i);
    switch (n.type) {
        case a.Us.LEVEL:
            return (0, r.jsx)(u, {});
        case a.Us.PERK:
            return (0, r.jsx)('img', {
                alt: '',
                src: c,
                className: l()(s.background, { [s.gradientRoleColorsImage]: n.skuId === a.If }, t)
            });
    }
}
