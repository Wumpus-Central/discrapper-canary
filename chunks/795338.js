n.d(t, {
    g: () => d,
    m: () => f,
});
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    a = n(494497),
    o = n(156732),
    s = n(535396),
    c = n(896481),
    u = n(942570);
function d(e) {
    let { className: t } = e;
    return (0, r.jsx)("img", {
        className: t,
        alt: "",
        src: u,
    });
}
function f(e) {
    let { className: t, powerup: n, isHovering: i } = e,
        u = (0, o.Z)(n, i);
    switch (n.type) {
        case s.Us.LEVEL:
            return (0, r.jsx)(d, {});
        case s.Us.PERK:
            return (0, r.jsx)("img", {
                alt: "",
                src: u,
                className: l()(c.background, { [c.gradientRoleColorsImage]: n.skuId === a.If }, t),
            });
    }
}
