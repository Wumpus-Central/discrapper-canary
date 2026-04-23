n.d(t, { A: () => A, J: () => I });
var i = n(17928),
    r = n(554146),
    a = n(771781),
    s = n(826673),
    _ = n(967198),
    l = n(287809),
    o = n(474090),
    E = n(181079),
    d = n(379587),
    c = n(5180),
    u = n(788868);
function I(e, t, n, i) {
    let { favoritesGuildXPEnabled: r, isMenuItemDCSelected: a, isIntroDCDismissed: s } = i;
    if (!r) return !1;
    if ((a && !s) || (0, c.ai)(n.getGuildId())) return !0;
    let _ = t.getCurrentUser();
    return null != _ && !!o.Ay.isPremiumExactly(_, u.PremiumTypes.TIER_2) && e.favoriteGuildEnabled;
}
function A(e) {
    let t = (0, d.m)({ location: e }).enabled,
        n = (0, a.mB)(r.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        o = (0, s.JZ)(r.M.FAVORITES_SERVER_ONBOARDING_INTRO);
    return (0, i.bG)([E.A, l.default, _.A], () =>
        I(E.A, l.default, _.A, { favoritesGuildXPEnabled: t, isMenuItemDCSelected: n, isIntroDCDismissed: o }),
    );
}
