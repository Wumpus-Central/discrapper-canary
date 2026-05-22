"use strict";
n.d(t, { Q9: () => m, eO: () => T, lA: () => g, nj: () => I, q0: () => S, rQ: () => E, wz: () => A }), n(938796);
var i = n(284009),
    r = n.n(i),
    s = n(239947),
    a = n(636537),
    o = n(228366),
    l = n(913122),
    u = n(626584),
    c = n(889227),
    d = n(287809),
    _ = n(499785),
    f = n(652215),
    h = n(901123);
let p = new u.A("UserProfileModalActionCreators");
function E() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        { withAnalyticsToken: t = !1 } = e;
    return a.Bo.get({ url: f.Rsh.ME, query: { with_analytics_token: t }, oldFormErrors: !0, rejectWithError: !1 }).then(
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
    let n = d.default.getCurrentUser();
    r()(null != n, "setFlag: user cannot be undefined");
    let i = t ? n.flags | e : n.flags & ~e;
    return a.Bo.patch({ url: f.Rsh.ME, oldFormErrors: !0, body: { flags: i }, rejectWithError: !1 });
}
function A(e) {
    let t = d.default.getUser(e);
    return null != t
        ? Promise.resolve(t)
        : a.Bo.get({ url: f.Rsh.USER(e), oldFormErrors: !0, rejectWithError: !1 }).then(
              (t) => (o.h.dispatch({ type: "USER_UPDATE", user: t.body }), d.default.getUser(e)),
          );
}
function I(e) {
    return o.h.dispatch({ type: "USER_UPDATE", user: e }), d.default.getUser(e.id);
}
async function T(e) {
    let {
            type: t,
            withMutualGuilds: n,
            withMutualFriendsCount: i,
            withMutualFriends: r,
            guildId: s,
            connectionsRoleId: u,
            joinRequestId: c,
            abortSignal: d,
        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        _ = arguments.length > 2 ? arguments[2] : void 0,
        E = Date.now();
    o.h.dispatch({ type: "USER_PROFILE_FETCH_START", userId: e, guildId: s, withMutualFriends: r });
    try {
        let l = null == s || h.Cr.includes(s) ? void 0 : s,
            p = await a.Bo.get({
                url: f.Rsh.USER_PROFILE(e),
                query: {
                    type: t,
                    with_mutual_guilds: n,
                    with_mutual_friends: r,
                    with_mutual_friends_count: i && (null == r || !r),
                    guild_id: l,
                    connections_role_id: u,
                    join_request_id: c,
                },
                signal: d,
                rejectWithError: !0,
            });
        _?.(p.body, s),
            o.h.dispatch({ type: "USER_UPDATE", user: p.body.user }),
            o.h.dispatch({ type: "USER_PROFILE_FETCH_SUCCESS", userProfile: p.body, fetchStartedAt: E, guildId: s }),
            null != s &&
                null != p.body.guild_member &&
                o.h.dispatch({ type: "GUILD_MEMBER_PROFILE_UPDATE", guildId: s, guildMember: p.body.guild_member });
    } catch (t) {
        throw (
            (null != t && t?.body != null && p.warn(`fetchProfile error: ${t.body.code} - ${t.body.message}`),
            o.h.dispatch({
                type: "USER_PROFILE_FETCH_FAILURE",
                apiError: new l.LG(t),
                fetchStartedAt: E,
                userId: e,
                guildId: s,
            }),
            t)
        );
    }
}
async function S(e, t) {
    o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_START", userId: e });
    try {
        let n = await a.Bo.get({ url: f.Rsh.USER_RELATIONSHIPS(e), oldFormErrors: !0, signal: t, rejectWithError: !1 });
        o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_SUCCESS", userId: e, mutualFriends: n.body });
    } catch (t) {
        throw (
            (t?.body != null && p.warn(`fetchMutualFriends error: ${t.body.code} - ${t.body.message}`),
            o.h.dispatch({ type: "MUTUAL_FRIENDS_FETCH_FAILURE", userId: e }),
            t)
        );
    }
}
