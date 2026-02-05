n.d(t, { A: () => u });
var i = n(64700),
    l = n(311907),
    a = n(721932),
    r = n(71393),
    s = n(871123),
    o = n(916023),
    d = n(501838),
    c = n(188275);
function u(e) {
    let { location: t, wishlist: n } = e,
        u = (0, o.kt)({ location: t }),
        g = i.useMemo(() => (n?.userId != null ? [n.userId] : []), [n]),
        m = (0, l.bG)([r.A], () => r.A.getGuild((0, s.zf)())),
        x = n?.items.some((e) => (0, a.$)(e)) ?? !1,
        f = (0, d.gT)({ gameIds: c.sQ, userIds: g }),
        h = (0, d.K6)({ gameIds: c.sQ, userIds: g }),
        p = (0, d.l1)({ userIds: g, guildIdsWithGameStores: c.tC }),
        _ = (0, d.hJ)({ gameIds: c.sQ }),
        A = (0, d.ok)({ gameIds: c.sQ });
    return u && (null != m || A || x || f || h || p || _);
}
