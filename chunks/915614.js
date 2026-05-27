t.d(a, { A: () => S, o: () => D });
var s = t(627968),
    c = t(64700),
    d = t(503698),
    n = t.n(d),
    E = t(317097),
    _ = t(17928),
    r = t(661531),
    f = t(778712),
    i = t(602853),
    b = t(654107),
    o = t(450373),
    R = t(915089),
    A = t(693875),
    T = t(885386),
    N = t(531685),
    l = t(486020),
    p = t(837529),
    I = t(686189),
    M = t(985253),
    g = t(926601);
function D(e) {
    let {
            user: a,
            displayProfile: t,
            guildId: d,
            pendingBanner: M,
            children: D,
            className: S,
            avatarSize: U,
            avatarOffsetX: h,
            avatarOffsetY: P,
            bannerWidth: m,
            bannerHeight: u,
            themePadding: O,
            pendingAccentColor: v,
            animateOnHoverOrFocusOnly: G = !1,
        } = e,
        L = (0, R.GV)(),
        [H, B] = c.useState(!1),
        X = (0, _.bG)([N.A], () => N.A.isFocused()),
        V = T.kt.getSetting(),
        x = (0, p.Nx)(),
        { bannerSrc: w, status: k } = (0, I.A)({
            displayProfile: t,
            pendingBanner: M,
            size: m,
            canAnimate: G || !V ? H : X,
        }),
        y = x ? null : w,
        C = (0, i.r)(r.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = a.getAvatarURL(d, (0, f.FT)(U)),
        Y = (0, E.LX)((0, b.Ay)(j, C, !1)),
        z = (0, o.A)(v ?? t?.primaryColor ?? Y).hex,
        Z = ((e) => {
            let { size: a, stroke: t } = (0, f.Kj)(e);
            return a / 2 + t;
        })(U),
        W = u - P - O;
    return (0, s.jsxs)("svg", {
        className: g.dK,
        viewBox: `0 0 ${m} ${u}`,
        style: { minWidth: m, minHeight: u },
        children: [
            (0, s.jsxs)("mask", {
                id: L,
                children: [
                    (0, s.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, s.jsx)("circle", { fill: "black", cx: Z + h - O, cy: W, r: Z }),
                ],
            }),
            (0, s.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${L})`,
                children: [
                    D,
                    (0, s.jsx)("div", {
                        className: n()(g.vK, S),
                        onMouseMove: () => B(!0),
                        onMouseLeave: () => B(!1),
                        style: {
                            height: u,
                            minHeight: u,
                            backgroundImage: null != y ? `url(${y})` : void 0,
                            backgroundColor: "COMPLETE" === k || x ? z : r.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !V && (0, l.o4)(y) && (0, s.jsx)(A.A, { className: g.pH }),
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let {
            themeType: a,
            user: t,
            displayProfile: c,
            canUsePremiumProfileCustomization: d = !1,
            specOverrides: n,
            ...E
        } = e,
        _ = M.T[a],
        r = null != n ? { ..._, ...n } : _,
        f = !(0, p.Qq)() && (d || c?.canUsePremiumProfileCustomization || !1);
    return (0, s.jsx)(D, { ...E, ...r, user: t, displayProfile: c, themePadding: f ? r.themePadding : 0 });
}
