n.d(t, { A: () => I, o: () => x });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(317097),
    d = n(17928),
    o = n(661531),
    c = n(778712),
    u = n(602853),
    f = n(654107),
    m = n(450373),
    E = n(915089),
    _ = n(693875),
    g = n(885386),
    p = n(531685),
    b = n(486020),
    h = n(837529),
    A = n(686189),
    R = n(985253),
    v = n(926601);
function x(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: l,
            pendingBanner: R,
            children: x,
            className: I,
            avatarSize: N,
            avatarOffsetX: T,
            avatarOffsetY: j,
            bannerWidth: S,
            bannerHeight: C,
            themePadding: y,
            pendingAccentColor: M,
            animateOnHoverOrFocusOnly: D = !1,
        } = e,
        O = (0, E.GV)(),
        [U, P] = r.useState(!1),
        B = (0, d.bG)([p.A], () => p.A.isFocused()),
        G = g.kt.getSetting(),
        k = (0, h.Nx)(),
        { bannerSrc: L, status: w } = (0, A.A)({
            displayProfile: n,
            pendingBanner: R,
            size: S,
            canAnimate: D || !G ? U : B,
        }),
        H = k ? null : L,
        V = (0, u.r)(o.A.unsafe_rawColors.PRIMARY_800).hex(),
        $ = t.getAvatarURL(l, (0, c.FT)(N)),
        X = (0, s.LX)((0, f.Ay)($, V, !1)),
        F = (0, m.A)(M ?? n?.primaryColor ?? X).hex,
        Y = (function (e) {
            let { size: t, stroke: n } = (0, c.Kj)(e);
            return t / 2 + n;
        })(N),
        z = C - j - y;
    return (0, a.jsxs)("svg", {
        className: v.dK,
        viewBox: `0 0 ${S} ${C}`,
        style: { minWidth: S, minHeight: C },
        children: [
            (0, a.jsxs)("mask", {
                id: O,
                children: [
                    (0, a.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, a.jsx)("circle", { fill: "black", cx: Y + T - y, cy: z, r: Y }),
                ],
            }),
            (0, a.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${O})`,
                children: [
                    x,
                    (0, a.jsx)("div", {
                        className: i()(v.vK, I),
                        onMouseMove: () => P(!0),
                        onMouseLeave: () => P(!1),
                        style: {
                            height: C,
                            minHeight: C,
                            backgroundImage: null != H ? `url(${H})` : void 0,
                            backgroundColor: "COMPLETE" === w || k ? F : o.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !G && (0, b.o4)(H) && (0, a.jsx)(_.A, { className: v.pH }),
                    }),
                ],
            }),
        ],
    });
}
function I(e) {
    let {
            themeType: t,
            user: n,
            displayProfile: r,
            canUsePremiumProfileCustomization: l = !1,
            specOverrides: i,
            ...s
        } = e,
        d = R.T[t],
        o = null != i ? { ...d, ...i } : d,
        c = !(0, h.Qq)() && (l || r?.canUsePremiumProfileCustomization || !1);
    return (0, a.jsx)(x, { ...s, ...o, user: n, displayProfile: r, themePadding: c ? o.themePadding : 0 });
}
