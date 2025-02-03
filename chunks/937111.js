n.d(t, {
    Z: () => D,
    j: () => h
});
var i,
    r = n(442837),
    a = n(570140),
    s = n(601964),
    o = n(594174),
    l = n(881952);
function u(e, t, n) {
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
let c = null,
    d = {},
    f = !1,
    _ = {},
    p = {};
function h(e) {
    return {
        joinRequestId: e.join_request_id,
        guildId: e.guild_id,
        userId: e.user_id,
        user: e.user,
        createdAt: e.created_at,
        formResponses: e.form_responses,
        rejectionReason: e.rejection_reason,
        applicationStatus: e.application_status,
        actionedAt: e.actioned_at,
        actionedByUser: e.actioned_by_user,
        lastSeen: e.last_seen,
        interviewChannelId: e.interview_channel_id
    };
}
function m(e) {
    delete d[e], c === e && (c = null);
}
function g(e) {
    let { guildJoinRequests: t } = e;
    (f = !1),
        (_ = {}),
        (d = {}),
        t.forEach((e) => {
            let { guild_id: t } = e;
            null != t && (d[t] = h(e));
        });
}
function E(e) {
    let { request: t, guildId: n } = e;
    if (null == t) {
        m(n);
        return;
    }
    let i = h(t);
    (0, l.d3)(i) ? m(n) : (d[n] = i);
}
function v(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let i = h(n),
        r = o.default.getCurrentUser();
    if (null != r && i.userId !== r.id) return !1;
    (0, l.d3)(i) ? m(t) : (d[t] = i);
}
function y(e) {
    let { guildId: t } = e;
    m(t);
}
function I(e) {
    let { guild: t } = e;
    m(t.id);
}
function b(e) {
    let { invite: t } = e,
        { guild: n, join_request: i } = t;
    if (null != n && null != i) {
        let { guild_id: e } = i;
        d[e] = h(i);
        let { id: t, name: r, icon: a, features: s, splash: o } = n;
        _[t] = {
            id: t,
            name: r,
            icon: a,
            features: null != s ? s : [],
            splash: o
        };
    }
}
function T(e) {
    let { guilds: t } = e;
    (f = !0),
        t.forEach((e) => {
            let { id: t, name: n, features: i, icon: r, splash: a } = e;
            _[t] = {
                id: t,
                name: n,
                features: i,
                icon: r,
                splash: a
            };
        });
}
function S(e) {
    let { guildId: t, cooldown: n } = e;
    p[t] = null != n ? n : 0;
}
function A(e) {
    let { form: t, guildId: n } = e;
    if ((null == t ? void 0 : t.guild) != null) {
        let { id: e, name: i, icon: r, features: a, splash: s } = t.guild;
        _[n] = {
            id: e,
            name: i,
            icon: r,
            features: null != a ? a : [],
            splash: s
        };
    }
}
function N(e) {
    let { guildId: t } = e;
    m(t);
}
function C(e) {
    let { guildId: t } = e;
    c = t;
}
function R() {
    c = null;
}
class O extends (i = r.ZP.Store) {
    getRequest(e) {
        return d[e];
    }
    computeGuildIds() {
        return Object.values(d)
            .map((e) => (null == e ? void 0 : e.guildId))
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != _[e] ? new s.ZP(_[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return f;
    }
    hasJoinRequestCoackmark() {
        return null != c;
    }
    getCooldown(e) {
        return p[e];
    }
}
u(O, 'displayName', 'UserGuildJoinRequestStore');
let D = new O(a.Z, {
    CONNECTION_OPEN: g,
    GUILD_JOIN_REQUEST_UPDATE: v,
    GUILD_JOIN_REQUEST_CREATE: v,
    GUILD_JOIN_REQUEST_DELETE: y,
    USER_GUILD_JOIN_REQUEST_UPDATE: E,
    GUILD_DELETE: I,
    USER_JOIN_REQUEST_GUILDS_FETCH: T,
    MEMBER_VERIFICATION_FORM_UPDATE: A,
    INVITE_ACCEPT_SUCCESS: b,
    ACK_APPROVED_GUILD_JOIN_REQUEST: N,
    USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: C,
    USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: R,
    USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: S
});
