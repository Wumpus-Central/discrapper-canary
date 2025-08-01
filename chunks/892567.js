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
    _ = n(594928),
    f = n(821795),
    p = n(760692),
    h = n(7284),
    m = n(482695);
let g = i.memo(function (e) {
    let { userName: t, displayNameStyles: n, effectDisplayType: i = f.F.STATIC, inProfile: a = !1, textClassName: s, loop: g = !1 } = e,
        b = _.f.useExperiment({ location: 'UserNameWithEffects' }),
        y = (0, h.j)({
            displayNameStyles: n,
            inProfile: a
        }),
        {
            useReducedMotion: O,
            saturation: v,
            desaturateUserColors: I
        } = (0, c.cj)([d.Z], () => ({
            useReducedMotion: d.Z.useReducedMotion,
            saturation: d.Z.saturation,
            desaturateUserColors: d.Z.desaturateUserColors
        }));
    if (!b.enabled || (!a && !b.includeNonProfile) || null == n) return t;
    let T = n.colors.map((e) => (0, l.ho)(e, !1, I ? v : null)),
        S = (0, p.K)(n.effectId, T),
        A = E(n.effectId);
    return (0, r.jsx)('div', {
        className: o()(m.container, A, y, s, {
            [m.showEffect]: i !== f.F.PLAIN,
            [m.animated]: i === f.F.ANIMATED && !O,
            [m.singleIteration]: !g
        }),
        style: S,
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
