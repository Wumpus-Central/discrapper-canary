"use strict";
n.d(t, { A: () => C, o: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(317097),
    l = n(17928),
    d = n(661531),
    _ = n(778712),
    u = n(602853),
    c = n(654107),
    E = n(450373),
    h = n(915089),
    m = n(693875),
    f = n(253932),
    g = n(531685),
    p = n(486020),
    A = n(837529),
    I = n(686189),
    T = n(985253),
    S = n(926601);
function N(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: s,
            pendingBanner: T,
            children: N,
            className: C,
            avatarSize: R,
            avatarOffsetX: O,
            avatarOffsetY: y,
            bannerWidth: v,
            bannerHeight: D,
            themePadding: L,
            pendingAccentColor: b,
            animateOnHoverOrFocusOnly: w = !1,
        } = e,
        P = (0, h.GV)(),
        [k, M] = r.useState(!1),
        U = (0, l.bG)([g.A], () => g.A.isFocused()),
        x = f.kt.getSetting(),
        G = (0, A.Nx)(),
        { bannerSrc: V, status: F } = (0, I.A)({
            displayProfile: n,
            pendingBanner: T,
            size: v,
            canAnimate: w || !x ? k : U,
        }),
        B = G ? null : V,
        H = (0, u.r)(d.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = t.getAvatarURL(s, (0, _.FT)(R)),
        W = (0, o.LX)((0, c.Ay)(j, H, !1)),
        Y = (0, E.A)(b ?? n?.primaryColor ?? W).hex,
        K = ((e) => {
            let { size: t, stroke: n } = (0, _.Kj)(e);
            return t / 2 + n;
        })(R),
        z = D - y - L;
    return (0, i.jsxs)("svg", {
        className: S.dK,
        viewBox: `0 0 ${v} ${D}`,
        style: { minWidth: v, minHeight: D },
        children: [
            (0, i.jsxs)("mask", {
                id: P,
                children: [
                    (0, i.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, i.jsx)("circle", { fill: "black", cx: K + O - L, cy: z, r: K }),
                ],
            }),
            (0, i.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${P})`,
                children: [
                    N,
                    (0, i.jsx)("div", {
                        className: a()(S.vK, C),
                        onMouseMove: () => M(!0),
                        onMouseLeave: () => M(!1),
                        style: {
                            height: D,
                            minHeight: D,
                            backgroundImage: null != B ? `url(${B})` : void 0,
                            backgroundColor: "COMPLETE" === F || G ? Y : d.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !x && (0, p.o4)(B) && (0, i.jsx)(m.A, { className: S.pH }),
                    }),
                ],
            }),
        ],
    });
}
function C(e) {
    let {
            themeType: t,
            user: n,
            displayProfile: r,
            canUsePremiumProfileCustomization: s = !1,
            specOverrides: a,
            ...o
        } = e,
        l = T.T[t],
        d = null != a ? { ...l, ...a } : l,
        _ = !(0, A.Qq)() && (s || r?.canUsePremiumProfileCustomization || !1);
    return (0, i.jsx)(N, { ...o, ...d, user: n, displayProfile: r, themePadding: _ ? d.themePadding : 0 });
}
