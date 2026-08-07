i.d(e, { A: () => A });
var u = i(582128),
    n = i(435558),
    r = i(819169),
    s = i(17928),
    l = i(427358),
    d = i(711014),
    a = i(321191);
function A(t) {
    let [e, i, A, o, c] = (0, s.yK)([a.A], () => [
            a.A.getMutualFriendsCount(t.id),
            a.A.getMutualFriends(t.id),
            a.A.getMutualGuilds(t.id),
            a.A.isFetchingProfile(t.id),
            a.A.isFetchingFriends(t.id),
        ]),
        g = (0, s.bG)([l.A], () => l.A.getUserAffinitiesMap()),
        h = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        m = (0, u.useMemo)(
            () =>
                null == i || i.length < 2
                    ? i
                    : (0, n.sortBy)(i, (t) => {
                          let { user: e } = t;
                          return -((g.get(e.id)?.communicationProbability ?? -1) * 1);
                      }),
            [i, g],
        ),
        p = (0, u.useMemo)(() => {
            if (null == A || A.length < 2) return A;
            let t = Object.fromEntries(h.map((t, e) => [t, e]));
            return (0, n.sortBy)(A, (e) => {
                let { guild: i } = e;
                return t[i.id] ?? h.length;
            });
        }, [A, h]),
        F = (0, r.A)(e),
        b = (0, r.A)(m),
        f = (0, r.A)(p);
    return {
        mutualFriendsCount: e ?? F,
        mutualFriends: m ?? b,
        mutualGuilds: p ?? f,
        isFetching: o,
        isFetchingFriends: c,
    };
}
