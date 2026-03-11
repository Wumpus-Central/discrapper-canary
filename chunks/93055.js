n.d(t, { Af: () => g, CJ: () => p, Fe: () => h, Rm: () => C, TW: () => I }), n(321073);
var i = n(478437),
    r = n(311907);
n(734057);
var a = n(808728),
    l = n(967198),
    s = n(287809),
    o = n(474090);
n(661191);
var d = n(181079),
    _ = n(379587),
    c = n(11531),
    u = n(957300),
    A = n(652215),
    E = n(788868);
function I(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, _.m)({ location: e }),
        i = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        a = o.Ay.isPremiumExactly(i, E.PremiumTypes.TIER_2);
    return {
        hasAccess: t && a,
        isExperimentEnabled: t,
        isPreviewMode: (0, u.E)((e) => e.isPreviewMode),
        hasHigherPrivileges: n,
    };
}
function g(e) {
    return (0, r.bG)([d.A], () => d.A.getFavorite(e));
}
function C() {
    return (0, r.bG)([a.Ay], () => a.Ay.getChannels(A.YYv))[i.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function h() {
    return (0, r.bG)([l.A], () => l.A.getGuildId()) === A.YYv;
}
function p() {
    let e = (0, c.J)((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, c.J)((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, c.J)((e) => e.clearFavoriteAdded),
    };
}
