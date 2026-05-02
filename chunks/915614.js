"use strict";
n.d(t, { A: () => y, o: () => N });
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
    f = n(450373),
    h = n(915089),
    p = n(693875),
    E = n(885386),
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
            className: y,
            avatarSize: C,
            avatarOffsetX: v,
            avatarOffsetY: O,
            bannerWidth: R,
            bannerHeight: b,
            themePadding: D,
            pendingAccentColor: L,
            animateOnHoverOrFocusOnly: w = !1,
        } = e,
        M = (0, h.GV)(),
        [P, x] = r.useState(!1),
        U = (0, l.bG)([m.A], () => m.A.isFocused()),
        k = E.kt.getSetting(),
        G = (0, A.Nx)(),
        { bannerSrc: F, status: V } = (0, I.A)({
            displayProfile: n,
            pendingBanner: T,
            size: R,
            canAnimate: w || !k ? P : U,
        }),
        B = G ? null : F,
        H = (0, d.r)(u.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = t.getAvatarURL(s, (0, c.FT)(C)),
        Y = (0, o.LX)((0, _.Ay)(j, H, !1)),
        W = (0, f.A)(L ?? n?.primaryColor ?? Y).hex,
        K = ((e) => {
            let { size: t, stroke: n } = (0, c.Kj)(e);
            return t / 2 + n;
        })(C),
        z = b - O - D;
    return (0, i.jsxs)("svg", {
        className: S.dK,
        viewBox: `0 0 ${R} ${b}`,
        style: { minWidth: R, minHeight: b },
        children: [
            (0, i.jsxs)("mask", {
                id: M,
                children: [
                    (0, i.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, i.jsx)("circle", { fill: "black", cx: K + v - D, cy: z, r: K }),
                ],
            }),
            (0, i.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${M})`,
                children: [
                    N,
                    (0, i.jsx)("div", {
                        className: a()(S.vK, y),
                        onMouseMove: () => x(!0),
                        onMouseLeave: () => x(!1),
                        style: {
                            height: b,
                            minHeight: b,
                            backgroundImage: null != B ? `url(${B})` : void 0,
                            backgroundColor: "COMPLETE" === V || G ? W : u.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !k && (0, g.o4)(B) && (0, i.jsx)(p.A, { className: S.pH }),
                    }),
                ],
            }),
        ],
    });
}
function y(e) {
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
