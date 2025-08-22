n.d(t, {
    Z: () => U,
    x: () => x,
}),
    n(388685);
var r,
    i,
    l,
    o = n(392711),
    a = n.n(o),
    s = n(442837),
    c = n(570140),
    u = n(220444),
    d = n(565799),
    p = n(501655),
    h = n(569471),
    f = n(592125),
    g = n(430824),
    m = n(306680),
    b = n(914010),
    O = n(9156),
    y = n(938475),
    _ = n(823379),
    j = n(734307),
    v = n(981631),
    x =
        (((i = {}).HIDDEN = "hidden"),
        (i.UNREAD = "unread"),
        (i.MENTIONS = "mentions"),
        (i.VOICE_CHANNELS = "voice-channels"),
        i);
let C = {
        mode: "hidden",
        mentionCount: 0,
        targetChannelId: null,
    },
    E = {
        topBar: C,
        bottomBar: C,
    },
    S = {},
    P = {};
function I(e) {
    let t = f.Z.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? h.Z.isMuted(t.id) : O.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, u.d)(t)
    );
}
function N(e) {
    let t = f.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = O.ZP.isGuildCollapsed(n),
        i = O.ZP.isChannelMuted(n, t.id);
    return (!r || !i) && m.ZP.getMentionCount(e) > 0;
}
function w(e) {
    return (
        !O.ZP.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? d.Z.getMutableParticipants(e.id, p.pV.SPEAKER).length > 0
            : y.ZP.getVoiceStatesForChannel(e).length > 0)
    );
}
function Z(e) {
    var t, n, r;
    let { guildChannels: i } = j.Z.getGuildWithoutChangingGuildActionRows(e),
        l = i.getChannels(null != (t = P[e]) ? t : []);
    if (null == l || 0 === l.length) return !1;
    let o = null,
        s = null,
        c = null,
        u = null,
        d = !0,
        p = !0,
        h = !1,
        f = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
        g = null != (n = null == f ? void 0 : f.getShownChannelIds()) ? n : [],
        [b, O, y] = i.getSlicedChannels(l);
    for (let e = 0; e < O.length; e++) {
        let t = O[e];
        if (
            ((I(t.id) || a().some(t.threadIds, I)) && (p = !1),
            (N(t.id) || a().some(t.threadIds, N)) && (d = !1),
            g.includes(t.id) && (h = !0),
            !p && !d && h)
        )
            break;
    }
    let _ = 0,
        v = !1,
        x = 0,
        E = !1;
    if (p || d)
        for (let e = b.length - 1; e >= 0; e--) {
            let t = b[e];
            (I(t.id) || a().some(t.threadIds, I)) && (null == s && (s = t.id), (v = !0)),
                (N(t.id) || a().some(t.threadIds, N)) &&
                    (null == o && (o = t.id),
                    (_ += m.ZP.getMentionCount(t.id)),
                    (_ += a().sumBy(t.threadIds, m.ZP.getMentionCount)));
        }
    if (p || d)
        for (let e = 0; e < y.length; e++) {
            let t = y[e];
            if (!p && !d) break;
            (I(t.id) || a().some(t.threadIds, I)) && (null == u && (u = t.id), (E = !0)),
                (N(t.id) || a().some(t.threadIds, N)) &&
                    (null == c && (c = t.id),
                    (x += m.ZP.getMentionCount(t.id)),
                    (x += a().sumBy(t.threadIds, m.ZP.getMentionCount)));
        }
    let Z = null,
        T = null,
        A = null != (r = null == f ? void 0 : f.getChannelRecords()) ? r : [];
    d && x > 0
        ? (Z = {
              mode: "mentions",
              mentionCount: x,
              targetChannelId: c,
          })
        : !h && a().some(A, w)
          ? (Z = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
            })
          : p &&
            E &&
            (Z = {
                mode: "unread",
                mentionCount: 0,
                targetChannelId: u,
            }),
        d && _ > 0
            ? (T = {
                  mode: "mentions",
                  mentionCount: _,
                  targetChannelId: o,
              })
            : p &&
              v &&
              (T = {
                  mode: "unread",
                  mentionCount: 0,
                  targetChannelId: s,
              });
    let R = null != T && (null == Z || ("mentions" !== Z.mode && "mentions" === T.mode)),
        D = null != Z && ("mentions" === Z.mode || !R);
    return (
        (S[e] = {
            topBar: R && null != T ? T : C,
            bottomBar: D && null != Z ? Z : C,
        }),
        !0
    );
}
let T = a().throttle(Z, 200);
function A(e) {
    let { guildId: t } = e,
        n = g.Z.getGuild(t);
    return null != n && !!n.features.has(v.oNc.COMMUNITY) && T(t);
}
function R(e) {
    let { id: t } = e,
        n = f.Z.getChannel(t);
    if (null == n) return !1;
    let r = g.Z.getGuild(n.guild_id);
    return null != r && !!r.features.has(v.oNc.COMMUNITY) && T(n.guild_id);
}
function D(e) {
    let { channel: t } = e,
        n = f.Z.getChannel(t.id);
    if (null == n) return !1;
    let r = g.Z.getGuild(t.guild_id);
    return null != r && !!r.features.has(v.oNc.COMMUNITY) && T(n.guild_id);
}
function M(e) {
    let { channelId: t } = e,
        n = f.Z.getChannel(t);
    if (null == n) return !1;
    let r = g.Z.getGuild(n.guild_id);
    return null != r && !!r.features.has(v.oNc.COMMUNITY) && b.Z.getGuildId() === n.guild_id && T(n.guild_id);
}
function L(e) {
    let { guildId: t } = e;
    return null != t && T(t);
}
class k extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(j.Z, m.ZP, O.ZP, h.Z, y.ZP, b.Z, g.Z);
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null != (t = S[e]) ? t : E;
    }
}
(l = "displayName") in k
    ? Object.defineProperty(k, l, {
          value: "ChannelListUnreadsStore",
          enumerable: !0,
          configurable: !0,
          writable: !0,
      })
    : (k[l] = "ChannelListUnreadsStore");
