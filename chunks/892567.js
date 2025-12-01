n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(688619),
    o = n.n(a),
    s = n(120356),
    l = n.n(s),
    c = n(522942),
    u = n(342905),
    d = n(442837),
    f = n(865672),
    p = n(481060),
    _ = n(607070),
    m = n(302221),
    h = n(594928),
    g = n(489511),
    E = n(181430),
    b = n(821795),
    y = n(760692),
    O = n(7284),
    v = n(492333);
let S = [u.C.CHERRY_BOMB, u.C.CHICLE],
    I = i.memo(function (e) {
        var t;
        let {
                userName: n,
                displayNameStyles: a,
                effectDisplayType: s = b.F.STATIC,
                inProfile: I = !1,
                textClassName: A,
                loop: C = !1,
                shouldWrap: N = !1,
                boldFontOpacity: P = 1,
                shouldUnderlineOnHover: R = !1,
            } = e,
            w = (0, O.j)({
                displayNameStyles: a,
                inProfile: I,
            }),
            { useReducedMotion: D, saturation: x } = (0, d.cj)([_.Z], () => ({
                useReducedMotion: _.Z.useReducedMotion,
                saturation: _.Z.desaturateUserColors ? _.Z.saturation : 1,
            })),
            { includeNonProfile: L } = h.fN.useExperiment({ location: "useDisplayNameStylesFont" }),
            j = (0, E.Y)({ location: "UserNameWithEffects" }),
            M = (0, p.dQu)(p.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            k = null != (t = null == a ? void 0 : a.effectId) ? t : c.m.SOLID,
            U = (0, g.R)(k),
            G = (0, p.qgQ)(n),
            Z = (0, f.EJ)(G, k === c.m.TOON ? v.emoji : void 0),
            B = i.useMemo(
                () =>
                    null != a && j
                        ? a.colors.map((e) =>
                              (0, m.wh)({
                                  foreground: o()(e),
                                  background: k === c.m.TOON ? o()("#333") : o()(M),
                                  ratio: U.minContrastRatio,
                                  saturationFactor: x,
                              }).hex(),
                          )
                        : [],
                [a, j, k, U.minContrastRatio, x, M],
            );
        if (!j || (!I && !L) || null == a) return n;
        let F = (0, y.K)(k, B, {
                shouldWrap: N,
                fontOpacity: S.includes(a.fontId) ? P : 1,
            }),
            V = T(k);
        return (0, r.jsxs)("div", {
            className: l()(v.container, w, A, {
                [v.showEffect]: s !== b.F.PLAIN,
                [v.animated]: s === b.F.ANIMATED && !D,
                [v.loop]: C,
                [v.inProfile]: I,
            }),
            style: F,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": G,
                    className: l()(v.innerContainer, null == V ? void 0 : V.effectClassName, {
                        [v.underlineOnHover]: R,
                        [v.chicle]: a.fontId === u.C.CHICLE,
                    }),
                    children: Z,
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
function T(e) {
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
