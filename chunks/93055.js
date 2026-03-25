"use strict";
a.d(t, { Af: () => p, CJ: () => b, DZ: () => g, Rm: () => A, TW: () => f, e4: () => h, m_: () => m }), a(321073);
var n = a(311907),
    i = a(873298);
a(734057);
var r = a(967198),
    s = a(287809),
    o = a(474090);
a(661191);
var l = a(181079),
    _ = a(379587),
    c = a(11531),
    d = a(5180),
    u = a(788868);
function f(e) {
    let { enabled: t, hasHigherPrivileges: a } = (0, _.m)({ location: e }),
        i = (0, n.bG)([s.default], () => s.default.getCurrentUser()),
        r = o.Ay.isPremiumExactly(i, u.PremiumTypes.TIER_2);
    return { hasAccess: t && r, isExperimentEnabled: t, hasHigherPrivileges: a };
}
function p(e) {
    return (0, n.bG)([l.A], () => l.A.getFavorite(e));
}
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l.A.getFavoriteChannels(),
        t = [{ id: null, name: "" }];
    for (let a in e) {
        let n = e[a];
        n.type === i.Ip.CATEGORY && t.push({ id: n.id, name: n.nickname ?? "" });
    }
    return t.sort((t, a) => (e[t.id]?.order ?? 0) - (e[a.id]?.order ?? 0)), t;
}
function A() {
    return (0, n.bG)([l.A], () => m(l.A.getFavoriteChannels()));
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
    return !a || (i && r) ? (e ?? null) : null;
}
function b() {
    let e = (0, c.J)((e) => e.favoriteAdded);
    return {
        favoriteAdded: e,
        notifyFavoriteAdded: (0, c.J)((e) => e.notifyFavoriteAdded),
        clearFavoriteAdded: (0, c.J)((e) => e.clearFavoriteAdded),
    };
}
