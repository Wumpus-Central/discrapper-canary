"use strict";
n.d(t, { A: () => j });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(228366),
    l = n(933958),
    o = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(695633),
    _ = n(152007),
    E = n(617617),
    A = n(280450),
    h = n(924985),
    I = n(734057),
    f = n(945886),
    p = n(760751),
    T = n(576705),
    m = n(568548),
    g = n(309010),
    S = n(543465),
    N = n(403362),
    C = n(935208),
    R = n(297469),
    O = n(355097);
let L = null,
    y = null,
    D = new R.Ay();
function v() {
    let e = g.Ay.getChannelId(),
        t = g.Ay.getVoiceChannelId();
    return (L = e), (y = t), D.clear();
}
function b(e) {
    let {
        guild: { id: t },
    } = e;
    return D.clearGuildId(t);
}
function M(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return D.clearGuildId(t);
}
function P(e) {
    let { guildId: t } = e;
    return D.clearGuildId(t);
}
function U(e) {
    let { channelId: t } = e;
    return D.nonPositionalChannelIdUpdate(t);
}
function w(e) {
    let { channel: t } = e;
    return D.nonPositionalChannelIdUpdate(t.id);
}
function G(e) {
    let { id: t } = e;
    return D.nonPositionalChannelIdUpdate(t);
}
function x() {
    let e = g.Ay.getChannelId(),
        t = g.Ay.getVoiceChannelId(),
        n = L !== e || y !== t;
    return (
        !!n &&
        (r()([L, y, e, t])
            .uniq()
            .forEach((e) => {
                null != e && D.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (L = e),
        (y = t),
        !0)
    );
}
function k(e) {
    let { id: t } = e,
        n = I.A.getChannel(t);
    return null == n ? D.clearGuildId(t) : D.clearGuildId(n.guild_id);
}
function F(e) {
    let { guildId: t } = e;
    return D.clearGuildId(t);
}
function V() {
    return D.updateSubtitles();
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return D.updateSubtitles(t.guild_id);
}
class H extends a.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, A.default, h.A, I.A, f.A, l.Ay, p.A, d.A, c.Ay, _.A, T.A, m.Ay, g.Ay, S.Ay, E.A);
    }
    getGuild(e, t) {
        let n = D.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = D.getGuildChannelRowsOnly(e);
        return { guildChannelsVersion: t.version, guildChannels: t };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = D.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
let j = new H(s.h, {
    APPLICATION_FETCH_FAIL: V,
    APPLICATION_FETCH_SUCCESS: V,
    APPLICATION_FETCH: V,
    APPLICATIONS_FETCH_FAIL: V,
    APPLICATIONS_FETCH_SUCCESS: V,
    APPLICATIONS_FETCH: V,
    BACKGROUND_SYNC: v,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            r()(t)
                .map((e) => I.A.getChannel(e.channelId)?.guild_id)
                .filter(N.Vq)
                .uniq()
                .forEach((e) => {
                    D.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: P,
    CACHE_LOADED_LAZY: v,
    CATEGORY_COLLAPSE_ALL: P,
    CATEGORY_COLLAPSE: k,
    CATEGORY_EXPAND_ALL: P,
    CATEGORY_EXPAND: k,
    CHANNEL_ACK: U,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return D.clearGuildId(I.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: M,
    CHANNEL_DELETE: M,
    CHANNEL_LOCAL_ACK: U,
    CHANNEL_MUTE_EXPIRED: P,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: U,
    CHANNEL_SELECT: x,
    CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        return D.clearGuildId(t);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            r()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    D.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    CONNECTION_OPEN: v,
    CURRENT_USER_UPDATE: v,
    DECAY_READ_STATES: v,
    DEV_TOOLS_DESIGN_TOGGLE_SET: v,
    DISABLE_AUTOMATIC_ACK: U,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return D.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return D.updateSubtitles((0, o.D)(t.location), (0, o.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        V();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
    ENABLE_AUTOMATIC_ACK: U,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return D.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: V,
    GAMES_DATABASE_FETCH: V,
    GAMES_DATABASE_UPDATE: V,
    GUILD_APPLICATIONS_FETCH_SUCCESS: V,
    GUILD_CREATE: b,
    GUILD_DELETE: b,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return A.default.getId() === n.id && D.clearGuildId(t);
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
    GUILD_UPDATE: b,
    IMPERSONATE_STOP: P,
    IMPERSONATE_UPDATE: P,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return D.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: U,
    MESSAGE_ACK: U,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return D.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: U,
    MESSAGE_DELETE: U,
    NOTIFICATION_SETTINGS_UPDATE: v,
    OVERLAY_INITIALIZE: v,
    PASSIVE_UPDATE_V2: function (e) {
        return D.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: v,
    RESORT_THREADS: U,
    SET_RECENTLY_ACTIVE_COLLAPSED: v,
    THREAD_CREATE: w,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return D.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: P,
    THREAD_MEMBER_UPDATE: G,
    THREAD_MEMBERS_UPDATE: G,
    THREAD_UPDATE: w,
    TRY_ACK: U,
    UPDATE_CHANNEL_DIMENSIONS: U,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        D.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: P,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: P,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return D.clearGuildId(t);
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
                    null != n[e].guildRecentsDismissedAt && (i = D.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: F,
    VOICE_CATEGORY_EXPAND: F,
    VOICE_CHANNEL_SELECT: x,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return D.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = x(),
            i = new Set();
        for (let { channelId: e, oldChannelId: r } of t)
            null == r || i.has(r) || (D.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)),
                null == e || i.has(e) || (D.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != L && D.nonPositionalChannelIdUpdate(L);
    },
});
