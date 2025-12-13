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
    b = n(24730);
let y = [l.C.CHERRY_BOMB, l.C.CHICLE],
    O = i.memo(function (e) {
        var t;
        let {
                userName: n,
                displayNameStyles: i,
                effectDisplayType: a = h.F.STATIC,
                inProfile: l = !1,
                textClassName: O,
                loop: S = !1,
                shouldWrap: I = !1,
                boldFontOpacity: T = 1,
                shouldUnderlineOnHover: C = !1,
            } = e,
            A = (0, E.j)({
                displayNameStyles: i,
                inProfile: l,
            }),
            { useReducedMotion: N } = (0, c.cj)([f.Z], () => ({ useReducedMotion: f.Z.useReducedMotion })),
            { includeNonProfile: P } = p.fN.useExperiment({ location: "useDisplayNameStylesFont" }),
            R = (0, m.Y)({ location: "UserNameWithEffects" }),
            w = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            D = null != (t = null == i ? void 0 : i.effectId) ? t : s.m.SOLID,
            x = (0, d.qgQ)(n),
            L = (0, u.EJ)(x, D === s.m.TOON ? b.emoji : void 0),
            j = (0, _.Z)({
                displayNameStyles: R ? i : null,
                backgroundColor: w,
            });
        if (!R || (!l && !P) || null == i) return n;
        let M = (0, g.K)(D, j, {
                shouldWrap: I,
                fontOpacity: y.includes(i.fontId) ? T : 1,
            }),
            k = v(D);
        return (0, r.jsxs)("div", {
            className: o()(b.container, A, O, {
                [b.showEffect]: a !== h.F.PLAIN,
                [b.animated]: a === h.F.ANIMATED && !N,
                [b.loop]: S,
                [b.inProfile]: l,
            }),
            style: M,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": x,
                    className: o()(b.innerContainer, null == k ? void 0 : k.effectClassName, {
                        [b.underlineOnHover]: C,
                    }),
                    children: L,
                }),
                (null == k ? void 0 : k.glowClassName) != null &&
                    (0, r.jsx)("span", {
                        className: o()(b.glowContainer, b.innerContainer, k.glowClassName),
                        "aria-hidden": !0,
                        children: x,
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
