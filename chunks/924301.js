r.d(n, {
    CQ: function () {
        return E;
    },
    Ld: function () {
        return $;
    },
    Z2: function () {
        return ee;
    },
    bN: function () {
        return g;
    },
    xt: function () {
        return J;
    }
});
var i,
    a = r(653041);
var o = r(47120);
var s = r(392711),
    l = r.n(s),
    u = r(442837),
    c = r(759174),
    d = r(570140),
    f = r(314897),
    p = r(271383),
    h = r(709054),
    _ = r(765305);
function m(e, n, r) {
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
let g = {
    EVENT: 'event',
    EVENT_ACTIVE: 'active',
    EVENT_UPCOMING: 'event-upcoming',
    GUILD_EVENT: (e) => ''.concat(e, '-').concat(g.EVENT),
    GUILD_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(g.EVENT_ACTIVE),
    GUILD_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(g.EVENT_UPCOMING),
    CHANNEL_EVENT: (e) => ''.concat(e, '-').concat(g.EVENT),
    CHANNEL_EVENT_ACTIVE: (e) => ''.concat(e, '-').concat(g.EVENT_ACTIVE),
    CHANNEL_EVENT_UPCOMING: (e) => ''.concat(e, '-').concat(g.EVENT_UPCOMING)
};
function E(e) {
    let { id: n, scheduled_start_time: r } = e,
        i = J(e) ? '\0' : '\x01';
    return ''.concat(i, '-').concat(new Date(r).getTime(), '-').concat(n);
}
let v = (e) => {
        let { guild_id: n, entity_id: r, channel_id: i } = e,
            a = [n];
        return null != r && a.push(r), a.push(g.GUILD_EVENT(n)), null != i && a.push(g.CHANNEL_EVENT(i)), J(e) && (a.push(g.EVENT_ACTIVE), a.push(g.GUILD_EVENT_ACTIVE(n)), null != i && a.push(g.CHANNEL_EVENT_ACTIVE(i))), $(e) && (a.push(g.EVENT_UPCOMING), a.push(g.GUILD_EVENT_UPCOMING(n)), null != i && a.push(g.CHANNEL_EVENT_UPCOMING(i))), a;
    },
    y = new c.h(v, E),
    b = 0,
    I = [],
    T = 'SERIES',
    S = {},
    A = {};
function C(e) {
    y.set(e.id, e), (b += 1);
}
function N(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    y.delete(e), delete S[e], n && delete A[e], (b += 1);
}
function R(e) {
    return null != e ? e : T;
}
function O(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = e.guild_scheduled_event_id;
    null == S[i] && (S[i] = {});
    let a = R(e.guild_scheduled_event_exception_id);
    null == S[i][a] && (S[i][a] = {}), (S[i][a][e.user_id] = e), n && L(e), r && (b += 1);
}
function D(e) {
    var n, r, i, a;
    let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        s = R(e.guild_scheduled_event_exception_id),
        l = (null === (r = S[e.guild_scheduled_event_id]) || void 0 === r ? void 0 : null === (n = r[s]) || void 0 === n ? void 0 : n[e.user_id]) != null,
        u = e.user_id === f.default.getId();
    (l || !u) && (null === (a = S[e.guild_scheduled_event_id]) || void 0 === a || null === (i = a[s]) || void 0 === i || delete i[e.user_id], w(e), o && (b += 1));
}
function x(e, n, r) {
    let i = R(n);
    null == A[e] && (A[e] = {}), (A[e][i] = r);
}
function L(e) {
    var n, r;
    let i = R(e.guild_scheduled_event_exception_id),
        a = null !== (r = null === (n = A[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : 0,
        o = a + ((null != e.guild_scheduled_event_exception_id && e.response === _.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === _.gv.INTERESTED) ? 1 : -1);
    x(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, o);
}
function w(e) {
    var n, r;
    let i = R(e.guild_scheduled_event_exception_id),
        a = null !== (r = null === (n = A[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : 0,
        o = a + ((null != e.guild_scheduled_event_exception_id && e.response === _.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === _.gv.INTERESTED) ? -1 : 1);
    x(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, o);
}
function P(e) {
    let { guilds: n } = e;
    return y.clear(), (b = 0), (S = {}), (A = {}), I.forEach(C), n.forEach((e) => e.guild_scheduled_events.forEach((e) => C(e))), !0;
}
function M(e) {
    let { guildScheduledEvent: n } = e;
    C(n);
}
function k(e) {
    let { guildId: n, guildScheduledEvents: r } = e,
        i = y.values(g.GUILD_EVENT(n), !0).map((e) => e.id),
        a = r.map((e) => e.id);
    for (let e of (l()
        .difference(i, a)
        .forEach((e) => {
            N(e);
        }),
    r))
        C(e);
    return !0;
}
function U(e) {
    let { guild: n } = e;
    return G(n.id, !1), n.guild_scheduled_events.forEach((e) => C(e)), !0;
}
function B(e) {
    let { guild: n } = e;
    return G(n.id, !0), !0;
}
function G(e, n) {
    y.values(g.GUILD_EVENT(e)).forEach((e) => N(e.id, n));
}
function Z(e) {
    let { guildScheduledEvent: n } = e;
    return C(n), !0;
}
function F(e) {
    let { guildScheduledEvent: n } = e;
    return N(n.id), !0;
}
function V(e) {
    let { eventException: n } = e,
        r = y.get(n.event_id);
    if (null == r) return !1;
    let i = r.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === n.event_exception_id),
        a = [...r.guild_scheduled_event_exceptions];
    return (
        i < 0 ? a.push(n) : (a[i] = n),
        C({
            ...r,
            guild_scheduled_event_exceptions: a
        }),
        !0
    );
}
function j(e) {
    let { eventException: n } = e,
        r = y.get(n.event_id);
    if (null == r) return !1;
    let i = r.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== n.event_exception_id);
    return (
        C({
            ...r,
            guild_scheduled_event_exceptions: i
        }),
        !0
    );
}
function H(e) {
    let { eventId: n } = e,
        r = y.get(n);
    return (
        null != r &&
        (C({
            ...r,
            guild_scheduled_event_exceptions: []
        }),
        !0)
    );
}
function Y(e) {
    let { guildScheduledEventUsers: n } = e;
    return n.forEach((e) => O(e, !1, !1)), (b += 1), !0;
}
function W(e) {
    let { guildScheduledEventUsers: n } = e;
    return n.forEach((e) => O(e, !1, !1)), (b += 1), !0;
}
function K(e) {
    var n, r;
    let { userId: i, guildEventId: a, guildId: o, guildEventExceptionId: s, response: l } = e,
        u = R(s),
        c = null === (r = S[a]) || void 0 === r ? void 0 : null === (n = r[u]) || void 0 === n ? void 0 : n[i];
    null != c && D(c, !1);
    let d = p.ZP.getMember(o, i);
    return (
        O({
            user_id: i,
            guild_scheduled_event_id: a,
            member: null != d ? d : void 0,
            guild_scheduled_event_exception_id: s,
            response: l
        }),
        !0
    );
}
function z(e) {
    let { userId: n, guildEventId: r, guildEventExceptionId: i, response: a } = e;
    D({
        user_id: n,
        guild_scheduled_event_id: r,
        guild_scheduled_event_exception_id: i,
        response: a
    });
}
function q(e) {
    let { eventId: n, counts: r } = e;
    x(n, null, r.eventCount),
        h.default.forEachKey(r.recurrenceCounts, (e) => {
            x(n, e, r.eventCount - r.recurrenceCounts[e]);
        });
}
function Q() {
    return y.clear(), !0;
}
function X(e) {
    let { invite: n } = e,
        r = n.guild_scheduled_event;
    return null != r && (C(r), !0);
}
function J(e) {
    return null != e && (null == e ? void 0 : e.status) === _.p1.ACTIVE;
}
function $(e) {
    return !_.$I.has(e.status);
}
function ee(e) {
    return null != e && _.$I.has(e.status);
}
class et extends (i = u.ZP.Store) {
    getGuildScheduledEvent(e) {
        var n;
        return null == e ? null : null !== (n = y.get(e)) && void 0 !== n ? n : null;
    }
    getGuildEventCountByIndex(e) {
        return y.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : y.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return y.values(e);
    }
    getRsvpVersion() {
        return b;
    }
    getRsvp(e, n, r) {
        var i, a;
        if (null == e) return null;
        let o = R(n);
        return null === (a = S[e]) || void 0 === a ? void 0 : null === (i = a[o]) || void 0 === i ? void 0 : i[r];
    }
    isInterestedInEventRecurrence(e, n) {
        let r = f.default.getId(),
            i = this.getRsvp(e, null, r),
            a = this.getRsvp(e, n, r),
            o = (null == i ? void 0 : i.response) === _.gv.INTERESTED,
            s = (null == a ? void 0 : a.response) === _.gv.INTERESTED,
            l = (null == a ? void 0 : a.response) === _.gv.UNINTERESTED;
        return (o && !l) || s;
    }
    getUserCount(e, n) {
        var r, i, a, o;
        if (null == e) return 0;
        let s = null !== (a = null === (r = A[e]) || void 0 === r ? void 0 : r[T]) && void 0 !== a ? a : 0;
        return null == n ? s : s - (null !== (o = null === (i = A[e]) || void 0 === i ? void 0 : i[n]) && void 0 !== o ? o : 0);
    }
    hasUserCount(e, n) {
        var r;
        let i = R(n);
        return (null === (r = A[e]) || void 0 === r ? void 0 : r[i]) != null;
    }
    isActive(e) {
        return null != e && J(y.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(g.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, n) {
        var r, i;
        if (null == e) return {};
        let a = R(n);
        return null !== (i = null === (r = S[e]) || void 0 === r ? void 0 : r[a]) && void 0 !== i ? i : {};
    }
}
m(et, 'displayName', 'GuildScheduledEventStore'),
    (n.ZP = new et(d.Z, {
        CONNECTION_OPEN: P,
        GUILD_CREATE: U,
        GUILD_DELETE: B,
        FETCH_GUILD_EVENT: M,
        FETCH_GUILD_EVENTS_FOR_GUILD: k,
        GUILD_SCHEDULED_EVENT_CREATE: Z,
        GUILD_SCHEDULED_EVENT_UPDATE: Z,
        GUILD_SCHEDULED_EVENT_DELETE: F,
        GUILD_SCHEDULED_EVENT_USER_ADD: K,
        GUILD_SCHEDULED_EVENT_USER_REMOVE: z,
        GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: Y,
        GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: W,
        GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: q,
        INVITE_RESOLVE_SUCCESS: X,
        GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: V,
        GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: V,
        GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: j,
        GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: H,
        LOGOUT: Q
    }));
