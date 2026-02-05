"use strict";
n.d(t, { Q9: () => m, eO: () => I, lA: () => g, nj: () => A, q0: () => T, rQ: () => h, wz: () => E }), n(938796);
var r = n(284009),
    i = n.n(r),
    a = n(239947),
    s = n(562465),
    o = n(73153),
    l = n(198982),
    u = n(626584),
    c = n(427157),
    d = n(287809),
    _ = n(499785),
    f = n(652215);
let p = new u.A("UserProfileModalActionCreators");
function h() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return s.Bo.get({ url: f.Rsh.ME, query: { with_analytics_token: t }, oldFormErrors: !0, rejectWithError: !1 }).then(
        (e) => (
            o.h.dispatch({
                type: "CURRENT_USER_UPDATE",
                user: e.body,
                analyticsToken: t ? e.body.analytics_token : void 0,
            }),
            new c.A(e.body)
        ),
    );
}
function m() {
    let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return _.A.patch({
        url: f.Rsh.USER_AGREEMENTS,
        trackedActionData: { event: a.D.USER_ACCEPT_AGREEMENTS },
        body: { terms: e, privacy: t },
        oldFormErrors: !0,
        rejectWithError: !1,
    }).then(
        () => !0,
        () => !1,
    );
}
function g(e, t) {
    let n = d.default.getCurrentUser();
    i()(null != n, "setFlag: user cannot be undefined");
    let r = t ? n.flags | e : n.flags & ~e;
    return s.Bo.patch({ url: f.Rsh.ME, oldFormErrors: !0, body: { flags: r }, rejectWithError: !1 });
}
function E(e) {
    let t = d.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : s.Bo.get({ url: f.Rsh.USER(e), oldFormErrors: !0, rejectWithError: !1 }).then(
              (t) => (o.h.dispatch({ type: "USER_UPDATE", user: t.body }), d.default.getUser(e)),
          );
}
function A(e) {
    return o.h.dispatch({ type: "USER_UPDATE", user: e }), d.default.getUser(e.id);
}
async function I(e) {
    let {
            type: t,
            withMutualGuilds: n,
            withMutualFriendsCount: r,
            withMutualFriends: i,
            guildId: a,
            connectionsRoleId: u,
            joinRequestId: c,
            abortSignal: d,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _ = arguments.length > 2 ? arguments[2] : void 0,
        h = Date.now();
    o.h.dispatch({ type: "USER_PROFILE_FETCH_START", userId: e, guildId: a, withMutualFriends: i });
    try {
        let l = await s.Bo.get({
            url: f.Rsh.USER_PROFILE(e),
            query: {
                type: t,
                with_mutual_guilds: n,
                with_mutual_friends: i,
                with_mutual_friends_count: r && (null == i || !i),
                guild_id: a,
                connections_role_id: u,
                join_request_id: c,
            },
            signal: d,
            rejectWithError: !0,
        });
        _?.(l.body, a),
            o.h.dispatch({ type: "USER_UPDATE", user: l.body.user }),
            o.h.dispatch({ type: "USER_PROFILE_FETCH_SUCCESS", userProfile: l.body, fetchStartedAt: h }),
            null != a &&
                null != l.body.guild_member &&
                o.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildId: a, guildMember: l.body.guild_member });
    } catch (t) {
        throw (
            (null != t && t?.body != null && p.warn(`fetchProfile error: ${t.body.code} - ${t.body.message}`),
            o.h.dispatch({
                type: "USER_PROFILE_FETCH_FAILURE",
                apiError: new l.LG(t),
                fetchStartedAt: h,
                userId: e,
                guildId: a,
            }),
            t)
        );
    }
}
async function T(e, t) {
    o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_START", userId: e });
    try {
        let n = await s.Bo.get({ url: f.Rsh.USER_RELATIONSHIPS(e), oldFormErrors: !0, signal: t, rejectWithError: !1 });
        o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: e, mutualFriends: n.body });
    } catch (t) {
        throw (
            (t?.body != null && p.warn(`fetchMutualFriends error: ${t.body.code} - ${t.body.message}`),
            o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_FAILURE", userId: e }),
            t)
        );
    }
}
