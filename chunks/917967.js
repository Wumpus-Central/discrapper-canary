n.d(t, { Z: () => u });
var r = n(442837),
    i = n(594190),
    l = n(321947),
    a = n(430824),
    o = n(164670),
    c = n(699955),
    s = n(582113);
function u(e) {
    var t;
    let { location: n, wishlist: u } = e,
        d = (0, c.cZ)({ location: n }),
        f = (0, r.e7)([a.Z], () => a.Z.getGuild((0, o.ac)())),
        g = null != (t = null == u ? void 0 : u.items.some((e) => (0, l.F)(e))) && t,
        p = (0, r.e7)([i.ZP], () => i.ZP.getGamesSeen(!1, !1).some((e) => null != e.id && s.RI.has(e.id)));
    return d && (null != f || p || g);
}
