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
                inProfile: u = !1,
                textClassName: T,
                loop: A = !1,
                shouldWrap: C = !1,
                boldFontOpacity: N = 1,
                shouldUnderlineOnHover: R = !1,
            } = e,
            P = (0, O.j)({
                displayNameStyles: a,
                inProfile: u,
            }),
            { useReducedMotion: w, saturation: D } = (0, d.cj)([p.Z], () => ({
                useReducedMotion: p.Z.useReducedMotion,
                saturation: p.Z.desaturateUserColors ? p.Z.saturation : 1,
            })),
            { includeNonProfile: x } = m.f.useExperiment({ location: "useDisplayNameStylesFont" }),
            L = (0, g.Y)({ location: "UserNameWithEffects" }),
            j = (0, _.dQu)(_.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            M = null != (t = null == a ? void 0 : a.effectId) ? t : c.m.SOLID,
            k = (0, y.R)(M),
            U = (0, _.qgQ)(n),
            G = (0, f.EJ)(U, M === c.m.TOON ? v.emoji : void 0),
            B = i.useMemo(
                () =>
                    null != a && L
                        ? a.colors.map((e) =>
                              (0, h.wh)({
                                  foreground: o()(e),
                                  background: M === c.m.TOON ? o()("#333") : o()(j),
                                  ratio: k.minContrastRatio,
                                  saturationFactor: D,
                              }).hex(),
                          )
                        : [],
                [a, L, M, k.minContrastRatio, D, j],
            );
        if (!L || (!u && !x) || null == a) return n;
        let Z = (0, b.K)(M, B, {
                shouldWrap: C,
                fontOpacity: I.includes(a.fontId) ? N : 1,
            }),
            V = S(M);
        return (0, r.jsxs)("div", {
            className: l()(v.container, P, T, {
                [v.showEffect]: s !== E.F.PLAIN,
                [v.animated]: s === E.F.ANIMATED && !w,
                [v.loop]: A,
                [v.inProfile]: u,
            }),
            style: Z,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": U,
                    className: l()(v.innerContainer, null == V ? void 0 : V.effectClassName, {
                        [v.underlineOnHover]: R,
                    }),
                    children: G,
                }),
                (null == V ? void 0 : V.glowClassName) != null &&
                    (0, r.jsx)("span", {
                        className: l()(v.glowContainer, v.innerContainer, V.glowClassName),
                        "aria-hidden": !0,
                        children: U,
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
