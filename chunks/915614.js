"use strict";
n.d(t, { A: () => C, o: () => v });
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
    h = n(693875),
    p = n(253932),
    g = n(531685),
    E = n(486020),
    A = n(837529),
    I = n(686189),
    T = n(985253),
    y = n(166212);
let S = (e) => {
    let { size: t, stroke: n } = (0, c.KjH)(e);
    return t / 2 + n;
};
function v(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            pendingBanner: T,
            children: v,
            className: C,
            avatarSize: b,
            avatarOffsetX: N,
            avatarOffsetY: R,
            bannerWidth: O,
            bannerHeight: D,
            themePadding: L,
            pendingAccentColor: w,
            animateOnHoverOrFocusOnly: x = !1,
        } = e,
        P = (0, f.GV)(),
        [M, k] = i.useState(!1),
        U = (0, l.bG)([g.A], () => g.A.isFocused()),
        G = p.kt.getSetting(),
        F = (0, A.Nx)(),
        { bannerSrc: V, status: B } = (0, I.A)({
            displayProfile: n,
            pendingBanner: T,
            size: O,
            canAnimate: x || !G ? M : U,
        }),
        j = F ? null : V,
        H = (0, c.rdh)(u.A.unsafe_rawColors.PRIMARY_800).hex(),
        Y = t.getAvatarURL(a, (0, c.FT9)(b)),
        W = (0, o.LX)((0, d.Ay)(Y, H, !1)),
        K = (0, _.A)(w ?? n?.primaryColor ?? W).hex,
        $ = S(b),
        z = $ + N - L,
        q = D - R - L;
    return (0, r.jsxs)("svg", {
        className: y.dK,
        viewBox: `0 0 ${O} ${D}`,
        style: { minWidth: O, minHeight: D },
        children: [
            (0, r.jsxs)("mask", {
                id: P,
                children: [
                    (0, r.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, r.jsx)("circle", { fill: "black", cx: z, cy: q, r: $ }),
                ],
            }),
            (0, r.jsxs)("foreignObject", {
                x: "0",
                y: "0",
                width: "100%",
                height: "100%",
                overflow: "visible",
                mask: `url(#${P})`,
                children: [
                    v,
                    (0, r.jsx)("div", {
                        className: s()(y.vK, C),
                        onMouseMove: () => k(!0),
                        onMouseLeave: () => k(!1),
                        style: {
                            height: D,
                            minHeight: D,
                            backgroundImage: null != j ? `url(${j})` : void 0,
                            backgroundColor: "COMPLETE" === B || F ? K : u.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !G && (0, E.o4)(j) && (0, r.jsx)(h.A, { className: y.pH }),
                    }),
                ],
            }),
        ],
    });
}
function C(e) {
    let { themeType: t, user: n, displayProfile: i, canUsePremiumProfileCustomization: a = !1, ...s } = e,
        o = T.T[t],
        l = !(0, A.Qq)() && (a || i?.canUsePremiumProfileCustomization || !1);
    return (0, r.jsx)(v, { ...s, ...o, user: n, displayProfile: i, themePadding: l ? o.themePadding : 0 });
}
