e.d(t, {
    P: function () {
        return s;
    }
});
var r = e(442837),
    i = e(385956),
    u = e(15701),
    l = e(594174),
    a = e(359119),
    o = e(897769),
    d = e(981312),
    c = e(403485);
function s(n) {
    let t = (0, r.e7)([l.default], () => l.default.getCurrentUser()),
        e = (0, u.G)(n),
        s = (0, i.v)(n),
        f = (0, o.S)(n, a.pj.STRANGER_DANGER),
        E = (0, d.U)(),
        _ = (null == t ? void 0 : t.isStaff()) !== !0,
        p = (0, c.h)(n).length > 0;
    if ((!!E || !_) && !e && !s && !p) return f;
}
