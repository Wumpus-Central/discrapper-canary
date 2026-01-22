n(896048), n(321073), n(228524);
var r,
    i = n(311907),
    l = n(73153),
    a = n(961350),
    s = n(734057),
    o = n(71393),
    c = n(661191),
    u = n(936649);
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
let p = {};
function f(e, t) {
    let n = p[e];
    return !(null == n || n.has(t)) && ((p[e] = new Set(n.add(t))), !0);
}
class h extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        this.waitFor(a.default, s.A, o.A),
            (p = {}),
            null != e &&
                c.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && "function" == typeof n[Symbol.iterator] && (p[t] = new Set(n));
                });
    }
    getProgress(e) {
        return p[e];
    }
    hasProgress(e) {
        let t = p[e];
        return null != t && !t.has(u.gj.DISMISSED);
    }
    getState() {
        return p;
    }
}
d(h, "displayName", "GuildProgressStore"),
    d(h, "persistKey", "GuildProgressStore"),
    new h(l.h, {
        CONNECTION_OPEN: function () {
            let e = [];
            c.default.keys(p).forEach((t) => {
                p[t].has(u.gj.COMPLETED) && e.push(t);
            }),
                e.forEach((e) => f(e, u.gj.DISMISSED));
        },
        GUILD_PROGRESS_INITIALIZE: function (e) {
            let { guildId: t } = e;
            null == p[t] && (p[t] = new Set()), p[t].has(u.gj.COMPLETED) || p[t].delete(u.gj.DISMISSED);
        },
        GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
            let { guildId: t } = e;
            if (null == p[t]) return !1;
            p[t] = new Set(p[t].add(u.gj.COMPLETED));
        },
        GUILD_PROGRESS_DISMISS: function (e) {
            let { guildId: t } = e;
            return f(t, u.gj.DISMISSED);
        },
        GUILD_CREATE: function (e) {
            let {
                    guild: { id: t, member_count: n },
                } = e,
                r = o.A.getGuild(t);
            if (null == r) return !1;
            r.ownerId === a.default.getId() &&
                null != p[r.id] &&
                (null != r.icon && p[r.id].add(u.gj.AVATAR), n > 1 && p[r.id].add(u.gj.INVITE));
        },
        CHANNEL_CREATE: function (e) {
            let { channel: t } = e;
            return null != t && null != t.guild_id && null != p[t.guild_id] && f(t.guild_id, u.gj.CHANNEL);
        },
        CHANNEL_UPDATES: function (e) {
            let { channels: t } = e,
                n = !1;
            for (let e of t)
                null != e &&
                    null != e.guild_id &&
                    null != p[e.guild_id] &&
                    !1 !== f(e.guild_id, u.gj.CHANNEL) &&
                    (n = !0);
            return n;
        },
        GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
            let { guild: t } = e;
            return null != t && null != t.id && null != p[t.id] && null != t.icon && f(t.id, u.gj.AVATAR);
        },
        MESSAGE_CREATE: function (e) {
            var t;
            let { channelId: n, message: r } = e,
                i = s.A.getChannel(n);
            return (
                (null == (t = r.author) ? void 0 : t.id) === a.default.getId() &&
                null != i &&
                null != p[i.guild_id] &&
                f(i.guild_id, u.gj.MESSAGE)
            );
        },
        GUILD_MEMBER_LIST_UPDATE: function (e) {
            let { guildId: t, memberCount: n } = e;
            return null != p[t] && n > 1 && f(t, u.gj.INVITE);
        },
    });
