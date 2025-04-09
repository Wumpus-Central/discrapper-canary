t.d(n, { m: () => u });
var r = t(200651),
    o = t(120356),
    s = t.n(o),
    i = t(156732),
    a = t(535396),
    l = t(4308),
    c = t(942570);
function u(e) {
    let { className: n, powerup: t } = e,
        o = (0, i.Z)(t);
    switch (t.type) {
        case a.Us.LEVEL:
            return (0, r.jsx)('img', {
                alt: '',
                src: c
            });
        case a.Us.PERK:
            return (0, r.jsx)('img', {
                alt: '',
                src: o,
                className: s()(l.background, { [l.gradientRoleColorsImage]: t.skuId === a.If }, n)
            });
    }
}
