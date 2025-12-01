n.d(t, { Z: () => D }), n(388685);
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
function p(e) {
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
let _ = {},
    m = new Map();
function h(e, t) {
    var n;
    return (null != (n = _[e]) ? n : {})[t];
}
function g(e, t) {
    let n = h(e, t);
    if (null == n) return;
    let r = _[e];
    delete r[t], a().isEmpty(r) && delete _[e];
    let i = m.get(n);
    null != i && (i.delete(e), 0 === i.size && m.delete(n));
}
function E(e, t, n) {
    var r;
    let i = _[e];
    if ((null == i && (i = _[e] = {}), (i[t] = n), c.Z.isBlocked(e) || c.Z.isIgnored(e))) return;
    let a = null != (r = m.get(n)) ? r : new Set();
    m.set(n, a), a.add(e);
}
function b(e, t, n, r) {
    let i = n.find((e) => null != e.party && e.party.id),
        a = null != i && null != i.party ? i.party.id : null,
        o = h(t, e);
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
    (m = new Map()), (_ = p({}, n)), Object.keys(t).forEach((e) => m.set(e, new Set(t[e])));
}
function v(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: i } of t.presences) !1 !== b(t.id, e.id, i, r) && (n = !0);
    return n;
}
function S(e) {
    let { presences: t } = e,
        n = !1;
    for (let { user: e, activities: r } of t) null != e && !1 !== b(d.ME, e.id, r) && (n = !0);
    return n;
}
function I(e) {
    let { updates: t } = e;
    return t
        .map((e) => {
            let { guildId: t, user: n, status: r, activities: i } = e;
            return b(null != t ? t : d.ME, n.id, i, r);
        })
        .some((e) => e);
}
function T(e) {
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
function P(e) {
    let { relationship: t } = e;
    if (!c.Z.isBlocked(t.id) && !c.Z.isIgnored(t.id)) return !1;
    let n = _[t.id];
    if (null == n) return !1;
    for (let e of a().values(n)) {
        let n = m.get(e);
        null != n && n.delete(t.id);
    }
}
function R(e) {
    let { relationship: t } = e,
        n = _[t.id];
    if (null == n) return !1;
    for (let e of a().values(n)) {
        let n = m.get(e);
        null != n && n.add(t.id);
    }
}
class w extends (r = o.ZP.Store) {
    initialize() {
        this.syncWith([u.Z], N), this.waitFor(l.default, c.Z, u.Z);
    }
    getParty(e) {
        return null != e && m.has(e) ? m.get(e) : null;
    }
    getUserParties() {
        return _;
    }
    getParties() {
        return m;
    }
}
f(w, "displayName", "GamePartyStore");
let D = new w(s.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: y,
    OVERLAY_INITIALIZE: O,
    GUILD_CREATE: v,
    PRESENCES_REPLACE: S,
    PRESENCE_UPDATES: I,
    THREAD_MEMBER_LIST_UPDATE: T,
    THREAD_MEMBERS_UPDATE: A,
    RELATIONSHIP_ADD: P,
    RELATIONSHIP_UPDATE: P,
    RELATIONSHIP_REMOVE: R,
});
