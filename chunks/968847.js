n.d(t, {
    Z: () => G,
    x: () => j
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
    y = n(914010),
    _ = n(9156),
    v = n(938475),
    O = n(823379),
    C = n(734307),
    S = n(981631),
    j = (((i = {}).HIDDEN = 'hidden'), (i.UNREAD = 'unread'), (i.MENTIONS = 'mentions'), (i.VOICE_CHANNELS = 'voice-channels'), i);
let E = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    x = {
        topBar: E,
        bottomBar: E
    },
    N = {},
    I = {};
function P(e) {
    let t = g.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? f.Z.isMuted(t.id) : _.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, d.d)(t);
}
function w(e) {
    let t = g.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = _.ZP.isGuildCollapsed(n),
        i = _.ZP.isChannelMuted(n, t.id);
    return (!r || !i) && b.ZP.getMentionCount(e) > 0;
}
function Z(e) {
    return !_.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? h.Z.getMutableParticipants(e.id, p.pV.SPEAKER).length > 0 : v.ZP.getVoiceStatesForChannel(e).length > 0);
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
        [m, y, _] = i.getSlicedChannels(l);
    for (let e = 0; e < y.length; e++) {
        let t = y[e];
        if (((P(t.id) || a().some(t.threadIds, P)) && (h = !1), (w(t.id) || a().some(t.threadIds, w)) && (d = !1), g.includes(t.id) && (p = !0), !h && !d && p)) break;
    }
    let v = 0,
        O = !1,
        S = 0,
        j = !1;
    if (h || d)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (P(t.id) || a().some(t.threadIds, P)) && (null == s && (s = t.id), (O = !0)), (w(t.id) || a().some(t.threadIds, w)) && (null == o && (o = t.id), (v += b.ZP.getMentionCount(t.id)), (v += a().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    if (h || d)
        for (let e = 0; e < _.length; e++) {
            let t = _[e];
            if (!h && !d) break;
            (P(t.id) || a().some(t.threadIds, P)) && (null == u && (u = t.id), (j = !0)), (w(t.id) || a().some(t.threadIds, w)) && (null == c && (c = t.id), (S += b.ZP.getMentionCount(t.id)), (S += a().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    let x = null,
        T = null,
        A = null != (r = null == f ? void 0 : f.getChannelRecords()) ? r : [];
    d && S > 0
        ? (x = {
              mode: 'mentions',
              mentionCount: S,
              targetChannelId: c
          })
        : !p && a().some(A, Z)
          ? (x = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            j &&
            (x = {
                mode: 'unread',
                mentionCount: 0,
                targetChannelId: u
            }),
        d && v > 0
            ? (T = {
                  mode: 'mentions',
                  mentionCount: v,
                  targetChannelId: o
              })
            : h &&
              O &&
              (T = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: s
              });
    let R = null != T && (null == x || ('mentions' !== x.mode && 'mentions' === T.mode)),
        D = null != x && ('mentions' === x.mode || !R);
    return (
        (N[e] = {
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
    return null != n && !!n.hasFeature(S.oNc.COMMUNITY) && A(t);
}
function D(e) {
    let { id: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let r = m.Z.getGuild(n.guild_id);
    return null != r && !!r.hasFeature(S.oNc.COMMUNITY) && A(n.guild_id);
}
function L(e) {
    let { channel: t } = e,
        n = g.Z.getChannel(t.id);
    if (null == n) return !1;
    let r = m.Z.getGuild(t.guild_id);
    return null != r && !!r.hasFeature(S.oNc.COMMUNITY) && A(n.guild_id);
}
function k(e) {
    let { channelId: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let r = m.Z.getGuild(n.guild_id);
    return null != r && !!r.hasFeature(S.oNc.COMMUNITY) && y.Z.getGuildId() === n.guild_id && A(n.guild_id);
}
function M(e) {
    let { guildId: t } = e;
    return null != t && A(t);
}
class U extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(C.Z, b.ZP, _.ZP, f.Z, v.ZP, y.Z, m.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null != (t = N[e]) ? t : x;
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
        return null != r && !!r.hasFeature(S.oNc.COMMUNITY) && null != n && !a().isEqual(I[t], n) && ((I[t] = n), T(t));
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
                .filter(O.lm)
                .uniq()
                .forEach((e) => {
                    let t = m.Z.getGuild(e);
                    null != t && t.hasFeature(S.oNc.COMMUNITY) && A(e) && (n = !0);
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
        return !!(e.channels.length > 0 && null != t && t.hasFeature(S.oNc.COMMUNITY)) && A(e.guildId);
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
            n = y.Z.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let r = N[n];
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
