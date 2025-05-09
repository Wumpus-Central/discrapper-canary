n.d(t, { P: () => d });
var r = n(442837),
    i = n(385956),
    l = n(15701),
    o = n(594174),
    u = n(359119),
    a = n(897769),
    c = n(981312),
    s = n(403485);
function d(e) {
    let t = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, l.G)(e),
        d = (0, i.v)(e),
        f = (0, a.S)(e, u.pj.STRANGER_DANGER),
        p = (0, c.U)(),
        g = (null == t ? void 0 : t.isStaff()) !== !0,
        O = (0, s.h)(e).length > 0;
    if (!(!p && g) && !n && !d && !O) return f;
}
