n.d(t, {
    Z: () => G,
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
    f = n(569471),
    h = n(592125),
    g = n(430824),
    m = n(306680),
    b = n(914010),
    _ = n(9156),
    O = n(938475),
    y = n(823379),
    v = n(734307),
    j = n(981631),
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
    I = {};
function P(e) {
    let t = h.Z.getChannel(e);
    return (
        !(null == t || null == t.getGuildId() || t.isGuildVocal()) &&
        !(t.isThread() ? f.Z.isMuted(t.id) : _.ZP.isChannelMuted(t.getGuildId(), t.id)) &&
        (0, u.d)(t)
    );
}
function N(e) {
    let t = h.Z.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = _.ZP.isGuildCollapsed(n),
        i = _.ZP.isChannelMuted(n, t.id);
    return (!r || !i) && m.ZP.getMentionCount(e) > 0;
}
function Z(e) {
    return (
        !_.ZP.isChannelMuted(e.guild_id, e.id) &&
        (e.isGuildStageVoice()
            ? d.Z.getMutableParticipants(e.id, p.pV.SPEAKER).length > 0
            : O.ZP.getVoiceStatesForChannel(e).length > 0)
    );
}
function w(e) {
    var t, n, r;
    let { guildChannels: i } = v.Z.getGuildWithoutChangingGuildActionRows(e),
        l = i.getChannels(null != (t = I[e]) ? t : []);
    if (null == l || 0 === l.length) return !1;
    let o = null,
        s = null,
        c = null,
        u = null,
        d = !0,
        p = !0,
        f = !1,
        h = i.getCategoryFromSection(i.voiceChannelsSectionNumber),
        g = null != (n = null == h ? void 0 : h.getShownChannelIds()) ? n : [],
        [b, _, O] = i.getSlicedChannels(l);
    for (let e = 0; e < _.length; e++) {
        let t = _[e];
        if (
            ((P(t.id) || a().some(t.threadIds, P)) && (p = !1),
            (N(t.id) || a().some(t.threadIds, N)) && (d = !1),
            g.includes(t.id) && (f = !0),
            !p && !d && f)
        )
            break;
    }
    let y = 0,
        j = !1,
        x = 0,
        E = !1;
    if (p || d)
        for (let e = b.length - 1; e >= 0; e--) {
            let t = b[e];
            (P(t.id) || a().some(t.threadIds, P)) && (null == s && (s = t.id), (j = !0)),
                (N(t.id) || a().some(t.threadIds, N)) &&
                    (null == o && (o = t.id),
                    (y += m.ZP.getMentionCount(t.id)),
                    (y += a().sumBy(t.threadIds, m.ZP.getMentionCount)));
        }
    if (p || d)
        for (let e = 0; e < O.length; e++) {
            let t = O[e];
            if (!p && !d) break;
            (P(t.id) || a().some(t.threadIds, P)) && (null == u && (u = t.id), (E = !0)),
                (N(t.id) || a().some(t.threadIds, N)) &&
                    (null == c && (c = t.id),
                    (x += m.ZP.getMentionCount(t.id)),
                    (x += a().sumBy(t.threadIds, m.ZP.getMentionCount)));
        }
    let w = null,
        T = null,
        A = null != (r = null == h ? void 0 : h.getChannelRecords()) ? r : [];
    d && x > 0
        ? (w = {
              mode: "mentions",
              mentionCount: x,
              targetChannelId: c,
          })
        : !f && a().some(A, Z)
          ? (w = {
                mode: "voice-channels",
                mentionCount: 0,
                targetChannelId: null,
            })
          : p &&
            E &&
            (w = {
                mode: "unread",
                mentionCount: 0,
                targetChannelId: u,
            }),
        d && y > 0
            ? (T = {
                  mode: "mentions",
                  mentionCount: y,
                  targetChannelId: o,
              })
            : p &&
              j &&
              (T = {
                  mode: "unread",
                  mentionCount: 0,
                  targetChannelId: s,
              });
    let R = null != T && (null == w || ("mentions" !== w.mode && "mentions" === T.mode)),
        D = null != w && ("mentions" === w.mode || !R);
    return (
        (S[e] = {
            topBar: R && null != T ? T : C,
            bottomBar: D && null != w ? w : C,
        }),
        !0
    );
}
let T = a().throttle(w, 200);
function A(e) {
    let { guildId: t } = e,
        n = g.Z.getGuild(t);
    return null != n && !!n.features.has(j.GuildFeatures.COMMUNITY) && T(t);
}
function R(e) {
    let { id: t } = e,
        n = h.Z.getChannel(t);
    if (null == n) return !1;
    let r = g.Z.getGuild(n.guild_id);
    return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && T(n.guild_id);
}
function D(e) {
    let { channel: t } = e,
        n = h.Z.getChannel(t.id);
    if (null == n) return !1;
    let r = g.Z.getGuild(t.guild_id);
    return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && T(n.guild_id);
}
function L(e) {
    let { channelId: t } = e,
        n = h.Z.getChannel(t);
    if (null == n) return !1;
    let r = g.Z.getGuild(n.guild_id);
    return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && b.Z.getGuildId() === n.guild_id && T(n.guild_id);
}
function M(e) {
    let { guildId: t } = e;
    return null != t && T(t);
}
class k extends (r = s.ZP.Store) {
    initialize() {
        this.waitFor(v.Z, m.ZP, _.ZP, f.Z, O.ZP, b.Z, g.Z);
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
let G = new k(c.Z, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function (e) {
        let { guildId: t, channelIds: n } = e,
            r = g.Z.getGuild(t);
        return (
            null != r &&
            !!r.features.has(j.GuildFeatures.COMMUNITY) &&
            null != n &&
            !a().isEqual(I[t], n) &&
            ((I[t] = n), w(t))
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
                    return null == (t = h.Z.getChannel(n)) ? void 0 : t.guild_id;
                })
                .filter(y.lm)
                .uniq()
                .forEach((e) => {
                    let t = g.Z.getGuild(e);
                    null != t && t.features.has(j.GuildFeatures.COMMUNITY) && T(e) && (n = !0);
                }),
            n
        );
    },
    CHANNEL_ACK: L,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: L,
    MESSAGE_ACK: L,
    MESSAGE_CREATE: L,
    MESSAGE_DELETE_BULK: L,
    MESSAGE_DELETE: L,
    PASSIVE_UPDATE_V2: function (e) {
        let t = g.Z.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(j.GuildFeatures.COMMUNITY)) && T(e.guildId);
    },
    RESORT_THREADS: L,
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
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: M,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: M,
    USER_GUILD_SETTINGS_FULL_UPDATE: function (e) {
        let { userGuildSettings: t } = e;
        for (let e of t) null != e.guild_id && T(e.guild_id);
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: M,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: M,
});
