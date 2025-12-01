n.d(t, {
    Z: () => R,
    j: () => m,
});
var r,
    i = n(442837),
    a = n(570140),
    o = n(594174),
    s = n(411198),
    l = n(881952);
function c(e, t, n) {
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
let u = null,
    d = {},
    f = !1,
    p = {},
    _ = {};
function m(e) {
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
        interviewChannelId: e.interview_channel_id,
    };
}
function h(e) {
    delete d[e], u === e && (u = null);
}
function g(e) {
    let { guildJoinRequests: t } = e;
    (f = !1),
        (p = {}),
        (d = {}),
        t.forEach((e) => {
            let { guild_id: t } = e;
            null != t && (d[t] = m(e));
        });
}
function E(e) {
    let { request: t, guildId: n } = e;
    if (null == t) return void h(n);
    let r = m(t);
    (0, l.d3)(r) ? h(n) : (d[n] = r);
}
function b(e) {
    let { guildId: t, request: n } = e;
    if (null == n) return;
    let r = m(n),
        i = o.default.getCurrentUser();
    if (null != i && r.userId !== i.id) return !1;
    (0, l.d3)(r) ? h(t) : (d[t] = r);
}
function y(e) {
    let { guildId: t } = e;
    h(t);
}
function O(e) {
    let { guild: t } = e;
    h(t.id);
}
function v(e) {
    let { invite: t } = e,
        { guild: n, join_request: r } = t;
    if (null != n && null != r) {
        let { guild_id: e } = r;
        d[e] = m(r);
        let { id: t, name: i, icon: a, features: o, splash: s } = n;
        p[t] = {
            id: t,
            name: i,
            icon: a,
            features: null != o ? o : [],
            splash: s,
        };
    }
}
function S(e) {
    let { guilds: t } = e;
    (f = !0),
        t.forEach((e) => {
            let { id: t, name: n, features: r, icon: i, splash: a } = e;
            p[t] = {
                id: t,
                name: n,
                features: r,
                icon: i,
                splash: a,
            };
        });
}
function I(e) {
    let { guildId: t, cooldown: n } = e;
    _[t] = null != n ? n : 0;
}
function T(e) {
    let { form: t, guildId: n } = e;
    if ((null == t ? void 0 : t.guild) != null) {
        let { id: e, name: r, icon: i, features: a, splash: o } = t.guild;
        p[n] = {
            id: e,
            name: r,
            icon: i,
            features: null != a ? a : [],
            splash: o,
        };
    }
}
function A(e) {
    let { guildId: t } = e;
    h(t);
}
function C(e) {
    let { guildId: t } = e;
    u = t;
}
function N() {
    u = null;
}
class P extends (r = i.ZP.Store) {
    initialize() {
        this.waitFor(o.default);
    }
    getRequest(e) {
        return d[e];
    }
    computeGuildIds() {
        return Object.values(d)
            .map((e) => (null == e ? void 0 : e.guildId))
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != p[e] ? (0, s.yS)(p[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return f;
    }
    hasJoinRequestCoackmark() {
        return null != u;
    }
    getCooldown(e) {
        return _[e];
    }
}
c(P, "displayName", "UserGuildJoinRequestStore");
let R = new P(a.Z, {
    CONNECTION_OPEN: g,
    GUILD_JOIN_REQUEST_UPDATE: b,
    GUILD_JOIN_REQUEST_CREATE: b,
    GUILD_JOIN_REQUEST_DELETE: y,
    USER_GUILD_JOIN_REQUEST_UPDATE: E,
    GUILD_DELETE: O,
    USER_JOIN_REQUEST_GUILDS_FETCH: S,
    MEMBER_VERIFICATION_FORM_UPDATE: T,
    INVITE_ACCEPT_SUCCESS: v,
    ACK_APPROVED_GUILD_JOIN_REQUEST: A,
    USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: C,
    USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: N,
    USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: I,
});
