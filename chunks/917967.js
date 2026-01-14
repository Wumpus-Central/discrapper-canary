n.d(t, { Z: () => d });
var r = n(473749),
    i = n(442837),
    l = n(321947),
    a = n(430824),
    o = n(164670),
    c = n(699955),
    s = n(812797),
    u = n(582113);
function d(e) {
    var t;
    let { location: n, wishlist: d } = e,
        f = (0, c.cZ)({ location: n }),
        g = r.useMemo(() => ((null == d ? void 0 : d.userId) != null ? [d.userId] : []), [d]),
        p = (0, i.e7)([a.Z], () => a.Z.getGuild((0, o.ac)())),
        m = null != (t = null == d ? void 0 : d.items.some((e) => (0, l.F)(e))) && t,
        b = (0, s.VO)({
            gameIds: u.RI,
            userIds: g,
        }),
        y = (0, s.zc)({
            gameIds: u.RI,
            userIds: g,
        }),
        h = (0, s.MM)({
            userIds: g,
            guildIdsWithGameStores: u.$Y,
        }),
        j = (0, s.fR)({ gameIds: u.RI }),
        O = (0, s.Bz)({ gameIds: u.RI });
    return f && (null != p || O || m || b || y || h || j);
}
