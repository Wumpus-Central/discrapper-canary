n.d(t, {
    Du: () => E,
    GR: () => A,
    Li: () => g,
    VE: () => h,
    VT: () => C,
    W1: () => x,
    XC: () => I,
    v4: () => T,
    vx: () => m,
    xk: () => _,
    xr: () => p,
});
var i = n(64700),
    s = n(417597),
    r = n(287809),
    a = n(695515),
    l = n(923531),
    o = n(438732),
    c = n(500470),
    d = n(191627);
function u(e) {
    let t = (0, s.bG)([a.A], () => a.A.getLinkedUsers());
    return i.useMemo(
        () =>
            Object.values(t)
                .filter((t) => null != t && t.link_status === e)
                .sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime())
                .map((e) => e.user_id)
                .filter((e) => null != e),
        [t, e],
    );
}
let _ = (e) => {
    let t = u(e);
    return (0, s.yK)([r.default], () => t.map((e) => r.default.getUser(e))).filter((e) => null != e);
};
function m() {
    return u(d.Ef.ACTIVE);
}
function A() {
    return _(d.Ef.ACTIVE);
}
let g = () => m().length > 0;
function E() {
    let e = (0, s.bG)([a.A], () => a.A.getLinkedUsers());
    return i.useMemo(
        () => Object.values(e).some((e) => null != e && e.link_status === d.Ef.ACTIVE && e.link_type === d.QM.PARENT),
        [e],
    );
}
function h() {
    let e = (0, s.bG)([a.A], () => a.A.getLinkCode()),
        t = (0, s.bG)([r.default], () => r.default.getCurrentUser());
    return null == e || null == t ? null : (0, d.jZ)(t.id, e);
}
function p() {
    let e = (0, o.A)(),
        t = m(),
        n = e ? d.Y7 : d.kp;
    return t.length >= n;
}
function C() {
    let e = (0, s.bG)([r.default], () => r.default.getCurrentUser()),
        t = (0, s.bG)([a.A], () => a.A.getLinkedUsers());
    return null == e
        ? 0
        : Object.values(t).filter((t) => null != t && t.link_status === d.Ef.PENDING && e.id !== t.requestor_id).length;
}
function x() {
    return m().length;
}
function T(e) {
    let t = (0, c.k)(),
        n = (0, s.bG)([a.A], () => (null == t ? null : a.A.getRangeStartTimestamp()));
    return null == n ? null : (0, l.i6)(new Date(n).getTime(), () => e, 7);
}
function I(e, t) {
    let n = (0, s.bG)([a.A], () => a.A.getLinkTimestamp(e));
    return null != n ? (0, l.mV)(Date.parse(n), t === d.Ef.PENDING ? d.lu : d.dI) : null;
}
