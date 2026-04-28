i.d(t, { A: () => c });
var l = i(64700),
    n = i(735438),
    s = i(17928),
    u = i(919796),
    r = i(427358),
    d = i(711014),
    a = i(841595);
function c(e) {
    let [t, i, c, o, A] = (0, s.yK)([a.A], () => [
            a.A.getMutualFriendsCount(e.id),
            a.A.getMutualFriends(e.id),
            a.A.getMutualGuilds(e.id),
            a.A.isFetchingProfile(e.id),
            a.A.isFetchingFriends(e.id),
        ]),
        h = (0, s.bG)([r.A], () => r.A.getUserAffinitiesMap()),
        m = (0, s.bG)([d.Ay], () => d.Ay.getFlattenedGuildIds()),
        g = (0, l.useMemo)(
            () =>
                null == i || i.length < 2
                    ? i
                    : (0, n.sortBy)(i, (e) => {
                          let { user: t } = e;
                          return -((h.get(t.id)?.communicationProbability ?? -1) * 1);
                      }),
            [i, h],
        ),
        x = (0, l.useMemo)(() => {
            if (null == c || c.length < 2) return c;
            let e = Object.fromEntries(m.map((e, t) => [e, t]));
            return (0, n.sortBy)(c, (t) => {
                let { guild: i } = t;
                return e[i.id] ?? m.length;
            });
        }, [c, m]),
        b = (0, u.A)(t),
        f = (0, u.A)(g),
        p = (0, u.A)(x);
    return {
        mutualFriendsCount: t ?? b,
        mutualFriends: g ?? f,
        mutualGuilds: x ?? p,
        isFetching: o,
        isFetchingFriends: A,
    };
}
