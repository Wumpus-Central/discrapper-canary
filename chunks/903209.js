n.d(t, { A: () => A });
var i = n(73153),
    r = n(803306),
    a = n(654107),
    s = n(815996),
    l = n(370480),
    o = n(734057),
    d = n(696451),
    c = n(321191),
    u = n(885386),
    _ = n(486020);
function E(e, t) {
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
                canAnimate: u.kt.getSetting(),
                size: 600,
            })),
        e?.user_profile?.banner != null &&
            (n = (0, _.z)({ id: i, banner: e.user_profile.banner, canAnimate: u.kt.getSetting(), size: 600 })),
        null == n || (new Image().src = n));
}
function A(e, t) {
    let {
        type: n,
        withMutualGuilds: u = !1,
        withMutualFriendsCount: _ = !1,
        withMutualFriends: A = !1,
        dispatchWait: h = !1,
        waitForRefetch: f = !0,
        guildId: I,
        channelId: p,
        joinRequestId: T,
        abortSignal: m,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || c.A.isFetchingProfile(e, I)) return Promise.resolve();
    let g = c.A.getUserProfile(e),
        S = c.A.getGuildMemberProfile(e, I),
        N = null != I ? S : g,
        C = Date.now() - (N?.fetchEndedAt ?? 0) >= 6e4;
    if ((N?.fetchError?.status === 404 || N?.fetchError?.status === 429) && !C) return Promise.resolve();
    let O = c.A.getMutualGuilds(e),
        R = c.A.getMutualFriends(e),
        L = c.A.getMutualFriendsCount(e),
        y = null == O && u,
        D = null == R && A,
        v = null == L && _,
        b = null == I ? null == g : null == S,
        M = !b && (C || y || D || v);
    if (!b && !M) return Promise.resolve();
    let P = null != I ? S?.profileEffect : g?.profileEffect;
    null != P && (0, s.RE)(P.skuId);
    let U = null != I ? S?.profileFrame : g?.profileFrame;
    (null != U && (0, s.RE)(U.skuId), null != t && (0, a.l0)(t));
    let w = {
        type: n,
        withMutualGuilds: u,
        withMutualFriends: A,
        withMutualFriendsCount: _,
        guildId: I,
        joinRequestId: T,
        abortSignal: m,
        connectionsRoleId:
            null == I ? void 0 : (0, l._g)({ guildMember: d.Ay.getMember(I, e), channel: o.A.getChannel(p) })?.id,
    };
    if (h) return (i.h.wait(() => (0, r.eO)(e, w, E)), Promise.resolve());
    let G = (0, r.eO)(e, w, E);
    return M && !f ? Promise.resolve() : G;
}
