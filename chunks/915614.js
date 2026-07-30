"use strict";
n.d(t, { A: () => C, o: () => N });
var i = n(477900),
    r = n(582128),
    a = n(503698),
    s = n.n(a),
    l = n(317097),
    o = n(17928),
    d = n(661531),
    c = n(602853),
    u = n(778712),
    _ = n(654107),
    E = n(450373),
    A = n(885386),
    h = n(531685),
    I = n(486020),
    f = n(837529),
    p = n(686189),
    T = n(985240),
    m = n(859161),
    g = n(985253),
    S = n(725905);
function N(e) {
    let {
            user: t,
            displayProfile: n,
            guildId: a,
            pendingBanner: g,
            overlay: N,
            className: C,
            avatarSize: O,
            avatarOffsetX: R,
            avatarOffsetY: L,
            bannerWidth: D,
            bannerHeight: y,
            themePadding: v,
            pendingAccentColor: b,
            animateOnHoverOrFocusOnly: M = !1,
        } = e,
        [P, U] = r.useState(!1),
        w = (0, o.bG)([h.A], () => h.A.isFocused()),
        G = A.kt.getSetting(),
        x = (0, f.Nx)(),
        { bannerSrc: k, status: F } = (0, p.A)({
            displayProfile: n,
            pendingBanner: g,
            size: D,
            canAnimate: M || !G ? P : w,
        }),
        V = x ? null : (k ?? null),
        B = (0, c.r)(d.A.unsafe_rawColors.PRIMARY_800).hex(),
        H = t.getAvatarURL(a, (0, u.FT)(O)),
        j = (0, l.LX)((0, _.Ay)(H, B, !1)),
        W = (0, E.A)(b ?? n?.primaryColor ?? j).hex,
        Y = { align: "start", insetStart: R - v, insetBottom: L + v, radius: (0, m.A)(O) };
    return (0, i.jsx)(T.A, {
        fillClassName: s()(S.v, C),
        bannerSrc: V,
        backgroundColor: "COMPLETE" === F || x ? W : d.A.unsafe_rawColors.PRIMARY_800.css,
        showGifTag: !G && (0, I.o4)(V),
        height: y,
        cutout: Y,
        overlay: N,
        onInteractionStart: () => U(!0),
        onInteractionEnd: () => U(!1),
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
        c = !(0, f.Qq)() && (a || r?.canUsePremiumProfileCustomization || !1);
    return (0, i.jsx)(N, { ...l, ...d, user: n, displayProfile: r, themePadding: c ? d.themePadding : 0 });
}
