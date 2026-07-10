"use strict";
n.d(t, { A: () => C, o: () => N });
var i = n(627968),
    r = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(317097),
    o = n(17928),
    d = n(661531),
    c = n(778712),
    u = n(602853),
    _ = n(654107),
    E = n(450373),
    A = n(915089),
    h = n(693875),
    I = n(885386),
    f = n(531685),
    p = n(486020),
    T = n(837529),
    m = n(686189),
    g = n(985253),
    S = n(220681);
function N(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            pendingBanner: g,
            children: N,
            className: C,
            avatarSize: R,
            avatarOffsetX: O,
            avatarOffsetY: L,
            bannerWidth: D,
            bannerHeight: y,
            themePadding: v,
            pendingAccentColor: b,
            animateOnHoverOrFocusOnly: M = !1,
        } = e,
        P = (0, A.GV)(),
        [U, w] = r.useState(!1),
        G = (0, o.bG)([f.A], () => f.A.isFocused()),
        x = I.kt.getSetting(),
        k = (0, T.Nx)(),
        { bannerSrc: F, status: V } = (0, m.A)({
            displayProfile: n,
            pendingBanner: g,
            size: D,
            canAnimate: M || !x ? U : G,
        }),
        B = k ? null : F,
        H = (0, u.r)(d.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = t.getAvatarURL(a, (0, c.FT)(R)),
        W = (0, l.LX)((0, _.Ay)(j, H, !1)),
        Y = (0, E.A)(b ?? n?.primaryColor ?? W).hex,
        K = (function (e) {
            let { size: t, stroke: n } = (0, c.Kj)(e);
            return t / 2 + n;
        })(R),
        $ = y - L - v;
    return (0, i.jsxs)("svg", {
        className: S.dK,
        viewBox: `0 0 ${D} ${y}`,
        style: { minWidth: D, minHeight: y },
        children: [
            (0, i.jsxs)("mask", {
                id: P,
                children: [
                    (0, i.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, i.jsx)("circle", { fill: "black", cx: K + O - v, cy: $, r: K }),
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
                        className: s()(S.vK, C),
                        onMouseMove: () => w(!0),
                        onMouseLeave: () => w(!1),
                        style: {
                            height: y,
                            minHeight: y,
                            backgroundImage: null != B ? `url(${B})` : void 0,
                            backgroundColor: "COMPLETE" === V || k ? Y : d.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !x && (0, p.o4)(B) && (0, i.jsx)(h.A, { className: S.pH }),
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
            canUsePremiumProfileCustomization: a = !1,
            specOverrides: s,
            ...l
        } = e,
        o = g.T[t],
        d = null != s ? { ...o, ...s } : o,
        c = !(0, T.Qq)() && (a || r?.canUsePremiumProfileCustomization || !1);
    return (0, i.jsx)(N, { ...l, ...d, user: n, displayProfile: r, themePadding: c ? d.themePadding : 0 });
}
