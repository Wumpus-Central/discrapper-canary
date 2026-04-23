"use strict";
n.d(t, { A: () => N, o: () => y });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(317097),
    l = n(311907),
    u = n(827734),
    c = n(778712),
    d = n(602853),
    _ = n(654107),
    f = n(450373),
    p = n(915089),
    h = n(693875),
    E = n(253932),
    m = n(531685),
    g = n(486020),
    A = n(837529),
    I = n(686189),
    T = n(985253),
    S = n(926601);
function y(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: s,
            pendingBanner: T,
            children: y,
            className: N,
            avatarSize: v,
            avatarOffsetX: C,
            avatarOffsetY: O,
            bannerWidth: R,
            bannerHeight: b,
            themePadding: D,
            pendingAccentColor: L,
            animateOnHoverOrFocusOnly: w = !1,
        } = e,
        M = (0, p.GV)(),
        [P, x] = i.useState(!1),
        k = (0, l.bG)([m.A], () => m.A.isFocused()),
        U = E.kt.getSetting(),
        G = (0, A.Nx)(),
        { bannerSrc: F, status: V } = (0, I.A)({
            displayProfile: n,
            pendingBanner: T,
            size: R,
            canAnimate: w || !U ? P : k,
        }),
        B = G ? null : F,
        H = (0, d.r)(u.A.unsafe_rawColors.PRIMARY_800).hex(),
        j = t.getAvatarURL(s, (0, c.FT)(v)),
        Y = (0, o.LX)((0, _.Ay)(j, H, !1)),
        W = (0, f.A)(L ?? n?.primaryColor ?? Y).hex,
        K = ((e) => {
            let { size: t, stroke: n } = (0, c.Kj)(e);
            return t / 2 + n;
        })(v),
        $ = b - O - D;
    return (0, r.jsxs)("svg", {
        className: S.dK,
        viewBox: `0 0 ${R} ${b}`,
        style: { minWidth: R, minHeight: b },
        children: [
            (0, r.jsxs)("mask", {
                id: M,
                children: [
                    (0, r.jsx)("rect", { fill: "white", x: "0", y: "0", width: "100%", height: "100%" }),
                    (0, r.jsx)("circle", { fill: "black", cx: K + C - D, cy: $, r: K }),
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
                        className: a()(S.vK, N),
                        onMouseMove: () => x(!0),
                        onMouseLeave: () => x(!1),
                        style: {
                            height: b,
                            minHeight: b,
                            backgroundImage: null != B ? `url(${B})` : void 0,
                            backgroundColor: "COMPLETE" === V || G ? W : u.A.unsafe_rawColors.PRIMARY_800.css,
                        },
                        children: !U && (0, g.o4)(B) && (0, r.jsx)(h.A, { className: S.pH }),
                    }),
                ],
            }),
        ],
    });
}
function N(e) {
    let {
            themeType: t,
            user: n,
            displayProfile: i,
            canUsePremiumProfileCustomization: s = !1,
            specOverrides: a,
            ...o
        } = e,
        l = T.T[t],
        u = null != a ? { ...l, ...a } : l,
        c = !(0, A.Qq)() && (s || i?.canUsePremiumProfileCustomization || !1);
    return (0, r.jsx)(y, { ...o, ...u, user: n, displayProfile: i, themePadding: c ? u.themePadding : 0 });
}
