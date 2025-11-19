n.d(t, {
    g: () => d,
    m: () => p,
});
var r = n(54381),
    i = n(120356),
    l = n.n(i),
    o = n(494497),
    a = n(156732),
    s = n(535396),
    c = n(581040),
    u = n(942570);
function d(e) {
    let { className: t } = e;
    return (0, r.jsx)("img", {
        className: t,
        alt: "",
        src: u,
    });
}
function p(e) {
    let { className: t, powerup: n, isHovering: i } = e,
        u = (0, a.Z)(n, i);
    switch (n.type) {
        case s.Us.LEVEL:
            return (0, r.jsx)(d, {});
        case s.Us.PERK:
            return (0, r.jsx)("img", {
                alt: "",
                src: u,
                className: l()(c.background, { [c.gradientRoleColorsImage]: n.skuId === o.If }, t),
            });
    }
}
