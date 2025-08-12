n.d(t, { Z: () => v });
var r = n(255367),
    i = n(73800),
    o = n(688619),
    a = n.n(o),
    s = n(120356),
    l = n.n(s),
    c = n(522942),
    u = n(442837),
    d = n(865672),
    f = n(481060),
    _ = n(607070),
    p = n(302221),
    h = n(594928),
    m = n(181430),
    g = n(821795),
    E = n(760692),
    b = n(203872),
    y = n(7284),
    O = n(295719);
let v = i.memo(function (e) {
    var t;
    let {
            userName: n,
            displayNameStyles: o,
            effectDisplayType: s = g.F.STATIC,
            inProfile: v = !1,
            textClassName: T,
            loop: S = !1,
            shouldWrap: A = !1,
        } = e,
        N = (0, y.j)({
            displayNameStyles: o,
            inProfile: v,
        }),
        {
            useReducedMotion: C,
            saturation: R,
            desaturateUserColors: P,
        } = (0, u.cj)([_.Z], () => ({
            useReducedMotion: _.Z.useReducedMotion,
            saturation: _.Z.saturation,
            desaturateUserColors: _.Z.desaturateUserColors,
        })),
        { includeNonProfile: w } = h.f.useExperiment({ location: "useDisplayNameStylesFont" }),
        D = (0, m.Y)({ location: "UserNameWithEffects" }),
        L = (0, f.dQu)(f.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        x = (0, b.R)(null != (t = null == o ? void 0 : o.effectId) ? t : c.m.SOLID),
        M = (0, f.qgQ)(n),
        k = (0, d.EJ)(M, (null == o ? void 0 : o.effectId) === c.m.TOON ? O.emoji : void 0),
        j = i.useMemo(
            () =>
                null != o && D
                    ? o.colors.map((e) => {
                          let t = a()(e);
                          return (
                              P && (t = t.desaturate(1 - R)),
                              (0, p.aP)(
                                  t.hex(),
                                  (null == o ? void 0 : o.effectId) === c.m.TOON ? "#333" : L,
                                  x.minContrastRatio,
                              )
                          );
                      })
                    : [],
            [o, D, P, R, L, x],
        );
    if (!D || (!v && !w) || null == o) return n;
    let U = (0, E.K)(o.effectId, j, { shouldWrap: A }),
        G = I(o.effectId);
    return (0, r.jsxs)("div", {
        className: l()(O.container, N, T, {
            [O.showEffect]: s !== g.F.PLAIN,
            [O.animated]: s === g.F.ANIMATED && !C,
            [O.loop]: S,
            [O.inProfile]: v,
        }),
        style: U,
        children: [
            (0, r.jsx)("span", {
                "data-username-with-effects": M,
                className: l()(O.innerContainer, null == G ? void 0 : G.effectClassName),
                children: k,
            }),
            (null == G ? void 0 : G.glowClassName) != null &&
                (0, r.jsx)("span", {
                    className: l()(O.glowContainer, O.innerContainer, G.glowClassName),
                    "aria-hidden": !0,
                    children: M,
                }),
        ],
    });
});
function I(e) {
    switch (e) {
        case c.m.GRADIENT:
        case c.m.GLOW:
            return { effectClassName: O.gradient };
        case c.m.NEON:
            return {
                effectClassName: O.neon,
                glowClassName: O.neonGlow,
            };
        case c.m.TOON:
            return { effectClassName: O.toon };
        case c.m.POP:
            return { effectClassName: O.pop };
        case c.m.SOLID:
        default:
            return { effectClassName: O.solid };
    }
}
