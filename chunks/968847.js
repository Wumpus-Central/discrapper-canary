n.d(t, {
    Z: () => B,
    x: () => C
}),
    n(47120);
var r,
    i,
    l,
    o,
    a = n(392711),
    s = n.n(a),
    c = n(442837),
    u = n(570140),
    d = n(220444),
    p = n(565799),
    h = n(501655),
    f = n(569471),
    g = n(592125),
    m = n(430824),
    b = n(306680),
    y = n(914010),
    _ = n(9156),
    v = n(938475),
    O = n(823379),
    j = n(734307),
    x = n(981631),
    C = (((i = {}).HIDDEN = 'hidden'), (i.UNREAD = 'unread'), (i.MENTIONS = 'mentions'), (i.VOICE_CHANNELS = 'voice-channels'), i);
let S = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    P = {
        topBar: S,
        bottomBar: S
    },
    I = {},
    N = {};
function Z(e) {
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
function E(e) {
    return !_.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? p.Z.getMutableParticipants(e.id, h.pV.SPEAKER).length > 0 : v.ZP.getVoiceStatesForChannel(e).length > 0);
}
function T(e) {
    var t, n, r;
    let { guildChannels: i } = j.Z.getGuildWithoutChangingGuildActionRows(e),
        l = i.getChannels(null != (t = N[e]) ? t : []);
    if (null == l || 0 === l.length) return !1;
    let o = null,
        a = null,
        c = null,
        u = null,
        d = !0,
        p = !0,
        h = !1,
        f = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
        g = null != (n = null == f ? void 0 : f.getShownChannelIds()) ? n : [],
        [m, y, _] = i.getSlicedChannels(l);
    for (let e = 0; e < y.length; e++) {
        let t = y[e];
        if (((Z(t.id) || s().some(t.threadIds, Z)) && (p = !1), (w(t.id) || s().some(t.threadIds, w)) && (d = !1), g.includes(t.id) && (h = !0), !p && !d && h)) break;
    }
    let v = 0,
        O = !1,
        x = 0,
        C = !1;
    if (p || d)
        for (let e = m.length - 1; e >= 0; e--) {
            let t = m[e];
            (Z(t.id) || s().some(t.threadIds, Z)) && (null == a && (a = t.id), (O = !0)), (w(t.id) || s().some(t.threadIds, w)) && (null == o && (o = t.id), (v += b.ZP.getMentionCount(t.id)), (v += s().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    if (p || d)
        for (let e = 0; e < _.length; e++) {
            let t = _[e];
            if (!p && !d) break;
            (Z(t.id) || s().some(t.threadIds, Z)) && (null == u && (u = t.id), (C = !0)), (w(t.id) || s().some(t.threadIds, w)) && (null == c && (c = t.id), (x += b.ZP.getMentionCount(t.id)), (x += s().sumBy(t.threadIds, b.ZP.getMentionCount)));
        }
    let P = null,
        T = null,
        A = null != (r = null == f ? void 0 : f.getChannelRecords()) ? r : [];
    d && x > 0
        ? (P = {
              mode: 'mentions',
              mentionCount: x,
              targetChannelId: c
          })
        : !h && s().some(A, E)
          ? (P = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : p &&
            C &&
            (P = {
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
            : p &&
              O &&
              (T = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: a
              });
    let D = null != T && (null == P || ('mentions' !== P.mode && 'mentions' === T.mode)),
        R = null != P && ('mentions' === P.mode || !D);
    return (
        (I[e] = {
            topBar: D && null != T ? T : S,
            bottomBar: R && null != P ? P : S
        }),
        !0
    );
}
let A = s().throttle(T, 200);
function D(e) {
    let { guildId: t } = e,
        n = m.Z.getGuild(t);
    return null != n && !!n.hasFeature(x.oNc.COMMUNITY) && A(t);
}
function R(e) {
    let { id: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let r = m.Z.getGuild(n.guild_id);
    return null != r && !!r.hasFeature(x.oNc.COMMUNITY) && A(n.guild_id);
}
function L(e) {
    let { channel: t } = e,
        n = g.Z.getChannel(t.id);
    if (null == n) return !1;
    let r = m.Z.getGuild(t.guild_id);
    return null != r && !!r.hasFeature(x.oNc.COMMUNITY) && A(n.guild_id);
}
function k(e) {
    let { channelId: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let r = m.Z.getGuild(n.guild_id);
    return null != r && !!r.hasFeature(x.oNc.COMMUNITY) && y.Z.getGuildId() === n.guild_id && A(n.guild_id);
}
function M(e) {
    let { guildId: t } = e;
    return null != t && A(t);
}
class G extends (r = c.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, b.ZP, _.ZP, f.Z, v.ZP, y.Z, m.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null != (t = I[e]) ? t : P;
    }
}
(o = 'ChannelListUnreadsStore'),
    (l = 'displayName') in G
        ? Object.defineProperty(G, l, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (G[l] = o);
let B = new G(u.Z, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            r = m.Z.getGuild(t);
        return null != r && !!r.hasFeature(x.oNc.COMMUNITY) && null != n && !s().isEqual(N[t], n) && ((N[t] = n), T(t));
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            s()(t)
                .map((e) => {
                    var t;
                    let { channelId: n } = e;
                    return null == (t = g.Z.getChannel(n)) ? void 0 : t.guild_id;
                })
                .filter(O.lm)
                .uniq()
                .forEach((e) => {
                    let t = m.Z.getGuild(e);
                    null != t && t.hasFeature(x.oNc.COMMUNITY) && A(e) && (n = !0);
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
        return !!(e.channels.length > 0 && null != t && t.hasFeature(x.oNc.COMMUNITY)) && A(e.guildId);
    },
    RESORT_THREADS: k,
    THREAD_CREATE: L,
    THREAD_DELETE: L,
    THREAD_LIST_SYNC: D,
    THREAD_MEMBER_UPDATE: R,
    THREAD_MEMBERS_UPDATE: R,
    THREAD_UPDATE: L,
    BULK_CLEAR_RECENTS: D,
    CATEGORY_COLLAPSE_ALL: D,
    CATEGORY_EXPAND_ALL: D,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = y.Z.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let r = I[n];
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
