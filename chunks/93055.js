(n(321073), n(97378));
var i = n(855986),
    r = n(873298),
    a = n(967198),
    s = n(287809),
    l = n(474090);
n(811091);
var o = n(181079),
    d = n(5180);
n(349828);
var c = n(682901);
function u(e) {
    return { favoriteLimit: e ? 200 : 3, canUpsellFavoriteLimit: !e };
}
function _() {
    let e = (0, i.bG)([a.A], () => a.A.getGuildId());
    return (0, d.ai)(e);
}
n.d(
    t,
    {},
    {
        DZ: _,
        e4: function (e) {
            let t = _(),
                n = (0, i.bG)([o.A], () => null != e && o.A.isChannelOrParentFavorited(e), [e]);
            return t && (!n || e?.isCategory()) ? null : (e ?? null);
        },
        ft: function () {
            let e,
                { canUpsellFavoriteLimit: t, favoriteLimit: n } =
                    ((e = (0, i.bG)([s.default], () => s.default.getCurrentUser())),
                    u(l.Ay.isPremiumExactly(e, c.PremiumTypes.TIER_2))),
                r = (0, i.bG)([o.A], () => o.A.getFavoritesCountAgainstLimit());
            return { shouldShowUpsell: t && !__OVERLAY__, favoriteCount: r, favoriteLimit: n, isAtLimit: r >= n };
        },
        m_: function () {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o.A.getFavoriteChannels(),
                t = [{ id: null, name: "" }];
            for (let n in e) {
                let i = e[n];
                i.type === r.Ip.CATEGORY && t.push({ id: i.id, name: i.nickname ?? "" });
            }
            return (t.sort((t, n) => (e[t.id]?.order ?? 0) - (e[n.id]?.order ?? 0)), t);
        },
        o9: function () {
            return u(l.Ay.isPremiumExactly(s.default.getCurrentUser(), c.PremiumTypes.TIER_2));
        },
    },
);
