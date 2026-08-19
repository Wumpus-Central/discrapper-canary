u.d(t, { A: () => o });
var i = u(582128),
    n = u(435558),
    r = u(819169),
    s = u(17928),
    l = u(427358),
    d = u(711014),
    a = u(321191);
function o(e) {
    let [t, u, o, A, c] = (0, s.yK)([a.A], () => [
            a.A.getMutualFriendsCount(e.id),
            a.A.getMutualFriends(e.id),
            a.A.getMutualGuilds(e.id),
            a.A.isFetchingProfile(e.id),
            a.A.isFetchingFriends(e.id),
        ]),
        g = (0, s.bG)([l.A], () => l.A.getUserAffinitiesMap()),
        f = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        h = (0, i.useMemo)(
            () =>
                null == u || u.length < 2
                    ? u
                    : (0, n.sortBy)(u, (e) => {
                          let { user: t } = e;
                          return -((g.get(t.id)?.communicationProbability ?? -1) * 1);
                      }),
            [u, g],
        ),
        m = (0, i.useMemo)(() => {
            if (null == o || o.length < 2) return o;
            let e = Object.fromEntries(f.map((e, t) => [e, t]));
            return (0, n.sortBy)(o, (t) => {
                let { guild: u } = t;
                return e[u.id] ?? f.length;
            });
        }, [o, f]),
        p = (0, r.A)(t),
        b = (0, r.A)(h),
        y = (0, r.A)(m);
    return {
        mutualFriendsCount: t ?? p,
        mutualFriends: h ?? b,
        mutualGuilds: m ?? y,
        isFetching: A,
        isFetchingFriends: c,
    };
}
