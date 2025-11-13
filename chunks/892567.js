n.d(t, { Z: () => T });
var r = n(951288),
    i = n(647438),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(522942),
    u = n(342905),
    d = n(442837),
    f = n(865672),
    _ = n(481060),
    p = n(607070),
    h = n(302221),
    m = n(594928),
    g = n(489511),
    E = n(181430),
    b = n(821795),
    y = n(760692),
    O = n(7284),
    v = n(492333);
let I = [u.C.CHERRY_BOMB, u.C.CHICLE],
    T = i.memo(function (e) {
        var t;
        let {
                userName: n,
                displayNameStyles: a,
                effectDisplayType: s = b.F.STATIC,
                inProfile: T = !1,
                textClassName: A,
                loop: C = !1,
                shouldWrap: N = !1,
                boldFontOpacity: R = 1,
                shouldUnderlineOnHover: P = !1,
            } = e,
            D = (0, O.j)({
                displayNameStyles: a,
                inProfile: T,
            }),
            { useReducedMotion: w, saturation: x } = (0, d.cj)([p.Z], () => ({
                useReducedMotion: p.Z.useReducedMotion,
                saturation: p.Z.desaturateUserColors ? p.Z.saturation : 1,
            })),
            { includeNonProfile: L } = m.fN.useExperiment({ location: "useDisplayNameStylesFont" }),
            M = (0, E.Y)({ location: "UserNameWithEffects" }),
            j = (0, _.dQu)(_.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            k = null != (t = null == a ? void 0 : a.effectId) ? t : c.m.SOLID,
            U = (0, g.R)(k),
            G = (0, _.qgQ)(n),
            B = (0, f.EJ)(G, k === c.m.TOON ? v.emoji : void 0),
            Z = i.useMemo(
                () =>
                    null != a && M
                        ? a.colors.map((e) =>
                              (0, h.wh)({
                                  foreground: o()(e),
                                  background: k === c.m.TOON ? o()("#333") : o()(j),
                                  ratio: U.minContrastRatio,
                                  saturationFactor: x,
                              }).hex(),
                          )
                        : [],
                [a, M, k, U.minContrastRatio, x, j],
            );
        if (!M || (!T && !L) || null == a) return n;
        let F = (0, y.K)(k, Z, {
                shouldWrap: N,
                fontOpacity: I.includes(a.fontId) ? R : 1,
            }),
            V = S(k);
        return (0, r.jsxs)("div", {
            className: l()(v.container, D, A, {
                [v.showEffect]: s !== b.F.PLAIN,
                [v.animated]: s === b.F.ANIMATED && !w,
                [v.loop]: C,
                [v.inProfile]: T,
            }),
            style: F,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": G,
                    className: l()(v.innerContainer, null == V ? void 0 : V.effectClassName, {
                        [v.underlineOnHover]: P,
                        [v.chicle]: a.fontId === u.C.CHICLE,
                    }),
                    children: B,
                }),
                (null == V ? void 0 : V.glowClassName) != null &&
                    (0, r.jsx)("span", {
                        className: l()(v.glowContainer, v.innerContainer, V.glowClassName, {
                            [v.chicle]: a.fontId === u.C.CHICLE,
                        }),
                        "aria-hidden": !0,
                        children: G,
                    }),
            ],
        });
    });
function S(e) {
    switch (e) {
        case c.m.GRADIENT:
        case c.m.GLOW:
            return { effectClassName: v.gradient };
        case c.m.NEON:
            return {
                effectClassName: v.neon,
                glowClassName: v.neonGlow,
            };
        case c.m.TOON:
            return { effectClassName: v.toon };
        case c.m.POP:
            return { effectClassName: v.pop };
        case c.m.SOLID:
        default:
            return { effectClassName: v.solid };
    }
}
