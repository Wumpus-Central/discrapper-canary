n.d(t, { Z: () => h });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(522942),
    l = n(866442),
    c = n(442837),
    u = n(607070),
    d = n(594928),
    f = n(821795),
    _ = n(7284),
    p = n(482695);
let h = i.memo(function (e) {
    let { userName: t, displayNameStyles: n, effectDisplayType: i = f.F.STATIC } = e,
        a = d.f.useExperiment({ location: 'UserNameWithEffects' }).enabled,
        s = (0, _.j)({ displayNameStyles: n }),
        {
            useReducedMotion: h,
            saturation: g,
            desaturateUserColors: E
        } = (0, c.cj)([u.Z], () => ({
            useReducedMotion: u.Z.useReducedMotion,
            saturation: u.Z.saturation,
            desaturateUserColors: u.Z.desaturateUserColors
        }));
    if (!a || null == n) return t;
    let b = n.colors.map((e) => (0, l.ho)(e, !1, E ? g : null)),
        y = m(n.effectId);
    return (0, r.jsx)('div', {
        className: o()(p.container, y, s, {
            [p.showEffect]: i !== f.F.PLAIN,
            [p.animated]: i === f.F.ANIMATED && !h
        }),
        style: { '--custom-effect-color': b.length > 0 ? b[0] : void 0 },
        children: t
    });
});
function m(e) {
    switch (e) {
        case s.m.GRADIENT:
            return p.gradient;
        case s.m.NEON:
            return p.neon;
        case s.m.TOON:
            return p.toon;
        case s.m.POP:
            return p.pop;
        case s.m.SOLID:
        default:
            return '';
    }
}
