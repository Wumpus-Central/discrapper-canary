r.d(n, {
    j: function () {
        return m;
    }
});
var i,
    a = r(442837),
    o = r(570140),
    s = r(601964),
    l = r(594174),
    u = r(881952);
function c(e, n, r) {
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
let d = !1,
    f = {},
    p = !1,
    h = {},
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
        interviewChannelId: e.interview_channel_id
    };
}
function g(e) {
    let { guildJoinRequests: n } = e;
    (p = !1),
        (h = {}),
        (f = {}),
        n.forEach((e) => {
            let { guild_id: n } = e;
            null != n && (f[n] = m(e));
        });
}
function E(e) {
    let { request: n, guildId: r } = e;
    if (null == n) {
        delete f[r];
        return;
    }
    let i = m(n);
    (0, u.d3)(i) ? delete f[r] : (f[r] = i);
}
function v(e) {
    let { guildId: n, request: r } = e;
    if (null == r) return;
    let i = m(r),
        a = l.default.getCurrentUser();
    if (null != a && i.userId !== a.id) return !1;
    (0, u.d3)(i) ? delete f[n] : (f[n] = i);
}
function y(e) {
    let { guildId: n } = e;
    delete f[n];
}
function b(e) {
    let { guild: n } = e;
    delete f[n.id];
}
function I(e) {
    let { invite: n } = e,
        { guild: r, join_request: i } = n;
    if (null != r && null != i) {
        let { guild_id: e } = i;
        f[e] = m(i);
        let { id: n, name: a, icon: o, features: s } = r;
        h[n] = {
            id: n,
            name: a,
            icon: o,
            features: null != s ? s : []
        };
    }
}
function T(e) {
    let { guilds: n } = e;
    (p = !0),
        n.forEach((e) => {
            let { id: n, name: r, features: i, icon: a } = e;
            h[n] = {
                id: n,
                name: r,
                features: i,
                icon: a
            };
        });
}
function S(e) {
    let { guildId: n, cooldown: r } = e;
    _[n] = null != r ? r : 0;
}
function A(e) {
    let { form: n, guildId: r } = e;
    if ((null == n ? void 0 : n.guild) != null) {
        let { id: e, name: i, icon: a, features: o } = n.guild;
        h[r] = {
            id: e,
            name: i,
            icon: a,
            features: null != o ? o : []
        };
    }
}
function C(e) {
    let { guildId: n } = e;
    delete f[n];
}
function N() {
    d = !0;
}
function R() {
    d = !1;
}
class O extends (i = a.ZP.Store) {
    getRequest(e) {
        return f[e];
    }
    computeGuildIds() {
        return Object.values(f)
            .map((e) => (null == e ? void 0 : e.guildId))
            .filter((e) => null != e);
    }
    getJoinRequestGuild(e) {
        return null != h[e] ? new s.ZP(h[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return p;
    }
    hasJoinRequestCoackmark() {
        return d;
    }
    getCooldown(e) {
        return _[e];
    }
}
c(O, 'displayName', 'UserGuildJoinRequestStore'),
    (n.Z = new O(o.Z, {
        CONNECTION_OPEN: g,
        GUILD_JOIN_REQUEST_UPDATE: v,
        GUILD_JOIN_REQUEST_CREATE: v,
        GUILD_JOIN_REQUEST_DELETE: y,
        USER_GUILD_JOIN_REQUEST_UPDATE: E,
        GUILD_DELETE: b,
        USER_JOIN_REQUEST_GUILDS_FETCH: T,
        MEMBER_VERIFICATION_FORM_UPDATE: A,
        INVITE_ACCEPT_SUCCESS: I,
        ACK_APPROVED_GUILD_JOIN_REQUEST: C,
        USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: N,
        USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: R,
        USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: S
    }));
