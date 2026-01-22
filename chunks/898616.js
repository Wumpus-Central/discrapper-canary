n.d(t, { A: () => d });
var r = n(64700),
    l = n(311907),
    i = n(721932),
    a = n(71393),
    s = n(871123),
    o = n(916023),
    c = n(501838),
    u = n(188275);
function d(e) {
    var t;
    let { location: n, wishlist: d } = e,
        f = (0, o.kt)({ location: n }),
        p = r.useMemo(() => ((null == d ? void 0 : d.userId) != null ? [d.userId] : []), [d]),
        b = (0, l.bG)([a.A], () => a.A.getGuild((0, s.zf)())),
        g = null != (t = null == d ? void 0 : d.items.some((e) => (0, i.$)(e))) && t,
        m = (0, c.gT)({
            gameIds: u.sQ,
            userIds: p,
        }),
        y = (0, c.K6)({
            gameIds: u.sQ,
            userIds: p,
        }),
        O = (0, c.l1)({
            userIds: p,
            guildIdsWithGameStores: u.tC,
        }),
        j = (0, c.hJ)({ gameIds: u.sQ }),
        x = (0, c.ok)({ gameIds: u.sQ });
    return f && (null != b || x || g || m || y || O || j);
}
