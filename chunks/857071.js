n.d(t, {
    A: () => C,
}),
    n(896048);
var r,
    i = n(311907),
    a = n(73153),
    s = n(260509),
    o = n(696451),
    l = n(71393),
    c = n(287809),
    u = n(652215);

function d(e, t, n) {
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
let f = [],
    p = {},
    _ = null;

function h(e) {
    let t = new Set([...(null != e ? e : [])]);
    return [...f].reduce((e, n) => (t.has(n) ? e : m(n) || e), !1);
}

function m(e) {
    let t = f.indexOf(e);
    if (t > -1) {
        let n = [...f];
        return n.splice(t, 1), (f = n), delete p[e], !0;
    }
    return !1;
}

function g(e) {
    return !(e === u.ME || f.includes(e)) && ((f = [...f, e]), !0);
}

function E(e, t) {
    null != t && (p[e] = t);
}

function b(e) {
    let { guildId: t, lurker: n, source: r, directoryChannelId: i, loadId: a } = e;
    if (n) {
        switch ((g(t), E(t, a), r)) {
            case u.Q4z.MOBILE_GUILD_DISCOVERY:
                _ = {
                    type: u.Q4z.MOBILE_GUILD_DISCOVERY,
                };
                break;
            case u.Q4z.DIRECTORY_ENTRY:
                _ = {
                    type: u.Q4z.DIRECTORY_ENTRY,
                    directoryChannelId: i,
                };
                break;
            default:
                _ = null;
        }
        return !0;
    }
    return !1;
}

function y(e) {
    let { guild: t } = e;
    return !!(null != t.joined_at && f.includes(t.id)) && (m(t.id), (_ = null), !0);
}

function O(e) {
    var t;
    let { guildId: n, joinedAt: r, user: i } = e,
        a = i.id === (null == (t = c.default.getCurrentUser()) ? void 0 : t.id),
        s = null == r;
    return !!a && !s && !!f.includes(n) && (m(n), (_ = null), !0);
}

function A(e) {
    let { guild: t } = e;
    return !!f.includes(t.id) && (m(t.id), (_ = null), !0);
}

function v(e) {
    let { ignoredGuildIds: t } = e,
        n = h(t);
    return n && (_ = null), n;
}

function S(e) {
    let { lurkingGuildId: t, lurkingSource: n } = e;
    return g(t), (_ = n), !0;
}

function I() {
    f = l.A.getGuildsArray()
        .filter((e) => (0, s.DG)(e))
        .map((e) => e.id);
}
class T extends (r = i.Ay.Store) {
    initialize() {
        this.waitFor(o.Ay, l.A, c.default);
    }
    lurkingGuildIds() {
        return f;
    }
    mostRecentLurkedGuildId() {
        return 0 === f.length ? null : f[f.length - 1];
    }
    isLurking(e) {
        let t = l.A.getGuild(e);
        if (null == t) return !1;
        let n = o.Ay.isCurrentUserGuest(e),
            r = (0, s.DG)(t);
        return !!(!n && r);
    }
    getLurkingSource() {
        return _;
    }
    getLoadId(e) {
        return null != e ? p[e] : null;
    }
}
d(T, "displayName", "LurkingStore");
let C = new T(a.h, {
    CONNECTION_OPEN: I,
    GUILD_JOIN: b,
    GUILD_STOP_LURKING: v,
    GUILD_STOP_LURKING_FAILURE: S,
    GUILD_CREATE: y,
    GUILD_DELETE: A,
    GUILD_MEMBER_ADD: O,
});
