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
var s = r(47120);
var o = r(392711),
    l = r.n(o),
    u = r(442837),
    c = r(759174),
    d = r(570140),
    f = r(314897),
    _ = r(271383),
    h = r(709054),
    p = r(765305);
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
    I = new c.h(v, E),
    T = 0,
    b = [],
    y = 'SERIES',
    S = {},
    A = {};
function N(e) {
    I.set(e.id, e), (T += 1);
}
function C(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    I.delete(e), delete S[e], n && delete A[e], (T += 1);
}
function R(e) {
    return null != e ? e : y;
}
function O(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        i = e.guild_scheduled_event_id;
    null == S[i] && (S[i] = {});
    let a = R(e.guild_scheduled_event_exception_id);
    null == S[i][a] && (S[i][a] = {}), (S[i][a][e.user_id] = e), n && x(e), r && (T += 1);
}
function D(e) {
    var n, r, i, a;
    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        o = R(e.guild_scheduled_event_exception_id),
        l = (null === (r = S[e.guild_scheduled_event_id]) || void 0 === r ? void 0 : null === (n = r[o]) || void 0 === n ? void 0 : n[e.user_id]) != null,
        u = e.user_id === f.default.getId();
    (l || !u) && (null === (a = S[e.guild_scheduled_event_id]) || void 0 === a || null === (i = a[o]) || void 0 === i || delete i[e.user_id], w(e), s && (T += 1));
}
function L(e, n, r) {
    let i = R(n);
    null == A[e] && (A[e] = {}), (A[e][i] = r);
}
function x(e) {
    var n, r;
    let i = R(e.guild_scheduled_event_exception_id),
        a = null !== (r = null === (n = A[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : 0,
        s = a + ((null != e.guild_scheduled_event_exception_id && e.response === p.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === p.gv.INTERESTED) ? 1 : -1);
    L(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, s);
}
function w(e) {
    var n, r;
    let i = R(e.guild_scheduled_event_exception_id),
        a = null !== (r = null === (n = A[e.guild_scheduled_event_id]) || void 0 === n ? void 0 : n[i]) && void 0 !== r ? r : 0,
        s = a + ((null != e.guild_scheduled_event_exception_id && e.response === p.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === p.gv.INTERESTED) ? -1 : 1);
    L(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, s);
}
function P(e) {
    let { guilds: n } = e;
    return I.clear(), (T = 0), (S = {}), (A = {}), b.forEach(N), n.forEach((e) => e.guild_scheduled_events.forEach((e) => N(e))), !0;
}
function M(e) {
    let { guildScheduledEvent: n } = e;
    N(n);
}
function k(e) {
    let { guildId: n, guildScheduledEvents: r } = e,
        i = I.values(g.GUILD_EVENT(n), !0).map((e) => e.id),
        a = r.map((e) => e.id);
    for (let e of (l()
        .difference(i, a)
        .forEach((e) => {
            C(e);
        }),
    r))
        N(e);
    return !0;
}
function U(e) {
    let { guild: n } = e;
    return G(n.id, !1), n.guild_scheduled_events.forEach((e) => N(e)), !0;
}
function B(e) {
    let { guild: n } = e;
    return G(n.id, !0), !0;
}
function G(e, n) {
    I.values(g.GUILD_EVENT(e)).forEach((e) => C(e.id, n));
}
function Z(e) {
    let { guildScheduledEvent: n } = e;
    return N(n), !0;
}
function F(e) {
    let { guildScheduledEvent: n } = e;
    return C(n.id), !0;
}
function V(e) {
    let { eventException: n } = e,
        r = I.get(n.event_id);
    if (null == r) return !1;
    let i = r.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === n.event_exception_id),
        a = [...r.guild_scheduled_event_exceptions];
    return (
        i < 0 ? a.push(n) : (a[i] = n),
        N({
            ...r,
            guild_scheduled_event_exceptions: a
        }),
        !0
    );
}
function j(e) {
    let { eventException: n } = e,
        r = I.get(n.event_id);
    if (null == r) return !1;
    let i = r.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== n.event_exception_id);
    return (
        N({
            ...r,
            guild_scheduled_event_exceptions: i
        }),
        !0
    );
}
function H(e) {
    let { eventId: n } = e,
        r = I.get(n);
    return (
        null != r &&
        (N({
            ...r,
            guild_scheduled_event_exceptions: []
        }),
        !0)
    );
}
function Y(e) {
    let { guildScheduledEventUsers: n } = e;
    return n.forEach((e) => O(e, !1, !1)), (T += 1), !0;
}
function W(e) {
    let { guildScheduledEventUsers: n } = e;
    return n.forEach((e) => O(e, !1, !1)), (T += 1), !0;
}
function K(e) {
    var n, r;
    let { userId: i, guildEventId: a, guildId: s, guildEventExceptionId: o, response: l } = e,
        u = R(o),
        c = null === (r = S[a]) || void 0 === r ? void 0 : null === (n = r[u]) || void 0 === n ? void 0 : n[i];
    null != c && D(c, !1);
    let d = _.ZP.getMember(s, i);
    return (
        O({
            user_id: i,
            guild_scheduled_event_id: a,
            member: null != d ? d : void 0,
            guild_scheduled_event_exception_id: o,
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
    L(n, null, r.eventCount),
        h.default.forEachKey(r.recurrenceCounts, (e) => {
            L(n, e, r.eventCount - r.recurrenceCounts[e]);
        });
}
function Q() {
    return I.clear(), !0;
}
function X(e) {
    let { invite: n } = e,
        r = n.guild_scheduled_event;
    return null != r && (N(r), !0);
}
function J(e) {
    return null != e && (null == e ? void 0 : e.status) === p.p1.ACTIVE;
}
function $(e) {
    return !p.$I.has(e.status);
}
function ee(e) {
    return null != e && p.$I.has(e.status);
}
class et extends (i = u.ZP.Store) {
    getGuildScheduledEvent(e) {
        var n;
        return null == e ? null : null !== (n = I.get(e)) && void 0 !== n ? n : null;
    }
    getGuildEventCountByIndex(e) {
        return I.size(e);
    }
    getGuildScheduledEventsForGuild(e) {
        return null == e ? [] : I.values(e);
    }
    getGuildScheduledEventsByIndex(e) {
        return I.values(e);
    }
    getRsvpVersion() {
        return T;
    }
    getRsvp(e, n, r) {
        var i, a;
        if (null == e) return null;
        let s = R(n);
        return null === (a = S[e]) || void 0 === a ? void 0 : null === (i = a[s]) || void 0 === i ? void 0 : i[r];
    }
    isInterestedInEventRecurrence(e, n) {
        let r = f.default.getId(),
            i = this.getRsvp(e, null, r),
            a = this.getRsvp(e, n, r),
            s = (null == i ? void 0 : i.response) === p.gv.INTERESTED,
            o = (null == a ? void 0 : a.response) === p.gv.INTERESTED,
            l = (null == a ? void 0 : a.response) === p.gv.UNINTERESTED;
        return (s && !l) || o;
    }
    getUserCount(e, n) {
        var r, i, a, s;
        if (null == e) return 0;
        let o = null !== (a = null === (r = A[e]) || void 0 === r ? void 0 : r[y]) && void 0 !== a ? a : 0;
        return null == n ? o : o - (null !== (s = null === (i = A[e]) || void 0 === i ? void 0 : i[n]) && void 0 !== s ? s : 0);
    }
    hasUserCount(e, n) {
        var r;
        let i = R(n);
        return (null === (r = A[e]) || void 0 === r ? void 0 : r[i]) != null;
    }
    isActive(e) {
        return null != e && J(I.get(e));
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
