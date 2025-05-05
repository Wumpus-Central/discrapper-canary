n.d(t, { Z: () => u }), n(388685), n(467055);
var r = n(73800),
    i = n(392711),
    a = n(442837),
    o = n(699682),
    s = n(752048),
    l = n(771845),
    c = n(621853);
function u(e) {
    let [t, n, u, d, f] = (0, a.Wu)([c.Z], () => [c.Z.getMutualFriendsCount(e.id), c.Z.getMutualFriends(e.id), c.Z.getMutualGuilds(e.id), c.Z.isFetchingProfile(e.id), c.Z.isFetchingFriends(e.id)]),
        _ = (0, a.e7)([s.Z], () => s.Z.getUserAffinitiesMap()),
        p = (0, a.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
        h = (0, r.useMemo)(
            () =>
                null == n || n.length < 2
                    ? n
                    : (0, i.sortBy)(n, (e) => {
                          var t, n;
                          let { user: r } = e;
                          return -((null != (n = null == (t = _.get(r.id)) ? void 0 : t.communicationProbability) ? n : -1) * 1);
                      }),
            [n, _]
        ),
        m = (0, r.useMemo)(() => {
            if (null == u || u.length < 2) return u;
            let e = Object.fromEntries(p.map((e, t) => [e, t]));
            return (0, i.sortBy)(u, (t) => {
                var n;
                let { guild: r } = t;
                return null != (n = e[r.id]) ? n : p.length;
            });
        }, [u, p]),
        g = (0, o.Z)(t),
        E = (0, o.Z)(h),
        b = (0, o.Z)(m);
    return {
        mutualFriendsCount: null != t ? t : g,
        mutualFriends: null != h ? h : E,
        mutualGuilds: null != m ? m : b,
        isFetching: d,
        isFetchingFriends: f
    };
}
