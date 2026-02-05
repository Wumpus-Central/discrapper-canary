n.d(t, { A: () => F });
var i = n(735438),
    s = n.n(i),
    r = n(311907),
    a = n(73153),
    l = n(933958),
    o = n(969151),
    c = n(717125),
    d = n(698441),
    u = n(863005),
    _ = n(152007),
    m = n(617617),
    A = n(961350),
    g = n(924985),
    E = n(734057),
    h = n(945886),
    p = n(760751),
    C = n(576705),
    x = n(222823),
    T = n(309010),
    I = n(543465),
    S = n(403362),
    f = n(661191),
    N = n(32603),
    b = n(355097);
let R = null,
    v = null,
    O = new N.Ay();
function j() {
    let e = T.A.getChannelId(),
        t = T.A.getVoiceChannelId();
    return (R = e), (v = t), O.clear();
}
function P(e) {
    let {
        guild: { id: t },
    } = e;
    return O.clearGuildId(t);
}
function y(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return O.clearGuildId(t);
}
function L(e) {
    let { guildId: t } = e;
    return O.clearGuildId(t);
}
function D(e) {
    let { channelId: t } = e;
    return O.nonPositionalChannelIdUpdate(t);
}
function M(e) {
    let { channel: t } = e;
    return O.nonPositionalChannelIdUpdate(t.id);
}
function G(e) {
    let { id: t } = e;
    return O.nonPositionalChannelIdUpdate(t);
}
function U() {
    let e = T.A.getChannelId(),
        t = T.A.getVoiceChannelId(),
        n = R !== e || v !== t;
    return (
        !!n &&
        (s()([R, v, e, t])
            .uniq()
            .forEach((e) => {
                null != e && O.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (R = e),
        (v = t),
        !0)
    );
}
function k(e) {
    let { id: t } = e,
        n = E.A.getChannel(t);
    return null == n ? O.clearGuildId(t) : O.clearGuildId(n.guild_id);
}
function B(e) {
    let { guildId: t } = e;
    return O.clearGuildId(t);
}
function w() {
    return O.updateSubtitles();
}
function H(e) {
    let { guildScheduledEvent: t } = e;
    return O.updateSubtitles(t.guild_id);
}
class V extends r.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, A.default, g.A, E.A, h.A, l.Ay, p.A, c.A, d.Ay, _.A, C.A, x.Ay, T.A, I.Ay, m.A);
    }
    getGuild(e, t) {
        let n = O.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = O.getGuildChannelRowsOnly(e);
        return { guildChannelsVersion: t.version, guildChannels: t };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = O.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
let F = new V(a.h, {
    APPLICATION_FETCH_FAIL: w,
    APPLICATION_FETCH_SUCCESS: w,
    APPLICATION_FETCH: w,
    APPLICATIONS_FETCH_FAIL: w,
    APPLICATIONS_FETCH_SUCCESS: w,
    APPLICATIONS_FETCH: w,
    BACKGROUND_SYNC: j,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            s()(t)
                .map((e) => E.A.getChannel(e.channelId)?.guild_id)
                .filter(S.Vq)
                .uniq()
                .forEach((e) => {
                    O.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: L,
    CACHE_LOADED_LAZY: j,
    CATEGORY_COLLAPSE_ALL: L,
    CATEGORY_COLLAPSE: k,
    CATEGORY_EXPAND_ALL: L,
    CATEGORY_EXPAND: k,
    CHANNEL_ACK: D,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return O.clearGuildId(E.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: y,
    CHANNEL_DELETE: y,
    CHANNEL_LOCAL_ACK: D,
    CHANNEL_MUTE_EXPIRED: L,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: D,
    CHANNEL_SELECT: U,
    CHANNEL_STATUSES: function (e) {
        return O.clearGuildId(e.guildId);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            s()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    O.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: w,
    CONNECTION_OPEN: j,
    CURRENT_USER_UPDATE: j,
    DECAY_READ_STATES: j,
    DEV_TOOLS_DESIGN_TOGGLE_SET: j,
    DISABLE_AUTOMATIC_ACK: D,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return O.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { location: t } = e;
        return O.updateSubtitles((0, o.D)(t), (0, o.H)(t));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        w();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: w,
    ENABLE_AUTOMATIC_ACK: D,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return O.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: w,
    GAMES_DATABASE_FETCH: w,
    GAMES_DATABASE_UPDATE: w,
    GUILD_APPLICATIONS_FETCH_SUCCESS: w,
    GUILD_CREATE: P,
    GUILD_DELETE: P,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return A.default.getId() === n.id && O.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: L,
    GUILD_ROLE_CREATE: L,
    GUILD_ROLE_DELETE: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: L,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: L,
    GUILD_ROLE_UPDATE: L,
    GUILD_SCHEDULED_EVENT_CREATE: H,
    GUILD_SCHEDULED_EVENT_DELETE: H,
    GUILD_SCHEDULED_EVENT_UPDATE: H,
    GUILD_TOGGLE_COLLAPSE_MUTED: L,
    GUILD_UPDATE: P,
    IMPERSONATE_STOP: L,
    IMPERSONATE_UPDATE: L,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return O.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: D,
    MESSAGE_ACK: D,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return O.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: D,
    MESSAGE_DELETE: D,
    NOTIFICATION_SETTINGS_UPDATE: j,
    OVERLAY_INITIALIZE: j,
    PASSIVE_UPDATE_V2: function (e) {
        return O.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: j,
    RESORT_THREADS: D,
    SET_RECENTLY_ACTIVE_COLLAPSED: j,
    THREAD_CREATE: M,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return O.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: L,
    THREAD_MEMBER_UPDATE: G,
    THREAD_MEMBERS_UPDATE: G,
    THREAD_UPDATE: M,
    TRY_ACK: D,
    UPDATE_CHANNEL_DIMENSIONS: D,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        O.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: L,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: L,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return O.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: L,
    USER_GUILD_SETTINGS_GUILD_UPDATE: L,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== b.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return (
            null != n &&
                f.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = O.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: B,
    VOICE_CATEGORY_EXPAND: B,
    VOICE_CHANNEL_SELECT: U,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return O.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = U(),
            i = new Set();
        for (let { channelId: e, oldChannelId: s } of t)
            null == s || i.has(s) || (O.nonPositionalChannelIdUpdate(s) && (n = !0), i.add(s)),
                null == e || i.has(e) || (O.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != R && O.nonPositionalChannelIdUpdate(R);
    },
});
