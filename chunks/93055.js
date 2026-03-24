"use strict";
a.d(t, { Af: () => A, CJ: () => I, DZ: () => h, Rm: () => g, TW: () => m, e4: () => b }), a(321073);
var n = a(478437),
    i = a(311907);
a(734057);
var r = a(808728),
    s = a(967198),
    l = a(287809),
    o = a(474090);
a(661191);
var _ = a(181079),
    c = a(379587),
    d = a(11531),
    u = a(5180),
    f = a(652215),
    p = a(788868);
function m(e) {
    let { enabled: t, hasHigherPrivileges: a } = (0, c.m)({ location: e }),
        n = (0, i.bG)([l.default], () => l.default.getCurrentUser()),
        r = o.Ay.isPremiumExactly(n, p.PremiumTypes.TIER_2);
    return { hasAccess: t && r, isExperimentEnabled: t, hasHigherPrivileges: a };
}
function A(e) {
    return (0, i.bG)([_.A], () => _.A.getFavorite(e));
}
function g() {
    return (0, i.bG)([r.Ay], () => r.Ay.getChannels(f.YYv))[n.r.GUILD_CATEGORY].map((e) => ({
        id: "null" === e.channel.id ? null : e.channel.id,
        name: e.channel.name,
    }));
}
function h() {
    let e = (0, i.bG)([s.A], () => s.A.getGuildId());
    return (0, u.ai)(e);
}
function b(e, t) {
    let a = h(),
        { hasAccess: n } = m(t),
        r = (0, i.bG)(
            [_.A],
            () => null != e && (_.A.isFavorite(e.id) || (e.isThread() && _.A.isFavorite(e.parent_id))),
            [e],
        );
    return !a || (n && r) ? (e ?? null) : null;
}
function I() {
    let e = (0, d.J)((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, d.J)((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, d.J)((e) => e.clearFavoriteAdded),
    };
}
