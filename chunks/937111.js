n.d(t, {
    Z: () => P,
    j: () => h
});
var r,
    i = n(442837),
    o = n(570140),
    a = n(601964),
    s = n(594174),
    l = n(881952);
function c(e, t, n) {
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
let u = null,
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
    delete d[e], u === e && (u = null);
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
    if (null == t) return void m(n);
    let r = h(t);
    (0, l.d3)(r) ? m(n) : (d[n] = r);
}
function b(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let r = h(n),
        i = s.default.getCurrentUser();
    if (null != i && r.userId !== i.id) return !1;
    (0, l.d3)(r) ? m(t) : (d[t] = r);
}
function y(e) {
    let { guildId: t } = e;
    m(t);
}
function v(e) {
    let { guild: t } = e;
    m(t.id);
}
function O(e) {
    let { invite: t } = e,
        { guild: n, join_request: r } = t;
    if (null != n && null != r) {
        let { guild_id: e } = r;
        d[e] = h(r);
        let { id: t, name: i, icon: o, features: a, splash: s } = n;
        _[t] = {
            id: t,
            name: i,
            icon: o,
            features: null != a ? a : [],
            splash: s
        };
    }
}
function I(e) {
    let { guilds: t } = e;
    (f = !0),
        t.forEach((e) => {
            let { id: t, name: n, features: r, icon: i, splash: o } = e;
            _[t] = {
                id: t,
                name: n,
                features: r,
                icon: i,
                splash: o
            };
        });
}
function S(e) {
    let { guildId: t, cooldown: n } = e;
    p[t] = null != n ? n : 0;
}
function T(e) {
    let { form: t, guildId: n } = e;
    if ((null == t ? void 0 : t.guild) != null) {
        let { id: e, name: r, icon: i, features: o, splash: a } = t.guild;
        _[n] = {
            id: e,
            name: r,
            icon: i,
            features: null != o ? o : [],
            splash: a
        };
    }
}
function N(e) {
    let { guildId: t } = e;
    m(t);
}
function A(e) {
    let { guildId: t } = e;
    u = t;
}
function C() {
    u = null;
}
class R extends (r = i.ZP.Store) {
    getRequest(e) {
        return d[e];
    }
    computeGuildIds() {
        return Object.values(d)
            .map((e) => (null == e ? void 0 : e.guildId))
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != _[e] ? new a.ZP(_[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return f;
    }
    hasJoinRequestCoackmark() {
        return null != u;
    }
    getCooldown(e) {
        return p[e];
    }
}
c(R, 'displayName', 'UserGuildJoinRequestStore');
let P = new R(o.Z, {
    CONNECTION_OPEN: g,
    GUILD_JOIN_REQUEST_UPDATE: b,
    GUILD_JOIN_REQUEST_CREATE: b,
    GUILD_JOIN_REQUEST_DELETE: y,
    USER_GUILD_JOIN_REQUEST_UPDATE: E,
    GUILD_DELETE: v,
    USER_JOIN_REQUEST_GUILDS_FETCH: I,
    MEMBER_VERIFICATION_FORM_UPDATE: T,
    INVITE_ACCEPT_SUCCESS: O,
    ACK_APPROVED_GUILD_JOIN_REQUEST: N,
    USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: A,
    USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: C,
    USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: S
});
