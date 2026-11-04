var i = n(582128),
    r = n(435558),
    u = n(819169),
    l = n(855986),
    a = n(812020),
    s = n(711014),
    o = n(851767);
n.d(
    t,
    {},
    {
        A: function (e) {
            let [t, n, d, c, f] = (0, l.yK)([o.A], () => [
                    o.A.getMutualFriendsCount(e.id),
                    o.A.getMutualFriends(e.id),
                    o.A.getMutualGuilds(e.id),
                    o.A.isFetchingProfile(e.id),
                    o.A.isFetchingFriends(e.id),
                ]),
                g = (0, l.bG)([a.A], () => a.A.getUserAffinitiesMap()),
                A = (0, l.bG)([s.Ay], () => s.Ay.getFlattenedGuildIds()),
                m = (0, i.useMemo)(
                    () =>
                        null == n || n.length < 2
                            ? n
                            : (0, r.sortBy)(n, (e) => {
                                  let { user: t } = e;
                                  return -((g.get(t.id)?.communicationProbability ?? -1) * 1);
                              }),
                    [n, g],
                ),
                h = (0, i.useMemo)(() => {
                    if (null == d || d.length < 2) return d;
                    let e = Object.fromEntries(A.map((e, t) => [e, t]));
                    return (0, r.sortBy)(d, (t) => {
                        let { guild: n } = t;
                        return e[n.id] ?? A.length;
                    });
                }, [d, A]),
                b = (0, u.A)(t),
                p = (0, u.A)(m),
                y = (0, u.A)(h);
            return {
                mutualFriendsCount: t ?? b,
                mutualFriends: m ?? p,
                mutualGuilds: h ?? y,
                isFetching: c,
                isFetchingFriends: f,
            };
        },
    },
);
