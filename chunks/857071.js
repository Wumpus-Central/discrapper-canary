"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(228366),
    s = n(260509),
    a = n(696451),
    o = n(71393),
    l = n(287809),
    d = n(652215);
let _ = [],
    u = {},
    c = null;
function E(e) {
    let t = _.indexOf(e);
    if (t > -1) {
        let n = [..._];
        return n.splice(t, 1), (_ = n), delete u[e], !0;
    }
    return !1;
}
function h(e) {
    return !(e === d.ME || _.includes(e)) && ((_ = [..._, e]), !0);
}
class m extends i.Ay.Store {
    static displayName = "LurkingStore";
    initialize() {
        this.waitFor(a.Ay, o.A, l.default);
    }
    lurkingGuildIds() {
        return _;
    }
    mostRecentLurkedGuildId() {
        return 0 === _.length ? null : _[_.length - 1];
    }
    isLurking(e) {
        let t = o.A.getGuild(e);
        if (null == t) return !1;
        let n = a.Ay.isCurrentUserGuest(e),
            i = (0, s.DG)(t);
        return !!(!n && i);
    }
    getLurkingSource() {
        return c;
    }
    getLoadId(e) {
        return null != e ? u[e] : null;
    }
}
let f = new m(r.h, {
    CONNECTION_OPEN: function () {
        _ = o.A.getGuildsArray()
            .filter((e) => (0, s.DG)(e))
            .map((e) => e.id);
    },
    GUILD_JOIN: function (e) {
        let { guildId: t, lurker: n, source: i, directoryChannelId: r, loadId: s } = e;
        if (n) {
            switch ((h(t), null != s && (u[t] = s), i)) {
                case d.Q4z.MOBILE_GUILD_DISCOVERY:
                    c = { type: d.Q4z.MOBILE_GUILD_DISCOVERY };
                    break;
                case d.Q4z.DIRECTORY_ENTRY:
                    c = { type: d.Q4z.DIRECTORY_ENTRY, directoryChannelId: r };
                    break;
                default:
                    c = null;
            }
            return !0;
        }
        return !1;
    },
    GUILD_STOP_LURKING: function (e) {
        let t,
            { ignoredGuildIds: n } = e,
            i = ((t = new Set([...(n ?? [])])), [..._].reduce((e, n) => (t.has(n) ? e : E(n) || e), !1));
        return i && (c = null), i;
    },
    GUILD_STOP_LURKING_FAILURE: function (e) {
        let { lurkingGuildId: t, lurkingSource: n } = e;
        return h(t), (c = n), !0;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return !!(null != t.joined_at && _.includes(t.id)) && (E(t.id), (c = null), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return !!_.includes(t.id) && (E(t.id), (c = null), !0);
    },
    GUILD_MEMBER_ADD: function (e) {
        let { guildId: t, joinedAt: n, user: i } = e;
        return i.id === l.default.getCurrentUser()?.id && null != n && !!_.includes(t) && (E(t), (c = null), !0);
    },
});
