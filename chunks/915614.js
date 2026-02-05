"use strict";
n.d(t, { A: () => S, o: () => y });
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
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
    g = n(486020),
    E = n(686189),
    A = n(985253),
    I = n(166212);
let T = (e) => {
    let { size: t, stroke: n } = (0, c.KjH)(e);
    return t / 2 + n;
};
function y(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            pendingBanner: A,
            children: y,
            className: S,
            avatarSize: v,
            avatarOffsetX: C,
            avatarOffsetY: b,
            bannerWidth: N,
            bannerHeight: R,
            themePadding: O,
            pendingAccentColor: D,
            animateOnHoverOrFocusOnly: L = !1,
        } = e,
        w = (0, f.GV)(),
        [x, P] = i.useState(!1),
        M = (0, l.bG)([m.A], () => m.A.isFocused()),
        k = h.kt.getSetting(),
        { bannerSrc: U, status: G } = (0, E.A)({
            displayProfile: n,
            pendingBanner: A,
            size: N,
            canAnimate: L || !k ? x : M,
        }),
        V = (0, c.rdh)(u.A.unsafe_rawColors.PRIMARY_800).hex(),
        F = t.getAvatarURL(a, (0, c.FT9)(v)),
        B = (0, o.LX)((0, d.Ay)(F, V, !1)),
        j = (0, _.A)(D ?? n?.primaryColor ?? B).hex,
        H = T(v),
        Y = H + C - O,
        W = R - b - O;
    return (0, r.jsxs)("svg", {
        className: I.dK,
        viewBox: `0 0 ${N} ${R}`,
        style: { minWidth: N, minHeight: R },
        children: [
            (0, r.jsxs)("mask", {
                id: w,
                children: [
                    (0, r.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, r.jsx)("circle", { fill: "black", cx: Y, cy: W, r: H }),
                ],
            }),
            (0, r.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${w})`,
                children: [
                    y,
                    (0, r.jsx)("div", {
                        className: s()(I.vK, S),
                        onMouseMove: () => P(!0),
                        onMouseLeave: () => P(!1),
                        style: {
                            height: R,
                            minHeight: R,
                            backgroundImage: null != U ? `url(${U})` : void 0,
                            backgroundColor: "COMPLETE" !== G ? u.A.unsafe_rawColors.PRIMARY_800.css : j,
                        },
                        children: !k && (0, g.o4)(U) && (0, r.jsx)(p.A, { className: I.pH }),
                    }),
                ],
            }),
        ],
    });
}
function S(e) {
    let { themeType: t, displayProfile: n, canUsePremiumProfileCustomization: i = !1, ...a } = e,
        s = A.T[t],
        o = i || n?.canUsePremiumProfileCustomization || !1;
    return (0, r.jsx)(y, { ...a, ...s, displayProfile: n, themePadding: o ? s.themePadding : 0 });
}
