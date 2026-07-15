"use strict";
n.d(t, { Q9: () => f, eO: () => g, lA: () => p, nj: () => m, q0: () => S, rQ: () => I, wz: () => T }), n(938796);
var i = n(284009),
    r = n.n(i),
    a = n(239947),
    s = n(636537),
    l = n(228366),
    o = n(913122),
    d = n(626584),
    c = n(889227),
    u = n(287809),
    _ = n(499785),
    E = n(652215),
    A = n(901123);
let h = new d.A("UserProfileModalActionCreators");
function I() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return s.Bo.get({
        url: E.Rsh.ME,
        query: { with_analytics_token: t },
        oldFormErrors: !0,
        rejectWithError: (0, s.fT)(),
    }).then(
        (e) => (
            l.h.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: e.body,
                analyticsToken: t ? e.body.analytics_token : void 0,
            }),
            new c.A(e.body)
        ),
    );
}
function f() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.A.patch({
        url: E.Rsh.USER_AGREEMENTS,
        trackedActionData: { event: a.D.USER_ACCEPT_AGREEMENTS },
        body: { terms: e, privacy: t },
        oldFormErrors: !0,
        rejectWithError: (0, s.fT)(),
    }).then(
        () => !0,
        () => !1,
    );
}
function p(e, t) {
    let n = u.default.getCurrentUser();
    r()(null != n, "setFlag: user cannot be undefined");
    let i = t ? n.flags | e : n.flags & ~e;
    return s.Bo.patch({ url: E.Rsh.ME, oldFormErrors: !0, body: { flags: i }, rejectWithError: (0, s.fT)() });
}
function T(e) {
    let t = u.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : s.Bo.get({ url: E.Rsh.USER(e), oldFormErrors: !0, rejectWithError: (0, s.fT)() }).then(
              (t) => (l.h.dispatch({ type: "USER_UPDATE", user: t.body }), u.default.getUser(e)),
          );
}
function m(e) {
    return l.h.dispatch({ type: "USER_UPDATE", user: e }), u.default.getUser(e.id);
}
async function g(e) {
    let {
            type: t,
            withMutualGuilds: n,
            withMutualFriendsCount: i,
            withMutualFriends: r,
            guildId: a,
            connectionsRoleId: d,
            joinRequestId: c,
            abortSignal: u,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _ = arguments.length > 2 ? arguments[2] : void 0,
        I = Date.now();
    l.h.dispatch({ type: "USER_PROFILE_FETCH_START", userId: e, guildId: a, withMutualFriends: r });
    try {
        let o = null == a || A.Cr.includes(a) ? void 0 : a,
            h = await s.Bo.get({
                url: E.Rsh.USER_PROFILE(e),
                query: {
                    type: t,
                    with_mutual_guilds: n,
                    with_mutual_friends: r,
                    with_mutual_friends_count: i && (null == r || !r),
                    guild_id: o,
                    connections_role_id: d,
                    join_request_id: c,
                },
                signal: u,
                rejectWithError: !0,
            });
        _?.(h.body, a),
            l.h.dispatch({ type: "USER_UPDATE", user: h.body.user }),
            l.h.dispatch({ type: "USER_PROFILE_FETCH_SUCCESS", userProfile: h.body, fetchStartedAt: I, guildId: a }),
            null != a &&
                null != h.body.guild_member &&
                l.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildId: a, guildMember: h.body.guild_member });
    } catch (t) {
        throw (
            (null != t && t?.body != null && h.warn(`fetchProfile error: ${t.body.code} - ${t.body.message}`),
            l.h.dispatch({
                type: "USER_PROFILE_FETCH_FAILURE",
                apiError: new o.LG(t),
                fetchStartedAt: I,
                userId: e,
                guildId: a,
            }),
            t)
        );
    }
}
async function S(e, t) {
    l.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_START", userId: e });
    try {
        let n = await s.Bo.get({
            url: E.Rsh.USER_RELATIONSHIPS(e),
            oldFormErrors: !0,
            signal: t,
            rejectWithError: (0, s.fT)(),
        });
        l.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: e, mutualFriends: n.body });
    } catch (t) {
        throw (
            (t?.body != null && h.warn(`fetchMutualFriends error: ${t.body.code} - ${t.body.message}`),
            l.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_FAILURE", userId: e }),
            t)
        );
    }
}
