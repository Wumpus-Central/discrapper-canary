"use strict";
a.d(t, { Af: () => m, CJ: () => A, DZ: () => g, Rm: () => b, TW: () => f, e4: () => h, m_: () => p }), a(321073);
var n = a(311907),
    i = a(873298);
a(734057);
var r = a(967198),
    s = a(287809),
    o = a(474090);
a(661191);
var l = a(181079),
    c = a(379587),
    _ = a(11531),
    d = a(5180),
    u = a(788868);
function f(e) {
    let { enabled: t, hasHigherPrivileges: a } = (0, c.m)({ location: e }),
        i = (0, n.bG)([s.default], () => s.default.getCurrentUser()),
        r = o.Ay.isPremiumExactly(i, u.PremiumTypes.TIER_2);
    return { hasAccess: t && r, isExperimentEnabled: t, hasHigherPrivileges: a };
}
function m(e) {
    return (0, n.bG)([l.A], () => l.A.getFavorite(e));
}
function p() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A.getFavoriteChannels(),
        t = [{ id: null, name: "" }];
    for (let a in e) {
        let n = e[a];
        n.type === i.Ip.CATEGORY && t.push({ id: n.id, name: n.nickname ?? "" });
    }
    return t.sort((t, a) => (e[t.id]?.order ?? 0) - (e[a.id]?.order ?? 0)), t;
}
function b() {
    return (0, n.bG)([l.A], () => p(l.A.getFavoriteChannels()));
}
function g() {
    let e = (0, n.bG)([r.A], () => r.A.getGuildId());
    return (0, d.ai)(e);
}
function h(e, t) {
    let a = g(),
        { hasAccess: i } = f(t),
        r = (0, n.bG)(
            [l.A],
            () => null != e && (l.A.isFavorite(e.id) || (e.isThread() && l.A.isFavorite(e.parent_id))),
            [e],
        );
    return a && (!i || !r || e?.isCategory()) ? null : (e ?? null);
}
function A() {
    let e = (0, _.J)((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, _.J)((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, _.J)((e) => e.clearFavoriteAdded),
    };
}
