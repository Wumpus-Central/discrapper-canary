n.d(t, { A: () => k });
var i = n(435558),
    l = n.n(i),
    r = n(17928),
    s = n(228366),
    a = n(933958),
    o = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(695633),
    h = n(152007),
    A = n(617617),
    E = n(280450),
    C = n(924985),
    g = n(734057),
    _ = n(945886),
    I = n(760751),
    T = n(576705),
    p = n(568548),
    S = n(309010),
    N = n(543465),
    m = n(403362),
    L = n(935208),
    O = n(297469),
    f = n(355097);
let b = null,
    R = null,
    v = new O.Ay();
function U() {
    let e = S.Ay.getChannelId(),
        t = S.Ay.getVoiceChannelId();
    return (b = e), (R = t), v.clear();
}
function y(e) {
    let {
        guild: { id: t },
    } = e;
    return v.clearGuildId(t);
}
function D(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return v.clearGuildId(t);
}
function M(e) {
    let { guildId: t } = e;
    return v.clearGuildId(t);
}
function G(e) {
    let { channelId: t } = e;
    return v.nonPositionalChannelIdUpdate(t);
}
function x(e) {
    let { channel: t } = e;
    return v.nonPositionalChannelIdUpdate(t.id);
}
function P(e) {
    let { id: t } = e;
    return v.nonPositionalChannelIdUpdate(t);
}
function V() {
    let e = S.Ay.getChannelId(),
        t = S.Ay.getVoiceChannelId(),
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
function j(e) {
    let { id: t } = e,
        n = g.A.getChannel(t);
    return null == n ? v.clearGuildId(t) : v.clearGuildId(n.guild_id);
}
function w(e) {
    let { guildId: t } = e;
    return v.clearGuildId(t);
}
function H() {
    return v.updateSubtitles();
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return v.updateSubtitles(t.guild_id);
}
class F extends r.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, E.default, C.A, g.A, _.A, a.Ay, I.A, d.A, c.Ay, h.A, T.A, p.Ay, S.Ay, N.Ay, A.A);
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
let k = new F(s.h, {
    APPLICATION_FETCH_FAIL: H,
    APPLICATION_FETCH_SUCCESS: H,
    APPLICATION_FETCH: H,
    APPLICATIONS_FETCH_FAIL: H,
    APPLICATIONS_FETCH_SUCCESS: H,
    APPLICATIONS_FETCH: H,
    BACKGROUND_SYNC: U,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => g.A.getChannel(e.channelId)?.guild_id)
                .filter(m.Vq)
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
    CATEGORY_COLLAPSE: j,
    CATEGORY_EXPAND_ALL: M,
    CATEGORY_EXPAND: j,
    CHANNEL_ACK: G,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return v.clearGuildId(g.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: D,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: G,
    CHANNEL_MUTE_EXPIRED: M,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: G,
    CHANNEL_SELECT: V,
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
    CONNECTION_OPEN_SUPPLEMENTAL: H,
    CONNECTION_OPEN: U,
    CURRENT_USER_UPDATE: U,
    DECAY_READ_STATES: U,
    DEV_TOOLS_DESIGN_TOGGLE_SET: U,
    DISABLE_AUTOMATIC_ACK: G,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return v.updateSubtitles((0, o.D)(t.location), (0, o.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        H();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: H,
    ENABLE_AUTOMATIC_ACK: G,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return v.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: H,
    GAMES_DATABASE_FETCH: H,
    GAMES_DATABASE_UPDATE: H,
    GUILD_APPLICATIONS_FETCH_SUCCESS: H,
    GUILD_CREATE: y,
    GUILD_DELETE: y,
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
    GUILD_SCHEDULED_EVENT_CREATE: B,
    GUILD_SCHEDULED_EVENT_DELETE: B,
    GUILD_SCHEDULED_EVENT_UPDATE: B,
    GUILD_TOGGLE_COLLAPSE_MUTED: M,
    GUILD_UPDATE: y,
    IMPERSONATE_STOP: M,
    IMPERSONATE_UPDATE: M,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return v.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: G,
    MESSAGE_ACK: G,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: G,
    MESSAGE_DELETE: G,
    NOTIFICATION_SETTINGS_UPDATE: U,
    OVERLAY_INITIALIZE: U,
    PASSIVE_UPDATE_V2: function (e) {
        return v.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: U,
    RESORT_THREADS: G,
    SET_RECENTLY_ACTIVE_COLLAPSED: U,
    THREAD_CREATE: x,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return v.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: M,
    THREAD_MEMBER_UPDATE: P,
    THREAD_MEMBERS_UPDATE: P,
    THREAD_UPDATE: x,
    TRY_ACK: G,
    UPDATE_CHANNEL_DIMENSIONS: G,
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
                L.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = v.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: w,
    VOICE_CATEGORY_EXPAND: w,
    VOICE_CHANNEL_SELECT: V,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return v.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = V(),
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
