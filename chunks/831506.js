n.d(t, { Z: () => A }), n(47120);
var l,
    r = n(392711),
    i = n.n(r),
    a = n(442837),
    u = n(570140),
    o = n(314897),
    s = n(699516),
    c = n(885110),
    f = n(981631);
function d(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let g = {},
    Z = {};
function P(e, t) {
    var n;
    return (null != (n = g[e]) ? n : {})[t];
}
function S(e, t) {
    let n = P(e, t);
    if (null == n) return;
    let l = g[e];
    delete l[t], i().isEmpty(l) && delete g[e];
    let r = Z[n];
    null != r && (r.delete(e), 0 === r.size && delete Z[n]);
}
function E(e, t, n, l) {
    let r = n.find((e) => null != e.party && e.party.id),
        i = null != r && null != r.party ? r.party.id : null,
        a = P(t, e);
    if (null == i || l === f.Skl.OFFLINE) return null != a && void S(t, e);
    if (null != a) {
        if (a === i) return !1;
        S(t, e);
    }
    !(function (e, t, n) {
        var l;
        let r = g[e];
        if ((null == r && (r = g[e] = {}), (r[t] = n), s.Z.isBlocked(e) || s.Z.isIgnored(e))) return;
        let i = null != (l = Z[n]) ? l : new Set();
        (Z[n] = i), i.add(e);
    })(t, e, i);
}
function m(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: l, activities: r } of t.presences) !1 !== E(t.id, e.id, r, l) && (n = !0);
    return n;
}
function p(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && E(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function I() {
    let e = o.default.getId(),
        t = c.Z.getActivities();
    return E(f.ME, e, t);
}
function y(e) {
    let { relationship: t } = e;
    if (!s.Z.isBlocked(t.id) && !s.Z.isIgnored(t.id)) return !1;
    let n = g[t.id];
    if (null == n) return !1;
    for (let e of i().values(n)) {
        let n = Z[e];
        null != n && n.delete(t.id);
    }
}
class O extends (l = a.ZP.Store) {
    initialize() {
        this.syncWith([c.Z], I), this.waitFor(c.Z, s.Z);
    }
    getParty(e) {
        return null != e && null != Z[e] ? Z[e] : null;
    }
    getUserParties() {
        return g;
    }
    getParties() {
        return Z;
    }
}
d(O, 'displayName', 'GamePartyStore');
let A = new O(u.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            l = !1;
        for (let { user: e, status: t, activities: r } of n) null != e && !1 !== E(f.ME, e.id, r, t) && (l = !0);
        for (let e of t) !1 !== m({ guild: e }) && (l = !0);
        return l;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (Z = {}),
            (g = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        l = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (l = l.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        l.forEach(function (t) {
                            d(e, t, n[t]);
                        });
                }
                return e;
            })({}, n)),
            Object.keys(t).forEach((e) => (Z[e] = new Set(t[e])));
    },
    GUILD_CREATE: m,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: l } of t) null != e && !1 !== E(f.ME, e.id, l) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: l, activities: r } = e;
                return E(null != t ? t : f.ME, n.id, r, l);
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
            n = g[t.id];
        if (null == n) return !1;
        for (let e of i().values(n)) {
            let n = Z[e];
            null != n && n.add(t.id);
        }
    }
});
