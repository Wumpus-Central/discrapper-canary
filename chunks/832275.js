"use strict";
n.d(t, { A: () => h, J: () => A });
var i = n(17928),
    r = n(554146),
    a = n(558845),
    s = n(826673),
    l = n(967198),
    o = n(287809),
    d = n(474090),
    c = n(181079),
    u = n(379587),
    _ = n(5180),
    E = n(202541);
function A(e, t, n, i) {
    let { favoritesGuildXPEnabled: r, isMenuItemDCSelected: a, isIntroDCDismissed: s } = i;
    if (!r) return !1;
    if ((a && !s) || (0, _.ai)(n.getGuildId())) return !0;
    let l = t.getCurrentUser();
    return null != l && !!d.Ay.isPremiumExactly(l, E.PremiumTypes.TIER_2) && e.favoriteGuildEnabled;
}
function h(e) {
    let t = (0, u.mN)({ location: e }).enabled,
        n = (0, a.mB)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        d = (0, s.HX)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO);
    return (0, i.bG)([c.A, o.default, l.A], () =>
        A(c.A, o.default, l.A, { favoritesGuildXPEnabled: t, isMenuItemDCSelected: n, isIntroDCDismissed: d }),
    );
}
