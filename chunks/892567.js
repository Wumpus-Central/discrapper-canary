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
            shouldWrap: T = !1,
        } = e,
        S = (0, E.j)({
            displayNameStyles: n,
            inProfile: s,
        }),
        {
            useReducedMotion: A,
            saturation: N,
            desaturateUserColors: C,
        } = (0, u.cj)([f.Z], () => ({
            useReducedMotion: f.Z.useReducedMotion,
            saturation: f.Z.saturation,
            desaturateUserColors: f.Z.desaturateUserColors,
        })),
        { includeNonProfile: R } = p.f.useExperiment({ location: "useDisplayNameStylesFont" }),
        P = (0, h.Y)({ location: "UserNameWithEffects" }),
        w = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        D = i.useMemo(
            () =>
                null != n && P
                    ? n.colors.map((e) => {
                          let t = a()(e);
                          return (
                              C && (t = t.desaturate(1 - N)),
                              (0, _.aP)(
                                  t.hex(),
                                  n.effectId === c.m.TOON ? "#333" : w,
                                  b.sS[n.effectId].minContrastRatio,
                              )
                          );
                      })
                    : [],
            [n, P, C, N, w],
        );
    if (!P || (!s && !R) || null == n) return t;
    let L = (0, g.K)(n.effectId, D, { shouldWrap: T }),
        x = v(n.effectId, o);
    return (0, r.jsxs)("div", {
        className: l()(y.container, S, O, {
            [y.showEffect]: o !== m.F.PLAIN,
            [y.animated]: o === m.F.ANIMATED && !A,
            [y.loop]: I,
        }),
        style: L,
        children: [
            (0, r.jsx)("span", {
                "data-username-with-effects": (0, d.qgQ)(t),
                className: l()(y.innerContainer, null == x ? void 0 : x.effectClassName),
                children: t,
            }),
            (null == x ? void 0 : x.glowClassName) != null &&
                (0, r.jsx)("span", {
                    className: l()(y.glowContainer, y.innerContainer, x.glowClassName),
                    "aria-hidden": !0,
                    children: (0, d.qgQ)(t),
                }),
        ],
    });
});
function v(e, t) {
    switch (e) {
        case c.m.GRADIENT:
            return { effectClassName: y.gradient };
        case c.m.NEON:
            return {
                effectClassName: y.neon,
                glowClassName: t !== m.F.PLAIN ? y.neonGlow : void 0,
            };
        case c.m.TOON:
            return { effectClassName: y.toon };
        case c.m.POP:
            return { effectClassName: y.pop };
        case c.m.SOLID:
            return { effectClassName: y.solid };
        default:
            return;
    }
}
