n.d(t, { Z: () => u }), n(388685), n(467055);
var r = n(473749),
    i = n(392711),
    a = n(442837),
    o = n(699682),
    s = n(752048),
    l = n(771845),
    c = n(621853);
function u(e) {
    let [t, n, u, d, f] = (0, a.Wu)([c.Z], () => [
            c.Z.getMutualFriendsCount(e.id),
            c.Z.getMutualFriends(e.id),
            c.Z.getMutualGuilds(e.id),
            c.Z.isFetchingProfile(e.id),
            c.Z.isFetchingFriends(e.id),
        ]),
        p = (0, a.e7)([s.Z], () => s.Z.getUserAffinitiesMap()),
        _ = (0, a.e7)([l.ZP], () => l.ZP.getFlattenedGuildIds()),
        m = (0, r.useMemo)(
            () =>
                null == n || n.length < 2
                    ? n
                    : (0, i.sortBy)(n, (e) => {
                          var t, n;
                          let { user: r } = e;
                          return -(
                              (null != (n = null == (t = p.get(r.id)) ? void 0 : t.communicationProbability) ? n : -1) *
                              1
                          );
                      }),
            [n, p],
        ),
        h = (0, r.useMemo)(() => {
            if (null == u || u.length < 2) return u;
            let e = Object.fromEntries(_.map((e, t) => [e, t]));
            return (0, i.sortBy)(u, (t) => {
                var n;
                let { guild: r } = t;
                return null != (n = e[r.id]) ? n : _.length;
            });
        }, [u, _]),
        g = (0, o.Z)(t),
        E = (0, o.Z)(m),
        b = (0, o.Z)(h);
    return {
        mutualFriendsCount: null != t ? t : g,
        mutualFriends: null != m ? m : E,
        mutualGuilds: null != h ? h : b,
        isFetching: d,
        isFetchingFriends: f,
    };
}
