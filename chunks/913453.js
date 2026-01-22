n.d(t, { A: () => u }), n(896048), n(446912);
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(919796),
    o = n(21119),
    l = n(711014),
    c = n(622543);
function u(e) {
    let [t, n, u, d, f] = (0, a.yK)([c.A], () => [
            c.A.getMutualFriendsCount(e.id),
            c.A.getMutualFriends(e.id),
            c.A.getMutualGuilds(e.id),
            c.A.isFetchingProfile(e.id),
            c.A.isFetchingFriends(e.id),
        ]),
        p = (0, a.bG)([o.A], () => o.A.getUserAffinitiesMap()),
        _ = (0, a.bG)([l.Ay], () => l.Ay.getFlattenedGuildIds()),
        h = (0, r.useMemo)(
            () =>
                null == n || n.length < 2
                    ? n
                    : (0, i.sortBy)(n, (e) => {
                          var t, n;
                          let { user: r } = e;
                          return -(
                              (null != (t = null == (n = p.get(r.id)) ? void 0 : n.communicationProbability) ? t : -1) *
                              1
                          );
                      }),
            [n, p],
        ),
        m = (0, r.useMemo)(() => {
            if (null == u || u.length < 2) return u;
            let e = Object.fromEntries(_.map((e, t) => [e, t]));
            return (0, i.sortBy)(u, (t) => {
                var n;
                let { guild: r } = t;
                return null != (n = e[r.id]) ? n : _.length;
            });
        }, [u, _]),
        g = (0, s.A)(t),
        E = (0, s.A)(h),
        b = (0, s.A)(m);
    return {
        mutualFriendsCount: null != t ? t : g,
        mutualFriends: null != h ? h : E,
        mutualGuilds: null != m ? m : b,
        isFetching: d,
        isFetchingFriends: f,
    };
}
