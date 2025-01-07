r.d(n, {
    j: function () {
        return m;
    }
});
var i,
    a = r(442837),
    s = r(570140),
    o = r(601964),
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
    _ = !1,
    h = {},
    p = {};
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
    (_ = !1),
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
function I(e) {
    let { guildId: n } = e;
    delete f[n];
}
function T(e) {
    let { guild: n } = e;
    delete f[n.id];
}
function b(e) {
    let { invite: n } = e,
        { guild: r, join_request: i } = n;
    if (null != r && null != i) {
        let { guild_id: e } = i;
        f[e] = m(i);
        let { id: n, name: a, icon: s, features: o } = r;
        h[n] = {
            id: n,
            name: a,
            icon: s,
            features: null != o ? o : []
        };
    }
}
function y(e) {
    let { guilds: n } = e;
    (_ = !0),
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
    p[n] = null != r ? r : 0;
}
function A(e) {
    let { form: n, guildId: r } = e;
    if ((null == n ? void 0 : n.guild) != null) {
        let { id: e, name: i, icon: a, features: s } = n.guild;
        h[r] = {
            id: e,
            name: i,
            icon: a,
            features: null != s ? s : []
        };
    }
}
function N(e) {
    let { guildId: n } = e;
    delete f[n];
}
function C() {
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
        return null != h[e] ? new o.ZP(h[e]) : null;
    }
    get hasFetchedRequestToJoinGuilds() {
        return _;
    }
    hasJoinRequestCoackmark() {
        return d;
    }
    getCooldown(e) {
        return p[e];
    }
}
c(O, 'displayName', 'UserGuildJoinRequestStore'),
    (n.Z = new O(s.Z, {
        CONNECTION_OPEN: g,
        GUILD_JOIN_REQUEST_UPDATE: v,
        GUILD_JOIN_REQUEST_CREATE: v,
        GUILD_JOIN_REQUEST_DELETE: I,
        USER_GUILD_JOIN_REQUEST_UPDATE: E,
        GUILD_DELETE: T,
        USER_JOIN_REQUEST_GUILDS_FETCH: y,
        MEMBER_VERIFICATION_FORM_UPDATE: A,
        INVITE_ACCEPT_SUCCESS: b,
        ACK_APPROVED_GUILD_JOIN_REQUEST: N,
        USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: C,
        USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: R,
        USER_GUILD_JOIN_REQUEST_COOLDOWN_FETCH: S
    }));
