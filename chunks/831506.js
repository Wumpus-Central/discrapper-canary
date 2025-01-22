n(47120);
var i,
    r,
    l,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    u = n(570140),
    d = n(314897),
    m = n(699516),
    h = n(885110),
    f = n(981631);
let p = {},
    _ = {};
function g(e, t) {
    var n;
    return (null !== (n = p[e]) && void 0 !== n ? n : {})[t];
}
function E(e, t) {
    let n = g(e, t);
    if (null == n) return;
    let i = p[e];
    delete i[t], s().isEmpty(i) && delete p[e];
    let r = _[n];
    null != r && (r.delete(e), 0 === r.size && delete _[n]);
}
function C(e, t, n, i) {
    let r = n.find((e) => null != e.party && e.party.id),
        l = null != r && null != r.party ? r.party.id : null,
        a = g(t, e);
    if (null == l || i === f.Skl.OFFLINE) return null != a && (E(t, e), void 0);
    if (null != a) {
        if (a === l) return !1;
        E(t, e);
    }
    !(function (e, t, n) {
        var i;
        let r = p[e];
        if ((null == r && (r = p[e] = {}), (r[t] = n), m.Z.isBlocked(e) || m.Z.isIgnored(e))) return;
        let l = null !== (i = _[n]) && void 0 !== i ? i : new Set();
        (_[n] = l), l.add(e);
    })(t, e, l);
}
function I(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: i, activities: r } of t.presences) !1 !== C(t.id, e.id, r, i) && (n = !0);
    return n;
}
function x(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && C(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function N() {
    let e = d.default.getId(),
        t = h.Z.getActivities();
    return C(f.ME, e, t);
}
function v(e) {
    let { relationship: t } = e;
    if (!m.Z.isBlocked(t.id) && !m.Z.isIgnored(t.id)) return !1;
    let n = p[t.id];
    if (null == n) return !1;
    for (let e of s().values(n)) {
        let n = _[e];
        null != n && n.delete(t.id);
    }
}
class T extends (i = c.ZP.Store) {
    initialize() {
        this.syncWith([h.Z], N), this.waitFor(h.Z, m.Z);
    }
    getParty(e) {
        return null != e && null != _[e] ? _[e] : null;
    }
    getUserParties() {
        return p;
    }
    getParties() {
        return _;
    }
}
(a = 'GamePartyStore'),
    (l = 'displayName') in (r = T)
        ? Object.defineProperty(r, l, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[l] = a),
    (t.Z = new T(u.Z, {
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
                i = !1;
            for (let { user: e, status: t, activities: r } of n) null != e && !1 !== C(f.ME, e.id, r, t) && (i = !0);
            for (let e of t) !1 !== I({ guild: e }) && (i = !0);
            return i;
        },
        OVERLAY_INITIALIZE: function (e) {
            let { parties: t, userParties: n } = e;
            (_ = {}), (p = { ...n }), Object.keys(t).forEach((e) => (_[e] = new Set(t[e])));
        },
        GUILD_CREATE: I,
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e,
                n = !1;
            for (let { user: e, activities: i } of t) null != e && !1 !== C(f.ME, e.id, i) && (n = !0);
            return n;
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t
                .map((e) => {
                    let { guildId: t, user: n, status: i, activities: r } = e;
                    return C(null != t ? t : f.ME, n.id, r, i);
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
        RELATIONSHIP_ADD: v,
        RELATIONSHIP_UPDATE: v,
        RELATIONSHIP_REMOVE: function (e) {
            let { relationship: t } = e,
                n = p[t.id];
            if (null == n) return !1;
            for (let e of s().values(n)) {
                let n = _[e];
                null != n && n.add(t.id);
            }
        }
    }));
