n.d(t, { Z: () => y }), n(47120);
var l,
    i,
    r,
    a = n(392711),
    s = n.n(a),
    o = n(442837),
    u = n(570140),
    c = n(314897),
    d = n(699516),
    m = n(885110),
    f = n(981631);
let h = {},
    g = {};
function p(e, t) {
    var n;
    return (null !== (n = h[e]) && void 0 !== n ? n : {})[t];
}
function v(e, t) {
    let n = p(e, t);
    if (null == n) return;
    let l = h[e];
    delete l[t], s().isEmpty(l) && delete h[e];
    let i = g[n];
    null != i && (i.delete(e), 0 === i.size && delete g[n]);
}
function S(e, t, n, l) {
    let i = n.find((e) => null != e.party && e.party.id),
        r = null != i && null != i.party ? i.party.id : null,
        a = p(t, e);
    if (null == r || l === f.Skl.OFFLINE) return null != a && void v(t, e);
    if (null != a) {
        if (a === r) return !1;
        v(t, e);
    }
    !(function (e, t, n) {
        var l;
        let i = h[e];
        if ((null == i && (i = h[e] = {}), (i[t] = n), d.Z.isBlocked(e) || d.Z.isIgnored(e))) return;
        let r = null !== (l = g[n]) && void 0 !== l ? l : new Set();
        (g[n] = r), r.add(e);
    })(t, e, r);
}
function I(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: l, activities: i } of t.presences) !1 !== S(t.id, e.id, i, l) && (n = !0);
    return n;
}
function x(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && S(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function E() {
    let e = c.default.getId(),
        t = m.Z.getActivities();
    return S(f.ME, e, t);
}
function T(e) {
    let { relationship: t } = e;
    if (!d.Z.isBlocked(t.id) && !d.Z.isIgnored(t.id)) return !1;
    let n = h[t.id];
    if (null == n) return !1;
    for (let e of s().values(n)) {
        let n = g[e];
        null != n && n.delete(t.id);
    }
}
class Z extends (l = o.ZP.Store) {
    initialize() {
        this.syncWith([m.Z], E), this.waitFor(m.Z, d.Z);
    }
    getParty(e) {
        return null != e && null != g[e] ? g[e] : null;
    }
    getUserParties() {
        return h;
    }
    getParties() {
        return g;
    }
}
(r = 'GamePartyStore'),
    (i = 'displayName') in Z
        ? Object.defineProperty(Z, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (Z[i] = r);
let y = new Z(u.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            l = !1;
        for (let { user: e, status: t, activities: i } of n) null != e && !1 !== S(f.ME, e.id, i, t) && (l = !0);
        for (let e of t) !1 !== I({ guild: e }) && (l = !0);
        return l;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (g = {}), (h = { ...n }), Object.keys(t).forEach((e) => (g[e] = new Set(t[e])));
    },
    GUILD_CREATE: I,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: l } of t) null != e && !1 !== S(f.ME, e.id, l) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: l, activities: i } = e;
                return S(null != t ? t : f.ME, n.id, i, l);
            })
            .some((e) => e);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return x(
            t,
            n.map((e) => e.presence)
        );
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return (
            null != n &&
            x(
                t,
                n.map((e) => e.presence)
            )
        );
    },
    RELATIONSHIP_ADD: T,
    RELATIONSHIP_UPDATE: T,
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = h[t.id];
        if (null == n) return !1;
        for (let e of s().values(n)) {
            let n = g[e];
            null != n && n.add(t.id);
        }
    }
});
