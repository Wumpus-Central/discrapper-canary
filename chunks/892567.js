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
    g = n(181430),
    E = n(821795),
    b = n(760692),
    y = n(203872),
    O = n(7284),
    v = n(492333);
let I = [u.C.CHERRY_BOMB, u.C.CHICLE],
    T = i.memo(function (e) {
        var t;
        let {
                userName: n,
                displayNameStyles: a,
                effectDisplayType: s = E.F.STATIC,
                inProfile: T = !1,
                textClassName: A,
                loop: C = !1,
                shouldWrap: N = !1,
                boldFontOpacity: R = 1,
                shouldUnderlineOnHover: P = !1,
            } = e,
            w = (0, O.j)({
                displayNameStyles: a,
                inProfile: T,
            }),
            { useReducedMotion: D, saturation: L } = (0, d.cj)([p.Z], () => ({
                useReducedMotion: p.Z.useReducedMotion,
                saturation: p.Z.desaturateUserColors ? p.Z.saturation : 1,
            })),
            { includeNonProfile: x } = m.fN.useExperiment({ location: "useDisplayNameStylesFont" }),
            M = (0, g.Y)({ location: "UserNameWithEffects" }),
            k = (0, _.dQu)(_.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            j = null != (t = null == a ? void 0 : a.effectId) ? t : c.m.SOLID,
            U = (0, y.R)(j),
            G = (0, _.qgQ)(n),
            B = (0, f.EJ)(G, j === c.m.TOON ? v.emoji : void 0),
            Z = i.useMemo(
                () =>
                    null != a && M
                        ? a.colors.map((e) =>
                              (0, h.wh)({
                                  foreground: o()(e),
                                  background: j === c.m.TOON ? o()("#333") : o()(k),
                                  ratio: U.minContrastRatio,
                                  saturationFactor: L,
                              }).hex(),
                          )
                        : [],
                [a, M, j, U.minContrastRatio, L, k],
            );
        if (!M || (!T && !x) || null == a) return n;
        let F = (0, b.K)(j, Z, {
                shouldWrap: N,
                fontOpacity: I.includes(a.fontId) ? R : 1,
            }),
            V = S(j);
        return (0, r.jsxs)("div", {
            className: l()(v.container, w, A, {
                [v.showEffect]: s !== E.F.PLAIN,
                [v.animated]: s === E.F.ANIMATED && !D,
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
