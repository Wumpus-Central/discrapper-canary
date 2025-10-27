n.r(t), n.d(t, { default: () => eO }), n(388685), n(997841);
var r = n(392711),
    i = n.n(r);
n(140155);
var a = n(398758),
    o = n(455199),
    s = n(601070),
    l = n(569471),
    c = n(195663),
    u = n(131704),
    d = n(709054),
    f = n(314897),
    _ = n(592125),
    p = n(430824),
    h = n(750041),
    m = n(496675),
    g = n(306680),
    E = n(944486),
    b = n(9156),
    y = n(594174),
    O = n(981631),
    v = n(176505),
    I = n(490897);
function T(e, t, n) {
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
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = O.kod,
    C = {},
    N = new Set(),
    R = 0;
function P(e) {
    var t;
    let n = C[null != e ? e : A];
    return {
        unread: !1,
        unreadByType: {},
        unreadChannelId: null,
        lowImportanceMentionCount: 0,
        highImportanceMentionCount: 0,
        mentionCounts: {},
        ncMentionCount: 0,
        sentinel: null != (t = null == n ? void 0 : n.sentinel) ? t : 0,
    };
}
function D(e) {
    var t;
    return (C[null != e ? e : A] = null != (t = C[null != e ? e : A]) ? t : P(e));
}
function w(e) {
    let t = D(e);
    t.sentinel++, R++;
}
function L(e, t, n) {
    return null != e.guild_id && n && !((0, u.Q5)(e.type) || b.ZP.isChannelRecordOrParentOptedIn(e)) && 0 === t;
}
function x(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return (
        !(
            null == e ||
            (e.isGuildVocal() && 0 === t) ||
            e.hasFlag(v.zZ.IS_GUILD_RESOURCE_CHANNEL) ||
            ((0 === t || n) &&
                (e.isThread()
                    ? l.Z.isMuted(e.id) || b.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.parent_id)
                    : b.ZP.isGuildOrCategoryOrChannelMuted(e.guild_id, e.id))) ||
            (!e.isPrivate() && (L(e, t, (0, a.r1)(e.guild_id)) || !m.Z.can(e.accessPermissions, e)))
        ) &&
        (t > 0 || b.ZP.resolveUnreadSetting(e) === I.i.ALL_MESSAGES)
    );
}
function M(e) {
    return "flags" in e;
}
function k(e, t, n) {
    return (
        !(
            ((0, u.bw)(e.type) && 0 === t) ||
            !m.Z.canBasicChannel((0, u.Gz)(e.type), e) ||
            L(e, t, n) ||
            (M(e) && e.hasFlag(v.zZ.IS_GUILD_RESOURCE_CHANNEL))
        ) &&
        (t > 0 || b.ZP.resolveUnreadSetting(e) === I.i.ALL_MESSAGES)
    );
}
function j(e) {
    switch (e) {
        case A:
        case null:
        case void 0:
            return null;
        default:
            return e;
    }
}
function U(e, t) {
    let n = g.ZP.hasUnread(e, t);
    return t !== I.W.GUILD_EVENT ? n : !(b.ZP.isMuted(e) || b.ZP.isMuteScheduledEventsEnabled(e)) && n;
}
function G(e, t) {
    let n = P(e);
    return (n.mentionCounts = S({}, t.mentionCounts)), (n.unreadByType = S({}, t.unreadByType)), n;
}
function B(e) {
    return (e.unread = Object.values(e.unreadByType).some((e) => e)), e;
}
function Z(e, t) {}
function F(e, t, n) {
    return (
        B(t),
        (t.lowImportanceMentionCount = 0),
        (t.highImportanceMentionCount = 0),
        d.default.forEach(t.mentionCounts, (e) => {
            let { count: n, isMentionLowImportance: r } = e;
            r ? (t.lowImportanceMentionCount += n) : (t.highImportanceMentionCount += n);
        }),
        (t.unread !== n.unread ||
            t.lowImportanceMentionCount !== n.lowImportanceMentionCount ||
            t.highImportanceMentionCount !== n.highImportanceMentionCount) &&
            ((C[null != e ? e : A] = t),
            null != e && (t.unread ? N.add(e) : N.delete(e)),
            R++,
            w(null != e ? e : A),
            Z(t, n),
            !0)
    );
}
function V(e, t) {
    let n = j(e),
        r = D(n),
        i = G(n, r),
        a = !1;
    if (
        (t.forEach((e) => {
            let t = _.Z.getChannel(e);
            if (null == t) return void delete i.mentionCounts[e];
            if (t.getGuildId() !== n) return;
            let r = g.ZP.getMentionCount(e);
            null !== n && !a && g.ZP.hasUnread(t.id) && x(t, r, !0) && ((a = !0), (i.unreadChannelId = t.id)),
                r > 0 && x(t, r)
                    ? (i.mentionCounts[t.id] = {
                          count: r,
                          isMentionLowImportance: g.ZP.getIsMentionLowImportance(e),
                      })
                    : delete i.mentionCounts[t.id];
        }),
        (i.unreadByType[I.W.CHANNEL] = a),
        i.unreadByType[I.W.CHANNEL] !== r.unreadByType[I.W.CHANNEL] && !i.unreadByType[I.W.CHANNEL])
    ) {
        let e = _.Z.getChannel(r.unreadChannelId);
        if (!(null != e && !t.includes(e.id) && g.ZP.hasUnread(e.id) && x(e))) return Y(n);
        null != n && N.add(n), (i.unreadByType[I.W.CHANNEL] = !0);
    }
    return F(n, i, r);
}
function H(e, t) {
    if (null == e) return;
    let n = D(e),
        r = G(e, n);
    return (r.unreadByType[I.W.GUILD_EVENT] = U(e, t)), F(e, r, n);
}
function Y(e, t) {
    let n = j(e),
        r = P(n);
    if (null == n) {
        let e = _.Z.getMutablePrivateChannels();
        for (let t in e) {
            let n = e[t],
                i = g.ZP.getMentionCount(t);
            i > 0 &&
                x(n, i) &&
                ((r.highImportanceMentionCount += i),
                (r.mentionCounts[n.id] = {
                    count: i,
                    isMentionLowImportance: !1,
                }));
        }
    } else {
        let e = b.ZP.isMuted(n);
        if (e && !1 === t) return !1;
        let i = b.ZP.getMutedChannels(n),
            o = b.ZP.getChannelOverrides(n),
            c = (0, a.r1)(n),
            u = _.Z.getMutableBasicGuildChannelsForGuild(n);
        for (let t in u) {
            let n = u[t],
                a = e || i.has(t) || (null != n.parent_id && i.has(n.parent_id)),
                s = r.unreadByType[I.W.CHANNEL],
                {
                    mentionCount: l,
                    unread: d,
                    isMentionLowImportance: f,
                } = g.ZP.getGuildChannelUnreadState(n, c, o, a, s),
                _ = l > 0;
            if (!_ && a) continue;
            let p = !s && (!a || _) && d;
            (p || _) &&
                k(n, l, c) &&
                (p && ((r.unreadByType[I.W.CHANNEL] = !0), (r.unreadChannelId = t)),
                _ &&
                    (f ? (r.lowImportanceMentionCount += l) : (r.highImportanceMentionCount += l),
                    (r.mentionCounts[n.id] = {
                        count: l,
                        isMentionLowImportance: f,
                    })));
        }
        let d = s.Z.getActiveJoinedThreadsForGuild(n);
        for (let t in d)
            for (let n in d[t]) {
                !r.unreadByType[I.W.CHANNEL] &&
                    g.ZP.hasUnread(n) &&
                    !l.Z.isMuted(n) &&
                    !e &&
                    ((r.unreadByType[I.W.CHANNEL] = !0), (r.unreadChannelId = n));
                let t = g.ZP.getMentionCount(n),
                    i = g.ZP.getIsMentionLowImportance(n);
                t > 0 &&
                    (i ? (r.lowImportanceMentionCount += t) : (r.highImportanceMentionCount += t),
                    (r.mentionCounts[n] = {
                        count: t,
                        isMentionLowImportance: i,
                    }));
            }
        !r.unreadByType[I.W.GUILD_EVENT] && U(n, I.W.GUILD_EVENT) && (r.unreadByType[I.W.GUILD_EVENT] = !0);
    }
    B(r);
    let i = D(n);
    return (
        (r.unread !== i.unread ||
            r.highImportanceMentionCount !== i.highImportanceMentionCount ||
            r.lowImportanceMentionCount !== i.lowImportanceMentionCount) &&
        ((C[null != n ? n : A] = r),
        null != n && (r.unread ? N.add(n) : N.delete(n)),
        R++,
        w(null != n ? n : A),
        Z(r, i),
        !0)
    );
}
function W(e) {
    let { guilds: t } = e;
    (C = {}), (R = 0), (N = new Set()), Y(null);
    let { length: n } = t;
    for (let e = 0; e < n; e++) {
        let n = t[e];
        null != n && Y(n.properties.id);
    }
}
function K(e) {
    let { guilds: t, readState: n } = e;
    (C = {}), (R = 0), (N = new Set());
    let r = n.entries.length < 500,
        i = new Set();
    for (let e of (r &&
        n.entries.forEach((e) => {
            if (null != e.mention_count && e.mention_count > 0)
                if (null == e.read_state_type || e.read_state_type === I.W.CHANNEL) {
                    var t;
                    i.add(null == (t = _.Z.getChannel(e.id)) ? void 0 : t.guild_id);
                } else i.add(e.id);
        }),
    Y(null),
    t))
        Y(e.id, r ? i.has(e.id) : void 0);
}
function z() {
    for (let e of ((C = {}), (N = new Set()), Y(null), Object.values(p.Z.getGuildIds()))) Y(e);
}
function q(e) {
    let { guild: t } = e;
    return Y(t.id);
}
function X(e) {
    let { guild: t } = e;
    return null != C[t.id] && (delete C[t.id], N.delete(t.id), R++, !0);
}
function Q(e) {
    let {
        channel: { id: t, guild_id: n },
    } = e;
    return V(n, [t]);
}
function J() {
    let e = _.Z.getChannel(E.Z.getChannelId());
    return null != e && V(e.getGuildId(), [e.id]);
}
function $(e) {
    let { user: t, guildId: n } = e;
    return t.id === f.default.getId() && Y(n);
}
function ee(e) {
    let { channelId: t } = e,
        n = _.Z.getChannel(t);
    return null != n && V(n.getGuildId(), [n.id]);
}
function et(e) {
    let { channelId: t } = e,
        n = _.Z.getChannel(t);
    if (null == n) return !1;
    if (null != n.guild_id) {
        let e = D(n.guild_id);
        if (
            ((n.isThread()
                ? !l.Z.hasJoined(n.id) || l.Z.isMuted(n.id)
                : b.ZP.isGuildOrCategoryOrChannelMuted(n.guild_id, n.id)) ||
                e.unreadByType[I.W.CHANNEL]) &&
            0 === g.ZP.getMentionCount(t)
        )
            return !1;
    }
    return V(n.getGuildId(), [n.id]);
}
function en(e) {
    let { channelId: t, guildId: n } = e;
    return n !== O.I_8 && null != t && V(n, [t]);
}
function er(e) {
    let { channel: t } = e;
    return V(t.getGuildId(), [t.id]);
}
function ei(e) {
    let { channels: t } = e;
    return i()(t)
        .groupBy((e) => e.getGuildId())
        .reduce(
            (e, t, n) =>
                V(
                    n,
                    t.map((e) => e.id),
                ) || e,
            !1,
        );
}
function ea(e) {
    let { channels: t } = e;
    return i()(t)
        .map((e) => {
            let { channelId: t } = e;
            return t;
        })
        .filter((e) => null != _.Z.getChannel(e))
        .groupBy((e) => {
            var t;
            return null == (t = _.Z.getChannel(e)) ? void 0 : t.getGuildId();
        })
        .reduce((e, t, n) => V(n, t) || e, !1);
}
function eo(e) {
    let { channel: t } = e;
    return V(t.getGuildId(), [t.id, t.parent_id]);
}
function es(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, I.W.GUILD_EVENT);
}
function el(e) {
    let { guildScheduledEvent: t } = e;
    return H(t.guild_id, I.W.GUILD_EVENT);
}
function ec(e) {
    let { id: t, ackType: n } = e;
    return H(t, n);
}
function eu(e) {
    let { id: t, guildId: n } = e;
    return V(n, [t]);
}
function ed(e) {
    return (0, c.s)(e) && V(e.guildId, [e.id]);
}
function ef(e) {
    let { threads: t, guildId: n } = e;
    return V(
        n,
        t.filter((e) => l.Z.hasJoined(e.id)).map((e) => e.id),
    );
}
function e_(e) {
    return (
        e.channels.length > 0 &&
        V(
            e.guildId,
            e.channels.map((e) => e.id),
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
                return null != (t = e.guild_id) ? t : A;
            }),
        );
    return d.default.keys(C).reduce((e, t) => (n.has(t) && Y(t)) || e, !1);
}
function eg() {
    for (let e in C) C[e].ncMentionCount = 0;
}
function eE(e) {
    let { guildId: t } = e;
    return Y(t);
}
function eb(e) {
    let { messages: t } = e;
    new Set(t.map((e) => e.channel_id)).forEach((e) => {
        let t = _.Z.getChannel(e);
        null != t && V(t.getGuildId(), [e]);
    });
}
class ey extends h.Z {
    initialize() {
        this.waitFor(_.Z, E.Z, g.ZP, m.Z, f.default, y.default, b.ZP, s.Z, l.Z, o.ZP);
    }
    loadCache() {
        let e = this.readSnapshot(ey.LATEST_SNAPSHOT_VERSION);
        null != e && ((C = e.guilds), (N = new Set(e.unreadGuilds)));
    }
    takeSnapshot() {
        return {
            version: ey.LATEST_SNAPSHOT_VERSION,
            data: {
                guilds: C,
                unreadGuilds: Array.from(N),
            },
        };
    }
    hasAnyUnread() {
        return N.size > 0;
    }
    getStoreChangeSentinel() {
        return R;
    }
    getMutableUnreadGuilds() {
        return N;
    }
    getMutableGuildStates() {
        return C;
    }
    hasUnread(e) {
        return N.has(e);
    }
    getMentionCount(e) {
        let t = D(e);
        return t.highImportanceMentionCount + t.lowImportanceMentionCount;
    }
    getIsMentionLowImportance(e) {
        return 0 === D(e).highImportanceMentionCount;
    }
    getGuildHasUnreadIgnoreMuted(e) {
        let t = _.Z.getMutableGuildChannelsForGuild(e);
        for (let e in t) {
            let n = t[e];
            if (
                null != n &&
                (!n.isGuildVocal() || 0 !== g.ZP.getMentionCount(e)) &&
                m.Z.can(n.accessPermissions, n) &&
                g.ZP.hasUnreadOrMentions(e)
            )
                return !0;
        }
        let n = s.Z.getActiveJoinedThreadsForGuild(e);
        for (let e in n)
            if (null != _.Z.getChannel(e)) {
                for (let t in n[e]) if (g.ZP.hasUnreadOrMentions(t)) return !0;
            }
        return !!g.ZP.hasUnreadOrMentions(e, I.W.GUILD_EVENT);
    }
    getTotalMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            (!0 !== e || n !== A) && (t += r.highImportanceMentionCount);
        }
        return t;
    }
    getTotalNotificationsMentionCount(e) {
        let t = 0;
        for (let n in C) {
            let r = C[n];
            (!0 !== e || n !== A) && (t += r.ncMentionCount);
        }
        return t;
    }
    getPrivateChannelMentionCount() {
        var e;
        let t = C[A];
        return null != (e = null == t ? void 0 : t.highImportanceMentionCount) ? e : 0;
    }
    getMentionCountForPrivateChannel(e) {
        var t, n;
        return null != (n = null == (t = C[A]) ? void 0 : t.mentionCounts[e]) ? n : 0;
    }
    getGuildChangeSentinel(e) {
        return D(e).sentinel;
    }
    constructor() {
        super({
            CONNECTION_OPEN: K,
            OVERLAY_INITIALIZE: W,
            CACHE_LOADED_LAZY: () => this.loadCache(),
            GUILD_CREATE: q,
            GUILD_DELETE: X,
            MESSAGE_CREATE: et,
            MESSAGE_ACK: ee,
            BULK_ACK: ea,
            UPDATE_CHANNEL_DIMENSIONS: ee,
            CHANNEL_SELECT: en,
            CHANNEL_DELETE: Q,
            WINDOW_FOCUS: J,
            GUILD_ACK: ep,
            GUILD_ROLE_CREATE: eh,
            GUILD_ROLE_DELETE: eh,
            GUILD_ROLE_UPDATE: eh,
            CHANNEL_CREATE: er,
            CHANNEL_UPDATES: ei,
            THREAD_CREATE: eo,
            THREAD_UPDATE: eo,
            THREAD_DELETE: eo,
            THREAD_LIST_SYNC: ef,
            THREAD_MEMBER_UPDATE: eu,
            THREAD_MEMBERS_UPDATE: ed,
            PASSIVE_UPDATE_V2: e_,
            GUILD_MEMBER_UPDATE: $,
            USER_GUILD_SETTINGS_FULL_UPDATE: em,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE: eE,
            USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: eE,
            USER_GUILD_SETTINGS_GUILD_UPDATE: eE,
            USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: eE,
            GUILD_FEATURE_ACK: ec,
            GUILD_SCHEDULED_EVENT_CREATE: es,
            GUILD_SCHEDULED_EVENT_UPDATE: es,
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
            LOAD_RECENT_MENTIONS_SUCCESS: eb,
        });
    }
}
T(ey, "displayName", "GuildReadStateStore"), T(ey, "LATEST_SNAPSHOT_VERSION", 1);
let eO = new ey();