let U = new k(c.Z, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            r = g.Z.getGuild(t);
        return (
            null != r && !!r.features.has(v.oNc.COMMUNITY) && null != n && !a().isEqual(P[t], n) && ((P[t] = n), Z(t))
        );
    },
    BULK_ACK: function (e) {
        let { channels: t } = e,
            n = !1;
        return (
            a()(t)
                .map((e) => {
                    var t;
                    let { channelId: n } = e;
                    return null == (t = f.Z.getChannel(n)) ? void 0 : t.guild_id;
                })
                .filter(_.lm)
                .uniq()
                .forEach((e) => {
                    let t = g.Z.getGuild(e);
                    null != t && t.features.has(v.oNc.COMMUNITY) && T(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: M,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: M,
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    PASSIVE_UPDATE_V2: function (e) {
        let t = g.Z.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(v.oNc.COMMUNITY)) && T(e.guildId);
    },
    RESORT_THREADS: M,
    THREAD_CREATE: D,
    THREAD_DELETE: D,
    THREAD_LIST_SYNC: A,
    THREAD_MEMBER_UPDATE: R,
    THREAD_MEMBERS_UPDATE: R,
    THREAD_UPDATE: D,
    BULK_CLEAR_RECENTS: A,
    CATEGORY_COLLAPSE_ALL: A,
    CATEGORY_EXPAND_ALL: A,
    VOICE_STATE_UPDATES: function (e) {
        let { voiceStates: t } = e,
            n = b.Z.getGuildId();
        if (null == n || !new Set(t.map((e) => e.guildId)).has(n)) return !1;
        let r = S[n];
        return null != r && "voice-channels" === r.bottomBar.mode && T(n);
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: L,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: L,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && T(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: L,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: L,
});
