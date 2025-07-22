n.d(t, { Z: () => m });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(522942),
    l = n(866442),
    c = n(442837),
    u = n(607070),
    d = n(594928),
    _ = n(821795),
    f = n(760692),
    p = n(7284),
    h = n(482695);
let m = i.memo(function (e) {
    let { userName: t, displayNameStyles: n, effectDisplayType: i = _.F.STATIC } = e,
        a = d.f.useExperiment({ location: 'UserNameWithEffects' }).enabled,
        s = (0, p.j)({ displayNameStyles: n }),
        {
            useReducedMotion: m,
            saturation: E,
            desaturateUserColors: b
        } = (0, c.cj)([u.Z], () => ({
            useReducedMotion: u.Z.useReducedMotion,
            saturation: u.Z.saturation,
            desaturateUserColors: u.Z.desaturateUserColors
        }));
    if (!a || null == n) return t;
    let y = n.colors.map((e) => (0, l.ho)(e, !1, b ? E : null)),
        O = (0, f.K)(n.effectId, y),
        v = g(n.effectId);
    return (0, r.jsx)('div', {
        className: o()(h.container, v, s, {
            [h.showEffect]: i !== _.F.PLAIN,
            [h.animated]: i === _.F.ANIMATED && !m
        }),
        style: O,
        'data-username-with-effects': 'string' == typeof t ? t : '',
        children: t
    });
});
function g(e) {
    switch (e) {
        case s.m.GRADIENT:
            return h.gradient;
        case s.m.NEON:
            return h.neon;
        case s.m.TOON:
            return h.toon;
        case s.m.POP:
            return h.pop;
        case s.m.SOLID:
            return h.solid;
        default:
            return '';
    }
}
