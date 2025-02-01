n.r(t), n.d(t, { default: () => eI }), n(47120), n(789020), n(724458);
var i = n(392711),
    r = n.n(i),
    a = n(109911);
n(140155);
var s = n(398758),
    o = n(455199),
    l = n(601070),
    u = n(569471),
    c = n(195663),
    d = n(131704),
    f = n(709054),
    _ = n(314897),
    p = n(592125),
    h = n(430824),
    m = n(496675),
    g = n(306680),
    E = n(944486),
    v = n(412788),
    y = n(9156),
    I = n(594174),
    T = n(981631),
    b = n(176505),
    S = n(490897);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let N = T.kod,
    C = {},
    R = new Set(),
    O = 0;
function D(e) {
    var t;
    let n = C[null != e ? e : N];
    return {
        unread: !1,
        unreadByType: {},
        unreadChannelId: null,
        lowImportanceMentionCount: 0,
        highImportanceMentionCount: 0,
        mentionCounts: {},
        ncMentionCount: 0,
        sentinel: null !== (t = null == n ? void 0 : n.sentinel) && void 0 !== t ? t : 0
    };
}
function x(e) {
    var t;
    return (C[null != e ? e : N] = null !== (t = C[null != e ? e : N]) && void 0 !== t ? t : D(e));
}
function L(e) {
    let t = x(e);
    t.sentinel++, O++;
}
function P(e, t, n) {
    return null != e.guild_id && n && !((0, d.Q5)(e.type) || y.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function w(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !(null == e || (e.isGuildVocal() && 0 === t) || e.hasFlag(b.zZ.IS_GUILD_RESOURCE_CHANNEL) || ((0 === t || n) && (e.isThread() ? u.Z.isMuted(e.id) || y.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : y.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) || (!e.isPrivate() && (P(e, t, (0, s.r1)(e.guild_id)) || !m.Z.can(e.accessPermissions, e)))) && (t > 0 || y.ZP.resolveUnreadSetting(e) === S.i.ALL_MESSAGES);
}
function M(e) {
    return 'flags' in e;
}
function k(e, t, n) {
    return !(((0, d.bw)(e.type) && 0 === t) || !m.Z.canBasicChannel((0, d.Gz)(e.type), e) || P(e, t, n) || (M(e) && e.hasFlag(b.zZ.IS_GUILD_RESOURCE_CHANNEL))) && (t > 0 || y.ZP.resolveUnreadSetting(e) === S.i.ALL_MESSAGES);
}
function U(e) {
    switch (e) {
        case N:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function G(e, t) {
    let n = g.ZP.hasUnread(e, t);
    return t === S.W.GUILD_EVENT ? !(y.ZP.isMuted(e) || y.ZP.isMuteScheduledEventsEnabled(e)) && n : n;
}
function B(e, t) {
    let n = D(e);
    return (n.mentionCounts = { ...t.mentionCounts }), (n.unreadByType = { ...t.unreadByType }), n;
}
function Z(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function F(e, t) {}
function V(e, t, n) {
    return (
        Z(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        f.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: i } = e;
            i ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread || t.lowImportanceMentionCount !== n.lowImportanceMentionCount || t.highImportanceMentionCount !== n.highImportanceMentionCount) && ((C[null != e ? e : N] = t), null != e && (t.unread ? R.add(e) : R.delete(e)), O++, L(null != e ? e : N), !0)
    );
}
function j(e, t) {
    let n = U(e),
        i = x(n),
        r = B(n, i),
        { enabled: s, removeHomeMentionBadges: l } = (0, a.XN)({ location: 'GuildReadStateStore.recountGuild' }),
        u = s && l,
        c = !1;
    if (
        (t.forEach((e) => {
            let t = p.Z.getChannel(e);
            if (null == t) {
                delete r.mentionCounts[e];
                return;
            }
            if (t.getGuildId() !== n) return;
            let i = u ? o.Z.getMentionCountForChannel(e) : 0,
                a = g.ZP.getMentionCount(e) - i;
            null !== n && !c && g.ZP.hasUnread(t.id) && w(t, a, !0) && ((c = !0), (r.unreadChannelId = t.id)),
                a > 0 && w(t, a)
                    ? (r.mentionCounts[t.id] = {
                          count: a,
                          isMentionLowImportance: g.ZP.getIsMentionLowImportance(e)
                      })
                    : delete r.mentionCounts[t.id];
        }),
        (r.unreadByType[S.W.CHANNEL] = c),
        r.unreadByType[S.W.CHANNEL] !== i.unreadByType[S.W.CHANNEL] && !r.unreadByType[S.W.CHANNEL])
    ) {
        let e = p.Z.getChannel(i.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && g.ZP.hasUnread(e.id) && w(e))) return Y(n);
        null != n && R.add(n), (r.unreadByType[S.W.CHANNEL] = !0);
    }
    return V(n, r, i);
}
function H(e, t) {
    if (null == e) return;
    let n = x(e),
        i = B(e, n);
    return (i.unreadByType[S.W.GUILD_EVENT] = G(e, t)), V(e, i, n);
}
function Y(e, t) {
    let n = U(e),
        i = D(n),
        { enabled: r, removeHomeMentionBadges: c } = (0, a.XN)({ location: 'GuildReadStateStore.recountGuild' }),
        d = r && c;
    if (null == n) {
        let e = p.Z.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                r = g.ZP.getMentionCount(t);
            r > 0 &&
                w(n, r) &&
                ((i.highImportanceMentionCount += r),
                (i.mentionCounts[n.id] = {
                    count: r,
                    isMentionLowImportance: !1
                }));
        }
    } else {
        let e = y.ZP.isMuted(n);
        if (e && !1 === t) return !1;
        let r = y.ZP.getMutedChannels(n),
            a = y.ZP.getChannelOverrides(n),
            c = (0, s.r1)(n),
            f = p.Z.getMutableBasicGuildChannelsForGuild(n);
        for (let t in f) {
            let n = f[t],
                s = e || r.has(t) || (null != n.parent_id && r.has(n.parent_id)),
                l = i.unreadByType[S.W.CHANNEL],
                { mentionCount: u, unread: _, isMentionLowImportance: p } = g.ZP.getGuildChannelUnreadState(n, c, a, s, l),
                h = u > 0;
            if (!h && s) continue;
            let m = !l && (!s || h) && _;
            if ((m || h) && k(n, u, c) && (m && ((i.unreadByType[S.W.CHANNEL] = !0), (i.unreadChannelId = t)), h)) {
                let e = Math.max(u - (d ? o.Z.getMentionCountForChannel(n.id) : 0), 0);
                p ? (i.lowImportanceMentionCount += e) : (i.highImportanceMentionCount += e),
                    (i.mentionCounts[n.id] = {
                        count: e,
                        isMentionLowImportance: p
                    });
            }
        }
        let _ = l.Z.getActiveJoinedThreadsForGuild(n);
        for (let t in _)
            for (let n in _[t]) {
                !i.unreadByType[S.W.CHANNEL] && g.ZP.hasUnread(n) && !u.Z.isMuted(n) && !e && ((i.unreadByType[S.W.CHANNEL] = !0), (i.unreadChannelId = n));
                let t = g.ZP.getMentionCount(n),
                    r = g.ZP.getIsMentionLowImportance(n);
                t > 0 &&
                    (r ? (i.lowImportanceMentionCount += t) : (i.highImportanceMentionCount += t),
                    (i.mentionCounts[n] = {
                        count: t,
                        isMentionLowImportance: r
                    }));
            }
        !i.unreadByType[S.W.GUILD_EVENT] && G(n, S.W.GUILD_EVENT) && (i.unreadByType[S.W.GUILD_EVENT] = !0);
    }
    Z(i);
    let f = x(n);
    return (i.unread !== f.unread || i.highImportanceMentionCount !== f.highImportanceMentionCount || i.lowImportanceMentionCount !== f.lowImportanceMentionCount) && ((C[null != n ? n : N] = i), null != n && (i.unread ? R.add(n) : R.delete(n)), O++, L(null != n ? n : N), !0);
}
function W(e) {
    let { guilds: t } = e;
    (C = {}), (O = 0), (R = new Set()), Y(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && Y(n.id);
    }
}
function K(e) {
    let { guilds: t, readState: n } = e;
    (C = {}), (O = 0), (R = new Set());
    let i = n.entries.length < 500,
        r = new Set();
    for (let e of (i &&
        n.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0) {
                if (null == e.read_state_type || e.read_state_type === S.W.CHANNEL) {
                    var t;
                    r.add(null === (t = p.Z.getChannel(e.id)) || void 0 === t ? void 0 : t.guild_id);
                } else r.add(e.id);
            }
        }),
    Y(null),
    t))
        Y(e.id, i ? r.has(e.id) : void 0);
}
function z() {
    for (let e of ((C = {}), (R = new Set()), Y(null), Object.values(h.Z.getGuildIds()))) Y(e);
}
function q(e) {
    let { guild: t } = e;
    return Y(t.id);
}
function Q(e) {
    let { guild: t } = e;
    return null != C[t.id] && (delete C[t.id], R.delete(t.id), O++, !0);
}
function X(e) {
    let {
        channel: { id: t, guild_id: n }
    } = e;
    return j(n, [t]);
}
function J() {
    let e = p.Z.getChannel(E.Z.getChannelId());
    return null != e && j(e.getGuildId(), [e.id]);
}
function $(e) {
    let { user: t, guildId: n } = e;
    return t.id === _.default.getId() && Y(n);
}
function ee(e) {
    let { channelId: t } = e,
        n = p.Z.getChannel(t);
    return null != n && j(n.getGuildId(), [n.id]);
}
function et(e) {
    let { channelId: t } = e,
        n = p.Z.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = x(n.guild_id);
        if (((n.isThread() ? !u.Z.hasJoined(n.id) || u.Z.isMuted(n.id) : y.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) || e.unreadByType[S.W.CHANNEL]) && 0 === g.ZP.getMentionCount(t)) return !1;
    }
    return j(n.getGuildId(), [n.id]);
}
function en(e) {
    let { channelId: t, guildId: n } = e;
    return n !== T.I_8 && null != t && j(n, [t]);
}
function ei(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id]);
}
function er(e) {
    let { channels: t } = e;
    return r()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                j(
                    n,
                    t.map((e) => e.id)
                ) || e,
            !1
        );
}
function ea(e) {
    let { channels: t } = e;
    return r()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != p.Z.getChannel(e))
        .groupBy((e) => {
            var t;
            return null === (t = p.Z.getChannel(e)) || void 0 === t ? void 0 : t.getGuildId();
        })
        .reduce((e, t, n) => j(n, t) || e, !1);
}
function es(e) {
    let { channel: t } = e;
    return j(t.getGuildId(), [t.id, t.parent_id]);
}
function eo(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, S.W.GUILD_EVENT);
}
function el(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, S.W.GUILD_EVENT);
}
function eu(e) {
    let { id: t, ackType: n } = e;
    return H(t, n);
}
function ec(e) {
    let { id: t, guildId: n } = e;
    return j(n, [t]);
}
function ed(e) {
    return (0, c.s)(e) && j(e.guildId, [e.id]);
}
function ef(e) {
    let { threads: t, guildId: n } = e;
    return j(
        n,
        t.filter((e) => u.Z.hasJoined(e.id)).map((e) => e.id)
    );
}
function e_(e) {
    return (
        e.channels.length > 0 &&
        j(
            e.guildId,
            e.channels.map((e) => e.id)
        )
    );
}
function ep(e) {
    let { guildId: t } = e;
    return Y(t);
}
function eh(e) {
    let { guildId: t } = e;
    return Y(t);
}
function em(e) {
    let { userGuildSettings: t } = e,
        n = new Set(
            t.map((e) => {
                var t;
                return null !== (t = e.guild_id) && void 0 !== t ? t : N;
            })
        );
    return f.default.keys(C).reduce((e, t) => (n.has(t) && Y(t)) || e, !1);
}
function eg() {
    for (let e in C) C[e].ncMentionCount = 0;
}
function eE(e) {
    let { guildId: t } = e;
    return Y(t);
}
function ev(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = p.Z.getChannel(e);
        null != t && j(t.getGuildId(), [e]);
    });
}
class ey extends v.Z {
    initialize() {
        this.waitFor(p.Z, E.Z, g.ZP, m.Z, _.default, I.default, y.ZP, l.Z, u.Z, o.Z);
    }
    loadCache() {
        let e = this.readSnapshot(ey.LATEST_SNAPSHOT_VERSION);
        null != e && ((C = e.guilds), (R = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: ey.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: C,
                unreadGuilds: Array.from(R)
            }
        };
    }
    hasAnyUnread() {
        return R.size > 0;
    }
    getStoreChangeSentinel() {
        return O;
    }
    getMutableUnreadGuilds() {
        return R;
    }
    getMutableGuildStates() {
        return C;
    }
    hasUnread(e) {
        return R.has(e);
    }
    getMentionCount(e) {
        let t = x(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === x(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = p.Z.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (null != n && (!n.isGuildVocal() || 0 !== g.ZP.getMentionCount(e)) && m.Z.can(n.accessPermissions, n) && g.ZP.hasUnreadOrMentions(e)) return !0;
        }
        let n = l.Z.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != p.Z.getChannel(e)) {
                for (let t in n[e]) if (g.ZP.hasUnreadOrMentions(t)) return !0;
            }
        return !!g.ZP.hasUnreadOrMentions(e, S.W.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let i = C[n];
            (!0 !== e || n !== N) && (t += i.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let i = C[n];
            (!0 !== e || n !== N) && (t += i.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        var e;
        let t = C[N];
        return null !== (e = null == t ? void 0 : t.highImportanceMentionCount) && void 0 !== e ? e : 0;
    }
    getMentionCountForPrivateChannel(e) {
        var t, n;
        return null !== (n = null === (t = C[N]) || void 0 === t ? void 0 : t.mentionCounts[e]) && void 0 !== n ? n : 0;
    }
    getGuildChangeSentinel(e) {
        return x(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: K,
            OVERLAY_INITIALIZE: W,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: q,
            GUILD_DELETE: Q,
            MESSAGE_CREATE: et,
            MESSAGE_ACK: ee,
            BULK_ACK: ea,
            UPDATE_CHANNEL_DIMENSIONS: ee,
            CHANNEL_SELECT: en,
            CHANNEL_DELETE: X,
            WINDOW_FOCUS: J,
            GUILD_ACK: ep,
            GUILD_ROLE_CREATE: eh,
            GUILD_ROLE_DELETE: eh,
            GUILD_ROLE_UPDATE: eh,
            CHANNEL_CREATE: ei,
            CHANNEL_UPDATES: er,
            THREAD_CREATE: es,
            THREAD_UPDATE: es,
            THREAD_DELETE: es,
            THREAD_LIST_SYNC: ef,
            THREAD_MEMBER_UPDATE: ec,
            THREAD_MEMBERS_UPDATE: ed,
            PASSIVE_UPDATE_V2: e_,
            GUILD_MEMBER_UPDATE: $,
            USER_GUILD_SETTINGS_FULL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eE,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eE,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eE,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eE,
            GUILD_FEATURE_ACK: eu,
            GUILD_SCHEDULED_EVENT_CREATE: eo,
            GUILD_SCHEDULED_EVENT_UPDATE: eo,
            GUILD_SCHEDULED_EVENT_DELETE: el,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: ee,
            LOAD_MESSAGES_SUCCESS: ee,
            CHANNEL_ACK: ee,
            CHANNEL_LOCAL_ACK: ee,
            NOTIFICATION_SETTINGS_UPDATE: z,
            RECOMPUTE_READ_STATES: z,
            VOICE_CHANNEL_SELECT: ee,
            ENABLE_AUTOMATIC_ACK: ee,
            RESORT_THREADS: ee,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eg,
            TRY_ACK: ee,
            LOAD_RECENT_MENTIONS_SUCCESS: ev
        });
    }
}
A(ey, 'displayName', 'GuildReadStateStore'), A(ey, 'LATEST_SNAPSHOT_VERSION', 1);
let eI = new ey();
