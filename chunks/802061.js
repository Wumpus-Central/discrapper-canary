n(321073);
var i = n(311907),
    r = n(73153),
    a = n(961350),
    l = n(734057),
    s = n(71393),
    o = n(661191),
    d = n(936649);
let u = {};
function c(e, t) {
    let n = u[e];
    return !(null == n || n.has(t)) && ((u[e] = new Set(n.add(t))), !0);
}
class A extends i.Ay.PersistedStore {
    static displayName = "GuildProgressStore";
    static persistKey = "GuildProgressStore";
    initialize(e) {
        this.waitFor(a.default, l.A, s.A),
            (u = {}),
            null != e &&
                o.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && "function" == typeof n[Symbol.iterator] && (u[t] = new Set(n));
                });
    }
    getProgress(e) {
        return u[e];
    }
    hasProgress(e) {
        let t = u[e];
        return null != t && !t.has(d.gj.DISMISSED);
    }
    getState() {
        return u;
    }
}
new A(r.h, {
    CONNECTION_OPEN: function () {
        let e = [];
        o.default.keys(u).forEach((t) => {
            u[t].has(d.gj.COMPLETED) && e.push(t);
        }),
            e.forEach((e) => c(e, d.gj.DISMISSED));
    },
    GUILD_PROGRESS_INITIALIZE: function (e) {
        let { guildId: t } = e;
        null == u[t] && (u[t] = new Set()), u[t].has(d.gj.COMPLETED) || u[t].delete(d.gj.DISMISSED);
    },
    GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
        let { guildId: t } = e;
        if (null == u[t]) return !1;
        u[t] = new Set(u[t].add(d.gj.COMPLETED));
    },
    GUILD_PROGRESS_DISMISS: function (e) {
        let { guildId: t } = e;
        return c(t, d.gj.DISMISSED);
    },
    GUILD_CREATE: function (e) {
        let {
                guild: { id: t, member_count: n },
            } = e,
            i = s.A.getGuild(t);
        if (null == i) return !1;
        i.ownerId === a.default.getId() &&
            null != u[i.id] &&
            (null != i.icon && u[i.id].add(d.gj.AVATAR), n > 1 && u[i.id].add(d.gj.INVITE));
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        return null != t && null != t.guild_id && null != u[t.guild_id] && c(t.guild_id, d.gj.CHANNEL);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t)
            null != e && null != e.guild_id && null != u[e.guild_id] && !1 !== c(e.guild_id, d.gj.CHANNEL) && (n = !0);
        return n;
    },
    GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guild: t } = e;
        return null != t && null != t.id && null != u[t.id] && null != t.icon && c(t.id, d.gj.AVATAR);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = l.A.getChannel(t);
        return n.author?.id === a.default.getId() && null != i && null != u[i.guild_id] && c(i.guild_id, d.gj.MESSAGE);
    },
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, memberCount: n } = e;
        return null != u[t] && n > 1 && c(t, d.gj.INVITE);
    },
});
