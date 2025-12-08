r.d(t, { Z: () => a });
var n = r(442837),
    i = r(594190),
    l = r(321947),
    o = r(430824),
    s = r(164670),
    c = r(699955),
    u = r(582113);
function a(e) {
    var t;
    let { location: r, wishlist: a } = e,
        d = (0, c.cZ)({ location: r }),
        f = (0, n.e7)([o.Z], () => o.Z.getGuild((0, s.ac)())),
        m = null != (t = null == a ? void 0 : a.items.some((e) => (0, l.F)(e))) && t,
        O = (0, n.e7)([i.ZP], () => i.ZP.getGamesSeen(!1, !1).some((e) => null != e.id && u.RI.has(e.id)));
    return d && (null != f || O || m);
}
