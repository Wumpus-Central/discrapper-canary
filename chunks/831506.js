n.d(t, { Z: () => O }), n(47120);
var l,
    r,
    i,
    a = n(392711),
    u = n.n(a),
    o = n(442837),
    s = n(570140),
    d = n(314897),
    c = n(699516),
    f = n(885110),
    Z = n(981631);
let g = {},
    S = {};
function E(e, t) {
    var n;
    return (null !== (n = g[e]) && void 0 !== n ? n : {})[t];
}
function P(e, t) {
    let n = E(e, t);
    if (null == n) return;
    let l = g[e];
    delete l[t], u().isEmpty(l) && delete g[e];
    let r = S[n];
    null != r && (r.delete(e), 0 === r.size && delete S[n]);
}
function m(e, t, n, l) {
    let r = n.find((e) => null != e.party && e.party.id),
        i = null != r && null != r.party ? r.party.id : null,
        a = E(t, e);
    if (null == i || l === Z.Skl.OFFLINE) return null != a && void P(t, e);
    if (null != a) {
        if (a === i) return !1;
        P(t, e);
    }
    !(function (e, t, n) {
        var l;
        let r = g[e];
        if ((null == r && (r = g[e] = {}), (r[t] = n), c.Z.isBlocked(e) || c.Z.isIgnored(e))) return;
        let i = null !== (l = S[n]) && void 0 !== l ? l : new Set();
        (S[n] = i), i.add(e);
    })(t, e, i);
}
function v(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: l, activities: r } of t.presences) !1 !== m(t.id, e.id, r, l) && (n = !0);
    return n;
}
function I(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && m(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function p() {
    let e = d.default.getId(),
        t = f.Z.getActivities();
    return m(Z.ME, e, t);
}
function A(e) {
    let { relationship: t } = e;
    if (!c.Z.isBlocked(t.id) && !c.Z.isIgnored(t.id)) return !1;
    let n = g[t.id];
    if (null == n) return !1;
    for (let e of u().values(n)) {
        let n = S[e];
        null != n && n.delete(t.id);
    }
}
class y extends (l = o.ZP.Store) {
    initialize() {
        this.syncWith([f.Z], p), this.waitFor(f.Z, c.Z);
    }
    getParty(e) {
        return null != e && null != S[e] ? S[e] : null;
    }
    getUserParties() {
        return g;
    }
    getParties() {
        return S;
    }
}
(i = 'GamePartyStore'),
    (r = 'displayName') in y
        ? Object.defineProperty(y, r, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (y[r] = i);
let O = new y(s.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            l = !1;
        for (let { user: e, status: t, activities: r } of n) null != e && !1 !== m(Z.ME, e.id, r, t) && (l = !0);
        for (let e of t) !1 !== v({ guild: e }) && (l = !0);
        return l;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (S = {}), (g = { ...n }), Object.keys(t).forEach((e) => (S[e] = new Set(t[e])));
    },
    GUILD_CREATE: v,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: l } of t) null != e && !1 !== m(Z.ME, e.id, l) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: l, activities: r } = e;
                return m(null != t ? t : Z.ME, n.id, r, l);
            })
            .some((e) => e);
    },
    THREAD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, members: n } = e;
        return I(
            t,
            n.map((e) => e.presence)
        );
    },
    THREAD_MEMBERS_UPDATE: function (e) {
        let { guildId: t, addedMembers: n } = e;
        return (
            null != n &&
            I(
                t,
                n.map((e) => e.presence)
            )
        );
    },
    RELATIONSHIP_ADD: A,
    RELATIONSHIP_UPDATE: A,
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = g[t.id];
        if (null == n) return !1;
        for (let e of u().values(n)) {
            let n = S[e];
            null != n && n.add(t.id);
        }
    }
});
