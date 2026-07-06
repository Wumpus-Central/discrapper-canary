n.d(t, { A: () => k });
var i = n(735438),
    l = n.n(i),
    r = n(17928),
    s = n(228366),
    a = n(933958),
    o = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(695633),
    A = n(152007),
    h = n(617617),
    E = n(280450),
    C = n(924985),
    g = n(734057),
    _ = n(945886),
    I = n(760751),
    T = n(576705),
    N = n(568548),
    p = n(309010),
    S = n(543465),
    L = n(403362),
    m = n(935208),
    O = n(297469),
    f = n(355097);
let b = null,
    R = null,
    v = new O.Ay();
function U() {
    let e = p.A.getChannelId(),
        t = p.A.getVoiceChannelId();
    return (b = e), (R = t), v.clear();
}
function D(e) {
    let {
        guild: { id: t },
    } = e;
    return v.clearGuildId(t);
}
function G(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return v.clearGuildId(t);
}
function M(e) {
    let { guildId: t } = e;
    return v.clearGuildId(t);
}
function x(e) {
    let { channelId: t } = e;
    return v.nonPositionalChannelIdUpdate(t);
}
function y(e) {
    let { channel: t } = e;
    return v.nonPositionalChannelIdUpdate(t.id);
}
function P(e) {
    let { id: t } = e;
    return v.nonPositionalChannelIdUpdate(t);
}
function w() {
    let e = p.A.getChannelId(),
        t = p.A.getVoiceChannelId(),
        n = b !== e || R !== t;
    return (
        !!n &&
        (l()([b, R, e, t])
            .uniq()
            .forEach((e) => {
                null != e && v.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (b = e),
        (R = t),
        !0)
    );
}
function V(e) {
    let { id: t } = e,
        n = g.A.getChannel(t);
    return null == n ? v.clearGuildId(t) : v.clearGuildId(n.guild_id);
}
function j(e) {
    let { guildId: t } = e;
    return v.clearGuildId(t);
}
function F() {
    return v.updateSubtitles();
}
function H(e) {
    let { guildScheduledEvent: t } = e;
    return v.updateSubtitles(t.guild_id);
}
class B extends r.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, E.default, C.A, g.A, _.A, a.Ay, I.A, d.A, c.Ay, A.A, T.A, N.Ay, p.A, S.Ay, h.A);
    }
    getGuild(e, t) {
        let n = v.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = v.getGuildChannelRowsOnly(e);
        return { guildChannelsVersion: t.version, guildChannels: t };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = v.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
let k = new B(s.h, {
    APPLICATION_FETCH_FAIL: F,
    APPLICATION_FETCH_SUCCESS: F,
    APPLICATION_FETCH: F,
    APPLICATIONS_FETCH_FAIL: F,
    APPLICATIONS_FETCH_SUCCESS: F,
    APPLICATIONS_FETCH: F,
    BACKGROUND_SYNC: U,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => g.A.getChannel(e.channelId)?.guild_id)
                .filter(L.Vq)
                .uniq()
                .forEach((e) => {
                    v.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: M,
    CACHE_LOADED_LAZY: U,
    CATEGORY_COLLAPSE_ALL: M,
    CATEGORY_COLLAPSE: V,
    CATEGORY_EXPAND_ALL: M,
    CATEGORY_EXPAND: V,
    CHANNEL_ACK: x,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return v.clearGuildId(g.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: G,
    CHANNEL_DELETE: G,
    CHANNEL_LOCAL_ACK: x,
    CHANNEL_MUTE_EXPIRED: M,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: x,
    CHANNEL_SELECT: w,
    CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        return v.clearGuildId(t);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    v.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: F,
    CONNECTION_OPEN: U,
    CURRENT_USER_UPDATE: U,
    DECAY_READ_STATES: U,
    DEV_TOOLS_DESIGN_TOGGLE_SET: U,
    DISABLE_AUTOMATIC_ACK: x,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return v.updateSubtitles((0, o.D)(t.location), (0, o.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        F();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
    ENABLE_AUTOMATIC_ACK: x,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return v.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: F,
    GAMES_DATABASE_FETCH: F,
    GAMES_DATABASE_UPDATE: F,
    GUILD_APPLICATIONS_FETCH_SUCCESS: F,
    GUILD_CREATE: D,
    GUILD_DELETE: D,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return E.default.getId() === n.id && v.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: M,
    GUILD_ROLE_CREATE: M,
    GUILD_ROLE_DELETE: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
    GUILD_ROLE_UPDATE: M,
    GUILD_SCHEDULED_EVENT_CREATE: H,
    GUILD_SCHEDULED_EVENT_DELETE: H,
    GUILD_SCHEDULED_EVENT_UPDATE: H,
    GUILD_TOGGLE_COLLAPSE_MUTED: M,
    GUILD_UPDATE: D,
    IMPERSONATE_STOP: M,
    IMPERSONATE_UPDATE: M,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return v.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: x,
    MESSAGE_ACK: x,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: x,
    MESSAGE_DELETE: x,
    NOTIFICATION_SETTINGS_UPDATE: U,
    OVERLAY_INITIALIZE: U,
    PASSIVE_UPDATE_V2: function (e) {
        return v.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: U,
    RESORT_THREADS: x,
    SET_RECENTLY_ACTIVE_COLLAPSED: U,
    THREAD_CREATE: y,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return v.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: M,
    THREAD_MEMBER_UPDATE: P,
    THREAD_MEMBERS_UPDATE: P,
    THREAD_UPDATE: y,
    TRY_ACK: x,
    UPDATE_CHANNEL_DIMENSIONS: x,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        v.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return v.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
    USER_GUILD_SETTINGS_GUILD_UPDATE: M,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== f.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return (
            null != n &&
                m.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = v.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: j,
    VOICE_CATEGORY_EXPAND: j,
    VOICE_CHANNEL_SELECT: w,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return v.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = w(),
            i = new Set();
        for (let { channelId: e, oldChannelId: l } of t)
            null == l || i.has(l) || (v.nonPositionalChannelIdUpdate(l) && (n = !0), i.add(l)),
                null == e || i.has(e) || (v.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != b && v.nonPositionalChannelIdUpdate(b);
    },
});
