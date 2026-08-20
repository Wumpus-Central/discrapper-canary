n.d(t, { A: () => F });
var i = n(435558),
    l = n.n(i),
    r = n(17928),
    s = n(228366),
    a = n(933958),
    o = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(863005),
    A = n(152007),
    h = n(617617),
    E = n(280450),
    g = n(924985),
    C = n(734057),
    _ = n(945886),
    I = n(576705),
    T = n(573163),
    p = n(309010),
    S = n(543465),
    N = n(403362),
    L = n(935208),
    m = n(297469),
    f = n(355097);
let O = null,
    b = null,
    v = new m.Ay();
function R() {
    let e = p.Ay.getChannelId(),
        t = p.Ay.getVoiceChannelId();
    return (O = e), (b = t), v.clear();
}
function U(e) {
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
function G(e) {
    let { guildId: t } = e;
    return v.clearGuildId(t);
}
function y(e) {
    let { channelId: t } = e;
    return v.nonPositionalChannelIdUpdate(t);
}
function M(e) {
    let { channel: t } = e;
    return v.nonPositionalChannelIdUpdate(t.id);
}
function P(e) {
    let { id: t } = e;
    return v.nonPositionalChannelIdUpdate(t);
}
function x() {
    let e = p.Ay.getChannelId(),
        t = p.Ay.getVoiceChannelId(),
        n = O !== e || b !== t;
    return (
        !!n &&
        (l()([O, b, e, t])
            .uniq()
            .forEach((e) => {
                null != e && v.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (O = e),
        (b = t),
        !0)
    );
}
function w(e) {
    let { id: t } = e,
        n = C.A.getChannel(t);
    return null == n ? v.clearGuildId(t) : v.clearGuildId(n.guild_id);
}
function V(e) {
    let { guildId: t } = e;
    return v.clearGuildId(t);
}
function j() {
    return v.updateSubtitles();
}
function H(e) {
    let { guildScheduledEvent: t } = e;
    return v.updateSubtitles(t.guild_id);
}
class B extends r.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, E.default, g.A, C.A, _.A, a.Ay, d.A, c.Ay, A.A, I.A, T.Ay, p.Ay, S.Ay, h.A);
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
let F = new B(s.h, {
    APPLICATION_FETCH_FAIL: j,
    APPLICATION_FETCH_SUCCESS: j,
    APPLICATION_FETCH: j,
    APPLICATIONS_FETCH_FAIL: j,
    APPLICATIONS_FETCH_SUCCESS: j,
    APPLICATIONS_FETCH: j,
    BACKGROUND_SYNC: R,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => C.A.getChannel(e.channelId)?.guild_id)
                .filter(N.Vq)
                .uniq()
                .forEach((e) => {
                    v.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: G,
    CACHE_LOADED_LAZY: R,
    CATEGORY_COLLAPSE_ALL: G,
    CATEGORY_COLLAPSE: w,
    CATEGORY_EXPAND_ALL: G,
    CATEGORY_EXPAND: w,
    CHANNEL_ACK: y,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return v.clearGuildId(C.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: D,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: y,
    CHANNEL_MUTE_EXPIRED: G,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: y,
    CHANNEL_SELECT: x,
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
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    CONNECTION_OPEN: R,
    CURRENT_USER_UPDATE: R,
    DECAY_READ_STATES: R,
    DEV_TOOLS_DESIGN_TOGGLE_SET: R,
    DISABLE_AUTOMATIC_ACK: y,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return v.updateSubtitles((0, o.D)(t.location), (0, o.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        j();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: j,
    ENABLE_AUTOMATIC_ACK: y,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return v.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: j,
    GAMES_DATABASE_FETCH: j,
    GAMES_DATABASE_UPDATE: j,
    GUILD_APPLICATIONS_FETCH_SUCCESS: j,
    GUILD_CREATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return E.default.getId() === n.id && v.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: G,
    GUILD_ROLE_CREATE: G,
    GUILD_ROLE_DELETE: G,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: G,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: G,
    GUILD_ROLE_UPDATE: G,
    GUILD_SCHEDULED_EVENT_CREATE: H,
    GUILD_SCHEDULED_EVENT_DELETE: H,
    GUILD_SCHEDULED_EVENT_UPDATE: H,
    GUILD_TOGGLE_COLLAPSE_MUTED: G,
    GUILD_UPDATE: U,
    IMPERSONATE_STOP: G,
    IMPERSONATE_UPDATE: G,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return v.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: y,
    MESSAGE_ACK: y,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return v.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: y,
    MESSAGE_DELETE: y,
    NOTIFICATION_SETTINGS_UPDATE: R,
    OVERLAY_INITIALIZE: R,
    PASSIVE_UPDATE_V2: function (e) {
        return v.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: R,
    RESORT_THREADS: y,
    SET_RECENTLY_ACTIVE_COLLAPSED: R,
    THREAD_CREATE: M,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return v.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: G,
    THREAD_MEMBER_UPDATE: P,
    THREAD_MEMBERS_UPDATE: P,
    THREAD_UPDATE: M,
    TRY_ACK: y,
    UPDATE_CHANNEL_DIMENSIONS: y,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        v.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return v.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
    USER_GUILD_SETTINGS_GUILD_UPDATE: G,
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
    VOICE_CATEGORY_COLLAPSE: V,
    VOICE_CATEGORY_EXPAND: V,
    VOICE_CHANNEL_SELECT: x,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return v.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = x(),
            i = new Set();
        for (let { channelId: e, oldChannelId: l } of t)
            null == l || i.has(l) || (v.nonPositionalChannelIdUpdate(l) && (n = !0), i.add(l)),
                null == e || i.has(e) || (v.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != O && v.nonPositionalChannelIdUpdate(O);
    },
});
