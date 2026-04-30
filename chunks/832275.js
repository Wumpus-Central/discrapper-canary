"use strict";
n.d(t, { A: () => p, J: () => h });
var i = n(17928),
    r = n(554146),
    s = n(558845),
    a = n(826673),
    o = n(967198),
    l = n(287809),
    u = n(474090),
    c = n(181079),
    d = n(379587),
    _ = n(5180),
    f = n(788868);
function h(e, t, n, i) {
    let { favoritesGuildXPEnabled: r, isMenuItemDCSelected: s, isIntroDCDismissed: a } = i;
    if (!r) return !1;
    if ((s && !a) || (0, _.ai)(n.getGuildId())) return !0;
    let o = t.getCurrentUser();
    return null != o && !!u.Ay.isPremiumExactly(o, f.PremiumTypes.TIER_2) && e.favoriteGuildEnabled;
}
function p(e) {
    let t = (0, d.m)({ location: e }).enabled,
        n = (0, s.mB)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        u = (0, a.JZ)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO);
    return (0, i.bG)([c.A, l.default, o.A], () =>
        h(c.A, l.default, o.A, { favoritesGuildXPEnabled: t, isMenuItemDCSelected: n, isIntroDCDismissed: u }),
    );
}
