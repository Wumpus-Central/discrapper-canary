"use strict";
n.d(t, {
    Du: () => I,
    GR: () => A,
    Ld: () => m,
    Li: () => h,
    VE: () => f,
    VT: () => T,
    W1: () => g,
    XC: () => N,
    v4: () => S,
    vx: () => E,
    xk: () => _,
    xr: () => p,
});
var i = n(64700),
    r = n(702841),
    a = n(287809),
    s = n(695515),
    l = n(923531),
    o = n(438732),
    d = n(500470),
    c = n(191627);
function u(e) {
    let t = (0, r.bG)([s.A], () => s.A.getLinkedUsers());
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
function _(e) {
    let t = u(e);
    return (0, r.yK)([a.default], () => t.map((e) => a.default.getUser(e))).filter((e) => null != e);
}
function E() {
    return u(c.Ef.ACTIVE);
}
function A() {
    return _(c.Ef.ACTIVE);
}
function h() {
    return E().length > 0;
}
function I() {
    let e = (0, r.bG)([s.A], () => s.A.getLinkedUsers());
    return i.useMemo(
        () => Object.values(e).some((e) => null != e && e.link_status === c.Ef.ACTIVE && e.link_type === c.QM.PARENT),
        [e],
    );
}
function f() {
    let e = (0, r.bG)([s.A], () => s.A.getLinkCode()),
        t = (0, r.bG)([a.default], () => a.default.getCurrentUser());
    return null == e || null == t ? null : (0, c.jZ)(t.id, e);
}
function p() {
    let e = (0, o.A)(),
        t = E(),
        n = e ? c.Y7 : c.kp;
    return t.length >= n;
}
function T() {
    let e = (0, r.bG)([a.default], () => a.default.getCurrentUser()),
        t = (0, r.bG)([s.A], () => s.A.getLinkedUsers());
    return null == e
        ? 0
        : Object.values(t).filter((t) => null != t && t.link_status === c.Ef.PENDING && e.id !== t.requestor_id).length;
}
function m(e) {
    let t = (0, r.bG)([s.A], () => s.A.getLinkedUsers());
    return null != e && (t[e]?.teen_requires_parental_consent ?? !1);
}
function g() {
    return E().length;
}
function S(e) {
    let t = (0, d.k)(),
        n = (0, r.bG)([s.A], () => (null == t ? null : s.A.getRangeStartTimestamp()));
    return null == n ? null : (0, l.i6)(new Date(n).getTime(), () => e, 7);
}
function N(e, t) {
    let n = (0, r.bG)([s.A], () => s.A.getLinkTimestamp(e));
    return null != n ? (0, l.mV)(Date.parse(n), t === c.Ef.PENDING ? c.lu : c.dI) : null;
}
