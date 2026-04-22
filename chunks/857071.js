"use strict";
n.d(t, { A: () => p });
var r = n(311907),
    i = n(73153),
    s = n(260509),
    a = n(696451),
    o = n(71393),
    l = n(287809),
    u = n(652215);
let d = [],
    c = {},
    _ = null;
function f(e) {
    let t = d.indexOf(e);
    if (t > -1) {
        let n = [...d];
        return n.splice(t, 1), (d = n), delete c[e], !0;
    }
    return !1;
}
function E(e) {
    return !(e === u.ME || d.includes(e)) && ((d = [...d, e]), !0);
}
class h extends r.Ay.Store {
    static displayName = "LurkingStore";
    initialize() {
        this.waitFor(a.Ay, o.A, l.default);
    }
    lurkingGuildIds() {
        return d;
    }
    mostRecentLurkedGuildId() {
        return 0 === d.length ? null : d[d.length - 1];
    }
    isLurking(e) {
        let t = o.A.getGuild(e);
        if (null == t) return !1;
        let n = a.Ay.isCurrentUserGuest(e),
            r = (0, s.DG)(t);
        return !!(!n && r);
    }
    getLurkingSource() {
        return _;
    }
    getLoadId(e) {
        return null != e ? c[e] : null;
    }
}
let p = new h(i.h, {
    CONNECTION_OPEN: function () {
        d = o.A.getGuildsArray()
            .filter((e) => (0, s.DG)(e))
            .map((e) => e.id);
    },
    GUILD_JOIN: function (e) {
        let { guildId: t, lurker: n, source: r, directoryChannelId: i, loadId: s } = e;
        if (n) {
            switch ((E(t), null != s && (c[t] = s), r)) {
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
    },
    GUILD_STOP_LURKING: function (e) {
        let t,
            { ignoredGuildIds: n } = e,
            r = ((t = new Set([...(n ?? [])])), [...d].reduce((e, n) => (t.has(n) ? e : f(n) || e), !1));
        return r && (_ = null), r;
    },
    GUILD_STOP_LURKING_FAILURE: function (e) {
        let { lurkingGuildId: t, lurkingSource: n } = e;
        return E(t), (_ = n), !0;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return !!(null != t.joined_at && d.includes(t.id)) && (f(t.id), (_ = null), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return !!d.includes(t.id) && (f(t.id), (_ = null), !0);
    },
    GUILD_MEMBER_ADD: function (e) {
        let { guildId: t, joinedAt: n, user: r } = e;
        return r.id === l.default.getCurrentUser()?.id && null != n && !!d.includes(t) && (f(t), (_ = null), !0);
    },
});
