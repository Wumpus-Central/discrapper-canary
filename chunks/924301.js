n.d(t, {
    CQ: () => E,
    Ld: () => $,
    Z2: () => ee,
    ZP: () => en,
    bN: () => g,
    xt: () => J
}),
    n(653041),
    n(47120);
var r,
    i = n(392711),
    o = n.n(i),
    a = n(442837),
    s = n(759174),
    l = n(570140),
    c = n(314897),
    u = n(271383),
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
function p(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                _(e, t, n[t]);
            });
    }
    return e;
}
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
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
    let { id: t, scheduled_start_time: n } = e,
        r = J(e) ? '\0' : '\x01';
    return ''.concat(r, '-').concat(new Date(n).getTime(), '-').concat(t);
}
let b = (e) => {
        let { guild_id: t, entity_id: n, channel_id: r } = e,
            i = [t];
        return null != n && i.push(n), i.push(g.GUILD_EVENT(t)), null != r && i.push(g.CHANNEL_EVENT(r)), J(e) && (i.push(g.EVENT_ACTIVE), i.push(g.GUILD_EVENT_ACTIVE(t)), null != r && i.push(g.CHANNEL_EVENT_ACTIVE(r))), $(e) && (i.push(g.EVENT_UPCOMING), i.push(g.GUILD_EVENT_UPCOMING(t)), null != r && i.push(g.CHANNEL_EVENT_UPCOMING(r))), i;
    },
    y = new s.h(b, E),
    v = 0,
    O = [],
    I = 'SERIES',
    S = {},
    T = {};
