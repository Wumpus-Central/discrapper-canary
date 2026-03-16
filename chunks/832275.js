"use strict";
n.d(t, { A: () => h, J: () => p });
var r = n(311907),
    i = n(554146),
    s = n(771781),
    a = n(826673),
    o = n(967198),
    l = n(287809),
    u = n(474090),
    c = n(181079),
    d = n(379587),
    _ = n(652215),
    f = n(788868);
function p(e, t, n, r) {
    let { favoritesGuildXPEnabled: i, isMenuItemDCSelected: s, isIntroDCDismissed: a } = r;
    if (!i) return !1;
    if ((s && !a) || n.getGuildId() === _.YYv) return !0;
    let o = t.getCurrentUser();
    return null != o && !!u.Ay.isPremiumExactly(o, f.PremiumTypes.TIER_2) && e.favoriteGuildEnabled;
}
function h(e) {
    let t = (0, d.m)({ location: e }).enabled,
        n = (0, s.mB)(i.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        u = (0, a.JZ)(i.M.FAVORITES_SERVER_ONBOARDING_INTRO);
    return (0, r.bG)([c.A, l.default, o.A], () =>
        p(c.A, l.default, o.A, { favoritesGuildXPEnabled: t, isMenuItemDCSelected: n, isIntroDCDismissed: u }),
    );
}
