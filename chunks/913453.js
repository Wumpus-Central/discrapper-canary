i.d(t, { A: () => c });
var l = i(64700),
    n = i(735438),
    s = i(311907),
    a = i(919796),
    d = i(21119),
    r = i(711014),
    o = i(622543);
function c(e) {
    let [t, i, c, u, A] = (0, s.yK)([o.A], () => [
            o.A.getMutualFriendsCount(e.id),
            o.A.getMutualFriends(e.id),
            o.A.getMutualGuilds(e.id),
            o.A.isFetchingProfile(e.id),
            o.A.isFetchingFriends(e.id),
        ]),
        h = (0, s.bG)([d.A], () => d.A.getUserAffinitiesMap()),
        g = (0, s.bG)([r.Ay], () => r.Ay.getFlattenedGuildIds()),
        x = (0, l.useMemo)(
            () =>
                null == i || i.length < 2
                    ? i
                    : (0, n.sortBy)(i, (e) => {
                          let { user: t } = e;
                          return -((h.get(t.id)?.communicationProbability ?? -1) * 1);
                      }),
            [i, h],
        ),
        m = (0, l.useMemo)(() => {
            if (null == c || c.length < 2) return c;
            let e = Object.fromEntries(g.map((e, t) => [e, t]));
            return (0, n.sortBy)(c, (t) => {
                let { guild: i } = t;
                return e[i.id] ?? g.length;
            });
        }, [c, g]),
        C = (0, a.A)(t),
        _ = (0, a.A)(x),
        p = (0, a.A)(m);
    return {
        mutualFriendsCount: t ?? C,
        mutualFriends: x ?? _,
        mutualGuilds: m ?? p,
        isFetching: u,
        isFetchingFriends: A,
    };
}
