"use strict";
n.d(t, { A: () => j });
var i = n(735438),
    r = n.n(i),
    s = n(17928),
    a = n(228366),
    o = n(933958),
    l = n(969151),
    u = n(717125),
    c = n(698441),
    d = n(695633),
    _ = n(152007),
    h = n(617617),
    f = n(280450),
    E = n(924985),
    p = n(734057),
    m = n(945886),
    g = n(760751),
    A = n(576705),
    I = n(568548),
    T = n(309010),
    S = n(543465),
    N = n(403362),
    C = n(935208),
    y = n(297469),
    O = n(355097);
let R = null,
    v = null,
    b = new y.Ay();
function L() {
    let e = T.A.getChannelId(),
        t = T.A.getVoiceChannelId();
    return (R = e), (v = t), b.clear();
}
function D(e) {
    let {
        guild: { id: t },
    } = e;
    return b.clearGuildId(t);
}
function w(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return b.clearGuildId(t);
}
function P(e) {
    let { guildId: t } = e;
    return b.clearGuildId(t);
}
function M(e) {
    let { channelId: t } = e;
    return b.nonPositionalChannelIdUpdate(t);
}
function x(e) {
    let { channel: t } = e;
    return b.nonPositionalChannelIdUpdate(t.id);
}
function U(e) {
    let { id: t } = e;
    return b.nonPositionalChannelIdUpdate(t);
}
function k() {
    let e = T.A.getChannelId(),
        t = T.A.getVoiceChannelId(),
        n = R !== e || v !== t;
    return (
        !!n &&
        (r()([R, v, e, t])
            .uniq()
            .forEach((e) => {
                null != e && b.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (R = e),
        (v = t),
        !0)
    );
}
function G(e) {
    let { id: t } = e,
        n = p.A.getChannel(t);
    return null == n ? b.clearGuildId(t) : b.clearGuildId(n.guild_id);
}
function V(e) {
    let { guildId: t } = e;
    return b.clearGuildId(t);
}
function F() {
    return b.updateSubtitles();
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return b.updateSubtitles(t.guild_id);
}
class H extends s.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(d.A, f.default, E.A, p.A, m.A, o.Ay, g.A, u.A, c.Ay, _.A, A.A, I.Ay, T.A, S.Ay, h.A);
    }
    getGuild(e, t) {
        let n = b.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = b.getGuildChannelRowsOnly(e);
        return { guildChannelsVersion: t.version, guildChannels: t };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = b.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
let j = new H(a.h, {
    APPLICATION_FETCH_FAIL: F,
    APPLICATION_FETCH_SUCCESS: F,
    APPLICATION_FETCH: F,
    APPLICATIONS_FETCH_FAIL: F,
    APPLICATIONS_FETCH_SUCCESS: F,
    APPLICATIONS_FETCH: F,
    BACKGROUND_SYNC: L,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            r()(t)
                .map((e) => p.A.getChannel(e.channelId)?.guild_id)
                .filter(N.Vq)
                .uniq()
                .forEach((e) => {
                    b.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: P,
    CACHE_LOADED_LAZY: L,
    CATEGORY_COLLAPSE_ALL: P,
    CATEGORY_COLLAPSE: G,
    CATEGORY_EXPAND_ALL: P,
    CATEGORY_EXPAND: G,
    CHANNEL_ACK: M,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return b.clearGuildId(p.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: w,
    CHANNEL_DELETE: w,
    CHANNEL_LOCAL_ACK: M,
    CHANNEL_MUTE_EXPIRED: P,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
    CHANNEL_SELECT: k,
    CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        return b.clearGuildId(t);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            r()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    b.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: F,
    CONNECTION_OPEN: L,
    CURRENT_USER_UPDATE: L,
    DECAY_READ_STATES: L,
    DEV_TOOLS_DESIGN_TOGGLE_SET: L,
    DISABLE_AUTOMATIC_ACK: M,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return b.updateSubtitles((0, l.D)(t.location), (0, l.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        F();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
    ENABLE_AUTOMATIC_ACK: M,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return b.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: F,
    GAMES_DATABASE_FETCH: F,
    GAMES_DATABASE_UPDATE: F,
    GUILD_APPLICATIONS_FETCH_SUCCESS: F,
    GUILD_CREATE: D,
    GUILD_DELETE: D,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return f.default.getId() === n.id && b.clearGuildId(t);
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
            return b.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    NOTIFICATION_SETTINGS_UPDATE: L,
    OVERLAY_INITIALIZE: L,
    PASSIVE_UPDATE_V2: function (e) {
        return b.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: L,
    RESORT_THREADS: M,
    SET_RECENTLY_ACTIVE_COLLAPSED: L,
    THREAD_CREATE: x,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return b.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: P,
    THREAD_MEMBER_UPDATE: U,
    THREAD_MEMBERS_UPDATE: U,
    THREAD_UPDATE: x,
    TRY_ACK: M,
    UPDATE_CHANNEL_DIMENSIONS: M,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        b.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: P,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: P,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return b.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: P,
    USER_GUILD_SETTINGS_GUILD_UPDATE: P,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== O.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return (
            null != n &&
                C.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = b.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: V,
    VOICE_CATEGORY_EXPAND: V,
    VOICE_CHANNEL_SELECT: k,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return b.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = k(),
            i = new Set();
        for (let { channelId: e, oldChannelId: r } of t)
            null == r || i.has(r) || (b.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)),
                null == e || i.has(e) || (b.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != R && b.nonPositionalChannelIdUpdate(R);
    },
});
