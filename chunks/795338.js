n.d(t, {
    g: () => d,
    m: () => h,
});
var r = n(255367),
    i = n(120356),
    l = n.n(i),
    o = n(494497),
    s = n(156732),
    a = n(535396),
    c = n(115094),
    u = n(942570);
function d(e) {
    let { className: t } = e;
    return (0, r.jsx)("img", {
        className: t,
        alt: "",
        src: u,
    });
}
function h(e) {
    let { className: t, powerup: n, isHovering: i } = e,
        u = (0, s.Z)(n, i);
    switch (n.type) {
        case a.Us.LEVEL:
            return (0, r.jsx)(d, {});
        case a.Us.PERK:
            return (0, r.jsx)("img", {
                alt: "",
                src: u,
                className: l()(c.background, { [c.gradientRoleColorsImage]: n.skuId === o.If }, t),
            });
    }
}
