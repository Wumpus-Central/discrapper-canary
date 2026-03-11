"use strict";
n.d(t, { A: () => v, o: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(317097),
    l = n(311907),
    u = n(827734),
    c = n(397927),
    d = n(654107),
    _ = n(450373),
    f = n(915089),
    p = n(693875),
    h = n(253932),
    m = n(531685),
    E = n(486020),
    g = n(837529),
    A = n(686189),
    I = n(985253),
    T = n(166212);
let S = (e) => {
    let { size: t, stroke: n } = (0, c.KjH)(e);
    return t / 2 + n;
};
function y(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: s,
            pendingBanner: I,
            children: y,
            className: v,
            avatarSize: N,
            avatarOffsetX: C,
            avatarOffsetY: R,
            bannerWidth: O,
            bannerHeight: b,
            themePadding: D,
            pendingAccentColor: L,
            animateOnHoverOrFocusOnly: w = !1,
        } = e,
        M = (0, f.GV)(),
        [x, P] = i.useState(!1),
        k = (0, l.bG)([m.A], () => m.A.isFocused()),
        U = h.kt.getSetting(),
        G = (0, g.Nx)(),
        { bannerSrc: F, status: V } = (0, A.A)({
            displayProfile: n,
            pendingBanner: I,
            size: O,
            canAnimate: w || !U ? x : k,
        }),
        B = G ? null : F,
        H = (0, c.rdh)(u.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = t.getAvatarURL(s, (0, c.FT9)(N)),
        Y = (0, o.LX)((0, d.Ay)(j, H, !1)),
        W = (0, _.A)(L ?? n?.primaryColor ?? Y).hex,
        K = S(N),
        $ = K + C - D,
        z = b - R - D;
    return (0, r.jsxs)("svg", {
        className: T.dK,
        viewBox: `0 0 ${O} ${b}`,
        style: { minWidth: O, minHeight: b },
        children: [
            (0, r.jsxs)("mask", {
                id: M,
                children: [
                    (0, r.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, r.jsx)("circle", { fill: "black", cx: $, cy: z, r: K }),
                ],
            }),
            (0, r.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${M})`,
                children: [
                    y,
                    (0, r.jsx)("div", {
                        className: a()(T.vK, v),
                        onMouseMove: () => P(!0),
                        onMouseLeave: () => P(!1),
                        style: {
                            height: b,
                            minHeight: b,
                            backgroundImage: null != B ? `url(${B})` : void 0,
                            backgroundColor: "COMPLETE" === V || G ? W : u.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !U && (0, E.o4)(B) && (0, r.jsx)(p.A, { className: T.pH }),
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
            displayProfile: i,
            canUsePremiumProfileCustomization: s = !1,
            specOverrides: a,
            ...o
        } = e,
        l = I.T[t],
        u = null != a ? { ...l, ...a } : l,
        c = !(0, g.Qq)() && (s || i?.canUsePremiumProfileCustomization || !1);
    return (0, r.jsx)(y, { ...o, ...u, user: n, displayProfile: i, themePadding: c ? u.themePadding : 0 });
}
