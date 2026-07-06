"use strict";
n.d(t, { A: () => C, o: () => N });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(317097),
    l = n(17928),
    u = n(661531),
    c = n(778712),
    d = n(602853),
    _ = n(654107),
    h = n(450373),
    f = n(915089),
    E = n(693875),
    p = n(885386),
    m = n(531685),
    g = n(486020),
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
            avatarSize: y,
            avatarOffsetX: O,
            avatarOffsetY: R,
            bannerWidth: v,
            bannerHeight: b,
            themePadding: L,
            pendingAccentColor: D,
            animateOnHoverOrFocusOnly: w = !1,
        } = e,
        P = (0, f.GV)(),
        [M, x] = r.useState(!1),
        U = (0, l.bG)([m.A], () => m.A.isFocused()),
        k = p.kt.getSetting(),
        G = (0, A.Nx)(),
        { bannerSrc: V, status: F } = (0, I.A)({
            displayProfile: n,
            pendingBanner: T,
            size: v,
            canAnimate: w || !k ? M : U,
        }),
        B = G ? null : V,
        H = (0, d.r)(u.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = t.getAvatarURL(s, (0, c.FT)(y)),
        W = (0, o.LX)((0, _.Ay)(j, H, !1)),
        Y = (0, h.A)(D ?? n?.primaryColor ?? W).hex,
        K = (function (e) {
            let { size: t, stroke: n } = (0, c.Kj)(e);
            return t / 2 + n;
        })(y),
        $ = b - R - L;
    return (0, i.jsxs)("svg", {
        className: S.dK,
        viewBox: `0 0 ${v} ${b}`,
        style: { minWidth: v, minHeight: b },
        children: [
            (0, i.jsxs)("mask", {
                id: P,
                children: [
                    (0, i.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, i.jsx)("circle", { fill: "black", cx: K + O - L, cy: $, r: K }),
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
                        onMouseMove: () => x(!0),
                        onMouseLeave: () => x(!1),
                        style: {
                            height: b,
                            minHeight: b,
                            backgroundImage: null != B ? `url(${B})` : void 0,
                            backgroundColor: "COMPLETE" === F || G ? Y : u.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !k && (0, g.o4)(B) && (0, i.jsx)(E.A, { className: S.pH }),
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
        u = null != a ? { ...l, ...a } : l,
        c = !(0, A.Qq)() && (s || r?.canUsePremiumProfileCustomization || !1);
    return (0, i.jsx)(N, { ...o, ...u, user: n, displayProfile: r, themePadding: c ? u.themePadding : 0 });
}
