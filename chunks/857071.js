"use strict";
n.d(t, { A: () => C });
var r = n(311907),
    i = n(73153),
    a = n(260509),
    s = n(696451),
    o = n(71393),
    l = n(287809),
    u = n(652215);
let c = [],
    d = {},
    _ = null;
function f(e) {
    let t = new Set([...(e ?? [])]);
    return [...c].reduce((e, n) => (t.has(n) ? e : p(n) || e), !1);
}
function p(e) {
    let t = c.indexOf(e);
    if (t > -1) {
        let n = [...c];
        return n.splice(t, 1), (c = n), delete d[e], !0;
    }
    return !1;
}
function h(e) {
    return !(e === u.ME || c.includes(e)) && ((c = [...c, e]), !0);
}
function m(e, t) {
    null != t && (d[e] = t);
}
function g(e) {
    let { guildId: t, lurker: n, source: r, directoryChannelId: i, loadId: a } = e;
    if (n) {
        switch ((h(t), m(t, a), r)) {
            case u.Q4z.MOBILE_GUILD_DISCOVERY:
                _ = { type: u.Q4z.MOBILE_GUILD_DISCOVERY };
                break;
            case u.Q4z.DIRECTORY_ENTRY:
                _ = { type: u.Q4z.DIRECTORY_ENTRY, directoryChannelId: i };
                break;
            default:
                _ = null;
        }
        return !0;
    }
    return !1;
}
function E(e) {
    let { guild: t } = e;
    return !!(null != t.joined_at && c.includes(t.id)) && (p(t.id), (_ = null), !0);
}
function A(e) {
    let { guildId: t, joinedAt: n, user: r } = e,
        i = r.id === l.default.getCurrentUser()?.id,
        a = null == n;
    return !!i && !a && !!c.includes(t) && (p(t), (_ = null), !0);
}
function I(e) {
    let { guild: t } = e;
    return !!c.includes(t.id) && (p(t.id), (_ = null), !0);
}
function T(e) {
    let { ignoredGuildIds: t } = e,
        n = f(t);
    return n && (_ = null), n;
}
function y(e) {
    let { lurkingGuildId: t, lurkingSource: n } = e;
    return h(t), (_ = n), !0;
}
function S() {
    c = o.A.getGuildsArray()
        .filter((e) => (0, a.DG)(e))
        .map((e) => e.id);
}
class v extends r.Ay.Store {
    static displayName = "LurkingStore";
    initialize() {
        this.waitFor(s.Ay, o.A, l.default);
    }
    lurkingGuildIds() {
        return c;
    }
    mostRecentLurkedGuildId() {
        return 0 === c.length ? null : c[c.length - 1];
    }
    isLurking(e) {
        let t = o.A.getGuild(e);
        if (null == t) return !1;
        let n = s.Ay.isCurrentUserGuest(e),
            r = (0, a.DG)(t);
        return !!(!n && r);
    }
    getLurkingSource() {
        return _;
    }
    getLoadId(e) {
        return null != e ? d[e] : null;
    }
}
let C = new v(i.h, {
    CONNECTION_OPEN: S,
    GUILD_JOIN: g,
    GUILD_STOP_LURKING: T,
    GUILD_STOP_LURKING_FAILURE: y,
    GUILD_CREATE: E,
    GUILD_DELETE: I,
    GUILD_MEMBER_ADD: A,
});
