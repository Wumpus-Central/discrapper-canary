n.d(t, { A: () => W });
var i = n(735438),
    l = n.n(i),
    r = n(311907),
    s = n(73153),
    o = n(933958),
    a = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(863005),
    _ = n(152007),
    A = n(617617),
    E = n(961350),
    I = n(924985),
    h = n(734057),
    g = n(945886),
    C = n(760751),
    p = n(576705),
    S = n(222823),
    T = n(309010),
    N = n(543465),
    b = n(403362),
    L = n(661191),
    f = n(32603),
    m = n(355097);
let O = null,
    G = null,
    R = new f.Ay();
function U() {
    let e = T.A.getChannelId(),
        t = T.A.getVoiceChannelId();
    return (O = e), (G = t), R.clear();
}
function D(e) {
    let {
        guild: { id: t },
    } = e;
    return R.clearGuildId(t);
}
function y(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return R.clearGuildId(t);
}
function P(e) {
    let { guildId: t } = e;
    return R.clearGuildId(t);
}
function M(e) {
    let { channelId: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
}
function v(e) {
    let { channel: t } = e;
    return R.nonPositionalChannelIdUpdate(t.id);
}
function x(e) {
    let { id: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
}
function V() {
    let e = T.A.getChannelId(),
        t = T.A.getVoiceChannelId(),
        n = O !== e || G !== t;
    return (
        !!n &&
        (l()([O, G, e, t])
            .uniq()
            .forEach((e) => {
                null != e && R.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (O = e),
        (G = t),
        !0)
    );
}
function j(e) {
    let { id: t } = e,
        n = h.A.getChannel(t);
    return null == n ? R.clearGuildId(t) : R.clearGuildId(n.guild_id);
}
function H(e) {
    let { guildId: t } = e;
    return R.clearGuildId(t);
}
function w() {
    return R.updateSubtitles();
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return R.updateSubtitles(t.guild_id);
}
class F extends r.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, E.default, I.A, h.A, g.A, o.Ay, C.A, d.A, c.Ay, _.A, p.A, S.Ay, T.A, N.Ay, A.A);
    }
    getGuild(e, t) {
        let n = R.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = R.getGuildChannelRowsOnly(e);
        return { guildChannelsVersion: t.version, guildChannels: t };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = R.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
let W = new F(s.h, {
    APPLICATION_FETCH_FAIL: w,
    APPLICATION_FETCH_SUCCESS: w,
    APPLICATION_FETCH: w,
    APPLICATIONS_FETCH_FAIL: w,
    APPLICATIONS_FETCH_SUCCESS: w,
    APPLICATIONS_FETCH: w,
    BACKGROUND_SYNC: U,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => h.A.getChannel(e.channelId)?.guild_id)
                .filter(b.Vq)
                .uniq()
                .forEach((e) => {
                    R.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: P,
    CACHE_LOADED_LAZY: U,
    CATEGORY_COLLAPSE_ALL: P,
    CATEGORY_COLLAPSE: j,
    CATEGORY_EXPAND_ALL: P,
    CATEGORY_EXPAND: j,
    CHANNEL_ACK: M,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return R.clearGuildId(h.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: y,
    CHANNEL_DELETE: y,
    CHANNEL_LOCAL_ACK: M,
    CHANNEL_MUTE_EXPIRED: P,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
    CHANNEL_SELECT: V,
    CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        return R.clearGuildId(t);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    R.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: w,
    CONNECTION_OPEN: U,
    CURRENT_USER_UPDATE: U,
    DECAY_READ_STATES: U,
    DEV_TOOLS_DESIGN_TOGGLE_SET: U,
    DISABLE_AUTOMATIC_ACK: M,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { location: t } = e;
        return R.updateSubtitles((0, a.D)(t), (0, a.H)(t));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        w();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: w,
    ENABLE_AUTOMATIC_ACK: M,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return R.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: w,
    GAMES_DATABASE_FETCH: w,
    GAMES_DATABASE_UPDATE: w,
    GUILD_APPLICATIONS_FETCH_SUCCESS: w,
    GUILD_CREATE: D,
    GUILD_DELETE: D,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return E.default.getId() === n.id && R.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: P,
    GUILD_ROLE_CREATE: P,
    GUILD_ROLE_DELETE: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
    GUILD_ROLE_UPDATE: P,
    GUILD_SCHEDULED_EVENT_CREATE: B,
    GUILD_SCHEDULED_EVENT_DELETE: B,
    GUILD_SCHEDULED_EVENT_UPDATE: B,
    GUILD_TOGGLE_COLLAPSE_MUTED: P,
    GUILD_UPDATE: D,
    IMPERSONATE_STOP: P,
    IMPERSONATE_UPDATE: P,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return R.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    NOTIFICATION_SETTINGS_UPDATE: U,
    OVERLAY_INITIALIZE: U,
    PASSIVE_UPDATE_V2: function (e) {
        return R.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: U,
    RESORT_THREADS: M,
    SET_RECENTLY_ACTIVE_COLLAPSED: U,
    THREAD_CREATE: v,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return R.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: P,
    THREAD_MEMBER_UPDATE: x,
    THREAD_MEMBERS_UPDATE: x,
    THREAD_UPDATE: v,
    TRY_ACK: M,
    UPDATE_CHANNEL_DIMENSIONS: M,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        R.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: P,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: P,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return R.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: P,
    USER_GUILD_SETTINGS_GUILD_UPDATE: P,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== m.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return (
            null != n &&
                L.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = R.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: H,
    VOICE_CATEGORY_EXPAND: H,
    VOICE_CHANNEL_SELECT: V,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return R.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V(),
            i = new Set();
        for (let { channelId: e, oldChannelId: l } of t)
            null == l || i.has(l) || (R.nonPositionalChannelIdUpdate(l) && (n = !0), i.add(l)),
                null == e || i.has(e) || (R.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != O && R.nonPositionalChannelIdUpdate(O);
    },
});
