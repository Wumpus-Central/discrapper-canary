n.d(t, { Z: () => p });
var r = n(255367),
    i = n(120356),
    a = n.n(i),
    o = n(522942),
    s = n(866442),
    l = n(442837),
    c = n(607070),
    u = n(594928),
    d = n(821795),
    f = n(7284),
    _ = n(482695);
function p(e) {
    let { userName: t, displayNameStyles: n, effectDisplayType: i = d.F.STATIC } = e,
        o = u.f.useExperiment({ location: 'UserNameWithEffects' }).enabled,
        p = (0, f.j)({ displayNameStyles: n }),
        {
            useReducedMotion: m,
            saturation: g,
            desaturateUserColors: E
        } = (0, l.cj)([c.Z], () => ({
            useReducedMotion: c.Z.useReducedMotion,
            saturation: c.Z.saturation,
            desaturateUserColors: c.Z.desaturateUserColors
        }));
    if (!o || null == n) return t;
    let b = n.colors.map((e) => (0, s.ho)(e, !1, E ? g : null));
    if (i === d.F.PLAIN)
        return (0, r.jsx)('span', {
            className: p,
            children: t
        });
    let y = h(n.effectId);
    return (0, r.jsx)('div', {
        className: a()(y, p, { [_.animated]: i === d.F.ANIMATED && !m }),
        style: { color: b.length > 0 ? b[0] : void 0 },
        children: t
    });
}
function h(e) {
    switch (e) {
        case o.m.GRADIENT:
            return _.gradient;
        case o.m.NEON:
            return _.neon;
        case o.m.TOON:
            return _.toon;
        case o.m.POP:
            return _.pop;
        case o.m.SOLID:
        default:
            return '';
    }
}
