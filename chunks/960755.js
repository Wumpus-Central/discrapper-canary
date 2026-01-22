n.d(t, {
    A: () => eu,
}),
    n(896048);
var r,
    i = n(735438),
    a = n.n(i),
    s = n(311907),
    o = n(73153),
    l = n(933958),
    c = n(969151),
    u = n(717125),
    d = n(698441),
    f = n(863005),
    p = n(152007),
    _ = n(617617),
    h = n(961350),
    m = n(924985),
    g = n(734057),
    E = n(945886),
    b = n(760751),
    y = n(576705),
    O = n(222823),
    A = n(309010),
    v = n(543465),
    S = n(403362),
    I = n(661191),
    T = n(32603),
    C = n(355097);

function N(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let R = null,
    w = null,
    P = new T.Ay();

function D() {
    let e = A.A.getChannelId(),
        t = A.A.getVoiceChannelId();
    return (R = e), (w = t), P.clear();
}

function x(e) {
    let {
        guild: { id: t },
    } = e;
    return P.clearGuildId(t);
}

function L(e) {
    let {
        channel: { guild_id: t },
    } = e;
    return P.clearGuildId(t);
}

function j(e) {
    let { channels: t } = e,
        n = !1;
    return (
        a()(t)
            .map((e) => e.guild_id)
            .uniq()
            .forEach((e) => {
                P.clearGuildId(e) && (n = !0);
            }),
        n
    );
}

function M(e) {
    return P.nonPositionalChannelIdUpdate(e.id);
}

function k(e) {
    return P.clearGuildId(e.guildId);
}

function U(e) {
    let { guildId: t, user: n } = e;
    return h.default.getId() === n.id && P.clearGuildId(t);
}

function G(e) {
    let { userGuildSettings: t } = e;
    t.forEach((e) => {
        let { guild_id: t } = e;
        return P.clearGuildId(t);
    });
}

function V(e) {
    let { guildId: t } = e;
    return P.clearGuildId(t);
}

function F(e) {
    e.channels.forEach((e) => {
        let { guildId: t } = e;
        return P.clearGuildId(t);
    });
}

function B(e) {
    var t;
    let { channelId: n } = e;
    return P.clearGuildId(null == (t = g.A.getChannel(n)) ? void 0 : t.guild_id);
}

function H(e) {
    let { channelId: t } = e;
    return P.nonPositionalChannelIdUpdate(t);
}

function Y(e) {
    let { channelId: t } = e;
    return P.nonPositionalChannelIdUpdate(t);
}

function W(e) {
    let { channelId: t } = e;
    return P.nonPositionalChannelIdUpdate(t);
}

function K() {
    return null != R && P.nonPositionalChannelIdUpdate(R);
}

function z(e) {
    let { channels: t } = e,
        n = !1;
    return (
        a()(t)
            .map((e) => {
                var t;
                return null == (t = g.A.getChannel(e.channelId)) ? void 0 : t.guild_id;
            })
            .filter(S.Vq)
            .uniq()
            .forEach((e) => {
                P.clearGuildId(e) && (n = !0);
            }),
        n
    );
}

function q(e) {
    return P.clearGuildId(e.guildId);
}

function X(e) {
    let { channel: t } = e;
    return P.nonPositionalChannelIdUpdate(t.id);
}

function Z(e) {
    let { channel: t } = e;
    return P.nonPositionalChannelUpdate(t);
}

function Q(e) {
    let { id: t } = e;
    return P.nonPositionalChannelIdUpdate(t);
}

function $() {
    let e = A.A.getChannelId(),
        t = A.A.getVoiceChannelId(),
        n = R !== e || w !== t;
    return (
        !!n &&
        (a()([R, w, e, t])
            .uniq()
            .forEach((e) => {
                null != e && P.nonPositionalChannelIdUpdate(e) && (n = !0);
            }),
        (R = e),
        (w = t),
        !0)
    );
}

function J(e) {
    let { voiceStates: t } = e,
        n = $(),
        r = new Set();
    for (let { channelId: e, oldChannelId: i } of t)
        null == i || r.has(i) || (P.nonPositionalChannelIdUpdate(i) && (n = !0), r.add(i)),
            null == e || r.has(e) || (P.nonPositionalChannelIdUpdate(e) && (n = !0), r.add(e));
    return n;
}

function ee(e) {
    let { id: t } = e,
        n = g.A.getChannel(t);
    return null == n ? P.clearGuildId(t) : P.clearGuildId(n.guild_id);
}

function et(e) {
    let { guildId: t } = e;
    return P.clearGuildId(t);
}

function en(e) {
    let { location: t } = e;
    return P.updateSubtitles((0, c.D)(t), (0, c.H)(t));
}

function er(e) {
    ei();
}

function ei() {
    return P.updateSubtitles();
}

function ea(e) {
    let { guildId: t } = e;
    return P.updateSubtitles(t);
}

function es(e) {
    let { guildScheduledEvent: t } = e;
    return P.updateSubtitles(t.guild_id);
}

function eo(e) {
    let { guildId: t } = e;
    P.updateSubtitles(t);
}

function el(e) {
    var t;
    let { settings: n } = e;
    if (n.type !== C.oD.PRELOADED_USER_SETTINGS) return !1;
    let r = null == (t = n.proto.guilds) ? void 0 : t.guilds,
        i = !1;
    return (
        null != r &&
            I.default.keys(r).forEach((e) => {
                null != r[e].guildRecentsDismissedAt && (i = P.updateRecentsCategory(e) || i);
            }),
        i
    );
}
class ec extends (r = s.Ay.Store) {
    initialize() {
        this.waitFor(f.A, h.default, m.A, g.A, E.A, l.Ay, b.A, u.A, d.Ay, p.A, y.A, O.Ay, A.A, v.Ay, _.A);
    }
    getGuild(e, t) {
        var n, r;
        let i = P.getGuild(
            e,
            null != (n = null == t ? void 0 : t.guildActionRows) ? n : [],
            null != (r = null == t ? void 0 : t.channelNoticeRows) ? r : [],
        );
        return {
            guildChannelsVersion: i.version,
            guildChannels: i,
        };
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = P.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t,
        };
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = P.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length;
    }
}
N(ec, "displayName", "ChannelListStore");
let eu = new ec(o.h, {
    APPLICATION_FETCH_FAIL: ei,
    APPLICATION_FETCH_SUCCESS: ei,
    APPLICATION_FETCH: ei,
    APPLICATIONS_FETCH_FAIL: ei,
    APPLICATIONS_FETCH_SUCCESS: ei,
    APPLICATIONS_FETCH: ei,
    BACKGROUND_SYNC: D,
    BULK_ACK: z,
    BULK_CLEAR_RECENTS: V,
    CACHE_LOADED_LAZY: D,
    CATEGORY_COLLAPSE_ALL: V,
    CATEGORY_COLLAPSE: ee,
    CATEGORY_EXPAND_ALL: V,
    CATEGORY_EXPAND: ee,
    CHANNEL_ACK: W,
    CHANNEL_COLLAPSE: B,
    CHANNEL_CREATE: L,
    CHANNEL_DELETE: L,
    CHANNEL_LOCAL_ACK: W,
    CHANNEL_MUTE_EXPIRED: V,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: W,
    CHANNEL_SELECT: $,
    CHANNEL_STATUSES: k,
    CHANNEL_UPDATES: j,
    CONNECTION_OPEN_SUPPLEMENTAL: ei,
    CONNECTION_OPEN: D,
    CURRENT_USER_UPDATE: D,
    DECAY_READ_STATES: D,
    DEV_TOOLS_DESIGN_TOGGLE_SET: D,
    DISABLE_AUTOMATIC_ACK: W,
    DISMISS_FAVORITE_SUGGESTION: Y,
    EMBEDDED_ACTIVITY_UPDATE_V2: en,
    EMBEDDED_ACTIVITY_LAUNCH_START: er,
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: ei,
    ENABLE_AUTOMATIC_ACK: W,
    FETCH_GUILD_EVENTS_FOR_GUILD: ea,
    GAMES_DATABASE_FETCH_FAIL: ei,
    GAMES_DATABASE_FETCH: ei,
    GAMES_DATABASE_UPDATE: ei,
    GUILD_APPLICATIONS_FETCH_SUCCESS: ei,
    GUILD_CREATE: x,
    GUILD_DELETE: x,
    GUILD_MEMBER_UPDATE: U,
    GUILD_MUTE_EXPIRED: V,
    GUILD_ROLE_CREATE: V,
    GUILD_ROLE_DELETE: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: V,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: V,
    GUILD_ROLE_UPDATE: V,
    GUILD_SCHEDULED_EVENT_CREATE: es,
    GUILD_SCHEDULED_EVENT_DELETE: es,
    GUILD_SCHEDULED_EVENT_UPDATE: es,
    GUILD_TOGGLE_COLLAPSE_MUTED: V,
    GUILD_UPDATE: x,
    IMPERSONATE_STOP: V,
    IMPERSONATE_UPDATE: V,
    LOAD_CHANNELS: F,
    LOAD_MESSAGES_SUCCESS: W,
    MESSAGE_ACK: W,
    MESSAGE_CREATE: H,
    MESSAGE_DELETE_BULK: W,
    MESSAGE_DELETE: W,
    NOTIFICATION_SETTINGS_UPDATE: D,
    OVERLAY_INITIALIZE: D,
    PASSIVE_UPDATE_V2: q,
    RECOMPUTE_READ_STATES: D,
    RESORT_THREADS: W,
    SET_RECENTLY_ACTIVE_COLLAPSED: D,
    THREAD_CREATE: X,
    THREAD_DELETE: Z,
    THREAD_LIST_SYNC: V,
    THREAD_MEMBER_UPDATE: Q,
    THREAD_MEMBERS_UPDATE: Q,
    THREAD_UPDATE: X,
    TRY_ACK: W,
    UPDATE_CHANNEL_DIMENSIONS: W,
    UPDATE_CHANNEL_LIST_SUBTITLES: eo,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: V,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: V,
    USER_GUILD_SETTINGS_FULL_UPDATE: G,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: V,
    USER_GUILD_SETTINGS_GUILD_UPDATE: V,
    USER_SETTINGS_PROTO_UPDATE: el,
    VOICE_CATEGORY_COLLAPSE: et,
    VOICE_CATEGORY_EXPAND: et,
    VOICE_CHANNEL_SELECT: $,
    VOICE_CHANNEL_STATUS_UPDATE: M,
    VOICE_STATE_UPDATES: J,
    WINDOW_FOCUS: K,
});
