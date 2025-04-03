n.d(t, { P: () => c });
var r = n(442837),
    i = n(385956),
    l = n(15701),
    a = n(594174),
    o = n(359119),
    u = n(897769),
    d = n(981312),
    s = n(403485);
function c(e) {
    let t = (0, r.e7)([a.default], () => a.default.getCurrentUser()),
        n = (0, l.G)(e),
        c = (0, i.v)(e),
        f = (0, u.S)(e, o.pj.STRANGER_DANGER),
        p = (0, d.U)(),
        v = (null == t ? void 0 : t.isStaff()) !== !0,
        h = (0, s.h)(e).length > 0;
    if (!(!p && v) && !n && !c && !h) return f;
}
