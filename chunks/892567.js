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
    let { userName: t, displayNameStyles: n, effectDisplayType: i = _.F.STATIC, inProfile: a = !1, textClassName: s } = e,
        g = f.f.useExperiment({ location: 'UserNameWithEffects' }),
        b = (0, h.j)({
            displayNameStyles: n,
            inProfile: a
        }),
        {
            useReducedMotion: y,
            saturation: O,
            desaturateUserColors: v
        } = (0, c.cj)([d.Z], () => ({
            useReducedMotion: d.Z.useReducedMotion,
            saturation: d.Z.saturation,
            desaturateUserColors: d.Z.desaturateUserColors
        }));
    if (!g.enabled || (!a && !g.includeNonProfile) || null == n) return t;
    let I = n.colors.map((e) => (0, l.ho)(e, !1, v ? O : null)),
        T = (0, p.K)(n.effectId, I),
        S = E(n.effectId);
    return (0, r.jsx)('div', {
        className: o()(m.container, S, b, s, {
            [m.showEffect]: i !== _.F.PLAIN,
            [m.animated]: i === _.F.ANIMATED && !y
        }),
        style: T,
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
