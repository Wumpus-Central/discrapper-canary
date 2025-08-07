n.d(t, { Z: () => O });
var r = n(255367),
    i = n(73800),
    o = n(688619),
    a = n.n(o),
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
    b = n(660662),
    y = n(482695);
let O = i.memo(function (e) {
    let {
            userName: t,
            displayNameStyles: n,
            effectDisplayType: o = m.F.STATIC,
            inProfile: s = !1,
            textClassName: O,
            loop: I = !1,
        } = e,
        T = (0, E.j)({
            displayNameStyles: n,
            inProfile: s,
        }),
        {
            useReducedMotion: S,
            saturation: A,
            desaturateUserColors: N,
        } = (0, u.cj)([f.Z], () => ({
            useReducedMotion: f.Z.useReducedMotion,
            saturation: f.Z.saturation,
            desaturateUserColors: f.Z.desaturateUserColors,
        })),
        { includeNonProfile: C } = p.f.useExperiment({ location: "useDisplayNameStylesFont" }),
        R = (0, h.Y)({ location: "UserNameWithEffects" }),
        P = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        w = i.useMemo(
            () =>
                null != n && R
                    ? n.colors.map((e) => {
                          let t = a()(e);
                          return (
                              N && (t = t.desaturate(1 - A)),
                              (0, _.aP)(
                                  t.hex(),
                                  n.effectId === c.m.TOON ? "#333" : P,
                                  b.sS[n.effectId].minContrastRatio,
                              )
                          );
                      })
                    : [],
            [n, R, N, A, P],
        );
    if (!R || (!s && !C) || null == n) return t;
    let D = (0, g.K)(n.effectId, w),
        L = v(n.effectId);
    return (0, r.jsx)("div", {
        className: l()(y.container, L, T, O, {
            [y.showEffect]: o !== m.F.PLAIN,
            [y.animated]: o === m.F.ANIMATED && !S,
            [y.loop]: I,
        }),
        style: D,
        "data-username-with-effects": (0, d.qgQ)(t),
        children: t,
    });
});
function v(e) {
    switch (e) {
        case c.m.GRADIENT:
            return y.gradient;
        case c.m.NEON:
            return y.neon;
        case c.m.TOON:
            return y.toon;
        case c.m.POP:
            return y.pop;
        case c.m.SOLID:
            return y.solid;
        default:
            return "";
    }
}
