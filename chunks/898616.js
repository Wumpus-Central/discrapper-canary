n.d(t, { A: () => d });
var i = n(64700),
    l = n(311907),
    a = n(721932),
    s = n(71393),
    r = n(871123),
    o = n(501838),
    c = n(188275);
function d(e) {
    let { wishlist: t, profileOwner: n, currentUser: d } = e,
        u = n.id === d?.id,
        g = i.useMemo(() => (t?.userId != null ? [t.userId] : []), [t]),
        m = (0, l.bG)([s.A], () => s.A.getGuild((0, r.zf)())),
        x = t?.items.some((e) => (0, a.$)(e)) ?? !1,
        f = (0, o.gT)({ gameIds: c.sQ, userIds: g }),
        p = (0, o.K6)({ gameIds: c.sQ, userIds: g }),
        h = (0, o.l1)(g),
        _ = (0, o.hJ)({ gameIds: c.sQ }),
        A = (0, o.ok)({ gameIds: c.sQ });
    return x || f || p || h || (u && (null != m || _ || A));
}
