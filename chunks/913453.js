n.d(t, { A: () => o });
var i = n(582128),
    r = n(435558),
    u = n(819169),
    l = n(17928),
    s = n(427358),
    a = n(711014),
    d = n(321191);
function o(e) {
    let [t, n, o, c, g] = (0, l.yK)([d.A], () => [
            d.A.getMutualFriendsCount(e.id),
            d.A.getMutualFriends(e.id),
            d.A.getMutualGuilds(e.id),
            d.A.isFetchingProfile(e.id),
            d.A.isFetchingFriends(e.id),
        ]),
        f = (0, l.bG)([s.A], () => s.A.getUserAffinitiesMap()),
        A = (0, l.bG)([a.Ay], () => a.Ay.getFlattenedGuildIds()),
        m = (0, i.useMemo)(
            () =>
                null == n || n.length < 2
                    ? n
                    : (0, r.sortBy)(n, (e) => {
                          let { user: t } = e;
                          return -((f.get(t.id)?.communicationProbability ?? -1) * 1);
                      }),
            [n, f],
        ),
        b = (0, i.useMemo)(() => {
            if (null == o || o.length < 2) return o;
            let e = Object.fromEntries(A.map((e, t) => [e, t]));
            return (0, r.sortBy)(o, (t) => {
                let { guild: n } = t;
                return e[n.id] ?? A.length;
            });
        }, [o, A]),
        h = (0, u.A)(t),
        p = (0, u.A)(m),
        y = (0, u.A)(b);
    return {
        mutualFriendsCount: t ?? h,
        mutualFriends: m ?? p,
        mutualGuilds: b ?? y,
        isFetching: c,
        isFetchingFriends: g,
    };
}
