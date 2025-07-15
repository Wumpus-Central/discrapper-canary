n.d(t, { Z: () => d });
var r = n(255367),
    i = n(120356),
    a = n.n(i),
    o = n(522942),
    s = n(594928),
    l = n(821795),
    c = n(7284),
    u = n(482695);
function d(e) {
    let { userName: t, displayNameStyles: n, effectDisplayType: i = l.Fb.STATIC } = e,
        o = s.f.useExperiment({ location: 'UserNameWithEffects' }).enabled,
        d = (0, c.j)({ displayNameStyles: n });
    if (!o || null == n) return t;
    let _ = n.colors.length > 0 ? (0, l.fk)(n.colors[0]) : '';
    if (i === l.Fb.PLAIN)
        return (0, r.jsx)('span', {
            className: d,
            children: t
        });
    let p = f(n.effectId);
    return (0, r.jsx)('div', {
        className: a()(p, d, { [u.animated]: i === l.Fb.ANIMATED }),
        style: { color: _ },
        children: t
    });
}
function f(e) {
    switch (e) {
        case o.m.GRADIENT:
            return u.gradient;
        case o.m.NEON:
            return u.neon;
        case o.m.TOON:
            return u.toon;
        case o.m.POP:
            return u.pop;
        case o.m.SOLID:
        default:
            return '';
    }
}
