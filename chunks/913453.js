"use strict";
n.d(t, { A: () => c });
var r = n(64700),
    i = n(735438),
    a = n(311907),
    s = n(919796),
    o = n(21119),
    l = n(711014),
    u = n(622543);
function c(e) {
    let [t, n, c, d, _] = (0, a.yK)([u.A], () => [
            u.A.getMutualFriendsCount(e.id),
            u.A.getMutualFriends(e.id),
            u.A.getMutualGuilds(e.id),
            u.A.isFetchingProfile(e.id),
            u.A.isFetchingFriends(e.id),
        ]),
        f = (0, a.bG)([o.A], () => o.A.getUserAffinitiesMap()),
        p = (0, a.bG)([l.Ay], () => l.Ay.getFlattenedGuildIds()),
        h = (0, r.useMemo)(
            () =>
                null == n || n.length < 2
                    ? n
                    : (0, i.sortBy)(n, (e) => {
                          let { user: t } = e;
                          return -((f.get(t.id)?.communicationProbability ?? -1) * 1);
                      }),
            [n, f],
        ),
        m = (0, r.useMemo)(() => {
            if (null == c || c.length < 2) return c;
            let e = Object.fromEntries(p.map((e, t) => [e, t]));
            return (0, i.sortBy)(c, (t) => {
                let { guild: n } = t;
                return e[n.id] ?? p.length;
            });
        }, [c, p]),
        g = (0, s.A)(t),
        E = (0, s.A)(h),
        A = (0, s.A)(m);
    return {
        mutualFriendsCount: t ?? g,
        mutualFriends: h ?? E,
        mutualGuilds: m ?? A,
        isFetching: d,
        isFetchingFriends: _,
    };
}
