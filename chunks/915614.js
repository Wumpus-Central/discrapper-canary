n.d(t, { A: () => v, o: () => N });
var a = n(627968),
    l = n(64700),
    r = n(503698),
    s = n.n(r),
    i = n(317097),
    d = n(17928),
    o = n(661531),
    c = n(778712),
    u = n(602853),
    f = n(654107),
    E = n(450373),
    m = n(915089),
    g = n(693875),
    p = n(885386),
    b = n(531685),
    _ = n(486020),
    h = n(837529),
    A = n(686189),
    R = n(985253),
    x = n(926601);
function N(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: r,
            pendingBanner: R,
            children: N,
            className: v,
            avatarSize: I,
            avatarOffsetX: T,
            avatarOffsetY: j,
            bannerWidth: C,
            bannerHeight: S,
            themePadding: y,
            pendingAccentColor: D,
            animateOnHoverOrFocusOnly: M = !1,
        } = e,
        O = (0, m.GV)(),
        [P, U] = l.useState(!1),
        B = (0, d.bG)([b.A], () => b.A.isFocused()),
        k = p.kt.getSetting(),
        G = (0, h.Nx)(),
        { bannerSrc: w, status: L } = (0, A.A)({
            displayProfile: n,
            pendingBanner: R,
            size: C,
            canAnimate: M || !k ? P : B,
        }),
        H = G ? null : w,
        V = (0, u.r)(o.A.unsafe_rawColors.PRIMARY_800).hex(),
        $ = t.getAvatarURL(r, (0, c.FT)(I)),
        X = (0, i.LX)((0, f.Ay)($, V, !1)),
        F = (0, E.A)(D ?? n?.primaryColor ?? X).hex,
        z = (function (e) {
            let { size: t, stroke: n } = (0, c.Kj)(e);
            return t / 2 + n;
        })(I),
        Y = S - j - y;
    return (0, a.jsxs)("svg", {
        className: x.dK,
        viewBox: `0 0 ${C} ${S}`,
        style: { minWidth: C, minHeight: S },
        children: [
            (0, a.jsxs)("mask", {
                id: O,
                children: [
                    (0, a.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, a.jsx)("circle", { fill: "black", cx: z + T - y, cy: Y, r: z }),
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
                    N,
                    (0, a.jsx)("div", {
                        className: s()(x.vK, v),
                        onMouseMove: () => U(!0),
                        onMouseLeave: () => U(!1),
                        style: {
                            height: S,
                            minHeight: S,
                            backgroundImage: null != H ? `url(${H})` : void 0,
                            backgroundColor: "COMPLETE" === L || G ? F : o.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !k && (0, _.o4)(H) && (0, a.jsx)(g.A, { className: x.pH }),
                    }),
                ],
            }),
        ],
    });
}
function v(e) {
    let {
            themeType: t,
            user: n,
            displayProfile: l,
            canUsePremiumProfileCustomization: r = !1,
            specOverrides: s,
            ...i
        } = e,
        d = R.T[t],
        o = null != s ? { ...d, ...s } : d,
        c = !(0, h.Qq)() && (r || l?.canUsePremiumProfileCustomization || !1);
    return (0, a.jsx)(N, { ...i, ...o, user: n, displayProfile: l, themePadding: c ? o.themePadding : 0 });
}
