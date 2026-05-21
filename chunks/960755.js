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
    f = n(617617),
    h = n(495544),
    p = n(924985),
    E = n(734057),
    m = n(945886),
    g = n(760751),
    A = n(576705),
    I = n(222823),
    T = n(309010),
    S = n(543465),
    N = n(403362),
    y = n(935208),
    C = n(297469),
    v = n(355097);
let O = null,
    R = null,
    b = new C.Ay();
function D() {
    let e = T.A.getChannelId(),
        t = T.A.getVoiceChannelId();
    return (O = e), (R = t), b.clear();
}
function L(e) {
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
function M(e) {
    let { guildId: t } = e;
    return b.clearGuildId(t);
}
function P(e) {
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
        n = O !== e || R !== t;
    return (
        !!n &&
        (r()([O, R, e, t])
            .uniq()
            .forEach((e) => {
                null != e && b.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (O = e),
        (R = t),
        !0)
    );
}
function G(e) {
    let { id: t } = e,
        n = E.A.getChannel(t);
    return null == n ? b.clearGuildId(t) : b.clearGuildId(n.guild_id);
}
function F(e) {
    let { guildId: t } = e;
    return b.clearGuildId(t);
}
function V() {
    return b.updateSubtitles();
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return b.updateSubtitles(t.guild_id);
}
class H extends s.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(d.A, h.default, p.A, E.A, m.A, o.Ay, g.A, u.A, c.Ay, _.A, A.A, I.Ay, T.A, S.Ay, f.A);
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
    APPLICATION_FETCH_FAIL: V,
    APPLICATION_FETCH_SUCCESS: V,
    APPLICATION_FETCH: V,
    APPLICATIONS_FETCH_FAIL: V,
    APPLICATIONS_FETCH_SUCCESS: V,
    APPLICATIONS_FETCH: V,
    BACKGROUND_SYNC: D,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            r()(t)
                .map((e) => E.A.getChannel(e.channelId)?.guild_id)
                .filter(N.Vq)
                .uniq()
                .forEach((e) => {
                    b.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: M,
    CACHE_LOADED_LAZY: D,
    CATEGORY_COLLAPSE_ALL: M,
    CATEGORY_COLLAPSE: G,
    CATEGORY_EXPAND_ALL: M,
    CATEGORY_EXPAND: G,
    CHANNEL_ACK: P,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return b.clearGuildId(E.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: w,
    CHANNEL_DELETE: w,
    CHANNEL_LOCAL_ACK: P,
    CHANNEL_MUTE_EXPIRED: M,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: P,
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
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    CONNECTION_OPEN: D,
    CURRENT_USER_UPDATE: D,
    DECAY_READ_STATES: D,
    DEV_TOOLS_DESIGN_TOGGLE_SET: D,
    DISABLE_AUTOMATIC_ACK: P,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { location: t } = e;
        return b.updateSubtitles((0, l.D)(t), (0, l.H)(t));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        V();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
    ENABLE_AUTOMATIC_ACK: P,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return b.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: V,
    GAMES_DATABASE_FETCH: V,
    GAMES_DATABASE_UPDATE: V,
    GUILD_APPLICATIONS_FETCH_SUCCESS: V,
    GUILD_CREATE: L,
    GUILD_DELETE: L,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return h.default.getId() === n.id && b.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: M,
    GUILD_ROLE_CREATE: M,
    GUILD_ROLE_DELETE: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
    GUILD_ROLE_UPDATE: M,
    GUILD_SCHEDULED_EVENT_CREATE: B,
    GUILD_SCHEDULED_EVENT_DELETE: B,
    GUILD_SCHEDULED_EVENT_UPDATE: B,
    GUILD_TOGGLE_COLLAPSE_MUTED: M,
    GUILD_UPDATE: L,
    IMPERSONATE_STOP: M,
    IMPERSONATE_UPDATE: M,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return b.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: P,
    MESSAGE_ACK: P,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: P,
    MESSAGE_DELETE: P,
    NOTIFICATION_SETTINGS_UPDATE: D,
    OVERLAY_INITIALIZE: D,
    PASSIVE_UPDATE_V2: function (e) {
        return b.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: D,
    RESORT_THREADS: P,
    SET_RECENTLY_ACTIVE_COLLAPSED: D,
    THREAD_CREATE: x,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return b.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: M,
    THREAD_MEMBER_UPDATE: U,
    THREAD_MEMBERS_UPDATE: U,
    THREAD_UPDATE: x,
    TRY_ACK: P,
    UPDATE_CHANNEL_DIMENSIONS: P,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        b.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return b.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
    USER_GUILD_SETTINGS_GUILD_UPDATE: M,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== v.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return (
            null != n &&
                y.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = b.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: F,
    VOICE_CATEGORY_EXPAND: F,
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
        return null != O && b.nonPositionalChannelIdUpdate(O);
    },
});
