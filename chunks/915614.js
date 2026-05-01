e.d(_, { A: () => G, o: () => d });
var t = e(627968),
    R = e(64700),
    A = e(503698),
    r = e.n(A),
    s = e(317097),
    T = e(17928),
    n = e(661531),
    N = e(778712),
    a = e(602853),
    l = e(654107),
    i = e(450373),
    D = e(915089),
    I = e(693875),
    S = e(253932),
    o = e(531685),
    c = e(486020),
    u = e(837529),
    U = e(686189),
    M = e(985253),
    P = e(926601);
function d(E) {
    let {
            user: _,
            displayProfile: e,
            guildId: A,
            pendingBanner: M,
            children: d,
            className: G,
            avatarSize: h,
            avatarOffsetX: O,
            avatarOffsetY: g,
            bannerWidth: B,
            bannerHeight: L,
            themePadding: m,
            pendingAccentColor: V,
            animateOnHoverOrFocusOnly: f = !1,
        } = E,
        H = (0, D.GV)(),
        [x, X] = R.useState(!1),
        v = (0, T.bG)([o.A], () => o.A.isFocused()),
        w = S.kt.getSetting(),
        k = (0, u.Nx)(),
        { bannerSrc: p, status: C } = (0, U.A)({
            displayProfile: e,
            pendingBanner: M,
            size: B,
            canAnimate: f || !w ? x : v,
        }),
        b = k ? null : p,
        j = (0, a.r)(n.A.unsafe_rawColors.PRIMARY_800).hex(),
        y = _.getAvatarURL(A, (0, N.FT)(h)),
        Y = (0, s.LX)((0, l.Ay)(y, j, !1)),
        $ = (0, i.A)(V ?? e?.primaryColor ?? Y).hex,
        K = ((E) => {
            let { size: _, stroke: e } = (0, N.Kj)(E);
            return _ / 2 + e;
        })(h),
        z = L - g - m;
    return (0, t.jsxs)("svg", {
        className: P.dK,
        viewBox: `0 0 ${B} ${L}`,
        style: { minWidth: B, minHeight: L },
        children: [
            (0, t.jsxs)("mask", {
                id: H,
                children: [
                    (0, t.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, t.jsx)("circle", { fill: "black", cx: K + O - m, cy: z, r: K }),
                ],
            }),
            (0, t.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${H})`,
                children: [
                    d,
                    (0, t.jsx)("div", {
                        className: r()(P.vK, G),
                        onMouseMove: () => X(!0),
                        onMouseLeave: () => X(!1),
                        style: {
                            height: L,
                            minHeight: L,
                            backgroundImage: null != b ? `url(${b})` : void 0,
                            backgroundColor: "COMPLETE" === C || k ? $ : n.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !w && (0, c.o4)(b) && (0, t.jsx)(I.A, { className: P.pH }),
                    }),
                ],
            }),
        ],
    });
}
function G(E) {
    let {
            themeType: _,
            user: e,
            displayProfile: R,
            canUsePremiumProfileCustomization: A = !1,
            specOverrides: r,
            ...s
        } = E,
        T = M.T[_],
        n = null != r ? { ...T, ...r } : T,
        N = !(0, u.Qq)() && (A || R?.canUsePremiumProfileCustomization || !1);
    return (0, t.jsx)(d, { ...s, ...n, user: e, displayProfile: R, themePadding: N ? n.themePadding : 0 });
}
