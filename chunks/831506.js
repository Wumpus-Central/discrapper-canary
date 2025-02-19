n.d(t, { Z: () => N }), n(47120);
var r,
    l = n(392711),
    i = n.n(l),
    a = n(442837),
    o = n(570140),
    s = n(314897),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let p = {},
    m = {};
function g(e, t) {
    var n;
    return (null !== (n = p[e]) && void 0 !== n ? n : {})[t];
}
function y(e, t) {
    let n = g(e, t);
    if (null == n) return;
    let r = p[e];
    delete r[t], i().isEmpty(r) && delete p[e];
    let l = m[n];
    null != l && (l.delete(e), 0 === l.size && delete m[n]);
}
function b(e, t, n, r) {
    let l = n.find((e) => null != e.party && e.party.id),
        i = null != l && null != l.party ? l.party.id : null,
        a = g(t, e);
    if (null == i || r === d.Skl.OFFLINE) return null != a && void y(t, e);
    if (null != a) {
        if (a === i) return !1;
        y(t, e);
    }
    !(function (e, t, n) {
        var r;
        let l = p[e];
        if ((null == l && (l = p[e] = {}), (l[t] = n), c.Z.isBlocked(e) || c.Z.isIgnored(e))) return;
        let i = null !== (r = m[n]) && void 0 !== r ? r : new Set();
        (m[n] = i), i.add(e);
    })(t, e, i);
}
function h(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: l } of t.presences) !1 !== b(t.id, e.id, l, r) && (n = !0);
    return n;
}
function v(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && b(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function O() {
    let e = s.default.getId(),
        t = u.Z.getActivities();
    return b(d.ME, e, t);
}
function j(e) {
    let { relationship: t } = e;
    if (!c.Z.isBlocked(t.id) && !c.Z.isIgnored(t.id)) return !1;
    let n = p[t.id];
    if (null == n) return !1;
    for (let e of i().values(n)) {
        let n = m[e];
        null != n && n.delete(t.id);
    }
}
class S extends (r = a.ZP.Store) {
    initialize() {
        this.syncWith([u.Z], O), this.waitFor(u.Z, c.Z);
    }
    getParty(e) {
        return null != e && null != m[e] ? m[e] : null;
    }
    getUserParties() {
        return p;
    }
    getParties() {
        return m;
    }
}
f(S, 'displayName', 'GamePartyStore');
let N = new S(o.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            r = !1;
        for (let { user: e, status: t, activities: l } of n) null != e && !1 !== b(d.ME, e.id, l, t) && (r = !0);
        for (let e of t) !1 !== h({ guild: e }) && (r = !0);
        return r;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (m = {}),
            (p = (function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    'function' == typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(n).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(n, e).enumerable;
                            })
                        )),
                        r.forEach(function (t) {
                            f(e, t, n[t]);
                        });
                }
                return e;
            })({}, n)),
            Object.keys(t).forEach((e) => (m[e] = new Set(t[e])));
    },
    GUILD_CREATE: h,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: r } of t) null != e && !1 !== b(d.ME, e.id, r) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: r, activities: l } = e;
                return b(null != t ? t : d.ME, n.id, l, r);
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
    RELATIONSHIP_ADD: j,
    RELATIONSHIP_UPDATE: j,
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = p[t.id];
        if (null == n) return !1;
        for (let e of i().values(n)) {
            let n = m[e];
            null != n && n.add(t.id);
        }
    }
});
