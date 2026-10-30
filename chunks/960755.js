n.d(t, { A: () => H });
var i = n(435558),
    r = n.n(i),
    a = n(17928),
    s = n(73153),
    l = n(933958),
    o = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(863005),
    _ = n(152007),
    E = n(617617),
    A = n(280450),
    h = n(924985),
    f = n(734057),
    I = n(945886),
    p = n(576705),
    T = n(573163),
    m = n(309010),
    g = n(543465),
    S = n(403362),
    N = n(935208),
    C = n(297469),
    O = n(355097);
let R = null,
    L = null,
    y = new C.Ay();
function D() {
    let e = m.Ay.getChannelId(),
        t = m.Ay.getVoiceChannelId();
    return ((R = e), (L = t), y.clear());
}
function v(e) {
    let {
        guild: { id: t },
    } = e;
    return y.clearGuildId(t);
}
function b(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return y.clearGuildId(t);
}
function M(e) {
    let { guildId: t } = e;
    return y.clearGuildId(t);
}
function P(e) {
    let { channelId: t } = e;
    return y.nonPositionalChannelIdUpdate(t);
}
function U(e) {
    let { channel: t } = e;
    return y.nonPositionalChannelIdUpdate(t.id);
}
function w(e) {
    let { id: t } = e;
    return y.nonPositionalChannelIdUpdate(t);
}
function G() {
    let e = m.Ay.getChannelId(),
        t = m.Ay.getVoiceChannelId(),
        n = R !== e || L !== t;
    return (
        !!n &&
        (r()([R, L, e, t])
            .uniq()
            .forEach((e) => {
                null != e && y.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (R = e),
        (L = t),
        !0)
    );
}
function x(e) {
    let { id: t } = e,
        n = f.A.getChannel(t);
    return null == n ? y.clearGuildId(t) : y.clearGuildId(n.guild_id);
}
function k(e) {
    let { guildId: t } = e;
    return y.clearGuildId(t);
}
function F() {
    return y.updateSubtitles();
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return y.updateSubtitles(t.guild_id);
}
class V extends a.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, A.default, h.A, f.A, I.A, l.Ay, d.A, c.Ay, _.A, p.A, T.Ay, m.Ay, g.Ay, E.A);
    }
    getGuild(e, t) {
        let n = y.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = y.getGuildChannelRowsOnly(e);
        return { guildChannelsVersion: t.version, guildChannels: t };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = y.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
let H = new V(s.h, {
    APPLICATION_FETCH_FAIL: F,
    APPLICATION_FETCH_SUCCESS: F,
    APPLICATION_FETCH: F,
    APPLICATIONS_FETCH_FAIL: F,
    APPLICATIONS_FETCH_SUCCESS: F,
    APPLICATIONS_FETCH: F,
    BACKGROUND_SYNC: D,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            r()(t)
                .map((e) => f.A.getChannel(e.channelId)?.guild_id)
                .filter(S.Vq)
                .uniq()
                .forEach((e) => {
                    y.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: M,
    CACHE_LOADED_LAZY: D,
    CATEGORY_COLLAPSE_ALL: M,
    CATEGORY_COLLAPSE: x,
    CATEGORY_EXPAND_ALL: M,
    CATEGORY_EXPAND: x,
    CHANNEL_ACK: P,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return y.clearGuildId(f.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: b,
    CHANNEL_DELETE: b,
    CHANNEL_LOCAL_ACK: P,
    CHANNEL_MUTE_EXPIRED: M,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: P,
    CHANNEL_SELECT: G,
    CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        return y.clearGuildId(t);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            r()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    y.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: F,
    CONNECTION_OPEN: D,
    CURRENT_USER_UPDATE: D,
    DECAY_READ_STATES: D,
    DEV_TOOLS_DESIGN_TOGGLE_SET: D,
    DISABLE_AUTOMATIC_ACK: P,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return y.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return y.updateSubtitles((0, o.D)(t.location), (0, o.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        F();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: F,
    ENABLE_AUTOMATIC_ACK: P,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return y.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: F,
    GAMES_DATABASE_FETCH: F,
    GAMES_DATABASE_UPDATE: F,
    GUILD_APPLICATIONS_FETCH_SUCCESS: F,
    GUILD_CREATE: v,
    GUILD_DELETE: v,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return A.default.getId() === n.id && y.clearGuildId(t);
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
    GUILD_UPDATE: v,
    IMPERSONATE_STOP: M,
    IMPERSONATE_UPDATE: M,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return y.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: P,
    MESSAGE_ACK: P,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return y.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: P,
    MESSAGE_DELETE: P,
    NOTIFICATION_SETTINGS_UPDATE: D,
    OVERLAY_INITIALIZE: D,
    PASSIVE_UPDATE_V2: function (e) {
        return y.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: D,
    RESORT_THREADS: P,
    SET_RECENTLY_ACTIVE_COLLAPSED: D,
    THREAD_CREATE: U,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return y.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: M,
    THREAD_MEMBER_UPDATE: w,
    THREAD_MEMBERS_UPDATE: w,
    THREAD_UPDATE: U,
    TRY_ACK: P,
    UPDATE_CHANNEL_DIMENSIONS: P,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        y.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return y.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
    USER_GUILD_SETTINGS_GUILD_UPDATE: M,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== O.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return (
            null != n &&
                N.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = y.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: k,
    VOICE_CATEGORY_EXPAND: k,
    VOICE_CHANNEL_SELECT: G,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return y.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = G(),
            i = new Set();
        for (let { channelId: e, oldChannelId: r } of t)
            (null == r || i.has(r) || (y.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)),
                null == e || i.has(e) || (y.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e)));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != R && y.nonPositionalChannelIdUpdate(R);
    },
});
