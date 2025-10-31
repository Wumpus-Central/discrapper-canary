n.d(t, { P: () => d });
var r = n(442837),
    i = n(385956),
    l = n(15701),
    a = n(594174),
    o = n(359119),
    s = n(897769),
    c = n(981312),
    u = n(403485);
function d(e) {
    let t = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, l.G)(e),
        d = (0, i.v)(e),
        p = (0, s.S)(e, o.pj.STRANGER_DANGER),
        f = (0, c.U)(),
        h = (null == t ? void 0 : t.isStaff()) !== !0,
        m = (0, u.h)(e).length > 0;
    if (!(!f && h) && !n && !d && !m) return p;
}
