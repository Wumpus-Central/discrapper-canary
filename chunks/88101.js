t.d(n, { P: () => c });
var i = t(442837),
    l = t(385956),
    a = t(15701),
    r = t(594174),
    o = t(359119),
    u = t(897769),
    d = t(981312),
    s = t(403485);
function c(e) {
    let n = (0, i.e7)([r.default], () => r.default.getCurrentUser()),
        t = (0, a.G)(e),
        c = (0, l.v)(e),
        f = (0, u.S)(e, o.pj.STRANGER_DANGER),
        v = (0, d.U)(),
        p = (null == n ? void 0 : n.isStaff()) !== !0,
        h = (0, s.h)(e).length > 0;
    if ((v || !p) && !t && !c && !h) return f;
}
