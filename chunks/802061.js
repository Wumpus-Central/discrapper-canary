n(321073);
var i = n(311907),
    r = n(73153),
    a = n(961350),
    l = n(734057),
    s = n(71393),
    o = n(661191),
    d = n(936649);
let c = {};
function u(e, t) {
    let n = c[e];
    return !(null == n || n.has(t)) && ((c[e] = new Set(n.add(t))), !0);
}
class A extends i.Ay.PersistedStore {
    static displayName = "GuildProgressStore";
    static persistKey = "GuildProgressStore";
    initialize(e) {
        this.waitFor(a.default, l.A, s.A),
            (c = {}),
            null != e &&
                o.default.keys(e).forEach((t) => {
                    let n = e[t];
                    null != n && "function" == typeof n[Symbol.iterator] && (c[t] = new Set(n));
                });
    }
    getProgress(e) {
        return c[e];
    }
    hasProgress(e) {
        let t = c[e];
        return null != t && !t.has(d.gj.DISMISSED);
    }
    getState() {
        return c;
    }
}
new A(r.h, {
    CONNECTION_OPEN: function () {
        let e = [];
        o.default.keys(c).forEach((t) => {
            c[t].has(d.gj.COMPLETED) && e.push(t);
        }),
            e.forEach((e) => u(e, d.gj.DISMISSED));
    },
    GUILD_PROGRESS_INITIALIZE: function (e) {
        let { guildId: t } = e;
        null == c[t] && (c[t] = new Set()), c[t].has(d.gj.COMPLETED) || c[t].delete(d.gj.DISMISSED);
    },
    GUILD_PROGRESS_COMPLETED_SEEN: function (e) {
        let { guildId: t } = e;
        if (null == c[t]) return !1;
        c[t] = new Set(c[t].add(d.gj.COMPLETED));
    },
    GUILD_PROGRESS_DISMISS: function (e) {
        let { guildId: t } = e;
        return u(t, d.gj.DISMISSED);
    },
    GUILD_CREATE: function (e) {
        let {
                guild: { id: t, member_count: n },
            } = e,
            i = s.A.getGuild(t);
        if (null == i) return !1;
        i.ownerId === a.default.getId() &&
            null != c[i.id] &&
            (null != i.icon && c[i.id].add(d.gj.AVATAR), n > 1 && c[i.id].add(d.gj.INVITE));
    },
    CHANNEL_CREATE: function (e) {
        let { channel: t } = e;
        return null != t && null != t.guild_id && null != c[t.guild_id] && u(t.guild_id, d.gj.CHANNEL);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        for (let e of t)
            null != e && null != e.guild_id && null != c[e.guild_id] && !1 !== u(e.guild_id, d.gj.CHANNEL) && (n = !0);
        return n;
    },
    GUILD_SETTINGS_SUBMIT_SUCCESS: function (e) {
        let { guild: t } = e;
        return null != t && null != t.id && null != c[t.id] && null != t.icon && u(t.id, d.gj.AVATAR);
    },
    MESSAGE_CREATE: function (e) {
        let { channelId: t, message: n } = e,
            i = l.A.getChannel(t);
        return n.author?.id === a.default.getId() && null != i && null != c[i.guild_id] && u(i.guild_id, d.gj.MESSAGE);
    },
    GUILD_MEMBER_LIST_UPDATE: function (e) {
        let { guildId: t, memberCount: n } = e;
        return null != c[t] && n > 1 && u(t, d.gj.INVITE);
    },
});
