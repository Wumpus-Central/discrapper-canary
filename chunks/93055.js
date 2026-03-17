n.d(t, { Af: () => g, CJ: () => C, Fe: () => h, Rm: () => I, TW: () => E }), n(321073);
var i = n(478437),
    r = n(311907);
n(734057);
var a = n(808728),
    s = n(967198),
    l = n(287809),
    o = n(474090);
n(661191);
var d = n(181079),
    c = n(379587),
    _ = n(11531),
    u = n(652215),
    A = n(788868);
function E(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, c.m)({ location: e }),
        i = (0, r.bG)([l.default], () => l.default.getCurrentUser()),
        a = o.Ay.isPremiumExactly(i, A.PremiumTypes.TIER_2);
    return { hasAccess: t && a, isExperimentEnabled: t, hasHigherPrivileges: n };
}
function g(e) {
    return (0, r.bG)([d.A], () => d.A.getFavorite(e));
}
function I() {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannels(u.YYv))[i.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function h() {
    return (0, r.bG)([s.A], () => s.A.getGuildId()) === u.YYv;
}
function C() {
    let e = (0, _.J)((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, _.J)((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, _.J)((e) => e.clearFavoriteAdded),
    };
}
