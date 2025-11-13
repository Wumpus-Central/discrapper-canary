n.d(t, { Z: () => w }), n(388685);
var r,
    i = n(392711),
    a = n.n(i),
    o = n(442837),
    s = n(570140),
    l = n(314897),
    c = n(699516),
    u = n(885110),
    d = n(981631);
function f(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                f(e, t, n[t]);
            });
    }
    return e;
}
let p = {},
    h = new Map();
function m(e, t) {
    var n;
    return (null != (n = p[e]) ? n : {})[t];
}
function g(e, t) {
    let n = m(e, t);
    if (null == n) return;
    let r = p[e];
    delete r[t], a().isEmpty(r) && delete p[e];
    let i = h.get(n);
    null != i && (i.delete(e), 0 === i.size && h.delete(n));
}
function E(e, t, n) {
    var r;
    let i = p[e];
    if ((null == i && (i = p[e] = {}), (i[t] = n), c.Z.isBlocked(e) || c.Z.isIgnored(e))) return;
    let a = null != (r = h.get(n)) ? r : new Set();
    h.set(n, a), a.add(e);
}
function b(e, t, n, r) {
    let i = n.find((e) => null != e.party && e.party.id),
        a = null != i && null != i.party ? i.party.id : null,
        o = m(t, e);
    if (null == a || r === d.Skl.OFFLINE) return null != o && void g(t, e);
    if (null != o) {
        if (o === a) return !1;
        g(t, e);
    }
    E(t, e, a);
}
function y(e) {
    let { guilds: t, presences: n } = e,
        r = !1;
    for (let { user: e, status: t, activities: i } of n) null != e && !1 !== b(d.ME, e.id, i, t) && (r = !0);
    for (let e of t) !1 !== v({ guild: e }) && (r = !0);
    return r;
}
function O(e) {
    let { parties: t, userParties: n } = e;
    (h = new Map()), (p = _({}, n)), Object.keys(t).forEach((e) => h.set(e, new Set(t[e])));
}
function v(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: i } of t.presences) !1 !== b(t.id, e.id, i, r) && (n = !0);
    return n;
}
function I(e) {
    let { presences: t } = e,
        n = !1;
    for (let { user: e, activities: r } of t) null != e && !1 !== b(d.ME, e.id, r) && (n = !0);
    return n;
}
function T(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, activities: i } = e;
            return b(null != t ? t : d.ME, n.id, i, r);
        })
        .some((e) => e);
}
function S(e) {
    let { guildId: t, members: n } = e;
    return C(
        t,
        n.map((e) => e.presence),
    );
}
function A(e) {
    let { guildId: t, addedMembers: n } = e;
    return (
        null != n &&
        C(
            t,
            n.map((e) => e.presence),
        )
    );
}
function C(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && b(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function N() {
    let e = l.default.getId(),
        t = u.Z.getActivities();
    return b(d.ME, e, t);
}
function R(e) {
    let { relationship: t } = e;
    if (!c.Z.isBlocked(t.id) && !c.Z.isIgnored(t.id)) return !1;
    let n = p[t.id];
    if (null == n) return !1;
    for (let e of a().values(n)) {
        let n = h.get(e);
        null != n && n.delete(t.id);
    }
}
function P(e) {
    let { relationship: t } = e,
        n = p[t.id];
    if (null == n) return !1;
    for (let e of a().values(n)) {
        let n = h.get(e);
        null != n && n.add(t.id);
    }
}
class D extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([u.Z], N), this.waitFor(l.default, c.Z, u.Z);
    }
    getParty(e) {
        return null != e && h.has(e) ? h.get(e) : null;
    }
    getUserParties() {
        return p;
    }
    getParties() {
        return h;
    }
}
f(D, "displayName", "GamePartyStore");
let w = new D(s.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: y,
    OVERLAY_INITIALIZE: O,
    GUILD_CREATE: v,
    PRESENCES_REPLACE: I,
    PRESENCE_UPDATES: T,
    THREAD_MEMBER_LIST_UPDATE: S,
    THREAD_MEMBERS_UPDATE: A,
    RELATIONSHIP_ADD: R,
    RELATIONSHIP_UPDATE: R,
    RELATIONSHIP_REMOVE: P,
});
