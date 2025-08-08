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
    O = n(482695);
let v = i.memo(function (e) {
    let {
            userName: t,
            displayNameStyles: n,
            effectDisplayType: o = g.F.STATIC,
            inProfile: s = !1,
            textClassName: v,
            loop: T = !1,
            shouldWrap: S = !1,
        } = e,
        A = (0, y.j)({
            displayNameStyles: n,
            inProfile: s,
        }),
        {
            useReducedMotion: N,
            saturation: C,
            desaturateUserColors: R,
        } = (0, u.cj)([_.Z], () => ({
            useReducedMotion: _.Z.useReducedMotion,
            saturation: _.Z.saturation,
            desaturateUserColors: _.Z.desaturateUserColors,
        })),
        { includeNonProfile: P } = h.f.useExperiment({ location: "useDisplayNameStylesFont" }),
        w = (0, m.Y)({ location: "UserNameWithEffects" }),
        D = (0, f.dQu)(f.TVs.colors.BACKGROUND_BASE_LOW).hex(),
        L = (0, b.J)(),
        x = (0, f.qgQ)(t),
        M = (0, d.EJ)(x, (null == n ? void 0 : n.effectId) === c.m.TOON ? O.emoji : void 0),
        k = i.useMemo(
            () =>
                null != n && w
                    ? n.colors.map((e) => {
                          let t = a()(e);
                          return (
                              R && (t = t.desaturate(1 - C)),
                              (0, p.aP)(t.hex(), n.effectId === c.m.TOON ? "#333" : D, L[n.effectId].minContrastRatio)
                          );
                      })
                    : [],
            [n, w, R, C, D, L],
        );
    if (!w || (!s && !P) || null == n) return t;
    let j = (0, E.K)(n.effectId, k, { shouldWrap: S }),
        U = I(n.effectId, o);
    return (0, r.jsxs)("div", {
        className: l()(O.container, A, v, {
            [O.showEffect]: o !== g.F.PLAIN,
            [O.animated]: o === g.F.ANIMATED && !N,
            [O.loop]: T,
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
function I(e, t) {
    switch (e) {
        case c.m.GRADIENT:
            return { effectClassName: O.gradient };
        case c.m.NEON:
            return {
                effectClassName: O.neon,
                glowClassName: t !== g.F.PLAIN ? O.neonGlow : void 0,
            };
        case c.m.TOON:
            return { effectClassName: O.toon };
        case c.m.POP:
            return { effectClassName: O.pop };
        case c.m.SOLID:
            return { effectClassName: O.solid };
        default:
            return;
    }
}
