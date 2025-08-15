n.d(t, { Z: () => v });
var r = n(951288),
    i = n(647438),
    a = n(688619),
    o = n.n(a),
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
            displayNameStyles: a,
            effectDisplayType: s = g.F.STATIC,
            inProfile: v = !1,
            textClassName: T,
            loop: S = !1,
            shouldWrap: A = !1,
        } = e,
        N = (0, y.j)({
            displayNameStyles: a,
            inProfile: v,
        }),
        { useReducedMotion: C, saturation: R } = (0, u.cj)([_.Z], () => ({
            useReducedMotion: _.Z.useReducedMotion,
            saturation: _.Z.desaturateUserColors ? _.Z.saturation : 1,
        })),
        { includeNonProfile: P } = h.f.useExperiment({ location: "useDisplayNameStylesFont" }),
        w = (0, m.Y)({ location: "UserNameWithEffects" }),
        D = (0, f.dQu)(f.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        L = (0, b.R)(null != (t = null == a ? void 0 : a.effectId) ? t : c.m.SOLID),
        x = (0, f.qgQ)(n),
        M = (0, d.EJ)(x, (null == a ? void 0 : a.effectId) === c.m.TOON ? O.emoji : void 0),
        k = i.useMemo(
            () =>
                null != a && w
                    ? a.colors.map((e) =>
                          (0, p.wh)({
                              foreground: o()(e),
                              background: (null == a ? void 0 : a.effectId) === c.m.TOON ? o()("#333") : o()(D),
                              ratio: L.minContrastRatio,
                              saturationFactor: R,
                          }).hex(),
                      )
                    : [],
            [a, w, L.minContrastRatio, R, D],
        );
    if (!w || (!v && !P) || null == a) return n;
    let j = (0, E.K)(a.effectId, k, { shouldWrap: A }),
        U = I(a.effectId);
    return (0, r.jsxs)("div", {
        className: l()(O.container, N, T, {
            [O.showEffect]: s !== g.F.PLAIN,
            [O.animated]: s === g.F.ANIMATED && !C,
            [O.loop]: S,
            [O.inProfile]: v,
        }),
        style: j,
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
