"use strict";
n.d(t, { Af: () => _, CJ: () => C, Fe: () => x, Rm: () => f, TW: () => g }), n(321073);
var i = n(64700),
    s = n(478437),
    l = n(311907);
n(734057);
var r = n(808728),
    a = n(967198),
    o = n(287809),
    c = n(474090);
n(661191);
var d = n(181079),
    u = n(379587),
    h = n(957300),
    A = n(924703),
    m = n(652215),
    p = n(788868);
function g(e) {
    let { enabled: t, hasHigherPrivileges: n } = (0, u.m)({ location: e }),
        i = (0, l.bG)([o.default], () => o.default.getCurrentUser()),
        s = c.Ay.isPremiumExactly(i, p.PremiumTypes.TIER_2);
    return {
        hasAccess: t && s,
        isExperimentEnabled: t,
        isPreviewMode: (0, h.E)((e) => e.isPreviewMode),
        hasHigherPrivileges: n,
    };
}
function _(e) {
    return (0, l.bG)([d.A], () => d.A.getFavorite(e));
}
function f() {
    return (0, l.bG)([r.Ay], () => r.Ay.getChannels(m.YYv))[s.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function x() {
    return (0, l.bG)([a.A], () => a.A.getGuildId()) === m.YYv;
}
function C() {
    let e = (0, A.T)(),
        t = i.useCallback(() => {}, [e]),
        n = i.useCallback(() => {}, [e]);
    return { favoriteAdded: e.favoriteAdded, notifyFavoriteAdded: t, clearFavoriteAdded: n };
}
