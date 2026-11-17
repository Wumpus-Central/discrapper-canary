n.d(t, { A: () => E });
var i = n(803306),
    r = n(654107),
    a = n(969935),
    s = n(370480),
    l = n(734057),
    o = n(696451),
    d = n(851767),
    c = n(253932),
    u = n(486020);
function _(e, t) {
    let n;
    if ("u" < typeof Image) return;
    let i = e.user?.id;
    null == i ||
        "" === i ||
        (null != t &&
            e.guild_member_profile?.banner != null &&
            (n = (0, u.ns)({
                id: i,
                guildId: t,
                banner: e.guild_member_profile.banner,
                canAnimate: c.kt.getSetting(),
                size: 600,
            })),
        e?.user_profile?.banner != null &&
            (n = (0, u.z)({ id: i, banner: e.user_profile.banner, canAnimate: c.kt.getSetting(), size: 600 })),
        null == n || (new Image().src = n));
}
function E(e, t) {
    let {
        type: n,
        withMutualGuilds: c = !1,
        withMutualFriendsCount: u = !1,
        withMutualFriends: E = !1,
        waitForRefetch: A = !0,
        guildId: f,
        channelId: h,
        joinRequestId: I,
        abortSignal: p,
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
    if ("" === e || d.A.isFetchingProfile(e, f)) return Promise.resolve();
    let m = d.A.getUserProfile(e),
        g = d.A.getGuildMemberProfile(e, f),
        T = null != f ? g : m,
        S = Date.now() - (T?.fetchEndedAt ?? 0) >= 6e4;
    if ((T?.fetchError?.status === 404 || T?.fetchError?.status === 429) && !S) return Promise.resolve();
    let N = d.A.getMutualGuilds(e),
        C = d.A.getMutualFriends(e),
        O = d.A.getMutualFriendsCount(e),
        R = null == f ? null == m : null == g,
        L = !R && (S || (null == N && c) || (null == C && E) || (null == O && u));
    if (!R && !L) return Promise.resolve();
    let y = null != f ? g?.profileEffect : m?.profileEffect;
    null != y && (0, a.RE)(y.skuId);
    let D = null != f ? g?.profileFrame : m?.profileFrame;
    (null != D && (0, a.RE)(D.skuId), null != t && (0, r.l0)(t));
    let b = {
            type: n,
            withMutualGuilds: c,
            withMutualFriends: E,
            withMutualFriendsCount: u,
            guildId: f,
            joinRequestId: I,
            abortSignal: p,
            connectionsRoleId:
                null == f ? void 0 : (0, s._g)({ guildMember: o.Ay.getMember(f, e), channel: l.A.getChannel(h) })?.id,
        },
        v = (0, i.eO)(e, b, _);
    return L && !A ? Promise.resolve() : v;
}
