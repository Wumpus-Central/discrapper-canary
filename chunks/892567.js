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
    O = n(492333);
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
        { useReducedMotion: C, saturation: R } = (0, u.cj)([_.Z], () => ({
            useReducedMotion: _.Z.useReducedMotion,
            saturation: _.Z.desaturateUserColors ? _.Z.saturation : 1,
        })),
        { includeNonProfile: P } = h.f.useExperiment({ location: "useDisplayNameStylesFont" }),
        w = (0, m.Y)({ location: "UserNameWithEffects" }),
        D = (0, f.dQu)(f.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        L = (0, b.R)(null != (t = null == o ? void 0 : o.effectId) ? t : c.m.SOLID),
        x = (0, f.qgQ)(n),
        M = (0, d.EJ)(x, (null == o ? void 0 : o.effectId) === c.m.TOON ? O.emoji : void 0),
        j = i.useMemo(
            () =>
                null != o && w
                    ? o.colors.map((e) =>
                          (0, p.wh)({
                              foreground: a()(e),
                              background: (null == o ? void 0 : o.effectId) === c.m.TOON ? a()("#333") : a()(D),
                              ratio: L.minContrastRatio,
                              saturationFactor: R,
                          }).hex(),
                      )
                    : [],
            [o, w, L.minContrastRatio, R, D],
        );
    if (!w || (!v && !P) || null == o) return n;
    let k = (0, E.K)(o.effectId, j, { shouldWrap: A }),
        U = I(o.effectId);
    return (0, r.jsxs)("div", {
        className: l()(O.container, N, T, {
            [O.showEffect]: s !== g.F.PLAIN,
            [O.animated]: s === g.F.ANIMATED && !C,
            [O.loop]: S,
            [O.inProfile]: v,
        }),
        style: k,
        children: [
            (0, r.jsx)("span", {
                "data-username-with-effects": x,
                className: l()(O.innerContainer, null == U ? void 0 : U.effectClassName),
                children: M,
            }),
            (null == U ? void 0 : U.glowClassName) != null &&
                (0, r.jsx)("span", {
                    className: l()(O.glowContainer, O.innerContainer, U.glowClassName),
                    "aria-hidden": !0,
                    children: x,
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
