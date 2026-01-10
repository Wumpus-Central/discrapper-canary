n.d(t, { Z: () => y });
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
    p = n(504453),
    _ = n(181430),
    m = n(821795),
    h = n(760692),
    g = n(7284),
    E = n(24730);
let b = [l.C.CHERRY_BOMB, l.C.CHICLE],
    y = i.memo(function (e) {
        var t;
        let {
                userName: n,
                displayNameStyles: i,
                effectDisplayType: a = m.F.STATIC,
                inProfile: l = !1,
                textClassName: y,
                loop: v = !1,
                shouldWrap: S = !1,
                boldFontOpacity: I = 1,
                shouldUnderlineOnHover: T = !1,
            } = e,
            C = (0, g.j)({ displayNameStyles: i }),
            { useReducedMotion: A } = (0, c.cj)([f.Z], () => ({ useReducedMotion: f.Z.useReducedMotion })),
            N = (0, _.Y)({ location: "UserNameWithEffects" }),
            P = (0, d.dQu)(d.TVs.colors.BACKGROUND_BASE_LOW).hex(),
            R = null != (t = null == i ? void 0 : i.effectId) ? t : s.m.SOLID,
            w = (0, d.qgQ)(n),
            D = (0, u.EJ)(w, R === s.m.TOON ? E.emoji : void 0),
            x = (0, p.Z)({
                displayNameStyles: N ? i : null,
                backgroundColor: P,
            });
        if (!N || null == i) return n;
        let L = (0, h.K)(R, x, {
                shouldWrap: S,
                fontOpacity: b.includes(i.fontId) ? I : 1,
            }),
            j = O(R);
        return (0, r.jsxs)("div", {
            className: o()(E.container, C, y, {
                [E.showEffect]: a !== m.F.PLAIN,
                [E.animated]: a === m.F.ANIMATED && !A,
                [E.loop]: v,
                [E.inProfile]: l,
            }),
            style: L,
            children: [
                (0, r.jsx)("span", {
                    "data-username-with-effects": w,
                    className: o()(E.innerContainer, null == j ? void 0 : j.effectClassName, {
                        [E.underlineOnHover]: T,
                    }),
                    children: D,
                }),
                (null == j ? void 0 : j.glowClassName) != null &&
                    (0, r.jsx)("span", {
                        className: o()(E.glowContainer, E.innerContainer, j.glowClassName),
                        "aria-hidden": !0,
                        children: w,
                    }),
            ],
        });
    });
function O(e) {
    switch (e) {
        case s.m.GRADIENT:
        case s.m.GLOW:
            return { effectClassName: E.gradient };
        case s.m.NEON:
            return {
                effectClassName: E.neon,
                glowClassName: E.neonGlow,
            };
        case s.m.TOON:
            return { effectClassName: E.toon };
        case s.m.POP:
            return { effectClassName: E.pop };
        case s.m.SOLID:
        default:
            return { effectClassName: E.solid };
    }
}
