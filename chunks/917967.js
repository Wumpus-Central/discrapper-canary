r.d(t, { Z: () => u });
var n = r(442837),
    i = r(594190),
    l = r(321947),
    o = r(430824),
    s = r(164670),
    c = r(699955),
    a = r(582113);
function u(e) {
    var t;
    let { location: r, wishlist: u } = e,
        d = (0, c.cZ)({ location: r }),
        f = (0, n.e7)([o.Z], () => o.Z.getGuild((0, s.ac)())),
        m = null != (t = null == u ? void 0 : u.items.some((e) => (0, l.F)(e))) && t,
        h = (0, n.e7)([i.ZP], () => i.ZP.getGamesSeen(!1, !1).some((e) => null != e.id && a.RI.has(e.id)));
    return d && (null != f || h || m);
}
