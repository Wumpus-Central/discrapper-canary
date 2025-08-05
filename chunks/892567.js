n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(522942),
    u = n(442837),
    d = n(481060),
    f = n(607070),
    _ = n(302221),
    p = n(594928),
    h = n(181430),
    m = n(821795),
    g = n(760692),
    E = n(7284),
    b = n(482695);
let y = 3,
    O = i.memo(function (e) {
        let { userName: t, displayNameStyles: n, effectDisplayType: a = m.F.STATIC, inProfile: s = !1, textClassName: O, loop: I = !1 } = e,
            T = (0, E.j)({
                displayNameStyles: n,
                inProfile: s
            }),
            {
                useReducedMotion: S,
                saturation: A,
                desaturateUserColors: N
            } = (0, u.cj)([f.Z], () => ({
                useReducedMotion: f.Z.useReducedMotion,
                saturation: f.Z.saturation,
                desaturateUserColors: f.Z.desaturateUserColors
            })),
            { includeNonProfile: C } = p.f.useExperiment({ location: 'useDisplayNameStylesFont' }),
            w = (0, h.Y)({ location: 'UserNameWithEffects' }),
            R = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            P = i.useMemo(
                () =>
                    null != n && w
                        ? n.colors.map((e) => {
                              let t = o()(e);
                              return (N && (t = t.desaturate(1 - A)), (0, _.aP)(t.hex(), n.effectId === c.m.TOON ? '#333' : R, y));
                          })
                        : [],
                [n, w, N, A, R]
            );
        if (!w || (!s && !C) || null == n) return t;
        let D = (0, g.K)(n.effectId, P),
            L = v(n.effectId);
        return (0, r.jsx)('div', {
            className: l()(b.container, L, T, O, {
                [b.showEffect]: a !== m.F.PLAIN,
                [b.animated]: a === m.F.ANIMATED && !S,
                [b.loop]: I
            }),
            style: D,
            'data-username-with-effects': (0, d.qgQ)(t),
            children: t
        });
    });
function v(e) {
    switch (e) {
        case c.m.GRADIENT:
            return b.gradient;
        case c.m.NEON:
            return b.neon;
        case c.m.TOON:
            return b.toon;
        case c.m.POP:
            return b.pop;
        case c.m.SOLID:
            return b.solid;
        default:
            return '';
    }
}
