n.d(t, { Z: () => O });
var r = n(54381),
    i = n(473749),
    a = n(120356),
    o = n.n(a),
    s = n(522942),
    l = n(342905),
    c = n(442837),
    u = n(865672),
    d = n(481060),
    f = n(607070),
    p = n(594928),
    _ = n(504453),
    m = n(181430),
    h = n(821795),
    g = n(760692),
    E = n(7284),
    b = n(492333);
let y = [l.C.CHERRY_BOMB, l.C.CHICLE],
    O = i.memo(function (e) {
        var t;
        let {
                userName: n,
                displayNameStyles: i,
                effectDisplayType: a = h.F.STATIC,
                inProfile: O = !1,
                textClassName: S,
                loop: I = !1,
                shouldWrap: T = !1,
                boldFontOpacity: A = 1,
                shouldUnderlineOnHover: C = !1,
            } = e,
            N = (0, E.j)({
                displayNameStyles: i,
                inProfile: O,
            }),
            { useReducedMotion: P } = (0, c.cj)([f.Z], () => ({ useReducedMotion: f.Z.useReducedMotion })),
            { includeNonProfile: R } = p.fN.useExperiment({ location: "useDisplayNameStylesFont" }),
            D = (0, m.Y)({ location: "UserNameWithEffects" }),
            w = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            x = null != (t = null == i ? void 0 : i.effectId) ? t : s.m.SOLID,
            L = (0, d.qgQ)(n),
            j = (0, u.EJ)(L, x === s.m.TOON ? b.emoji : void 0),
            M = (0, _.Z)({
                displayNameStyles: D ? i : null,
                backgroundColor: w,
            });
        if (!D || (!O && !R) || null == i) return n;
        let k = (0, g.K)(x, M, {
                shouldWrap: T,
                fontOpacity: y.includes(i.fontId) ? A : 1,
            }),
            U = v(x);
        return (0, r.jsxs)("div", {
            className: o()(b.container, N, S, {
                [b.showEffect]: a !== h.F.PLAIN,
                [b.animated]: a === h.F.ANIMATED && !P,
                [b.loop]: I,
                [b.inProfile]: O,
            }),
            style: k,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": L,
                    className: o()(b.innerContainer, null == U ? void 0 : U.effectClassName, {
                        [b.underlineOnHover]: C,
                        [b.chicle]: i.fontId === l.C.CHICLE,
                    }),
                    children: j,
                }),
                (null == U ? void 0 : U.glowClassName) != null &&
                    (0, r.jsx)("span", {
                        className: o()(b.glowContainer, b.innerContainer, U.glowClassName, {
                            [b.chicle]: i.fontId === l.C.CHICLE,
                        }),
                        "aria-hidden": !0,
                        children: L,
                    }),
            ],
        });
    });
function v(e) {
    switch (e) {
        case s.m.GRADIENT:
        case s.m.GLOW:
            return { effectClassName: b.gradient };
        case s.m.NEON:
            return {
                effectClassName: b.neon,
                glowClassName: b.neonGlow,
            };
        case s.m.TOON:
            return { effectClassName: b.toon };
        case s.m.POP:
            return { effectClassName: b.pop };
        case s.m.SOLID:
        default:
            return { effectClassName: b.solid };
    }
}
