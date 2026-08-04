n.d(t, { A: () => F });
var i = n(435558),
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
    g = n(924985),
    C = n(734057),
    _ = n(945886),
    I = n(576705),
    T = n(568548),
    p = n(309010),
    N = n(543465),
    S = n(403362),
    L = n(935208),
    m = n(297469),
    f = n(355097);
let O = null,
    b = null,
    R = new m.Ay();
function v() {
    let e = p.Ay.getChannelId(),
        t = p.Ay.getVoiceChannelId();
    return (O = e), (b = t), R.clear();
}
function U(e) {
    let {
        guild: { id: t },
    } = e;
    return R.clearGuildId(t);
}
function D(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return R.clearGuildId(t);
}
function y(e) {
    let { guildId: t } = e;
    return R.clearGuildId(t);
}
function G(e) {
    let { channelId: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
}
function M(e) {
    let { channel: t } = e;
    return R.nonPositionalChannelIdUpdate(t.id);
}
function P(e) {
    let { id: t } = e;
    return R.nonPositionalChannelIdUpdate(t);
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
                null != e && R.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (O = e),
        (b = t),
        !0)
    );
}
function w(e) {
    let { id: t } = e,
        n = C.A.getChannel(t);
    return null == n ? R.clearGuildId(t) : R.clearGuildId(n.guild_id);
}
function V(e) {
    let { guildId: t } = e;
    return R.clearGuildId(t);
}
function j() {
    return R.updateSubtitles();
}
function H(e) {
    let { guildScheduledEvent: t } = e;
    return R.updateSubtitles(t.guild_id);
}
class B extends r.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, E.default, g.A, C.A, _.A, a.Ay, d.A, c.Ay, A.A, I.A, T.Ay, p.Ay, N.Ay, h.A);
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
let F = new B(s.h, {
    APPLICATION_FETCH_FAIL: j,
    APPLICATION_FETCH_SUCCESS: j,
    APPLICATION_FETCH: j,
    APPLICATIONS_FETCH_FAIL: j,
    APPLICATIONS_FETCH_SUCCESS: j,
    APPLICATIONS_FETCH: j,
    BACKGROUND_SYNC: v,
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => C.A.getChannel(e.channelId)?.guild_id)
                .filter(S.Vq)
                .uniq()
                .forEach((e) => {
                    R.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: y,
    CACHE_LOADED_LAZY: v,
    CATEGORY_COLLAPSE_ALL: y,
    CATEGORY_COLLAPSE: w,
    CATEGORY_EXPAND_ALL: y,
    CATEGORY_EXPAND: w,
    CHANNEL_ACK: G,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return R.clearGuildId(C.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: D,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: G,
    CHANNEL_MUTE_EXPIRED: y,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: G,
    CHANNEL_SELECT: x,
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
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    CONNECTION_OPEN: v,
    CURRENT_USER_UPDATE: v,
    DECAY_READ_STATES: v,
    DEV_TOOLS_DESIGN_TOGGLE_SET: v,
    DISABLE_AUTOMATIC_ACK: G,
    DISMISS_FAVORITE_SUGGESTION: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return R.updateSubtitles((0, o.D)(t.location), (0, o.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        j();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: j,
    ENABLE_AUTOMATIC_ACK: G,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return R.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: j,
    GAMES_DATABASE_FETCH: j,
    GAMES_DATABASE_UPDATE: j,
    GUILD_APPLICATIONS_FETCH_SUCCESS: j,
    GUILD_CREATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return E.default.getId() === n.id && R.clearGuildId(t);
    },
    GUILD_MUTE_EXPIRED: y,
    GUILD_ROLE_CREATE: y,
    GUILD_ROLE_DELETE: y,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: y,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: y,
    GUILD_ROLE_UPDATE: y,
    GUILD_SCHEDULED_EVENT_CREATE: H,
    GUILD_SCHEDULED_EVENT_DELETE: H,
    GUILD_SCHEDULED_EVENT_UPDATE: H,
    GUILD_TOGGLE_COLLAPSE_MUTED: y,
    GUILD_UPDATE: U,
    IMPERSONATE_STOP: y,
    IMPERSONATE_UPDATE: y,
    LOAD_CHANNELS: function (e) {
        e.channels.forEach((e) => {
            let { guildId: t } = e;
            return R.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: G,
    MESSAGE_ACK: G,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return R.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: G,
    MESSAGE_DELETE: G,
    NOTIFICATION_SETTINGS_UPDATE: v,
    OVERLAY_INITIALIZE: v,
    PASSIVE_UPDATE_V2: function (e) {
        return R.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: v,
    RESORT_THREADS: G,
    SET_RECENTLY_ACTIVE_COLLAPSED: v,
    THREAD_CREATE: M,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return R.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: y,
    THREAD_MEMBER_UPDATE: P,
    THREAD_MEMBERS_UPDATE: P,
    THREAD_UPDATE: M,
    TRY_ACK: G,
    UPDATE_CHANNEL_DIMENSIONS: G,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        R.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: y,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: y,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return R.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: y,
    USER_GUILD_SETTINGS_GUILD_UPDATE: y,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== f.oD.PRELOADED_USER_SETTINGS) return !1;
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
    VOICE_CATEGORY_COLLAPSE: V,
    VOICE_CATEGORY_EXPAND: V,
    VOICE_CHANNEL_SELECT: x,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return R.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = x(),
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
