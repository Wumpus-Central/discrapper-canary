t.d(e, { A: () => h, o: () => u });
var _ = t(627968),
    a = t(64700),
    r = t(503698),
    n = t.n(r),
    R = t(317097),
    A = t(17928),
    s = t(661531),
    i = t(778712),
    T = t(602853),
    N = t(654107),
    I = t(450373),
    S = t(915089),
    d = t(693875),
    l = t(885386),
    D = t(531685),
    o = t(486020),
    P = t(837529),
    c = t(686189),
    U = t(985253),
    M = t(926601);
function u(E) {
    let {
            user: e,
            displayProfile: t,
            guildId: r,
            pendingBanner: U,
            children: u,
            className: h,
            avatarSize: O,
            avatarOffsetX: G,
            avatarOffsetY: f,
            bannerWidth: g,
            bannerHeight: v,
            themePadding: m,
            pendingAccentColor: B,
            animateOnHoverOrFocusOnly: L = !1,
        } = E,
        H = (0, S.GV)(),
        [X, V] = a.useState(!1),
        b = (0, A.bG)([D.A], () => D.A.isFocused()),
        x = l.kt.getSetting(),
        w = (0, P.Nx)(),
        { bannerSrc: y, status: C } = (0, c.A)({
            displayProfile: t,
            pendingBanner: U,
            size: g,
            canAnimate: L || !x ? X : b,
        }),
        k = w ? null : y,
        p = (0, T.r)(s.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = e.getAvatarURL(r, (0, i.FT)(O)),
        Y = (0, R.LX)((0, N.Ay)(j, p, !1)),
        z = (0, I.A)(B ?? t?.primaryColor ?? Y).hex,
        Z = ((E) => {
            let { size: e, stroke: t } = (0, i.Kj)(E);
            return e / 2 + t;
        })(O),
        W = v - f - m;
    return (0, _.jsxs)("svg", {
        className: M.dK,
        viewBox: `0 0 ${g} ${v}`,
        style: { minWidth: g, minHeight: v },
        children: [
            (0, _.jsxs)("mask", {
                id: H,
                children: [
                    (0, _.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, _.jsx)("circle", { fill: "black", cx: Z + G - m, cy: W, r: Z }),
                ],
            }),
            (0, _.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${H})`,
                children: [
                    u,
                    (0, _.jsx)("div", {
                        className: n()(M.vK, h),
                        onMouseMove: () => V(!0),
                        onMouseLeave: () => V(!1),
                        style: {
                            height: v,
                            minHeight: v,
                            backgroundImage: null != k ? `url(${k})` : void 0,
                            backgroundColor: "COMPLETE" === C || w ? z : s.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !x && (0, o.o4)(k) && (0, _.jsx)(d.A, { className: M.pH }),
                    }),
                ],
            }),
        ],
    });
}
function h(E) {
    let {
            themeType: e,
            user: t,
            displayProfile: a,
            canUsePremiumProfileCustomization: r = !1,
            specOverrides: n,
            ...R
        } = E,
        A = U.T[e],
        s = null != n ? { ...A, ...n } : A,
        i = !(0, P.Qq)() && (r || a?.canUsePremiumProfileCustomization || !1);
    return (0, _.jsx)(u, { ...R, ...s, user: t, displayProfile: a, themePadding: i ? s.themePadding : 0 });
}
