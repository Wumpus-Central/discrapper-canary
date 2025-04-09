n.d(t, { m: () => u });
var r = n(200651),
    o = n(120356),
    a = n.n(o),
    i = n(156732),
    s = n(535396),
    l = n(4308),
    c = n(942570);
function u(e) {
    let { className: t, powerup: n } = e,
        o = (0, i.Z)(n);
    switch (n.type) {
        case s.Us.LEVEL:
            return (0, r.jsx)('img', {
                alt: '',
                src: c
            });
        case s.Us.PERK:
            return (0, r.jsx)('img', {
                alt: '',
                src: o,
                className: a()(l.background, { [l.gradientRoleColorsImage]: n.skuId === s.If }, t)
            });
    }
}
