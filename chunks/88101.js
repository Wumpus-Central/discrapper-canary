n.d(t, { P: () => s });
var r = n(442837),
    i = n(385956),
    l = n(15701),
    o = n(594174),
    a = n(359119),
    u = n(897769),
    d = n(981312),
    c = n(403485);
function s(e) {
    let t = (0, r.e7)([o.default], () => o.default.getCurrentUser()),
        n = (0, l.G)(e),
        s = (0, i.v)(e),
        f = (0, u.S)(e, a.pj.STRANGER_DANGER),
        p = (0, d.U)(),
        v = (null == t ? void 0 : t.isStaff()) !== !0,
        g = (0, c.h)(e).length > 0;
    if (!(!p && v) && !n && !s && !g) return f;
}
