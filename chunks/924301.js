n.d(t, {
    CQ: () => h,
    Ld: () => Q,
    Z2: () => X,
    ZP: () => $,
    bN: () => p,
    xt: () => q
}),
    n(653041),
    n(47120);
var i,
    r = n(392711),
    a = n.n(r),
    s = n(442837),
    o = n(759174),
    l = n(570140),
    u = n(314897),
    c = n(271383),
    d = n(709054),
    f = n(765305);
function _(e, t, n) {
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
let p = {
    EVENT: 'event',
    EVENT_ACTIVE: 'active',
    EVENT_UPCOMING: 'event-upcoming',
    GUILD_EVENT: (e) => ''.concat(e, '-').concat(p.EVENT),
    GUILD_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(p.EVENT_ACTIVE),
    GUILD_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(p.EVENT_UPCOMING),
    CHANNEL_EVENT: (e) => ''.concat(e, '-').concat(p.EVENT),
    CHANNEL_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(p.EVENT_ACTIVE),
    CHANNEL_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(p.EVENT_UPCOMING)
};
function h(e) {
    let { id: t, scheduled_start_time: n } = e,
        i = q(e) ? '\0' : '\x01';
    return ''.concat(i, '-').concat(new Date(n).getTime(), '-').concat(t);
}
let m = (e) => {
        let { guild_id: t, entity_id: n, channel_id: i } = e,
            r = [t];
        return null != n && r.push(n), r.push(p.GUILD_EVENT(t)), null != i && r.push(p.CHANNEL_EVENT(i)), q(e) && (r.push(p.EVENT_ACTIVE), r.push(p.GUILD_EVENT_ACTIVE(t)), null != i && r.push(p.CHANNEL_EVENT_ACTIVE(i))), Q(e) && (r.push(p.EVENT_UPCOMING), r.push(p.GUILD_EVENT_UPCOMING(t)), null != i && r.push(p.CHANNEL_EVENT_UPCOMING(i))), r;
    },
    g = new o.h(m, h),
    E = 0,
    v = [],
    y = 'SERIES',
    I = {},
    T = {};
function b(e) {
    g.set(e.id, e), (E += 1);
}
function S(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    g.delete(e), delete I[e], t && delete T[e], (E += 1);
}
function A(e) {
    return null != e ? e : y;
}
function N(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = e.guild_scheduled_event_id;
    null == I[i] && (I[i] = {});
    let r = A(e.guild_scheduled_event_exception_id);
    null == I[i][r] && (I[i][r] = {}), (I[i][r][e.user_id] = e), t && O(e), n && (E += 1);
}
function C(e) {
    var t, n, i, r;
    let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = A(e.guild_scheduled_event_exception_id),
        o = (null === (n = I[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : null === (t = n[s]) || void 0 === t ? void 0 : t[e.user_id]) != null,
        l = e.user_id === u.default.getId();
    (o || !l) && (null === (r = I[e.guild_scheduled_event_id]) || void 0 === r || null === (i = r[s]) || void 0 === i || delete i[e.user_id], D(e), a && (E += 1));
}
function R(e, t, n) {
    let i = A(t);
    null == T[e] && (T[e] = {}), (T[e][i] = n);
}
function O(e) {
    var t, n;
    let i = A(e.guild_scheduled_event_exception_id),
        r = (null !== (n = null === (t = T[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0) + ((null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED) ? 1 : -1);
    R(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, r);
}
function D(e) {
    var t, n;
    let i = A(e.guild_scheduled_event_exception_id),
        r = (null !== (n = null === (t = T[e.guild_scheduled_event_id]) || void 0 === t ? void 0 : t[i]) && void 0 !== n ? n : 0) + ((null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED) ? -1 : 1);
    R(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, r);
}
function x(e) {
    let { guilds: t } = e;
    return g.clear(), (E = 0), (I = {}), (T = {}), v.forEach(b), t.forEach((e) => e.guild_scheduled_events.forEach((e) => b(e))), !0;
}
function L(e) {
    let { guildScheduledEvent: t } = e;
    b(t);
}
function P(e) {
    let { guildId: t, guildScheduledEvents: n } = e,
        i = g.values(p.GUILD_EVENT(t), !0).map((e) => e.id),
        r = n.map((e) => e.id);
    for (let e of (a()
        .difference(i, r)
        .forEach((e) => {
            S(e);
        }),
    n))
        b(e);
    return !0;
}
function w(e) {
    let { guild: t } = e;
    return k(t.id, !1), t.guild_scheduled_events.forEach((e) => b(e)), !0;
}
function M(e) {
    let { guild: t } = e;
    return k(t.id, !0), !0;
}
function k(e, t) {
    g.values(p.GUILD_EVENT(e)).forEach((e) => S(e.id, t));
}
function U(e) {
    let { guildScheduledEvent: t } = e;
    return b(t), !0;
}
function G(e) {
    let { guildScheduledEvent: t } = e;
    return S(t.id), !0;
}
function B(e) {
    let { eventException: t } = e,
        n = g.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        r = [...n.guild_scheduled_event_exceptions];
    return (
        i < 0 ? r.push(t) : (r[i] = t),
        b({
            ...n,
            guild_scheduled_event_exceptions: r
        }),
        !0
    );
}
function Z(e) {
    let { eventException: t } = e,
        n = g.get(t.event_id);
    if (null == n) return !1;
    let i = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
    return (
        b({
            ...n,
            guild_scheduled_event_exceptions: i
        }),
        !0
    );
}
function F(e) {
    let { eventId: t } = e,
        n = g.get(t);
    return (
        null != n &&
        (b({
            ...n,
            guild_scheduled_event_exceptions: []
        }),
        !0)
    );
}
function V(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => N(e, !1, !1)), (E += 1), !0;
}
function j(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => N(e, !1, !1)), (E += 1), !0;
}
function H(e) {
    var t, n;
    let { userId: i, guildEventId: r, guildId: a, guildEventExceptionId: s, response: o } = e,
        l = A(s),
        u = null === (n = I[r]) || void 0 === n ? void 0 : null === (t = n[l]) || void 0 === t ? void 0 : t[i];
    null != u && C(u, !1);
    let d = c.ZP.getMember(a, i);
    return (
        N({
            user_id: i,
            guild_scheduled_event_id: r,
            member: null != d ? d : void 0,
            guild_scheduled_event_exception_id: s,
            response: o
        }),
        !0
    );
}
function Y(e) {
    let { userId: t, guildEventId: n, guildEventExceptionId: i, response: r } = e;
    C({
        user_id: t,
        guild_scheduled_event_id: n,
        guild_scheduled_event_exception_id: i,
        response: r
    });
}
function W(e) {
    let { eventId: t, counts: n } = e;
    R(t, null, n.eventCount),
        d.default.forEachKey(n.recurrenceCounts, (e) => {
            R(t, e, n.eventCount - n.recurrenceCounts[e]);
        });
}
function K() {
    return g.clear(), !0;
}
function z(e) {
    let { invite: t } = e,
        n = t.guild_scheduled_event;
    return null != n && (b(n), !0);
}
function q(e) {
    return null != e && (null == e ? void 0 : e.status) === f.p1.ACTIVE;
}
function Q(e) {
    return !f.$I.has(e.status);
}
function X(e) {
    return null != e && f.$I.has(e.status);
}
class J extends (i = s.ZP.Store) {
    getGuildScheduledEvent(e) {
        var t;
        return null == e ? null : null !== (t = g.get(e)) && void 0 !== t ? t : null;
    }
    getGuildEventCountByIndex(e) {
        return g.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : g.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return g.values(e);
    }
    getRsvpVersion() {
        return E;
    }
    getRsvp(e, t, n) {
        var i, r;
        if (null == e) return null;
        let a = A(t);
        return null === (r = I[e]) || void 0 === r ? void 0 : null === (i = r[a]) || void 0 === i ? void 0 : i[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = u.default.getId(),
            i = this.getRsvp(e, null, n),
            r = this.getRsvp(e, t, n),
            a = (null == i ? void 0 : i.response) === f.gv.INTERESTED,
            s = (null == r ? void 0 : r.response) === f.gv.INTERESTED,
            o = (null == r ? void 0 : r.response) === f.gv.UNINTERESTED;
        return (a && !o) || s;
    }
    getUserCount(e, t) {
        var n, i, r, a;
        if (null == e) return 0;
        let s = null !== (r = null === (n = T[e]) || void 0 === n ? void 0 : n[y]) && void 0 !== r ? r : 0;
        return null == t ? s : s - (null !== (a = null === (i = T[e]) || void 0 === i ? void 0 : i[t]) && void 0 !== a ? a : 0);
    }
    hasUserCount(e, t) {
        var n;
        let i = A(t);
        return (null === (n = T[e]) || void 0 === n ? void 0 : n[i]) != null;
    }
    isActive(e) {
        return null != e && q(g.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(p.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        var n, i;
        if (null == e) return {};
        let r = A(t);
        return null !== (i = null === (n = I[e]) || void 0 === n ? void 0 : n[r]) && void 0 !== i ? i : {};
    }
}
_(J, 'displayName', 'GuildScheduledEventStore');
let $ = new J(l.Z, {
    CONNECTION_OPEN: x,
    GUILD_CREATE: w,
    GUILD_DELETE: M,
    FETCH_GUILD_EVENT: L,
    FETCH_GUILD_EVENTS_FOR_GUILD: P,
    GUILD_SCHEDULED_EVENT_CREATE: U,
    GUILD_SCHEDULED_EVENT_UPDATE: U,
    GUILD_SCHEDULED_EVENT_DELETE: G,
    GUILD_SCHEDULED_EVENT_USER_ADD: H,
    GUILD_SCHEDULED_EVENT_USER_REMOVE: Y,
    GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: V,
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: j,
    GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: W,
    INVITE_RESOLVE_SUCCESS: z,
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: B,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: B,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: Z,
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: F,
    LOGOUT: K
});
