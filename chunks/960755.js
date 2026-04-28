_.d(n, { A: () => X });
var e = _(735438),
    t = _.n(e),
    A = _(17928),
    l = _(228366),
    T = _(933958),
    C = _(969151),
    i = _(717125),
    S = _(698441),
    u = _(695633),
    I = _(152007),
    L = _(617617),
    d = _(495544),
    r = _(924985),
    D = _(734057),
    a = _(945886),
    o = _(760751),
    U = _(576705),
    N = _(222823),
    P = _(309010),
    c = _(543465),
    G = _(403362),
    R = _(935208),
    O = _(32603),
    s = _(355097);
let h = null,
    f = null,
    H = new O.Ay();
function g() {
    let E = P.A.getChannelId(),
        n = P.A.getVoiceChannelId();
    return (h = E), (f = n), H.clear();
}
function p(E) {
    let {
        guild: { id: n },
    } = E;
    return H.clearGuildId(n);
}
function M(E) {
    let {
        channel: { guild_id: n },
    } = E;
    return H.clearGuildId(n);
}
function F(E) {
    let { guildId: n } = E;
    return H.clearGuildId(n);
}
function V(E) {
    let { channelId: n } = E;
    return H.nonPositionalChannelIdUpdate(n);
}
function B(E) {
    let { channel: n } = E;
    return H.nonPositionalChannelIdUpdate(n.id);
}
function Y(E) {
    let { id: n } = E;
    return H.nonPositionalChannelIdUpdate(n);
}
function y() {
    let E = P.A.getChannelId(),
        n = P.A.getVoiceChannelId(),
        _ = h !== E || f !== n;
    return (
        !!_ &&
        (t()([h, f, E, n])
            .uniq()
            .forEach((E) => {
                null != E && H.nonPositionalChannelIdUpdate(E) && (_ = !0);
            }),
        (h = E),
        (f = n),
        !0)
    );
}
function w(E) {
    let { id: n } = E,
        _ = D.A.getChannel(n);
    return null == _ ? H.clearGuildId(n) : H.clearGuildId(_.guild_id);
}
function K(E) {
    let { guildId: n } = E;
    return H.clearGuildId(n);
}
function b() {
    return H.updateSubtitles();
}
function m(E) {
    let { guildScheduledEvent: n } = E;
    return H.updateSubtitles(n.guild_id);
}
class k extends A.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, d.default, r.A, D.A, a.A, T.Ay, o.A, i.A, S.Ay, I.A, U.A, N.Ay, P.A, c.Ay, L.A);
    }
    getGuild(E, n) {
        let _ = H.getGuild(E, n?.guildActionRows ?? [], n?.channelNoticeRows ?? []);
        return { guildChannelsVersion: _.version, guildChannels: _ };
    }
    getGuildWithoutChangingGuildActionRows(E) {
        let n = H.getGuildChannelRowsOnly(E);
        return { guildChannelsVersion: n.version, guildChannels: n };
    }
    recentsChannelCount(E) {
        if (null == E) return 0;
        let n = H.getGuildChannelRowsOnly(E);
        return n.getCategoryFromSection(n.recentsSectionNumber).getShownChannelIds().length;
    }
}
let X = new k(l.h, {
    APPLICATION_FETCH_FAIL: b,
    APPLICATION_FETCH_SUCCESS: b,
    APPLICATION_FETCH: b,
    APPLICATIONS_FETCH_FAIL: b,
    APPLICATIONS_FETCH_SUCCESS: b,
    APPLICATIONS_FETCH: b,
    BACKGROUND_SYNC: g,
    BULK_ACK: function (E) {
        let { channels: n } = E,
            _ = !1;
        return (
            t()(n)
                .map((E) => D.A.getChannel(E.channelId)?.guild_id)
                .filter(G.Vq)
                .uniq()
                .forEach((E) => {
                    H.clearGuildId(E) && (_ = !0);
                }),
            _
        );
    },
    BULK_CLEAR_RECENTS: F,
    CACHE_LOADED_LAZY: g,
    CATEGORY_COLLAPSE_ALL: F,
    CATEGORY_COLLAPSE: w,
    CATEGORY_EXPAND_ALL: F,
    CATEGORY_EXPAND: w,
    CHANNEL_ACK: V,
    CHANNEL_COLLAPSE: function (E) {
        let { channelId: n } = E;
        return H.clearGuildId(D.A.getChannel(n)?.guild_id);
    },
    CHANNEL_CREATE: M,
    CHANNEL_DELETE: M,
    CHANNEL_LOCAL_ACK: V,
    CHANNEL_MUTE_EXPIRED: F,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: V,
    CHANNEL_SELECT: y,
    CHANNEL_INFO: function (E) {
        let { guildId: n } = E;
        return H.clearGuildId(n);
    },
    CHANNEL_UPDATES: function (E) {
        let { channels: n } = E,
            _ = !1;
        return (
            t()(n)
                .map((E) => E.guild_id)
                .uniq()
                .forEach((E) => {
                    H.clearGuildId(E) && (_ = !0);
                }),
            _
        );
    },
    CONNECTION_OPEN_SUPPLEMENTAL: b,
    CONNECTION_OPEN: g,
    CURRENT_USER_UPDATE: g,
    DECAY_READ_STATES: g,
    DEV_TOOLS_DESIGN_TOGGLE_SET: g,
    DISABLE_AUTOMATIC_ACK: V,
    DISMISS_FAVORITE_SUGGESTION: function (E) {
        let { channelId: n } = E;
        return H.nonPositionalChannelIdUpdate(n);
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function (E) {
        let { location: n } = E;
        return H.updateSubtitles((0, C.D)(n), (0, C.H)(n));
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function (E) {
        b();
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: b,
    ENABLE_AUTOMATIC_ACK: V,
    FETCH_GUILD_EVENTS_FOR_GUILD: function (E) {
        let { guildId: n } = E;
        return H.updateSubtitles(n);
    },
    GAMES_DATABASE_FETCH_FAIL: b,
    GAMES_DATABASE_FETCH: b,
    GAMES_DATABASE_UPDATE: b,
    GUILD_APPLICATIONS_FETCH_SUCCESS: b,
    GUILD_CREATE: p,
    GUILD_DELETE: p,
    GUILD_MEMBER_UPDATE: function (E) {
        let { guildId: n, user: _ } = E;
        return d.default.getId() === _.id && H.clearGuildId(n);
    },
    GUILD_MUTE_EXPIRED: F,
    GUILD_ROLE_CREATE: F,
    GUILD_ROLE_DELETE: F,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: F,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: F,
    GUILD_ROLE_UPDATE: F,
    GUILD_SCHEDULED_EVENT_CREATE: m,
    GUILD_SCHEDULED_EVENT_DELETE: m,
    GUILD_SCHEDULED_EVENT_UPDATE: m,
    GUILD_TOGGLE_COLLAPSE_MUTED: F,
    GUILD_UPDATE: p,
    IMPERSONATE_STOP: F,
    IMPERSONATE_UPDATE: F,
    LOAD_CHANNELS: function (E) {
        E.channels.forEach((E) => {
            let { guildId: n } = E;
            return H.clearGuildId(n);
        });
    },
    LOAD_MESSAGES_SUCCESS: V,
    MESSAGE_ACK: V,
    MESSAGE_CREATE: function (E) {
        let { channelId: n } = E;
        return H.nonPositionalChannelIdUpdate(n);
    },
    MESSAGE_DELETE_BULK: V,
    MESSAGE_DELETE: V,
    NOTIFICATION_SETTINGS_UPDATE: g,
    OVERLAY_INITIALIZE: g,
    PASSIVE_UPDATE_V2: function (E) {
        return H.clearGuildId(E.guildId);
    },
    RECOMPUTE_READ_STATES: g,
    RESORT_THREADS: V,
    SET_RECENTLY_ACTIVE_COLLAPSED: g,
    THREAD_CREATE: B,
    THREAD_DELETE: function (E) {
        let { channel: n } = E;
        return H.nonPositionalChannelUpdate(n);
    },
    THREAD_LIST_SYNC: F,
    THREAD_MEMBER_UPDATE: Y,
    THREAD_MEMBERS_UPDATE: Y,
    THREAD_UPDATE: B,
    TRY_ACK: V,
    UPDATE_CHANNEL_DIMENSIONS: V,
    UPDATE_CHANNEL_LIST_SUBTITLES: function (E) {
        let { guildId: n } = E;
        H.updateSubtitles(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: F,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: F,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (E) {
        let { userGuildSettings: n } = E;
        n.forEach((E) => {
            let { guild_id: n } = E;
            return H.clearGuildId(n);
        });
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: F,
    USER_GUILD_SETTINGS_GUILD_UPDATE: F,
    USER_SETTINGS_PROTO_UPDATE: function (E) {
        let { settings: n } = E;
        if (n.type !== s.oD.PRELOADED_USER_SETTINGS) return !1;
        let _ = n.proto.guilds?.guilds,
            e = !1;
        return (
            null != _ &&
                R.default.keys(_).forEach((E) => {
                    null != _[E].guildRecentsDismissedAt && (e = H.updateRecentsCategory(E) || e);
                }),
            e
        );
    },
    VOICE_CATEGORY_COLLAPSE: K,
    VOICE_CATEGORY_EXPAND: K,
    VOICE_CHANNEL_SELECT: y,
    VOICE_CHANNEL_STATUS_UPDATE: function (E) {
        return H.nonPositionalChannelIdUpdate(E.id);
    },
    VOICE_STATE_UPDATES: function (E) {
        let { voiceStates: n } = E,
            _ = y(),
            e = new Set();
        for (let { channelId: E, oldChannelId: t } of n)
            null == t || e.has(t) || (H.nonPositionalChannelIdUpdate(t) && (_ = !0), e.add(t)),
                null == E || e.has(E) || (H.nonPositionalChannelIdUpdate(E) && (_ = !0), e.add(E));
        return _;
    },
    WINDOW_FOCUS: function () {
        return null != h && H.nonPositionalChannelIdUpdate(h);
    },
});
