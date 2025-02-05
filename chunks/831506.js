n.d(t, { Z: () => S }), n(47120);
var i,
    l,
    a,
    r = n(392711),
    s = n.n(r),
    o = n(442837),
    c = n(570140),
    d = n(314897),
    u = n(699516),
    m = n(885110),
    _ = n(981631);
let h = {},
    p = {};
function g(e, t) {
    var n;
    return (null !== (n = h[e]) && void 0 !== n ? n : {})[t];
}
function f(e, t) {
    let n = g(e, t);
    if (null == n) return;
    let i = h[e];
    delete i[t], s().isEmpty(i) && delete h[e];
    let l = p[n];
    null != l && (l.delete(e), 0 === l.size && delete p[n]);
}
function x(e, t, n, i) {
    let l = n.find((e) => null != e.party && e.party.id),
        a = null != l && null != l.party ? l.party.id : null,
        r = g(t, e);
    if (null == a || i === _.Skl.OFFLINE) return null != r && void f(t, e);
    if (null != r) {
        if (r === a) return !1;
        f(t, e);
    }
    !(function (e, t, n) {
        var i;
        let l = h[e];
        if ((null == l && (l = h[e] = {}), (l[t] = n), u.Z.isBlocked(e) || u.Z.isIgnored(e))) return;
        let a = null !== (i = p[n]) && void 0 !== i ? i : new Set();
        (p[n] = a), a.add(e);
    })(t, e, a);
}
function C(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: i, activities: l } of t.presences) !1 !== x(t.id, e.id, l, i) && (n = !0);
    return n;
}
function v(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && x(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function E() {
    let e = d.default.getId(),
        t = m.Z.getActivities();
    return x(_.ME, e, t);
}
function I(e) {
    let { relationship: t } = e;
    if (!u.Z.isBlocked(t.id) && !u.Z.isIgnored(t.id)) return !1;
    let n = h[t.id];
    if (null == n) return !1;
    for (let e of s().values(n)) {
        let n = p[e];
        null != n && n.delete(t.id);
    }
}
class N extends (i = o.ZP.Store) {
    initialize() {
        this.syncWith([m.Z], E), this.waitFor(m.Z, u.Z);
    }
    getParty(e) {
        return null != e && null != p[e] ? p[e] : null;
    }
    getUserParties() {
        return h;
    }
    getParties() {
        return p;
    }
}
(a = 'GamePartyStore'),
    (l = 'displayName') in N
        ? Object.defineProperty(N, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (N[l] = a);
let S = new N(c.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            i = !1;
        for (let { user: e, status: t, activities: l } of n) null != e && !1 !== x(_.ME, e.id, l, t) && (i = !0);
        for (let e of t) !1 !== C({ guild: e }) && (i = !0);
        return i;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (p = {}), (h = { ...n }), Object.keys(t).forEach((e) => (p[e] = new Set(t[e])));
    },
    GUILD_CREATE: C,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: i } of t) null != e && !1 !== x(_.ME, e.id, i) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: i, activities: l } = e;
                return x(null != t ? t : _.ME, n.id, l, i);
            })
            .some((e) => e);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return v(
            t,
            n.map((e) => e.presence)
        );
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return (
            null != n &&
            v(
                t,
                n.map((e) => e.presence)
            )
        );
    },
    RELATIONSHIP_ADD: I,
    RELATIONSHIP_UPDATE: I,
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = h[t.id];
        if (null == n) return !1;
        for (let e of s().values(n)) {
            let n = p[e];
            null != n && n.add(t.id);
        }
    }
});
