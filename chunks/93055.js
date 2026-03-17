a.d(t, { Af: () => p, CJ: () => b, DZ: () => h, Rm: () => g, TW: () => A }), a(321073);
var n = a(478437),
    i = a(311907);
a(734057);
var r = a(808728),
    l = a(967198),
    o = a(287809),
    s = a(474090);
a(661191);
var _ = a(181079),
    c = a(379587),
    d = a(11531),
    u = a(5180),
    f = a(652215),
    m = a(788868);
function A(e) {
    let { enabled: t, hasHigherPrivileges: a } = (0, c.m)({ location: e }),
        n = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        r = s.Ay.isPremiumExactly(n, m.PremiumTypes.TIER_2);
    return { hasAccess: t && r, isExperimentEnabled: t, hasHigherPrivileges: a };
}
function p(e) {
    return (0, i.bG)([_.A], () => _.A.getFavorite(e));
}
function g() {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannels(f.YYv))[n.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function h() {
    let e = (0, i.bG)([l.A], () => l.A.getGuildId());
    return (0, u.ai)(e);
}
function b() {
    let e = (0, d.J)((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, d.J)((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, d.J)((e) => e.clearFavoriteAdded),
    };
}
