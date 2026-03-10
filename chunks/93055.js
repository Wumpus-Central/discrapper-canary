n.d(t, { Af: () => C, CJ: () => S, Fe: () => p, Rm: () => h, TW: () => g }), n(321073);
var i = n(64700),
    r = n(478437),
    a = n(311907);
n(734057);
var l = n(808728),
    s = n(967198),
    o = n(287809),
    d = n(474090);
n(661191);
var _ = n(181079),
    c = n(379587),
    u = n(957300),
    A = n(924703),
    I = n(652215),
    E = n(788868);
function g(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, c.m)({ location: e }),
        i = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        r = d.Ay.isPremiumExactly(i, E.PremiumTypes.TIER_2);
    return {
        hasAccess: t && r,
        isExperimentEnabled: t,
        isPreviewMode: (0, u.E)((e) => e.isPreviewMode),
        hasHigherPrivileges: n,
    };
}
function C(e) {
    return (0, a.bG)([_.A], () => _.A.getFavorite(e));
}
function h() {
    return (0, a.bG)([l.Ay], () => l.Ay.getChannels(I.YYv))[r.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function p() {
    return (0, a.bG)([s.A], () => s.A.getGuildId()) === I.YYv;
}
function S() {
    let e = (0, A.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return { favoriteAdded: e.favoriteAdded, notifyFavoriteAdded: t, clearFavoriteAdded: n };
}
