n.d(t, { Z: () => E });
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
    _ = n(181430),
    p = n(821795),
    h = n(760692),
    m = n(7284),
    g = n(482695);
let E = i.memo(function (e) {
    let { userName: t, displayNameStyles: n, effectDisplayType: i = p.F.STATIC, inProfile: a = !1, textClassName: s, loop: E = !1 } = e,
        y = (0, m.j)({
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
        })),
        { includeNonProfile: T } = f.f.useExperiment({ location: 'useDisplayNameStylesFont' });
    if (!(0, _.Y)({ location: 'UserNameWithEffects' }) || (!a && !T) || null == n) return t;
    let S = n.colors.map((e) => (0, l.ho)(e, !1, I ? v : null)),
        A = (0, h.K)(n.effectId, S),
        N = b(n.effectId);
    return (0, r.jsx)('div', {
        className: o()(g.container, N, y, s, {
            [g.showEffect]: i !== p.F.PLAIN,
            [g.animated]: i === p.F.ANIMATED && !O,
            [g.loop]: E
        }),
        style: A,
        'data-username-with-effects': (0, u.qgQ)(t),
        children: t
    });
});
function b(e) {
    switch (e) {
        case s.m.GRADIENT:
            return g.gradient;
        case s.m.NEON:
            return g.neon;
        case s.m.TOON:
            return g.toon;
        case s.m.POP:
            return g.pop;
        case s.m.SOLID:
            return g.solid;
        default:
            return '';
    }
}
