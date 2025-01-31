n.d(t, {
    Z: () => O,
    x: () => S
}),
    n(47120);
var i,
    l,
    r,
    a,
    o = n(392711),
    s = n.n(o),
    c = n(442837),
    d = n(570140),
    u = n(220444),
    h = n(565799),
    p = n(501655),
    m = n(569471),
    g = n(592125),
    f = n(430824),
    _ = n(306680),
    v = n(914010),
    x = n(9156),
    C = n(938475),
    Z = n(823379),
    I = n(734307),
    b = n(981631),
    S = (((l = {}).HIDDEN = 'hidden'), (l.UNREAD = 'unread'), (l.MENTIONS = 'mentions'), (l.VOICE_CHANNELS = 'voice-channels'), l);
let N = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    E = {
        topBar: N,
        bottomBar: N
    },
    j = {},
    y = {};
function P(e) {
    let t = g.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? m.Z.isMuted(t.id) : x.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, u.d)(t);
}
function A(e) {
    let t = g.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = x.ZP.isGuildCollapsed(n),
        l = x.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && _.ZP.getMentionCount(e) > 0;
}
function T(e) {
    return !x.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? h.Z.getMutableParticipants(e.id, p.pV.SPEAKER).length > 0 : C.ZP.getVoiceStatesForChannel(e).length > 0);
}
function w(e) {
    var t, n, i;
    let { guildChannels: l } = I.Z.getGuildWithoutChangingGuildActionRows(e),
        r = l.getChannels(null !== (t = y[e]) && void 0 !== t ? t : []);
    if (null == r || 0 === r.length) return !1;
    let a = null,
        o = null,
        c = null,
        d = null,
        u = !0,
        h = !0,
        p = !1,
        m = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        g = null !== (n = null == m ? void 0 : m.getShownChannelIds()) && void 0 !== n ? n : [],
        [f, v, x] = l.getSlicedChannels(r);
    for (let e = 0; e < v.length; e++) {
        let t = v[e];
        if (((P(t.id) || s().some(t.threadIds, P)) && (h = !1), (A(t.id) || s().some(t.threadIds, A)) && (u = !1), g.includes(t.id) && (p = !0), !h && !u && p)) break;
    }
    let C = 0,
        Z = !1,
        b = 0,
        S = !1;
    if (h || u)
        for (let e = f.length - 1; e >= 0; e--) {
            let t = f[e];
            (P(t.id) || s().some(t.threadIds, P)) && (null == o && (o = t.id), (Z = !0)), (A(t.id) || s().some(t.threadIds, A)) && (null == a && (a = t.id), (C += _.ZP.getMentionCount(t.id)), (C += s().sumBy(t.threadIds, _.ZP.getMentionCount)));
        }
    if (h || u)
        for (let e = 0; e < x.length; e++) {
            let t = x[e];
            if (!h && !u) break;
            (P(t.id) || s().some(t.threadIds, P)) && (null == d && (d = t.id), (S = !0)), (A(t.id) || s().some(t.threadIds, A)) && (null == c && (c = t.id), (b += _.ZP.getMentionCount(t.id)), (b += s().sumBy(t.threadIds, _.ZP.getMentionCount)));
        }
    let E = null,
        w = null,
        R = null !== (i = null == m ? void 0 : m.getChannelRecords()) && void 0 !== i ? i : [];
    u && b > 0
        ? (E = {
              mode: 'mentions',
              mentionCount: b,
              targetChannelId: c
          })
        : !p && s().some(R, T)
          ? (E = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            S &&
            (E = {
                mode: 'unread',
                mentionCount: 0,
                targetChannelId: d
            }),
        u && C > 0
            ? (w = {
                  mode: 'mentions',
                  mentionCount: C,
                  targetChannelId: a
              })
            : h &&
              Z &&
              (w = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: o
              });
    let L = null != w && (null == E || ('mentions' !== E.mode && 'mentions' === w.mode)),
        M = null != E && ('mentions' === E.mode || !L);
    return (
        (j[e] = {
            topBar: L && null != w ? w : N,
            bottomBar: M && null != E ? E : N
        }),
        !0
    );
}
let R = s().throttle(w, 200);
function L(e) {
    let { guildId: t } = e,
        n = f.Z.getGuild(t);
    return !!(null != n && n.hasFeature(b.oNc.COMMUNITY)) && R(t);
}
function M(e) {
    let { id: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let i = f.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(b.oNc.COMMUNITY)) && R(n.guild_id);
}
function D(e) {
    let { channel: t } = e,
        n = g.Z.getChannel(t.id);
    if (null == n) return !1;
    let i = f.Z.getGuild(t.guild_id);
    return !!(null != i && i.hasFeature(b.oNc.COMMUNITY)) && R(n.guild_id);
}
function G(e) {
    let { channelId: t } = e,
        n = g.Z.getChannel(t);
    if (null == n) return !1;
    let i = f.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(b.oNc.COMMUNITY)) && v.Z.getGuildId() === n.guild_id && R(n.guild_id);
}
function k(e) {
    let { guildId: t } = e;
    return null != t && R(t);
}
class B extends (i = c.ZP.Store) {
    initialize() {
        this.waitFor(I.Z, _.ZP, x.ZP, m.Z, C.ZP, v.Z, f.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null !== (t = j[e]) && void 0 !== t ? t : E;
    }
}
(a = 'ChannelListUnreadsStore'),
    (r = 'displayName') in B
        ? Object.defineProperty(B, r, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (B[r] = a);
let O = new B(d.Z, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            i = f.Z.getGuild(t);
        return !!(null != i && i.hasFeature(b.oNc.COMMUNITY)) && null != n && !s().isEqual(y[t], n) && ((y[t] = n), w(t));
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            s()(t)
                .map((e) => {
                    var t;
                    let { channelId: n } = e;
                    return null === (t = g.Z.getChannel(n)) || void 0 === t ? void 0 : t.guild_id;
                })
                .filter(Z.lm)
                .uniq()
                .forEach((e) => {
                    let t = f.Z.getGuild(e);
                    null != t && t.hasFeature(b.oNc.COMMUNITY) && R(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: G,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: G,
    MESSAGE_ACK: G,
    MESSAGE_CREATE: G,
    MESSAGE_DELETE_BULK: G,
    MESSAGE_DELETE: G,
    PASSIVE_UPDATE_V2: function (e) {
        let t = f.Z.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.hasFeature(b.oNc.COMMUNITY)) && R(e.guildId);
    },
    RESORT_THREADS: G,
    THREAD_CREATE: D,
    THREAD_DELETE: D,
    THREAD_LIST_SYNC: L,
    THREAD_MEMBER_UPDATE: M,
    THREAD_MEMBERS_UPDATE: M,
    THREAD_UPDATE: D,
    BULK_CLEAR_RECENTS: L,
    CATEGORY_COLLAPSE_ALL: L,
    CATEGORY_EXPAND_ALL: L,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = v.Z.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let i = j[n];
        return null != i && 'voice-channels' === i.bottomBar.mode && R(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && R(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: k,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k
});