function N(e) {
    y.set(e.id, e), (v += 1);
}
function A(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    y.delete(e), delete S[e], t && delete T[e], (v += 1);
}
function C(e) {
    return null != e ? e : I;
}
function R(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        r = e.guild_scheduled_event_id;
    null == S[r] && (S[r] = {});
    let i = C(e.guild_scheduled_event_exception_id);
    null == S[r][i] && (S[r][i] = {}), (S[r][i][e.user_id] = e), t && D(e), n && (v += 1);
}
function P(e) {
    var t, n, r, i;
    let o = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        a = C(e.guild_scheduled_event_exception_id),
        s = (null == (n = S[e.guild_scheduled_event_id]) || null == (t = n[a]) ? void 0 : t[e.user_id]) != null,
        l = e.user_id === c.default.getId();
    (s || !l) && (null == (i = S[e.guild_scheduled_event_id]) || null == (r = i[a]) || delete r[e.user_id], L(e), o && (v += 1));
}
function w(e, t, n) {
    let r = C(t);
    null == T[e] && (T[e] = {}), (T[e][r] = n);
}
function D(e) {
    var t, n;
    let r = C(e.guild_scheduled_event_exception_id),
        i = (null != (n = null == (t = T[e.guild_scheduled_event_id]) ? void 0 : t[r]) ? n : 0) + ((null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED) ? 1 : -1);
    w(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i);
}
function L(e) {
    var t, n;
    let r = C(e.guild_scheduled_event_exception_id),
        i = (null != (n = null == (t = T[e.guild_scheduled_event_id]) ? void 0 : t[r]) ? n : 0) + ((null != e.guild_scheduled_event_exception_id && e.response === f.gv.UNINTERESTED) || (null == e.guild_scheduled_event_exception_id && e.response === f.gv.INTERESTED) ? -1 : 1);
    w(e.guild_scheduled_event_id, e.guild_scheduled_event_exception_id, i);
}
function x(e) {
    let { guilds: t } = e;
    return y.clear(), (v = 0), (S = {}), (T = {}), O.forEach(N), t.forEach((e) => e.guild_scheduled_events.forEach((e) => N(e))), !0;
}
function M(e) {
    let { guildScheduledEvent: t } = e;
    N(t);
}
function k(e) {
    let { guildId: t, guildScheduledEvents: n } = e,
        r = y.values(g.GUILD_EVENT(t), !0).map((e) => e.id),
        i = n.map((e) => e.id);
    for (let e of (o()
        .difference(r, i)
        .forEach((e) => {
            A(e);
        }),
    n))
        N(e);
    return !0;
}
function j(e) {
    let { guild: t } = e;
    return G(t.id, !1), t.guild_scheduled_events.forEach((e) => N(e)), !0;
}
function U(e) {
    let { guild: t } = e;
    return G(t.id, !0), !0;
}
function G(e, t) {
    y.values(g.GUILD_EVENT(e)).forEach((e) => A(e.id, t));
}
function B(e) {
    let { guildScheduledEvent: t } = e;
    return N(t), !0;
}
function F(e) {
    let { guildScheduledEvent: t } = e;
    return A(t.id), !0;
}
function V(e) {
    let { eventException: t } = e,
        n = y.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.findIndex((e) => e.event_exception_id === t.event_exception_id),
        i = [...n.guild_scheduled_event_exceptions];
    return r < 0 ? i.push(t) : (i[r] = t), N(m(p({}, n), { guild_scheduled_event_exceptions: i })), !0;
}
function Z(e) {
    let { eventException: t } = e,
        n = y.get(t.event_id);
    if (null == n) return !1;
    let r = n.guild_scheduled_event_exceptions.filter((e) => e.event_exception_id !== t.event_exception_id);
    return N(m(p({}, n), { guild_scheduled_event_exceptions: r })), !0;
}
function H(e) {
    let { eventId: t } = e,
        n = y.get(t);
    return null != n && (N(m(p({}, n), { guild_scheduled_event_exceptions: [] })), !0);
}
function W(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => R(e, !1, !1)), (v += 1), !0;
}
function Y(e) {
    let { guildScheduledEventUsers: t } = e;
    return t.forEach((e) => R(e, !1, !1)), (v += 1), !0;
}
function K(e) {
    var t, n;
    let { userId: r, guildEventId: i, guildId: o, guildEventExceptionId: a, response: s } = e,
        l = C(a),
        c = null == (n = S[i]) || null == (t = n[l]) ? void 0 : t[r];
    null != c && P(c, !1);
    let d = u.ZP.getMember(o, r);
    return (
        R({
            user_id: r,
            guild_scheduled_event_id: i,
            member: null != d ? d : void 0,
            guild_scheduled_event_exception_id: a,
            response: s
        }),
        !0
    );
}
function z(e) {
    let { userId: t, guildEventId: n, guildEventExceptionId: r, response: i } = e;
    P({
        user_id: t,
        guild_scheduled_event_id: n,
        guild_scheduled_event_exception_id: r,
        response: i
    });
}
function q(e) {
    let { eventId: t, counts: n } = e;
    w(t, null, n.eventCount),
        d.default.forEachKey(n.recurrenceCounts, (e) => {
            w(t, e, n.eventCount - n.recurrenceCounts[e]);
        });
}
function Q() {
    return y.clear(), !0;
}
function X(e) {
    let { invite: t } = e,
        n = t.guild_scheduled_event;
    return null != n && (N(n), !0);
}
function J(e) {
    return null != e && (null == e ? void 0 : e.status) === f.p1.ACTIVE;
}
function $(e) {
    return !f.$I.has(e.status);
}
function ee(e) {
    return null != e && f.$I.has(e.status);
}
class et extends (r = a.ZP.Store) {
    getGuildScheduledEvent(e) {
        var t;
        return null == e ? null : null != (t = y.get(e)) ? t : null;
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
        return v;
    }
    getRsvp(e, t, n) {
        var r, i;
        if (null == e) return null;
        let o = C(t);
        return null == (i = S[e]) || null == (r = i[o]) ? void 0 : r[n];
    }
    isInterestedInEventRecurrence(e, t) {
        let n = c.default.getId(),
            r = this.getRsvp(e, null, n),
            i = this.getRsvp(e, t, n),
            o = (null == r ? void 0 : r.response) === f.gv.INTERESTED,
            a = (null == i ? void 0 : i.response) === f.gv.INTERESTED,
            s = (null == i ? void 0 : i.response) === f.gv.UNINTERESTED;
        return (o && !s) || a;
    }
    getUserCount(e, t) {
        var n, r, i, o;
        if (null == e) return 0;
        let a = null != (i = null == (n = T[e]) ? void 0 : n[I]) ? i : 0;
        return null == t ? a : a - (null != (o = null == (r = T[e]) ? void 0 : r[t]) ? o : 0);
    }
    hasUserCount(e, t) {
        var n;
        let r = C(t);
        return (null == (n = T[e]) ? void 0 : n[r]) != null;
    }
    isActive(e) {
        return null != e && J(y.get(e));
    }
    getActiveEventByChannel(e) {
        if (null != e) return this.getGuildScheduledEventsByIndex(g.CHANNEL_EVENT_ACTIVE(e))[0];
    }
    getUsersForGuildEvent(e, t) {
        var n, r;
        if (null == e) return {};
        let i = C(t);
        return null != (r = null == (n = S[e]) ? void 0 : n[i]) ? r : {};
    }
}
_(et, 'displayName', 'GuildScheduledEventStore');
let en = new et(l.Z, {
    CONNECTION_OPEN: x,
    GUILD_CREATE: j,
    GUILD_DELETE: U,
    FETCH_GUILD_EVENT: M,
    FETCH_GUILD_EVENTS_FOR_GUILD: k,
    GUILD_SCHEDULED_EVENT_CREATE: B,
    GUILD_SCHEDULED_EVENT_UPDATE: B,
    GUILD_SCHEDULED_EVENT_DELETE: F,
    GUILD_SCHEDULED_EVENT_USER_ADD: K,
    GUILD_SCHEDULED_EVENT_USER_REMOVE: z,
    GUILD_SCHEDULED_EVENT_RSVPS_FETCH_SUCESS: W,
    GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: Y,
    GUILD_SCHEDULED_EVENT_USER_COUNTS_FETCH_SUCCESS: q,
    INVITE_RESOLVE_SUCCESS: X,
    GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE: V,
    GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE: V,
    GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE: Z,
    GUILD_SCHEDULED_EVENT_EXCEPTIONS_DELETE: H,
    LOGOUT: Q
});
