n.d(t, { A: () => u });
var i = n(64700),
    l = n(311907),
    a = n(721932),
    s = n(71393),
    r = n(871123),
    o = n(916023),
    c = n(501838),
    d = n(188275);
function u(e) {
    let { location: t, wishlist: n, profileOwner: u, currentUser: g } = e,
        m = (0, o.kt)({ location: t }),
        x = u.id === g?.id,
        f = i.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
        p = (0, l.bG)([s.A], () => s.A.getGuild((0, r.zf)())),
        h = n?.items.some((e) => (0, a.$)(e)) ?? !1,
        _ = (0, c.gT)({ gameIds: d.sQ, userIds: f }),
        A = (0, c.K6)({ gameIds: d.sQ, userIds: f }),
        I = (0, c.l1)(f),
        j = (0, c.hJ)({ gameIds: d.sQ }),
        v = (0, c.ok)({ gameIds: d.sQ });
    return m && (h || _ || A || I || (x && (null != p || j || v)));
}
