n.d(t, { A: () => k });
var i = n(435558),
    l = n.n(i),
    r = n(17928),
    s = n(73153),
    a = n(933958),
    o = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(863005),
    A = n(152007),
    E = n(617617),
    h = n(280450),
    C = n(924985),
    _ = n(734057),
    g = n(945886),
    I = n(576705),
    T = n(573163),
    p = n(309010),
    N = n(543465),
    S = n(403362),
    O = n(935208),
    f = n(297469),
    L = n(355097);
let m = null,
    v = null,
    b = new f.Ay();
function R() {
    let e = p.Ay.getChannelId(),
        t = p.Ay.getVoiceChannelId();
    return ((m = e), (v = t), b.clear());
}
function U(e) {
    let {
        guild: { id: t },
    } = e;
    return b.clearGuildId(t);
}
function D(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return b.clearGuildId(t);
}
function G(e) {
    let { guildId: t } = e;
    return b.clearGuildId(t);
}
function y(e) {
    let { channelId: t } = e;
    return b.nonPositionalChannelIdUpdate(t);
}
function M(e) {
    let { channel: t } = e;
    return b.nonPositionalChannelIdUpdate(t.id);
}
function P(e) {
    let { id: t } = e;
    return b.nonPositionalChannelIdUpdate(t);
}
function x() {
    let e = p.Ay.getChannelId(),
        t = p.Ay.getVoiceChannelId(),
        n = m !== e || v !== t;
    return (
        !!n &&
        (l()([m, v, e, t])
            .uniq()
            .forEach((e) => {
                null != e && b.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (m = e),
        (v = t),
        !0)
    );
}
function V(e) {
    let { id: t } = e,
        n = _.A.getChannel(t);
    return null == n ? b.clearGuildId(t) : b.clearGuildId(n.guild_id);
}
function w(e) {
    let { guildId: t } = e;
    return b.clearGuildId(t);
}
function j() {
    return b.updateSubtitles();
}
function H(e) {
    let { guildScheduledEvent: t } = e;
    return b.updateSubtitles(t.guild_id);
}
class B extends r.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, h.default, C.A, _.A, g.A, a.Ay, d.A, c.Ay, A.A, I.A, T.Ay, p.Ay, N.Ay, E.A);
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
let k = new B(s.h, {
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
                .map((e) => _.A.getChannel(e.channelId)?.guild_id)
                .filter(S.Vq)
                .uniq()
                .forEach((e) => {
                    b.clearGuildId(e) && (n = !0);
                }),
            n
        );
    },
    BULK_CLEAR_RECENTS: G,
    CACHE_LOADED_LAZY: R,
    CATEGORY_COLLAPSE_ALL: G,
    CATEGORY_COLLAPSE: V,
    CATEGORY_EXPAND_ALL: G,
    CATEGORY_EXPAND: V,
    CHANNEL_ACK: y,
    CHANNEL_COLLAPSE: function (e) {
        let { channelId: t } = e;
        return b.clearGuildId(_.A.getChannel(t)?.guild_id);
    },
    CHANNEL_CREATE: D,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: y,
    CHANNEL_MUTE_EXPIRED: G,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: y,
    CHANNEL_SELECT: x,
    CHANNEL_INFO: function (e) {
        let { guildId: t } = e;
        return b.clearGuildId(t);
    },
    CHANNEL_UPDATES: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            l()(t)
                .map((e) => e.guild_id)
                .uniq()
                .forEach((e) => {
                    b.clearGuildId(e) && (n = !0);
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
        return b.nonPositionalChannelIdUpdate(t);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (e) {
        let { instance: t } = e;
        return b.updateSubtitles((0, o.D)(t.location), (0, o.H)(t.location));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (e) {
        j();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: j,
    ENABLE_AUTOMATIC_ACK: y,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (e) {
        let { guildId: t } = e;
        return b.updateSubtitles(t);
    },
    GAMES_DATABASE_FETCH_FAIL: j,
    GAMES_DATABASE_FETCH: j,
    GAMES_DATABASE_UPDATE: j,
    GUILD_APPLICATIONS_FETCH_SUCCESS: j,
    GUILD_CREATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_UPDATE: function (e) {
        let { guildId: t, user: n } = e;
        return h.default.getId() === n.id && b.clearGuildId(t);
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
            return b.clearGuildId(t);
        });
    },
    LOAD_MESSAGES_SUCCESS: y,
    MESSAGE_ACK: y,
    MESSAGE_CREATE: function (e) {
        let { channelId: t } = e;
        return b.nonPositionalChannelIdUpdate(t);
    },
    MESSAGE_DELETE_BULK: y,
    MESSAGE_DELETE: y,
    NOTIFICATION_SETTINGS_UPDATE: R,
    OVERLAY_INITIALIZE: R,
    PASSIVE_UPDATE_V2: function (e) {
        return b.clearGuildId(e.guildId);
    },
    RECOMPUTE_READ_STATES: R,
    RESORT_THREADS: y,
    SET_RECENTLY_ACTIVE_COLLAPSED: R,
    THREAD_CREATE: M,
    THREAD_DELETE: function (e) {
        let { channel: t } = e;
        return b.nonPositionalChannelUpdate(t);
    },
    THREAD_LIST_SYNC: G,
    THREAD_MEMBER_UPDATE: P,
    THREAD_MEMBERS_UPDATE: P,
    THREAD_UPDATE: M,
    TRY_ACK: y,
    UPDATE_CHANNEL_DIMENSIONS: y,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (e) {
        let { guildId: t } = e;
        b.updateSubtitles(t);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        t.forEach((e) => {
            let { guild_id: t } = e;
            return b.clearGuildId(t);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G,
    USER_GUILD_SETTINGS_GUILD_UPDATE: G,
    USER_SETTINGS_PROTO_UPDATE: function (e) {
        let { settings: t } = e;
        if (t.type !== L.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return (
            null != n &&
                O.default.keys(n).forEach((e) => {
                    null != n[e].guildRecentsDismissedAt && (i = b.updateRecentsCategory(e) || i);
                }),
            i
        );
    },
    VOICE_CATEGORY_COLLAPSE: w,
    VOICE_CATEGORY_EXPAND: w,
    VOICE_CHANNEL_SELECT: x,
    VOICE_CHANNEL_STATUS_UPDATE: function (e) {
        return b.nonPositionalChannelIdUpdate(e.id);
    },
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = x(),
            i = new Set();
        for (let { channelId: e, oldChannelId: l } of t)
            (null == l || i.has(l) || (b.nonPositionalChannelIdUpdate(l) && (n = !0), i.add(l)),
                null == e || i.has(e) || (b.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e)));
        return n;
    },
    WINDOW_FOCUS: function () {
        return null != m && b.nonPositionalChannelIdUpdate(m);
    },
});
