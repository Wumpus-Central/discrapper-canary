n.d(t, {
    Z: () => G,
    x: () => S
}),
    n(388685);
var r,
    i,
    l,
    o,
    s = n(392711),
    a = n.n(s),
    c = n(442837),
    u = n(570140),
    d = n(220444),
    h = n(565799),
    p = n(501655),
    f = n(569471),
    g = n(592125),
    m = n(430824),
    b = n(306680),
    _ = n(914010),
    y = n(9156),
    O = n(938475),
    v = n(823379),
    C = n(734307),
    j = n(981631),
    S = (((i = {}).HIDDEN = 'hidden'), (i.UNREAD = 'unread'), (i.MENTIONS = 'mentions'), (i.VOICE_CHANNELS = 'voice-channels'), i);
let E = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    x = {
        topBar: E,
        bottomBar: E
    },
    P = {},
    I = {};
function w(e) {
    let t = g.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? f.Z.isMuted(t.id) : y.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, d.d)(t);
}
function N(e) {
    let t = g.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = y.ZP.isGuildCollapsed(n),
        i = y.ZP.isChannelMuted(n, t.id);
    return (!r || !i) && b.ZP.getMentionCount(e) > 0;
}
function Z(e) {
    return !y.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? h.Z.getMutableParticipants(e.id, p.pV.SPEAKER).length > 0 : O.ZP.getVoiceStatesForChannel(e).length > 0);
}
function T(e) {
    var t, n, r;
    let { guildChannels: i } = C.Z.getGuildWithoutChangingGuildActionRows(e),
        l = i.getChannels(null != (t = I[e]) ? t : []);
    if (null == l || 0 === l.length) return !1;
    let o = null,
        s = null,
        c = null,
        u = null,
        d = !0,
        h = !0,
        p = !1,
        f = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
        g = null != (n = null == f ? void 0 : f.getShownChannelIds()) ? n : [],
        [m, _, y] = i.getSlicedChannels(l);
    for (let e = 0; e < _.length; e++) {
        let t = _[e];
        if (((w(t.id) || a().some(t.threadIds, w)) && (h = !1), (N(t.id) || a().some(t.threadIds, N)) && (d = !1), g.includes(t.id) && (p = !0), !h && !d && p)) break;
    }
    let O = 0,
        v = !1,
        j = 0,
        S = !1;
    if (h || d)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (w(t.id) || a().some(t.threadIds, w)) && (null == s && (s = t.id), (v = !0)), (N(t.id) || a().some(t.threadIds, N)) && (null == o && (o = t.id), (O += b.ZP.getMentionCount(t.id)), (O += a().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    if (h || d)
        for (let e = 0; e < y.length; e++) {
            let t = y[e];
            if (!h && !d) break;
            (w(t.id) || a().some(t.threadIds, w)) && (null == u && (u = t.id), (S = !0)), (N(t.id) || a().some(t.threadIds, N)) && (null == c && (c = t.id), (j += b.ZP.getMentionCount(t.id)), (j += a().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    let x = null,
        T = null,
        A = null != (r = null == f ? void 0 : f.getChannelRecords()) ? r : [];
    d && j > 0
        ? (x = {
              mode: 'mentions',
              mentionCount: j,
              targetChannelId: c
          })
        : !p && a().some(A, Z)
          ? (x = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            S &&
            (x = {
                mode: 'unread',
                mentionCount: 0,
                targetChannelId: u
            }),
        d && O > 0
            ? (T = {
                  mode: 'mentions',
                  mentionCount: O,
                  targetChannelId: o
              })
            : h &&
              v &&
              (T = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: s
              });
    let R = null != T && (null == x || ('mentions' !== x.mode && 'mentions' === T.mode)),
        D = null != x && ('mentions' === x.mode || !R);
    return (
        (P[e] = {
            topBar: R && null != T ? T : E,
            bottomBar: D && null != x ? x : E
        }),
        !0
    );
}
let A = a().throttle(T, 200);
function R(e) {
    let { guildId: t } = e,
        n = m.Z.getGuild(t);
    return null != n && !!n.hasFeature(j.oNc.COMMUNITY) && A(t);
}
function D(e) {
    let { id: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let r = m.Z.getGuild(n.guild_id);
    return null != r && !!r.hasFeature(j.oNc.COMMUNITY) && A(n.guild_id);
}
function L(e) {
    let { channel: t } = e,
        n = g.Z.getChannel(t.id);
    if (null == n) return !1;
    let r = m.Z.getGuild(t.guild_id);
    return null != r && !!r.hasFeature(j.oNc.COMMUNITY) && A(n.guild_id);
}
function k(e) {
    let { channelId: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let r = m.Z.getGuild(n.guild_id);
    return null != r && !!r.hasFeature(j.oNc.COMMUNITY) && _.Z.getGuildId() === n.guild_id && A(n.guild_id);
}
function M(e) {
    let { guildId: t } = e;
    return null != t && A(t);
}
class U extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, b.ZP, y.ZP, f.Z, O.ZP, _.Z, m.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null != (t = P[e]) ? t : x;
    }
}
(o = 'ChannelListUnreadsStore'),
    (l = 'displayName') in U
        ? Object.defineProperty(U, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (U[l] = o);
let G = new U(u.Z, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            r = m.Z.getGuild(t);
        return null != r && !!r.hasFeature(j.oNc.COMMUNITY) && null != n && !a().isEqual(I[t], n) && ((I[t] = n), T(t));
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => {
                    var t;
                    let { channelId: n } = e;
                    return null == (t = g.Z.getChannel(n)) ? void 0 : t.guild_id;
                })
                .filter(v.lm)
                .uniq()
                .forEach((e) => {
                    let t = m.Z.getGuild(e);
                    null != t && t.hasFeature(j.oNc.COMMUNITY) && A(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: k,
    CHANNEL_DELETE: L,
    CHANNEL_LOCAL_ACK: k,
    MESSAGE_ACK: k,
    MESSAGE_CREATE: k,
    MESSAGE_DELETE_BULK: k,
    MESSAGE_DELETE: k,
    PASSIVE_UPDATE_V2: function (e) {
        let t = m.Z.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.hasFeature(j.oNc.COMMUNITY)) && A(e.guildId);
    },
    RESORT_THREADS: k,
    THREAD_CREATE: L,
    THREAD_DELETE: L,
    THREAD_LIST_SYNC: R,
    THREAD_MEMBER_UPDATE: D,
    THREAD_MEMBERS_UPDATE: D,
    THREAD_UPDATE: L,
    BULK_CLEAR_RECENTS: R,
    CATEGORY_COLLAPSE_ALL: R,
    CATEGORY_EXPAND_ALL: R,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = _.Z.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let r = P[n];
        return null != r && 'voice-channels' === r.bottomBar.mode && A(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && A(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: M,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M
});
