(n.d(t, { DZ: () => f, e4: () => I, ft: () => A, m_: () => h, o9: () => E }), n(321073), n(97378));
var i = n(17928),
    r = n(873298),
    a = n(967198),
    s = n(287809),
    l = n(474090);
n(935208);
var o = n(181079),
    d = n(5180),
    c = n(349828),
    u = n(202541);
function _(e) {
    return { favoriteLimit: e ? c.lj : 3, canUpsellFavoriteLimit: !e };
}
function E() {
    return _(l.Ay.isPremiumExactly(s.default.getCurrentUser(), u.PremiumTypes.TIER_2));
}
function A() {
    let e,
        { canUpsellFavoriteLimit: t, favoriteLimit: n } =
            ((e = (0, i.bG)([s.default], () => s.default.getCurrentUser())),
            _(l.Ay.isPremiumExactly(e, u.PremiumTypes.TIER_2))),
        r = (0, i.bG)([o.A], () => o.A.getFavoritesCountAgainstLimit());
    return { shouldShowUpsell: t && !__OVERLAY__, favoriteCount: r, favoriteLimit: n, isAtLimit: r >= n };
}
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
        t = [{ id: null, name: "" }];
    for (let n in e) {
        let i = e[n];
        i.type === r.Ip.CATEGORY && t.push({ id: i.id, name: i.nickname ?? "" });
    }
    return (t.sort((t, n) => (e[t.id]?.order ?? 0) - (e[n.id]?.order ?? 0)), t);
}
function f() {
    let e = (0, i.bG)([a.A], () => a.A.getGuildId());
    return (0, d.ai)(e);
}
function I(e) {
    let t = f(),
        n = (0, i.bG)([o.A], () => null != e && o.A.isChannelOrParentFavorited(e), [e]);
    return t && (!n || e?.isCategory()) ? null : (e ?? null);
}
