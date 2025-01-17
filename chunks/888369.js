r.r(n);
var i = r(47120);
var a = r(789020);
var s = r(724458);
var o = r(392711),
    l = r.n(o),
    u = r(109911);
r(140155);
var c = r(398758),
    d = r(455199),
    f = r(601070),
    _ = r(569471),
    h = r(195663),
    p = r(131704),
    m = r(709054),
    g = r(314897),
    E = r(592125),
    v = r(430824),
    I = r(496675),
    T = r(306680),
    b = r(944486),
    y = r(412788),
    S = r(9156),
    A = r(594174),
    N = r(981631),
    C = r(176505),
    R = r(490897);
function O(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let D = N.kod,
    L = {},
    x = new Set(),
    w = 0;
function P(e) {
    var n;
    let r = L[null != e ? e : D];
    return {
        unread: !1,
        unreadByType: {},
        unreadChannelId: null,
        lowImportanceMentionCount: 0,
        highImportanceMentionCount: 0,
        mentionCounts: {},
        ncMentionCount: 0,
        sentinel: null !== (n = null == r ? void 0 : r.sentinel) && void 0 !== n ? n : 0
    };
}
function M(e) {
    var n;
    return (L[null != e ? e : D] = null !== (n = L[null != e ? e : D]) && void 0 !== n ? n : P(e));
}
function k(e) {
    let n = M(e);
    n.sentinel++, w++;
}
function U(e, n, r) {
    return null != e.guild_id && r && !((0, p.Q5)(e.type) || S.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === n;
}
function B(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return !(null == e || (e.isGuildVocal() && 0 === n) || e.hasFlag(C.zZ.IS_GUILD_RESOURCE_CHANNEL) || ((0 === n || r) && (e.isThread() ? _.Z.isMuted(e.id) || S.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id) : S.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) || (!e.isPrivate() && (U(e, n, (0, c.r1)(e.guild_id)) || !I.Z.can(e.accessPermissions, e)))) && (n > 0 || S.ZP.resolveUnreadSetting(e) === R.i.ALL_MESSAGES);
}
function G(e) {
    return 'flags' in e;
}
function Z(e, n, r) {
    return !(((0, p.bw)(e.type) && 0 === n) || !I.Z.canBasicChannel((0, p.Gz)(e.type), e) || U(e, n, r) || (G(e) && e.hasFlag(C.zZ.IS_GUILD_RESOURCE_CHANNEL))) && (n > 0 || S.ZP.resolveUnreadSetting(e) === R.i.ALL_MESSAGES);
}
function F(e) {
    switch (e) {
        case D:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function V(e, n) {
    let r = T.ZP.hasUnread(e, n);
    if (n === R.W.GUILD_EVENT) return !(S.ZP.isMuted(e) || S.ZP.isMuteScheduledEventsEnabled(e)) && r;
    return r;
}
function j(e, n) {
    let r = P(e);
    return (r.mentionCounts = { ...n.mentionCounts }), (r.unreadByType = { ...n.unreadByType }), r;
}
function H(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function Y(e, n) {}
function W() {
    let e = A.default.getCurrentUser();
    if (null != e) return T.ZP.getNotifCenterReadState(e.id);
}
function K(e, n, r) {
    return (
        H(n),
        (n.lowImportanceMentionCount = 0),
        (n.highImportanceMentionCount = 0),
        m.default.forEach(n.mentionCounts, (e) => {
            let { count: r, isMentionLowImportance: i } = e;
            i ? (n.lowImportanceMentionCount += r) : (n.highImportanceMentionCount += r);
        }),
        (n.unread !== r.unread || n.lowImportanceMentionCount !== r.lowImportanceMentionCount || n.highImportanceMentionCount !== r.highImportanceMentionCount) && ((L[null != e ? e : D] = n), null != e && (n.unread ? x.add(e) : x.delete(e)), w++, k(null != e ? e : D), Y(n, r), !0)
    );
}
function z(e, n) {
    let r = F(e),
        i = M(r),
        a = j(r, i),
        { enabled: s, removeHomeMentionBadges: o } = (0, u.XN)({ location: 'GuildReadStateStore.recountGuild' }),
        l = s && o,
        c = !1;
    if (
        (n.forEach((e) => {
            let n = E.Z.getChannel(e);
            if (null == n) {
                delete a.mentionCounts[e];
                return;
            }
            if (n.getGuildId() !== r) return;
            let i = l ? d.Z.getMentionCountForChannel(e) : 0,
                s = T.ZP.getMentionCount(e) - i;
            null !== r && !c && T.ZP.hasUnread(n.id) && B(n, s, !0) && ((c = !0), (a.unreadChannelId = n.id)),
                s > 0 && B(n, s)
                    ? (a.mentionCounts[n.id] = {
                          count: s,
                          isMentionLowImportance: T.ZP.getIsMentionLowImportance(e)
                      })
                    : delete a.mentionCounts[n.id];
        }),
        (a.unreadByType[R.W.CHANNEL] = c),
        a.unreadByType[R.W.CHANNEL] !== i.unreadByType[R.W.CHANNEL] && !a.unreadByType[R.W.CHANNEL])
    ) {
        let e = E.Z.getChannel(i.unreadChannelId);
        if (!(null != e && !n.includes(e.id) && T.ZP.hasUnread(e.id) && B(e))) return Q(r);
        null != r && x.add(r), (a.unreadByType[R.W.CHANNEL] = !0);
    }
    return K(r, a, i);
}
function q(e, n) {
    if (null == e) return;
    let r = M(e),
        i = j(e, r);
    return (i.unreadByType[R.W.GUILD_EVENT] = V(e, n)), K(e, i, r);
}
function Q(e, n) {
    let r = F(e),
        i = P(r),
        { enabled: a, removeHomeMentionBadges: s } = (0, u.XN)({ location: 'GuildReadStateStore.recountGuild' }),
        o = a && s;
    if (null == r) {
        let e = E.Z.getMutablePrivateChannels();
        for (let n in e) {
            let r = e[n],
                a = T.ZP.getMentionCount(n);
            a > 0 &&
                B(r, a) &&
                ((i.highImportanceMentionCount += a),
                (i.mentionCounts[r.id] = {
                    count: a,
                    isMentionLowImportance: !1
                }));
        }
    } else {
        let e = S.ZP.isMuted(r);
        if (e && !1 === n) return !1;
        let a = S.ZP.getMutedChannels(r),
            s = S.ZP.getChannelOverrides(r),
            l = (0, c.r1)(r),
            u = E.Z.getMutableBasicGuildChannelsForGuild(r);
        for (let n in u) {
            let r = u[n],
                c = e || a.has(n) || (null != r.parent_id && a.has(r.parent_id)),
                f = i.unreadByType[R.W.CHANNEL],
                { mentionCount: _, unread: h, isMentionLowImportance: p } = T.ZP.getGuildChannelUnreadState(r, l, s, c, f),
                m = _ > 0;
            if (!m && c) continue;
            let g = !f && (!c || m) && h;
            if ((g || m) && Z(r, _, l) && (g && ((i.unreadByType[R.W.CHANNEL] = !0), (i.unreadChannelId = n)), m)) {
                let e = Math.max(_ - (o ? d.Z.getMentionCountForChannel(r.id) : 0), 0);
                p ? (i.lowImportanceMentionCount += e) : (i.highImportanceMentionCount += e),
                    (i.mentionCounts[r.id] = {
                        count: e,
                        isMentionLowImportance: p
                    });
            }
        }
        let h = f.Z.getActiveJoinedThreadsForGuild(r);
        for (let n in h)
            for (let r in h[n]) {
                !i.unreadByType[R.W.CHANNEL] && T.ZP.hasUnread(r) && !_.Z.isMuted(r) && !e && ((i.unreadByType[R.W.CHANNEL] = !0), (i.unreadChannelId = r));
                let n = T.ZP.getMentionCount(r),
                    a = T.ZP.getIsMentionLowImportance(r);
                n > 0 &&
                    (a ? (i.lowImportanceMentionCount += n) : (i.highImportanceMentionCount += n),
                    (i.mentionCounts[r] = {
                        count: n,
                        isMentionLowImportance: a
                    }));
            }
        !i.unreadByType[R.W.GUILD_EVENT] && V(r, R.W.GUILD_EVENT) && (i.unreadByType[R.W.GUILD_EVENT] = !0);
    }
    H(i);
    let l = M(r);
    return (i.unread !== l.unread || i.highImportanceMentionCount !== l.highImportanceMentionCount || i.lowImportanceMentionCount !== l.lowImportanceMentionCount) && ((L[null != r ? r : D] = i), null != r && (i.unread ? x.add(r) : x.delete(r)), w++, k(null != r ? r : D), Y(i, l), !0);
}
function X(e) {
    let { guilds: n } = e;
    (L = {}), (w = 0), (x = new Set()), Q(null);
    let { length: r } = n;
    for (let e = 0; e < r; e++) {
        let r = n[e];
        null != r && Q(r.id);
    }
}
function J(e) {
    let { guilds: n, readState: r } = e;
    (L = {}), (w = 0), (x = new Set());
    let i = r.entries.length < 500,
        a = new Set();
    for (let e of (i &&
        r.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0) {
                if (null == e.read_state_type || e.read_state_type === R.W.CHANNEL) {
                    var n;
                    a.add(null === (n = E.Z.getChannel(e.id)) || void 0 === n ? void 0 : n.guild_id);
                } else a.add(e.id);
            }
        }),
    Q(null),
    n))
        Q(e.id, i ? a.has(e.id) : void 0);
}
function $() {
    for (let e of ((L = {}), (x = new Set()), Q(null), Object.values(v.Z.getGuildIds()))) Q(e);
}
function ee(e) {
    let { guild: n } = e;
    return Q(n.id);
}
function et(e) {
    let { guild: n } = e;
    return null != L[n.id] && (delete L[n.id], x.delete(n.id), w++, !0);
}
function en(e) {
    let {
        channel: { id: n, guild_id: r }
    } = e;
    return z(r, [n]);
}
function er() {
    let e = E.Z.getChannel(b.Z.getChannelId());
    return null != e && z(e.getGuildId(), [e.id]);
}
function ei(e) {
    let { user: n, guildId: r } = e;
    return n.id === g.default.getId() && Q(r);
}
function ea(e) {
    let { channelId: n } = e,
        r = E.Z.getChannel(n);
    return null != r && z(r.getGuildId(), [r.id]);
}
function es(e) {
    let { channelId: n } = e,
        r = E.Z.getChannel(n);
    if (null == r) return !1;
    if (null != r.guild_id) {
        let e = M(r.guild_id);
        if (((r.isThread() ? !_.Z.hasJoined(r.id) || _.Z.isMuted(r.id) : S.ZP.isGuildOrCategoryOrChannelMuted(r.guild_id, r.id)) || e.unreadByType[R.W.CHANNEL]) && 0 === T.ZP.getMentionCount(n)) return !1;
    }
    return z(r.getGuildId(), [r.id]);
}
function eo(e) {
    let { channelId: n, guildId: r } = e;
    return r !== N.I_8 && null != n && z(r, [n]);
}
function el(e) {
    let { channel: n } = e;
    return z(n.getGuildId(), [n.id]);
}
function eu(e) {
    let { channels: n } = e;
    return l()(n)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, n, r) =>
                z(
                    r,
                    n.map((e) => e.id)
                ) || e,
            !1
        );
}
function ec(e) {
    let { channels: n } = e;
    return l()(n)
        .map((e) => {
            let { channelId: n } = e;
            return n;
        })
        .filter((e) => null != E.Z.getChannel(e))
        .groupBy((e) => {
            var n;
            return null === (n = E.Z.getChannel(e)) || void 0 === n ? void 0 : n.getGuildId();
        })
        .reduce((e, n, r) => z(r, n) || e, !1);
}
function ed(e) {
    let { channel: n } = e;
    return z(n.getGuildId(), [n.id, n.parent_id]);
}
function ef(e) {
    let { guildScheduledEvent: n } = e;
    return q(n.guild_id, R.W.GUILD_EVENT);
}
function e_(e) {
    let { guildScheduledEvent: n } = e;
    return q(n.guild_id, R.W.GUILD_EVENT);
}
function eh(e) {
    let { id: n, ackType: r } = e;
    return q(n, r);
}
function ep(e) {
    let { id: n, guildId: r } = e;
    return z(r, [n]);
}
function em(e) {
    return (0, h.s)(e) && z(e.guildId, [e.id]);
}
function eg(e) {
    let { threads: n, guildId: r } = e;
    return z(
        r,
        n.filter((e) => _.Z.hasJoined(e.id)).map((e) => e.id)
    );
}
function eE(e) {
    return (
        !!(e.channels.length > 0) &&
        z(
            e.guildId,
            e.channels.map((e) => e.id)
        )
    );
}
function ev(e) {
    let { guildId: n } = e;
    return Q(n);
}
function eI(e) {
    let { guildId: n } = e;
    return Q(n);
}
function eT(e) {
    let { userGuildSettings: n } = e,
        r = new Set(
            n.map((e) => {
                var n;
                return null !== (n = e.guild_id) && void 0 !== n ? n : D;
            })
        );
    return m.default.keys(L).reduce((e, n) => (r.has(n) && Q(n)) || e, !1);
}
function eb() {
    for (let e in L) L[e].ncMentionCount = 0;
}
function ey(e) {
    let { guildId: n } = e;
    return Q(n);
}
function eS(e) {
    let { messages: n } = e;
    new Set(n.map((e) => e.channel_id)).forEach((e) => {
        let n = E.Z.getChannel(e);
        null != n && z(n.getGuildId(), [e]);
    });
}
class eA extends y.Z {
    initialize() {
        this.waitFor(E.Z, b.Z, T.ZP, I.Z, g.default, A.default, S.ZP, f.Z, _.Z, d.Z);
    }
    loadCache() {
        let e = this.readSnapshot(eA.LATEST_SNAPSHOT_VERSION);
        null != e && ((L = e.guilds), (x = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: eA.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: L,
                unreadGuilds: Array.from(x)
            }
        };
    }
    hasAnyUnread() {
        return x.size > 0;
    }
    getStoreChangeSentinel() {
        return w;
    }
    getMutableUnreadGuilds() {
        return x;
    }
    getMutableGuildStates() {
        return L;
    }
    hasUnread(e) {
        return x.has(e);
    }
    getMentionCount(e) {
        let n = M(e);
        return n.highImportanceMentionCount + n.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === M(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let n = E.Z.getMutableGuildChannelsForGuild(e);
        for (let e in n) {
            let r = n[e];
            if (null != r) {
                if ((!r.isGuildVocal() || 0 !== T.ZP.getMentionCount(e)) && I.Z.can(r.accessPermissions, r) && T.ZP.hasUnreadOrMentions(e)) return !0;
            }
        }
        let r = f.Z.getActiveJoinedThreadsForGuild(e);
        for (let e in r)
            if (null != E.Z.getChannel(e)) {
                for (let n in r[e]) if (T.ZP.hasUnreadOrMentions(n)) return !0;
            }
        return !!T.ZP.hasUnreadOrMentions(e, R.W.GUILD_EVENT) || !1;
    }
    getTotalMentionCount(e) {
        let n = 0;
        for (let r in L) {
            let i = L[r];
            if (!0 !== e || r !== D) n += i.highImportanceMentionCount;
        }
        return n;
    }
    getTotalNotificationsMentionCount(e) {
        let n = 0;
        for (let r in L) {
            let i = L[r];
            if (!0 !== e || r !== D) n += i.ncMentionCount;
        }
        return n;
    }
    getPrivateChannelMentionCount() {
        var e;
        let n = L[D];
        return null !== (e = null == n ? void 0 : n.highImportanceMentionCount) && void 0 !== e ? e : 0;
    }
    getMentionCountForPrivateChannel(e) {
        var n, r;
        return null !== (r = null === (n = L[D]) || void 0 === n ? void 0 : n.mentionCounts[e]) && void 0 !== r ? r : 0;
    }
    getGuildChangeSentinel(e) {
        return M(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: J,
            OVERLAY_INITIALIZE: X,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: ee,
            GUILD_DELETE: et,
            MESSAGE_CREATE: es,
            MESSAGE_ACK: ea,
            BULK_ACK: ec,
            UPDATE_CHANNEL_DIMENSIONS: ea,
            CHANNEL_SELECT: eo,
            CHANNEL_DELETE: en,
            WINDOW_FOCUS: er,
            GUILD_ACK: ev,
            GUILD_ROLE_CREATE: eI,
            GUILD_ROLE_DELETE: eI,
            GUILD_ROLE_UPDATE: eI,
            CHANNEL_CREATE: el,
            CHANNEL_UPDATES: eu,
            THREAD_CREATE: ed,
            THREAD_UPDATE: ed,
            THREAD_DELETE: ed,
            THREAD_LIST_SYNC: eg,
            THREAD_MEMBER_UPDATE: ep,
            THREAD_MEMBERS_UPDATE: em,
            PASSIVE_UPDATE_V2: eE,
            GUILD_MEMBER_UPDATE: ei,
            USER_GUILD_SETTINGS_FULL_UPDATE: eT,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: ey,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: ey,
            USER_GUILD_SETTINGS_GUILD_UPDATE: ey,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: ey,
            GUILD_FEATURE_ACK: eh,
            GUILD_SCHEDULED_EVENT_CREATE: ef,
            GUILD_SCHEDULED_EVENT_UPDATE: ef,
            GUILD_SCHEDULED_EVENT_DELETE: e_,
            CHANNEL_RTC_UPDATE_CHAT_OPEN: ea,
            LOAD_MESSAGES_SUCCESS: ea,
            CHANNEL_ACK: ea,
            CHANNEL_LOCAL_ACK: ea,
            NOTIFICATION_SETTINGS_UPDATE: $,
            RECOMPUTE_READ_STATES: $,
            VOICE_CHANNEL_SELECT: ea,
            ENABLE_AUTOMATIC_ACK: ea,
            RESORT_THREADS: ea,
            NOTIFICATION_CENTER_CLEAR_GUILD_MENTIONS: eb,
            TRY_ACK: ea,
            LOAD_RECENT_MENTIONS_SUCCESS: eS
        });
    }
}
O(eA, 'displayName', 'GuildReadStateStore'), O(eA, 'LATEST_SNAPSHOT_VERSION', 1), (n.default = new eA());
