t.d(n, { A: () => w });
var l = t(735438),
    E = t.n(l),
    i = t(17928),
    A = t(228366),
    a = t(933958),
    _ = t(969151),
    r = t(717125),
    u = t(698441),
    T = t(695633),
    C = t(152007),
    o = t(617617),
    S = t(495544),
    d = t(924985),
    s = t(734057),
    I = t(945886),
    c = t(760751),
    D = t(576705),
    N = t(222823),
    L = t(309010),
    U = t(543465),
    O = t(403362),
    P = t(935208),
    R = t(32603),
    G = t(355097);
let h = null,
    f = null,
    g = new R.Ay();
function H() {
    let e = L.A.getChannelId(),
        n = L.A.getVoiceChannelId();
    return (h = e), (f = n), g.clear();
}
function m(e) {
    let {
        guild: { id: n },
    } = e;
    return g.clearGuildId(n);
}
function p(e) {
    let {
        channel: { guild_id: n },
    } = e;
    return g.clearGuildId(n);
}
function M(e) {
    let { guildId: n } = e;
    return g.clearGuildId(n);
}
function y(e) {
    let { channelId: n } = e;
    return g.nonPositionalChannelIdUpdate(n);
}
function b(e) {
    let { channel: n } = e;
    return g.nonPositionalChannelIdUpdate(n.id);
}
function x(e) {
    let { id: n } = e;
    return g.nonPositionalChannelIdUpdate(n);
}
function F() {
    let e = L.A.getChannelId(),
        n = L.A.getVoiceChannelId(),
        t = h !== e || f !== n;
    return (
        !!t &&
        (E()([h, f, e, n])
            .uniq()
            .forEach((e) => {
                null != e && g.nonPositionalChannelIdUpdate(e) && (t = !0);
            }),
        (h = e),
        (f = n),
        !0)
    );
}
function V(e) {
    let { id: n } = e,
        t = s.A.getChannel(n);
    return null == t ? g.clearGuildId(n) : g.clearGuildId(t.guild_id);
}
function B(e) {
    let { guildId: n } = e;
    return g.clearGuildId(n);
}
function Y() {
    return g.updateSubtitles();
}
function v(e) {
    let { guildScheduledEvent: n } = e;
    return g.updateSubtitles(n.guild_id);
}
class j extends i.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(T.A, S.default, d.A, s.A, I.A, a.Ay, c.A, r.A, u.Ay, C.A, D.A, N.Ay, L.A, U.Ay, o.A);
    }
    getGuild(e, n) {
        let t = g.getGuild(e, n?.guildActionRows ?? [], n?.channelNoticeRows ?? []);
        return { guildChannelsVersion: t.version, guildChannels: t };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let n = g.getGuildChannelRowsOnly(e);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let n = g.getGuildChannelRowsOnly(e);
        return n.getCategoryFromSection(n.recentsSectionNumber).getShownChannelIds().length;
    }
}
let w = new j(A.h, {
    APPLICATION_FETCH_FAIL: Y,
    APPLICATION_FETCH_SUCCESS: Y,
    APPLICATION_FETCH: Y,
    APPLICATIONS_FETCH_FAIL: Y,
    APPLICATIONS_FETCH_SUCCESS: Y,
    APPLICATIONS_FETCH: Y,
    BACKGROUND_SYNC: H,
    BULK_ACK: function (e) {
        let { channels: n } = e,
            t = !1;
        return (
            E()(n)
                .map((e) => s.A.getChannel(e.channelId)?.guild_id)
                .filter(O.Vq)
                .uniq()
                .forEach((e) => {
                    g.clearGuildId(e) && (t = !0);
                }),
            t
        );
    },
    BULK_CLEAR_RECENTS: M,
    CACHE_LOADED_LAZY: H,
    CATEGORY_COLLAPSE_ALL: M,
    CATEGORY_COLLAPSE: V,
    CATEGORY_EXPAND_ALL: M,
    CATEGORY_EXPAND: V,
    CHANNEL_ACK: y,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: n } = e;
        return g.clearGuildId(s.A.getChannel(n)?.guild_id);
    },
    CHANNEL_CREATE: p,
    CHANNEL_DELETE: p,
    CHANNEL_LOCAL_ACK: y,
    CHANNEL_MUTE_EXPIRED: M,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: y,
    CHANNEL_SELECT: F,
    CHANNEL_INFO: function (e) {
        let { guildId: n } = e;
        return g.clearGuildId(n);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: n } = e,
            t = !1;
        return (
            E()(n)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    g.clearGuildId(e) && (t = !0);
                }),
            t
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: Y,
    CONNECTION_OPEN: H,
    CURRENT_USER_UPDATE: H,
    DECAY_READ_STATES: H,
    DEV_TOOLS_DESIGN_TOGGLE_SET: H,
    DISABLE_AUTOMATIC_ACK: y,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: n } = e;
        return g.nonPositionalChannelIdUpdate(n);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { location: n } = e;
        return g.updateSubtitles((0, _.D)(n), (0, _.H)(n));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        Y();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: Y,
    ENABLE_AUTOMATIC_ACK: y,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: n } = e;
        return g.updateSubtitles(n);
    },
    GAMES_DATABASE_FETCH_FAIL: Y,
    GAMES_DATABASE_FETCH: Y,
    GAMES_DATABASE_UPDATE: Y,
    GUILD_APPLICATIONS_FETCH_SUCCESS: Y,
    GUILD_CREATE: m,
    GUILD_DELETE: m,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: n, user: t } = e;
        return S.default.getId() === t.id && g.clearGuildId(n);
    },
    GUILD_MUTE_EXPIRED: M,
    GUILD_ROLE_CREATE: M,
    GUILD_ROLE_DELETE: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: M,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: M,
    GUILD_ROLE_UPDATE: M,
    GUILD_SCHEDULED_EVENT_CREATE: v,
    GUILD_SCHEDULED_EVENT_DELETE: v,
    GUILD_SCHEDULED_EVENT_UPDATE: v,
    GUILD_TOGGLE_COLLAPSE_MUTED: M,
    GUILD_UPDATE: m,
    IMPERSONATE_STOP: M,
    IMPERSONATE_UPDATE: M,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: n } = e;
            return g.clearGuildId(n);
        });
    },
    LOAD_MESSAGES_SUCCESS: y,
    MESSAGE_ACK: y,
    MESSAGE_CREATE: function (e) {
        let { channelId: n } = e;
        return g.nonPositionalChannelIdUpdate(n);
    },
    MESSAGE_DELETE_BULK: y,
    MESSAGE_DELETE: y,
    NOTIFICATION_SETTINGS_UPDATE: H,
    OVERLAY_INITIALIZE: H,
    PASSIVE_UPDATE_V2: function (e) {
        return g.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: H,
    RESORT_THREADS: y,
    SET_RECENTLY_ACTIVE_COLLAPSED: H,
    THREAD_CREATE: b,
    THREAD_DELETE: function (e) {
        let { channel: n } = e;
        return g.nonPositionalChannelUpdate(n);
    },
    THREAD_LIST_SYNC: M,
    THREAD_MEMBER_UPDATE: x,
    THREAD_MEMBERS_UPDATE: x,
    THREAD_UPDATE: b,
    TRY_ACK: y,
    UPDATE_CHANNEL_DIMENSIONS: y,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: n } = e;
        g.updateSubtitles(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: n } = e;
        n.forEach((e) => {
            let { guild_id: n } = e;
            return g.clearGuildId(n);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
    USER_GUILD_SETTINGS_GUILD_UPDATE: M,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: n } = e;
        if (n.type !== G.oD.PRELOADED_USER_SETTINGS) return !1;
        let t = n.proto.guilds?.guilds,
            l = !1;
        return (
            null != t &&
                P.default.keys(t).forEach((e) => {
                    null != t[e].guildRecentsDismissedAt && (l = g.updateRecentsCategory(e) || l);
                }),
            l
        );
    },
    VOICE_CATEGORY_COLLAPSE: B,
    VOICE_CATEGORY_EXPAND: B,
    VOICE_CHANNEL_SELECT: F,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return g.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: n } = e,
            t = F(),
            l = new Set();
        for (let { channelId: e, oldChannelId: E } of n)
            null == E || l.has(E) || (g.nonPositionalChannelIdUpdate(E) && (t = !0), l.add(E)),
                null == e || l.has(e) || (g.nonPositionalChannelIdUpdate(e) && (t = !0), l.add(e));
        return t;
    },
    WINDOW_FOCUS: function () {
        return null != h && g.nonPositionalChannelIdUpdate(h);
    },
});
