"use strict";
n.d(t, { A: () => d });
var a = n(64700),
    r = n(735438),
    i = n(17928),
    l = n(919796),
    s = n(427358),
    o = n(711014),
    c = n(841595);
function d(e) {
    let [t, n, d, u, _] = (0, i.yK)([c.A], () => [
            c.A.getMutualFriendsCount(e.id),
            c.A.getMutualFriends(e.id),
            c.A.getMutualGuilds(e.id),
            c.A.isFetchingProfile(e.id),
            c.A.isFetchingFriends(e.id),
        ]),
        p = (0, i.bG)([s.A], () => s.A.getUserAffinitiesMap()),
        m = (0, i.bG)([o.Ay], () => o.Ay.getFlattenedGuildIds()),
        h = (0, a.useMemo)(
            () =>
                null == n || n.length < 2
                    ? n
                    : (0, r.sortBy)(n, (e) => {
                          let { user: t } = e;
                          return -((p.get(t.id)?.communicationProbability ?? -1) * 1);
                      }),
            [n, p],
        ),
        f = (0, a.useMemo)(() => {
            if (null == d || d.length < 2) return d;
            let e = Object.fromEntries(m.map((e, t) => [e, t]));
            return (0, r.sortBy)(d, (t) => {
                let { guild: n } = t;
                return e[n.id] ?? m.length;
            });
        }, [d, m]),
        g = (0, l.A)(t),
        b = (0, l.A)(h),
        v = (0, l.A)(f);
    return {
        mutualFriendsCount: t ?? g,
        mutualFriends: h ?? b,
        mutualGuilds: f ?? v,
        isFetching: u,
        isFetchingFriends: _,
    };
}
