n(47120);
var l,
    r,
    i,
    a,
    u = n(392711),
    o = n.n(u),
    s = n(442837),
    d = n(570140),
    c = n(314897),
    f = n(699516),
    Z = n(885110),
    g = n(981631);
let S = {},
    E = {};
function P(e, t) {
    var n;
    return (null !== (n = S[e]) && void 0 !== n ? n : {})[t];
}
function m(e, t) {
    let n = P(e, t);
    if (null == n) return;
    let l = S[e];
    delete l[t], o().isEmpty(l) && delete S[e];
    let r = E[n];
    null != r && (r.delete(e), 0 === r.size && delete E[n]);
}
function v(e, t, n, l) {
    let r = n.find((e) => null != e.party && e.party.id),
        i = null != r && null != r.party ? r.party.id : null,
        a = P(t, e);
    if (null == i || l === g.Skl.OFFLINE) return null != a && (m(t, e), void 0);
    if (null != a) {
        if (a === i) return !1;
        m(t, e);
    }
    !(function (e, t, n) {
        var l;
        let r = S[e];
        if ((null == r && (r = S[e] = {}), (r[t] = n), f.Z.isBlocked(e) || f.Z.isIgnored(e))) return;
        let i = null !== (l = E[n]) && void 0 !== l ? l : new Set();
        (E[n] = i), i.add(e);
    })(t, e, i);
}
function I(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: l, activities: r } of t.presences) !1 !== v(t.id, e.id, r, l) && (n = !0);
    return n;
}
function p(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && v(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function A() {
    let e = c.default.getId(),
        t = Z.Z.getActivities();
    return v(g.ME, e, t);
}
function y(e) {
    let { relationship: t } = e;
    if (!f.Z.isBlocked(t.id) && !f.Z.isIgnored(t.id)) return !1;
    let n = S[t.id];
    if (null == n) return !1;
    for (let e of o().values(n)) {
        let n = E[e];
        null != n && n.delete(t.id);
    }
}
class O extends (l = s.ZP.Store) {
    initialize() {
        this.syncWith([Z.Z], A), this.waitFor(Z.Z, f.Z);
    }
    getParty(e) {
        return null != e && null != E[e] ? E[e] : null;
    }
    getUserParties() {
        return S;
    }
    getParties() {
        return E;
    }
}
(a = 'GamePartyStore'),
    (i = 'displayName') in (r = O)
        ? Object.defineProperty(r, i, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (r[i] = a),
    (t.Z = new O(d.Z, {
        CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
            let { guilds: t, presences: n } = e,
                l = !1;
            for (let { user: e, status: t, activities: r } of n) null != e && !1 !== v(g.ME, e.id, r, t) && (l = !0);
            for (let e of t) !1 !== I({ guild: e }) && (l = !0);
            return l;
        },
        OVERLAY_INITIALIZE: function (e) {
            let { parties: t, userParties: n } = e;
            (E = {}), (S = { ...n }), Object.keys(t).forEach((e) => (E[e] = new Set(t[e])));
        },
        GUILD_CREATE: I,
        PRESENCES_REPLACE: function (e) {
            let { presences: t } = e,
                n = !1;
            for (let { user: e, activities: l } of t) null != e && !1 !== v(g.ME, e.id, l) && (n = !0);
            return n;
        },
        PRESENCE_UPDATES: function (e) {
            let { updates: t } = e;
            return t
                .map((e) => {
                    let { guildId: t, user: n, status: l, activities: r } = e;
                    return v(null != t ? t : g.ME, n.id, r, l);
                })
                .some((e) => e);
        },
        THREAD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, members: n } = e;
            return p(
                t,
                n.map((e) => e.presence)
            );
        },
        THREAD_MEMBERS_UPDATE: function (e) {
            let { guildId: t, addedMembers: n } = e;
            return (
                null != n &&
                p(
                    t,
                    n.map((e) => e.presence)
                )
            );
        },
        RELATIONSHIP_ADD: y,
        RELATIONSHIP_UPDATE: y,
        RELATIONSHIP_REMOVE: function (e) {
            let { relationship: t } = e,
                n = S[t.id];
            if (null == n) return !1;
            for (let e of o().values(n)) {
                let n = E[e];
                null != n && n.add(t.id);
            }
        }
    }));
