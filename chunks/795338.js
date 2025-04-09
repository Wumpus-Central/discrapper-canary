t.d(n, { m: () => u });
var r = t(200651),
    o = t(120356),
    a = t.n(o),
    i = t(156732),
    s = t(535396),
    c = t(4308),
    l = t(942570);
function u(e) {
    let { className: n, powerup: t } = e,
        o = (0, i.Z)(t);
    switch (t.type) {
        case s.Us.LEVEL:
            return (0, r.jsx)('img', {
                alt: '',
                src: l
            });
        case s.Us.PERK:
            return (0, r.jsx)('img', {
                alt: '',
                src: o,
                className: a()(c.background, { [c.gradientRoleColorsImage]: t.skuId === s.If }, n)
            });
    }
}
