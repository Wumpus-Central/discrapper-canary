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
        x = null != (t = null == o ? void 0 : o.effectId) ? t : c.m.SOLID,
        M = (0, b.J)(),
        k = (0, f.qgQ)(n),
        j = (0, d.EJ)(k, x === c.m.TOON ? O.emoji : void 0),
        U = i.useMemo(
            () =>
                null != o && D
                    ? o.colors.map((e) => {
                          var t, n;
                          let r = a()(e);
                          return (
                              P && (r = r.desaturate(1 - R)),
                              (0, p.aP)(
                                  r.hex(),
                                  x === c.m.TOON ? "#333" : L,
                                  null != (n = null == (t = M[x]) ? void 0 : t.minContrastRatio) ? n : 3,
                              )
                          );
                      })
                    : [],
            [o, x, D, P, R, L, M],
        );
    if (!D || (!v && !w) || null == o) return n;
    let G = (0, E.K)(x, U, { shouldWrap: A }),
        B = I(x);
    return (0, r.jsxs)("div", {
        className: l()(O.container, N, T, {
            [O.showEffect]: s !== g.F.PLAIN,
            [O.animated]: s === g.F.ANIMATED && !C,
            [O.loop]: S,
        }),
        style: G,
        children: [
            (0, r.jsx)("span", {
                "data-username-with-effects": k,
                className: l()(O.innerContainer, null == B ? void 0 : B.effectClassName),
                children: j,
            }),
            (null == B ? void 0 : B.glowClassName) != null &&
                (0, r.jsx)("span", {
                    className: l()(O.glowContainer, O.innerContainer, B.glowClassName),
                    "aria-hidden": !0,
                    children: k,
                }),
        ],
    });
});
function I(e) {
    switch (e) {
        case c.m.GRADIENT:
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
            return { effectClassName: O.solid };
        default:
            return;
    }
}
