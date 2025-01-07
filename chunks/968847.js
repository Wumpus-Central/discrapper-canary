n.d(t, {
    x: function () {
        return i;
    }
}),
    n(47120);
var i,
    l,
    r,
    a,
    o,
    s,
    c = n(392711),
    u = n.n(c),
    d = n(442837),
    h = n(570140),
    p = n(220444),
    f = n(565799),
    m = n(501655),
    g = n(569471),
    v = n(592125),
    C = n(430824),
    x = n(306680),
    I = n(914010),
    _ = n(9156),
    Z = n(938475),
    b = n(823379),
    S = n(734307),
    N = n(981631);
((r = i || (i = {})).HIDDEN = 'hidden'), (r.UNREAD = 'unread'), (r.MENTIONS = 'mentions'), (r.VOICE_CHANNELS = 'voice-channels');
let E = {
        mode: 'hidden',
        mentionCount: 0,
        targetChannelId: null
    },
    y = {
        topBar: E,
        bottomBar: E
    },
    j = {},
    T = {};
function P(e) {
    let t = v.Z.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? g.Z.isMuted(t.id) : _.ZP.isChannelMuted(t.getGuildId(), t.id)) && (0, p.d)(t);
}
function A(e) {
    let t = v.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = _.ZP.isGuildCollapsed(n),
        l = _.ZP.isChannelMuted(n, t.id);
    return (!i || !l) && x.ZP.getMentionCount(e) > 0;
}
function w(e) {
    return !_.ZP.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? f.Z.getMutableParticipants(e.id, m.pV.SPEAKER).length > 0 : Z.ZP.getVoiceStatesForChannel(e).length > 0);
}
function M(e) {
    var t, n, i;
    let { guildChannels: l } = S.Z.getGuildWithoutChangingGuildActionRows(e),
        r = l.getChannels(null !== (t = T[e]) && void 0 !== t ? t : []);
    if (null == r || 0 === r.length) return !1;
    let a = null,
        o = null,
        s = null,
        c = null,
        d = !0,
        h = !0,
        p = !1,
        f = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        m = null !== (n = null == f ? void 0 : f.getShownChannelIds()) && void 0 !== n ? n : [],
        [g, v, C] = l.getSlicedChannels(r);
    for (let e = 0; e < v.length; e++) {
        let t = v[e];
        if (((P(t.id) || u().some(t.threadIds, P)) && (h = !1), (A(t.id) || u().some(t.threadIds, A)) && (d = !1), m.includes(t.id) && (p = !0), !h && !d && p)) break;
    }
    let I = 0,
        _ = !1,
        Z = 0,
        b = !1;
    if (h || d)
        for (let e = g.length - 1; e >= 0; e--) {
            let t = g[e];
            (P(t.id) || u().some(t.threadIds, P)) && (null == o && (o = t.id), (_ = !0)), (A(t.id) || u().some(t.threadIds, A)) && (null == a && (a = t.id), (I += x.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, x.ZP.getMentionCount)));
        }
    if (h || d)
        for (let e = 0; e < C.length; e++) {
            let t = C[e];
            if (!h && !d) break;
            (P(t.id) || u().some(t.threadIds, P)) && (null == c && (c = t.id), (b = !0)), (A(t.id) || u().some(t.threadIds, A)) && (null == s && (s = t.id), (Z += x.ZP.getMentionCount(t.id) + u().sumBy(t.threadIds, x.ZP.getMentionCount)));
        }
    let N = null,
        y = null,
        M = null !== (i = null == f ? void 0 : f.getChannelRecords()) && void 0 !== i ? i : [];
    d && Z > 0
        ? (N = {
              mode: 'mentions',
              mentionCount: Z,
              targetChannelId: s
          })
        : !p && u().some(M, w)
          ? (N = {
                mode: 'voice-channels',
                mentionCount: 0,
                targetChannelId: null
            })
          : h &&
            b &&
            (N = {
                mode: 'unread',
                mentionCount: 0,
                targetChannelId: c
            }),
        d && I > 0
            ? (y = {
                  mode: 'mentions',
                  mentionCount: I,
                  targetChannelId: a
              })
            : h &&
              _ &&
              (y = {
                  mode: 'unread',
                  mentionCount: 0,
                  targetChannelId: o
              });
    let L = null != y && (null == N || ('mentions' !== N.mode && 'mentions' === y.mode)),
        R = null != N && ('mentions' === N.mode || !L);
    return (
        (j[e] = {
            topBar: L && null != y ? y : E,
            bottomBar: R && null != N ? N : E
        }),
        !0
    );
}
let L = u().throttle(M, 200);
function R(e) {
    let { guildId: t } = e,
        n = C.Z.getGuild(t);
    return !!(null != n && n.hasFeature(N.oNc.COMMUNITY)) && L(t);
}
function D(e) {
    let { id: t } = e,
        n = v.Z.getChannel(t);
    if (null == n) return !1;
    let i = C.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && L(n.guild_id);
}
function G(e) {
    let { channel: t } = e,
        n = v.Z.getChannel(t.id);
    if (null == n) return !1;
    let i = C.Z.getGuild(t.guild_id);
    return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && L(n.guild_id);
}
function B(e) {
    let { channelId: t } = e,
        n = v.Z.getChannel(t);
    if (null == n) return !1;
    let i = C.Z.getGuild(n.guild_id);
    return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && I.Z.getGuildId() === n.guild_id && L(n.guild_id);
}
function k(e) {
    let { guildId: t } = e;
    return null != t && L(t);
}
class U extends (l = d.ZP.Store) {
    initialize() {
        this.waitFor(S.Z, x.ZP, _.ZP, g.Z, Z.ZP, I.Z, C.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null !== (t = j[e]) && void 0 !== t ? t : y;
    }
}
(s = 'ChannelListUnreadsStore'),
    (o = 'displayName') in (a = U)
        ? Object.defineProperty(a, o, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0
          })
        : (a[o] = s),
    (t.Z = new U(h.Z, {
        UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
            let { guildId: t, channelIds: n } = e,
                i = C.Z.getGuild(t);
            return !!(null != i && i.hasFeature(N.oNc.COMMUNITY)) && null != n && !u().isEqual(T[t], n) && ((T[t] = n), M(t));
        },
        BULK_ACK: function (e) {
            let { channels: t } = e,
                n = !1;
            return (
                u()(t)
                    .map((e) => {
                        var t;
                        let { channelId: n } = e;
                        return null === (t = v.Z.getChannel(n)) || void 0 === t ? void 0 : t.guild_id;
                    })
                    .filter(b.lm)
                    .uniq()
                    .forEach((e) => {
                        let t = C.Z.getGuild(e);
                        null != t && t.hasFeature(N.oNc.COMMUNITY) && L(e) && (n = !0);
                    }),
                n
            );
        },
        CHANNEL_ACK: B,
        CHANNEL_DELETE: G,
        CHANNEL_LOCAL_ACK: B,
        MESSAGE_ACK: B,
        MESSAGE_CREATE: B,
        MESSAGE_DELETE_BULK: B,
        MESSAGE_DELETE: B,
        PASSIVE_UPDATE_V2: function (e) {
            let t = C.Z.getGuild(e.guildId);
            return !!(e.channels.length > 0 && null != t && t.hasFeature(N.oNc.COMMUNITY)) && L(e.guildId);
        },
        RESORT_THREADS: B,
        THREAD_CREATE: G,
        THREAD_DELETE: G,
        THREAD_LIST_SYNC: R,
        THREAD_MEMBER_UPDATE: D,
        THREAD_MEMBERS_UPDATE: D,
        THREAD_UPDATE: G,
        BULK_CLEAR_RECENTS: R,
        CATEGORY_COLLAPSE_ALL: R,
        CATEGORY_EXPAND_ALL: R,
        VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
                n = I.Z.getGuildId();
            if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
            let i = j[n];
            return null != i && 'voice-channels' === i.bottomBar.mode && L(n);
        },
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
        USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
        USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
            let { userGuildSettings: t } = e;
            for (let e of t) null != e.guild_id && L(e.guild_id);
        },
        USER_GUILD_SETTINGS_GUILD_UPDATE: k,
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k
    }));
