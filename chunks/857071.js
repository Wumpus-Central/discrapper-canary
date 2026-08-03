"use strict";
n.d(t, { A: () => f });
var i = n(17928),
    r = n(228366),
    a = n(260509),
    s = n(696451),
    l = n(71393),
    o = n(287809),
    d = n(652215);
let c = [],
    u = {},
    _ = {};
function E(e) {
    let t = c.indexOf(e);
    if (t > -1) {
        let n = [...c];
        return n.splice(t, 1), (c = n), delete u[e], delete _[e], !0;
    }
    return !1;
}
function A(e) {
    return !(e === d.ME || c.includes(e)) && ((c = [...c, e]), !0);
}
function h(e, t) {
    null == t ? delete _[e] : (_[e] = t);
}
class I extends i.Ay.Store {
    static displayName = "LurkingStore";
    initialize() {
        this.waitFor(s.Ay, l.A, o.default);
    }
    lurkingGuildIds() {
        return c;
    }
    mostRecentLurkedGuildId() {
        return 0 === c.length ? null : c[c.length - 1];
    }
    isLurking(e) {
        let t = l.A.getGuild(e);
        if (null == t) return !1;
        let n = s.Ay.isCurrentUserGuest(e),
            i = (0, a.DG)(t);
        return !!(!n && i);
    }
    getLurkingSourceForGuild(e) {
        return null == e ? null : (_[e] ?? null);
    }
    getLoadId(e) {
        return null != e ? u[e] : null;
    }
}
let f = new I(r.h, {
    CONNECTION_OPEN: function () {
        (c = l.A.getGuildsArray()
            .filter((e) => (0, a.DG)(e))
            .map((e) => e.id)),
            (_ = {});
    },
    GUILD_JOIN: function (e) {
        let { guildId: t, lurker: n, source: i, directoryChannelId: r, loadId: a } = e;
        if (n) {
            switch ((A(t), null != a && (u[t] = a), i)) {
                case d.Q4z.MOBILE_GUILD_DISCOVERY:
                    h(t, { type: d.Q4z.MOBILE_GUILD_DISCOVERY });
                    break;
                case d.Q4z.DIRECTORY_ENTRY:
                    h(t, { type: d.Q4z.DIRECTORY_ENTRY, directoryChannelId: r });
                    break;
                default:
                    h(t, null);
            }
            return !0;
        }
        return !1;
    },
    GUILD_STOP_LURKING: function (e) {
        let t,
            { ignoredGuildIds: n } = e;
        return (t = new Set([...(n ?? [])])), [...c].reduce((e, n) => (t.has(n) ? e : E(n) || e), !1);
    },
    GUILD_STOP_LURKING_FAILURE: function (e) {
        let { lurkingGuildId: t, lurkingSource: n } = e;
        return A(t), h(t, n), !0;
    },
    GUILD_CREATE: function (e) {
        let { guild: t } = e;
        return !!(null != t.joined_at && c.includes(t.id)) && (E(t.id), !0);
    },
    GUILD_DELETE: function (e) {
        let { guild: t } = e;
        return !!c.includes(t.id) && (E(t.id), !0);
    },
    GUILD_MEMBER_ADD: function (e) {
        let { guildId: t, joinedAt: n, user: i } = e;
        return i.id === o.default.getCurrentUser()?.id && null != n && !!c.includes(t) && (E(t), !0);
    },
});
