n.d(t, { Z: () => O }), n(47120);
var r,
    i = n(392711),
    a = n.n(i),
    l = n(442837),
    o = n(570140),
    s = n(314897),
    c = n(699516),
    u = n(885110),
    d = n(981631);
function p(e, t, n) {
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
let m = {},
    f = {};
function h(e, t) {
    var n;
    return (null != (n = m[e]) ? n : {})[t];
}
function g(e, t) {
    let n = h(e, t);
    if (null == n) return;
    let r = m[e];
    delete r[t], a().isEmpty(r) && delete m[e];
    let i = f[n];
    null != i && (i.delete(e), 0 === i.size && delete f[n]);
}
function _(e, t, n, r) {
    let i = n.find((e) => null != e.party && e.party.id),
        a = null != i && null != i.party ? i.party.id : null,
        l = h(t, e);
    if (null == a || r === d.Skl.OFFLINE) return null != l && void g(t, e);
    if (null != l) {
        if (l === a) return !1;
        g(t, e);
    }
    !(function (e, t, n) {
        var r;
        let i = m[e];
        if ((null == i && (i = m[e] = {}), (i[t] = n), c.Z.isBlocked(e) || c.Z.isIgnored(e))) return;
        let a = null != (r = f[n]) ? r : new Set();
        (f[n] = a), a.add(e);
    })(t, e, a);
}
function b(e) {
    let { guild: t } = e,
        n = !1;
    for (let { user: e, status: r, activities: i } of t.presences) !1 !== _(t.id, e.id, i, r) && (n = !0);
    return n;
}
function x(e, t) {
    let n = !1;
    return (
        t.forEach((t) => {
            null != t && _(e, t.user.id, t.activities, t.status) && (n = !0);
        }),
        n
    );
}
function y() {
    let e = s.default.getId(),
        t = u.Z.getActivities();
    return _(d.ME, e, t);
}
function E(e) {
    let { relationship: t } = e;
    if (!c.Z.isBlocked(t.id) && !c.Z.isIgnored(t.id)) return !1;
    let n = m[t.id];
    if (null == n) return !1;
    for (let e of a().values(n)) {
        let n = f[e];
        null != n && n.delete(t.id);
    }
}
class v extends (r = l.ZP.Store) {
    initialize() {
        this.syncWith([u.Z], y), this.waitFor(u.Z, c.Z);
    }
    getParty(e) {
        return null != e && null != f[e] ? f[e] : null;
    }
    getUserParties() {
        return m;
    }
    getParties() {
        return f;
    }
}
p(v, 'displayName', 'GamePartyStore');
let O = new v(o.Z, {
    CONNECTION_OPEN_SUPPLEMENTAL: function (e) {
        let { guilds: t, presences: n } = e,
            r = !1;
        for (let { user: e, status: t, activities: i } of n) null != e && !1 !== _(d.ME, e.id, i, t) && (r = !0);
        for (let e of t) !1 !== b({ guild: e }) && (r = !0);
        return r;
    },
    OVERLAY_INITIALIZE: function (e) {
        let { parties: t, userParties: n } = e;
        (f = {}),
            (m = (function (e) {
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
                            p(e, t, n[t]);
                        });
                }
                return e;
            })({}, n)),
            Object.keys(t).forEach((e) => (f[e] = new Set(t[e])));
    },
    GUILD_CREATE: b,
    PRESENCES_REPLACE: function (e) {
        let { presences: t } = e,
            n = !1;
        for (let { user: e, activities: r } of t) null != e && !1 !== _(d.ME, e.id, r) && (n = !0);
        return n;
    },
    PRESENCE_UPDATES: function (e) {
        let { updates: t } = e;
        return t
            .map((e) => {
                let { guildId: t, user: n, status: r, activities: i } = e;
                return _(null != t ? t : d.ME, n.id, i, r);
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
    RELATIONSHIP_ADD: E,
    RELATIONSHIP_UPDATE: E,
    RELATIONSHIP_REMOVE: function (e) {
        let { relationship: t } = e,
            n = m[t.id];
        if (null == n) return !1;
        for (let e of a().values(n)) {
            let n = f[e];
            null != n && n.add(t.id);
        }
    }
});
