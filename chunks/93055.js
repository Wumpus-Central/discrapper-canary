"use strict";
n.d(t, { Af: () => g, CJ: () => x, Fe: () => f, Rm: () => _, TW: () => m }), n(321073);
var i = n(64700),
    s = n(478437),
    l = n(311907);
n(734057);
var a = n(808728),
    r = n(967198),
    o = n(287809),
    c = n(474090);
n(661191);
var d = n(181079),
    u = n(379587),
    h = n(924703),
    A = n(652215),
    p = n(788868);
function m(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, u.m)({ location: e }),
        i = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        s = c.Ay.isPremiumExactly(i, p.PremiumTypes.TIER_2);
    return { hasAccess: t && s, isExperimentEnabled: t, isPremiumTier2: s, hasHigherPrivileges: n };
}
function g(e) {
    return (0, l.bG)([d.A], () => d.A.getFavorite(e));
}
function _() {
    return (0, l.bG)([a.Ay], () => a.Ay.getChannels(A.YYv))[s.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function f() {
    return (0, l.bG)([r.A], () => r.A.getGuildId()) === A.YYv;
}
function x() {
    let e = (0, h.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return { favoriteAdded: e.favoriteAdded, notifyFavoriteAdded: t, clearFavoriteAdded: n };
}
