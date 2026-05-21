"use strict";
n.d(t, {
    Du: () => E,
    GR: () => h,
    Li: () => p,
    VE: () => m,
    VT: () => A,
    W1: () => I,
    XC: () => S,
    v4: () => T,
    vx: () => f,
    xk: () => _,
    xr: () => g,
});
var i = n(64700),
    r = n(702841),
    s = n(287809),
    a = n(695515),
    o = n(923531),
    l = n(438732),
    u = n(500470),
    c = n(191627);
function d(e) {
    let t = (0, r.bG)([a.A], () => a.A.getLinkedUsers());
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
    let t = d(e);
    return (0, r.yK)([s.default], () => t.map((e) => s.default.getUser(e))).filter((e) => null != e);
};
function f() {
    return d(c.Ef.ACTIVE);
}
function h() {
    return _(c.Ef.ACTIVE);
}
let p = () => f().length > 0;
function E() {
    let e = (0, r.bG)([a.A], () => a.A.getLinkedUsers());
    return i.useMemo(
        () => Object.values(e).some((e) => null != e && e.link_status === c.Ef.ACTIVE && e.link_type === c.QM.PARENT),
        [e],
    );
}
function m() {
    let e = (0, r.bG)([a.A], () => a.A.getLinkCode()),
        t = (0, r.bG)([s.default], () => s.default.getCurrentUser());
    return null == e || null == t ? null : (0, c.jZ)(t.id, e);
}
function g() {
    let e = (0, l.A)(),
        t = f(),
        n = e ? c.Y7 : c.kp;
    return t.length >= n;
}
function A() {
    let e = (0, r.bG)([s.default], () => s.default.getCurrentUser()),
        t = (0, r.bG)([a.A], () => a.A.getLinkedUsers());
    return null == e
        ? 0
        : Object.values(t).filter((t) => null != t && t.link_status === c.Ef.PENDING && e.id !== t.requestor_id).length;
}
function I() {
    return f().length;
}
function T(e) {
    let t = (0, u.k)(),
        n = (0, r.bG)([a.A], () => (null == t ? null : a.A.getRangeStartTimestamp()));
    return null == n ? null : (0, o.i6)(new Date(n).getTime(), () => e, 7);
}
function S(e, t) {
    let n = (0, r.bG)([a.A], () => a.A.getLinkTimestamp(e));
    return null != n ? (0, o.mV)(Date.parse(n), t === c.Ef.PENDING ? c.lu : c.dI) : null;
}
