n.d(t, { Af: () => f, DZ: () => T, TW: () => A, ad: () => h, e4: () => m, ft: () => I, m_: () => p }),
    n(321073),
    n(97378);
var i = n(17928),
    r = n(873298),
    a = n(967198),
    s = n(287809),
    l = n(474090);
n(935208);
var o = n(181079),
    d = n(379587),
    c = n(5180),
    u = n(349828),
    _ = n(202541);
function E(e) {
    let { isExperimentEnabled: t, isFreemium: n, isPremiumTier2: i } = e,
        r = t && (i || n),
        a = 0;
    return (
        r && (a = i ? u.lj : 3 * !!n),
        { hasAccess: r, isExperimentEnabled: t, isFreemium: n, favoriteLimit: a, canUpsellFavoriteLimit: t && n && !i }
    );
}
function A() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "useFavoritesAccess",
        { enabled: t, isFreemium: n } = (0, d.m)({ location: e }),
        r = (0, i.bG)([s.default], () => s.default.getCurrentUser());
    return E({
        isExperimentEnabled: t,
        isFreemium: n,
        isPremiumTier2: l.Ay.isPremiumExactly(r, _.PremiumTypes.TIER_2),
    });
}
function h() {
    let { enabled: e, isFreemium: t } = (0, d.B)({ location: "getFavoritesAccess" });
    return E({
        isExperimentEnabled: e,
        isFreemium: t,
        isPremiumTier2: l.Ay.isPremiumExactly(s.default.getCurrentUser(), _.PremiumTypes.TIER_2),
    });
}
function I() {
    let { canUpsellFavoriteLimit: e, favoriteLimit: t } = A("useFavoritesLimitUpsell"),
        n = (0, i.bG)([o.A], () => o.A.getFavoritesCountAgainstLimit());
    return { shouldShowUpsell: e && !__OVERLAY__, favoriteCount: n, favoriteLimit: t, isAtLimit: t > 0 && n >= t };
}
function f(e) {
    return (0, i.bG)([o.A], () => o.A.getFavorite(e));
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
        t = [{ id: null, name: "" }];
    for (let n in e) {
        let i = e[n];
        i.type === r.Ip.CATEGORY && t.push({ id: i.id, name: i.nickname ?? "" });
    }
    return t.sort((t, n) => (e[t.id]?.order ?? 0) - (e[n.id]?.order ?? 0)), t;
}
function T() {
    let e = (0, i.bG)([a.A], () => a.A.getGuildId());
    return (0, c.ai)(e);
}
function m(e, t) {
    let n = T(),
        { hasAccess: r } = A(t),
        a = (0, i.bG)([o.A], () => null != e && o.A.isChannelOrParentFavorited(e), [e]);
    return n && (!r || !a || e?.isCategory()) ? null : (e ?? null);
}
