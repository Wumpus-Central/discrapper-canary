"use strict";
n.d(t, { Q9: () => f, eO: () => I, lA: () => g, nj: () => A, q0: () => T, rQ: () => m, wz: () => p }), n(938796);
var i = n(284009),
    r = n.n(i),
    s = n(239947),
    a = n(636537),
    o = n(228366),
    l = n(845584),
    d = n(626584),
    _ = n(889227),
    u = n(287809),
    c = n(499785),
    E = n(652215);
let h = new d.A("UserProfileModalActionCreators");
function m() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return a.Bo.get({ url: E.Rsh.ME, query: { with_analytics_token: t }, oldFormErrors: !0, rejectWithError: !1 }).then(
        (e) => (
            o.h.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: e.body,
                analyticsToken: t ? e.body.analytics_token : void 0,
            }),
            new _.A(e.body)
        ),
    );
}
function f() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return c.A.patch({
        url: E.Rsh.USER_AGREEMENTS,
        trackedActionData: { event: s.D.USER_ACCEPT_AGREEMENTS },
        body: { terms: e, privacy: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        () => !0,
        () => !1,
    );
}
function g(e, t) {
    let n = u.default.getCurrentUser();
    r()(null != n, "setFlag: user cannot be undefined");
    let i = t ? n.flags | e : n.flags & ~e;
    return a.Bo.patch({ url: E.Rsh.ME, oldFormErrors: !0, body: { flags: i }, rejectWithError: !1 });
}
function p(e) {
    let t = u.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : a.Bo.get({ url: E.Rsh.USER(e), oldFormErrors: !0, rejectWithError: !1 }).then(
              (t) => (o.h.dispatch({ type: "USER_UPDATE", user: t.body }), u.default.getUser(e)),
          );
}
function A(e) {
    return o.h.dispatch({ type: "USER_UPDATE", user: e }), u.default.getUser(e.id);
}
async function I(e) {
    let {
            type: t,
            withMutualGuilds: n,
            withMutualFriendsCount: i,
            withMutualFriends: r,
            guildId: s,
            connectionsRoleId: d,
            joinRequestId: _,
            abortSignal: u,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        c = arguments.length > 2 ? arguments[2] : void 0,
        m = Date.now();
    o.h.dispatch({ type: "USER_PROFILE_FETCH_START", userId: e, guildId: s, withMutualFriends: r });
    try {
        let l = await a.Bo.get({
            url: E.Rsh.USER_PROFILE(e),
            query: {
                type: t,
                with_mutual_guilds: n,
                with_mutual_friends: r,
                with_mutual_friends_count: i && (null == r || !r),
                guild_id: s,
                connections_role_id: d,
                join_request_id: _,
            },
            signal: u,
            rejectWithError: !0,
        });
        c?.(l.body, s),
            o.h.dispatch({ type: "USER_UPDATE", user: l.body.user }),
            o.h.dispatch({ type: "USER_PROFILE_FETCH_SUCCESS", userProfile: l.body, fetchStartedAt: m }),
            null != s &&
                null != l.body.guild_member &&
                o.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildId: s, guildMember: l.body.guild_member });
    } catch (t) {
        throw (
            (null != t && t?.body != null && h.warn(`fetchProfile error: ${t.body.code} - ${t.body.message}`),
            o.h.dispatch({
                type: "USER_PROFILE_FETCH_FAILURE",
                apiError: new l.LG(t),
                fetchStartedAt: m,
                userId: e,
                guildId: s,
            }),
            t)
        );
    }
}
async function T(e, t) {
    o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_START", userId: e });
    try {
        let n = await a.Bo.get({ url: E.Rsh.USER_RELATIONSHIPS(e), oldFormErrors: !0, signal: t, rejectWithError: !1 });
        o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: e, mutualFriends: n.body });
    } catch (t) {
        throw (
            (t?.body != null && h.warn(`fetchMutualFriends error: ${t.body.code} - ${t.body.message}`),
            o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_FAILURE", userId: e }),
            t)
        );
    }
}
