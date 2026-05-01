"use strict";
n.d(t, { A: () => h });
var i = n(228366),
    r = n(803306),
    s = n(654107),
    a = n(859040),
    o = n(370480),
    l = n(734057),
    u = n(696451),
    c = n(841595),
    d = n(885386),
    _ = n(486020);
function f(e, t) {
    let n;
    if ("u" < typeof Image) return;
    let i = e.user?.id;
    null == i ||
        "" === i ||
        (null != t &&
            e.guild_member_profile?.banner != null &&
            (n = (0, _.ns)({
                id: i,
                guildId: t,
                banner: e.guild_member_profile.banner,
                canAnimate: d.kt.getSetting(),
                size: 600,
            })),
        e?.user_profile?.banner != null &&
            (n = (0, _.z)({ id: i, banner: e.user_profile.banner, canAnimate: d.kt.getSetting(), size: 600 })),
        null == n || (new Image().src = n));
}
function h(e, t) {
    let {
        type: n,
        withMutualGuilds: d = !1,
        withMutualFriendsCount: _ = !1,
        withMutualFriends: h = !1,
        dispatchWait: p = !1,
        waitForRefetch: E = !0,
        guildId: m,
        channelId: g,
        joinRequestId: A,
        abortSignal: I,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || c.A.isFetchingProfile(e, m)) return Promise.resolve();
    let T = c.A.getUserProfile(e),
        S = c.A.getGuildMemberProfile(e, m),
        N = null != m ? S : T,
        y = Date.now() - (N?.fetchEndedAt ?? 0) >= 6e4;
    if ((N?.fetchError?.status === 404 || N?.fetchError?.status === 429) && !y) return Promise.resolve();
    let C = c.A.getMutualGuilds(e),
        v = c.A.getMutualFriends(e),
        O = c.A.getMutualFriendsCount(e),
        R = null == C && d,
        b = null == v && h,
        D = null == O && _,
        L = null == m ? null == T : null == S,
        w = !L && (y || R || b || D);
    if (!L && !w) return Promise.resolve();
    let M = null != m ? S?.profileEffect : T?.profileEffect;
    null != M && (0, a.RE)(M.skuId);
    let P = null != m ? S?.profileFrame : T?.profileFrame;
    null != P && (0, a.RE)(P.skuId), null != t && (0, s.l0)(t);
    let x = {
        type: n,
        withMutualGuilds: d,
        withMutualFriends: h,
        withMutualFriendsCount: _,
        guildId: m,
        joinRequestId: A,
        abortSignal: I,
        connectionsRoleId:
            null == m ? void 0 : (0, o._g)({ guildMember: u.Ay.getMember(m, e), channel: l.A.getChannel(g) })?.id,
    };
    if (p) return i.h.wait(() => (0, r.eO)(e, x, f)), Promise.resolve();
    let U = (0, r.eO)(e, x, f);
    return w && !E ? Promise.resolve() : U;
}
