r.d(t, { A: () => P, o: () => M });
var n = r(627968),
    E = r(64700),
    l = r(503698),
    s = r.n(l),
    a = r(317097),
    o = r(17928),
    _ = r(661531),
    i = r(778712),
    u = r(602853),
    A = r(654107),
    R = r(450373),
    c = r(915089),
    d = r(693875),
    T = r(253932),
    N = r(531685),
    h = r(486020),
    m = r(837529),
    D = r(686189),
    I = r(985253),
    S = r(926601);
function M(e) {
    let {
            user: t,
            displayProfile: r,
            guildId: l,
            pendingBanner: I,
            children: M,
            className: P,
            avatarSize: f,
            avatarOffsetX: v,
            avatarOffsetY: U,
            bannerWidth: G,
            bannerHeight: O,
            themePadding: x,
            pendingAccentColor: g,
            animateOnHoverOrFocusOnly: p = !1,
        } = e,
        y = (0, c.GV)(),
        [L, b] = E.useState(!1),
        B = (0, o.bG)([N.A], () => N.A.isFocused()),
        C = T.kt.getSetting(),
        j = (0, m.Nx)(),
        { bannerSrc: w, status: V } = (0, D.A)({
            displayProfile: r,
            pendingBanner: I,
            size: G,
            canAnimate: p || !C ? L : B,
        }),
        X = j ? null : w,
        H = (0, u.r)(_.A.unsafe_rawColors.PRIMARY_800).hex(),
        k = t.getAvatarURL(l, (0, i.FT)(f)),
        K = (0, a.LX)((0, A.Ay)(k, H, !1)),
        J = (0, R.A)(g ?? r?.primaryColor ?? K).hex,
        W = ((e) => {
            let { size: t, stroke: r } = (0, i.Kj)(e);
            return t / 2 + r;
        })(f),
        Y = O - U - x;
    return (0, n.jsxs)("svg", {
        className: S.dK,
        viewBox: `0 0 ${G} ${O}`,
        style: { minWidth: G, minHeight: O },
        children: [
            (0, n.jsxs)("mask", {
                id: y,
                children: [
                    (0, n.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, n.jsx)("circle", { fill: "black", cx: W + v - x, cy: Y, r: W }),
                ],
            }),
            (0, n.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${y})`,
                children: [
                    M,
                    (0, n.jsx)("div", {
                        className: s()(S.vK, P),
                        onMouseMove: () => b(!0),
                        onMouseLeave: () => b(!1),
                        style: {
                            height: O,
                            minHeight: O,
                            backgroundImage: null != X ? `url(${X})` : void 0,
                            backgroundColor: "COMPLETE" === V || j ? J : _.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !C && (0, h.o4)(X) && (0, n.jsx)(d.A, { className: S.pH }),
                    }),
                ],
            }),
        ],
    });
}
function P(e) {
    let {
            themeType: t,
            user: r,
            displayProfile: E,
            canUsePremiumProfileCustomization: l = !1,
            specOverrides: s,
            ...a
        } = e,
        o = I.T[t],
        _ = null != s ? { ...o, ...s } : o,
        i = !(0, m.Qq)() && (l || E?.canUsePremiumProfileCustomization || !1);
    return (0, n.jsx)(M, { ...a, ..._, user: r, displayProfile: E, themePadding: i ? _.themePadding : 0 });
}
