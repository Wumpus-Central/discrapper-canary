n.d(t, { A: () => I, J: () => A });
var i = n(17928),
    a = n(554146),
    r = n(771781),
    s = n(826673),
    l = n(967198),
    o = n(287809),
    d = n(474090),
    c = n(181079),
    _ = n(379587),
    E = n(5180),
    u = n(788868);
function A(e, t, n, i) {
    let { favoritesGuildXPEnabled: a, isMenuItemDCSelected: r, isIntroDCDismissed: s } = i;
    if (!a) return !1;
    if ((r && !s) || (0, E.ai)(n.getGuildId())) return !0;
    let l = t.getCurrentUser();
    return null != l && !!d.Ay.isPremiumExactly(l, u.PremiumTypes.TIER_2) && e.favoriteGuildEnabled;
}
function I(e) {
    let t = (0, _.m)({ location: e }).enabled,
        n = (0, r.mB)(a.M.FAVORITES_SERVER_ONBOARDING_MENU_ITEM),
        d = (0, s.JZ)(a.M.FAVORITES_SERVER_ONBOARDING_INTRO);
    return (0, i.bG)([c.A, o.default, l.A], () =>
        A(c.A, o.default, l.A, { favoritesGuildXPEnabled: t, isMenuItemDCSelected: n, isIntroDCDismissed: d }),
    );
}
