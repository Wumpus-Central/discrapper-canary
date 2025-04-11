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
    let { className: t, powerup: n } = e,
        i = (0, o.Z)(n);
    switch (n.type) {
        case a.Us.LEVEL:
            return (0, r.jsx)(u, {});
        case a.Us.PERK:
            return (0, r.jsx)('img', {
                alt: '',
                src: i,
                className: l()(s.background, { [s.gradientRoleColorsImage]: n.skuId === a.If }, t)
            });
    }
}
