n.d(e, {
    Du: () => p,
    GR: () => g,
    Ld: () => E,
    Li: () => A,
    VE: () => m,
    VT: () => _,
    W1: () => k,
    XC: () => C,
    v4: () => G,
    vx: () => y,
    xk: () => c,
    xr: () => T,
});
var r = n(582128),
    l = n(702841),
    u = n(287809),
    i = n(695515),
    a = n(923531),
    o = n(438732),
    s = n(500470),
    f = n(191627);
function d(t) {
    let e = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
    return r.useMemo(
        () =>
            Object.values(e)
                .filter((e) => null != e && e.link_status === t)
                .sort((t, e) => new Date(t.updated_at).getTime() - new Date(e.updated_at).getTime())
                .map((t) => t.user_id)
                .filter((t) => null != t),
        [e, t],
    );
}
function c(t) {
    let e = d(t);
    return (0, l.yK)([u.default], () => e.map((t) => u.default.getUser(t))).filter((t) => null != t);
}
function y() {
    return d(f.Ef.ACTIVE);
}
function g() {
    return c(f.Ef.ACTIVE);
}
function A() {
    return y().length > 0;
}
function p() {
    let t = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
    return r.useMemo(
        () => Object.values(t).some((t) => null != t && t.link_status === f.Ef.ACTIVE && t.link_type === f.QM.PARENT),
        [t],
    );
}
function m() {
    let t = (0, l.bG)([i.A], () => i.A.getLinkCode()),
        e = (0, l.bG)([u.default], () => u.default.getCurrentUser());
    return null == t || null == e ? null : (0, f.jZ)(e.id, t);
}
function T() {
    let t = (0, o.A)(),
        e = y(),
        n = t ? f.Y7 : f.kp;
    return e.length >= n;
}
function _() {
    let t = (0, l.bG)([u.default], () => u.default.getCurrentUser()),
        e = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
    return null == t
        ? 0
        : Object.values(e).filter((e) => null != e && e.link_status === f.Ef.PENDING && t.id !== e.requestor_id).length;
}
function E(t) {
    let e = (0, l.bG)([i.A], () => i.A.getLinkedUsers());
    return null != t && (e[t]?.teen_requires_parental_consent ?? !1);
}
function k() {
    return y().length;
}
function G(t) {
    let e = (0, s.k)(),
        n = (0, l.bG)([i.A], () => (null == e ? null : i.A.getRangeStartTimestamp()));
    return null == n ? null : (0, a.i6)(new Date(n).getTime(), () => t, 7);
}
function C(t, e) {
    let n = (0, l.bG)([i.A], () => i.A.getLinkTimestamp(t));
    return null != n ? (0, a.mV)(Date.parse(n), e === f.Ef.PENDING ? f.lu : f.dI) : null;
}
