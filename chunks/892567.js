n.d(t, { Z: () => g });
var r = n(255367),
    i = n(73800),
    a = n(120356),
    o = n.n(a),
    s = n(522942),
    l = n(866442),
    c = n(442837),
    u = n(481060),
    d = n(607070),
    f = n(594928),
    _ = n(821795),
    p = n(760692),
    h = n(7284),
    m = n(482695);
let g = i.memo(function (e) {
    let { userName: t, displayNameStyles: n, effectDisplayType: i = _.F.STATIC, textClassName: a } = e,
        s = f.f.useExperiment({ location: 'UserNameWithEffects' }).enabled,
        g = (0, h.j)({ displayNameStyles: n }),
        {
            useReducedMotion: b,
            saturation: y,
            desaturateUserColors: O
        } = (0, c.cj)([d.Z], () => ({
            useReducedMotion: d.Z.useReducedMotion,
            saturation: d.Z.saturation,
            desaturateUserColors: d.Z.desaturateUserColors
        }));
    if (!s || null == n) return t;
    let v = n.colors.map((e) => (0, l.ho)(e, !1, O ? y : null)),
        I = (0, p.K)(n.effectId, v),
        T = E(n.effectId);
    return (0, r.jsx)('div', {
        className: o()(m.container, T, g, a, {
            [m.showEffect]: i !== _.F.PLAIN,
            [m.animated]: i === _.F.ANIMATED && !b
        }),
        style: I,
        'data-username-with-effects': (0, u.qgQ)(t),
        children: t
    });
});
function E(e) {
    switch (e) {
        case s.m.GRADIENT:
            return m.gradient;
        case s.m.NEON:
            return m.neon;
        case s.m.TOON:
            return m.toon;
        case s.m.POP:
            return m.pop;
        case s.m.SOLID:
            return m.solid;
        default:
            return '';
    }
}
