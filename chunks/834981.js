n.d(t, {
    GR: () => _,
    Li: () => h,
    VE: () => m,
    VT: () => E,
    W1: () => b,
    XC: () => O,
    v4: () => y,
    vx: () => p,
    xk: () => f,
    xr: () => g,
}),
    n(638769);
var r = n(64700),
    i = n(417597),
    a = n(287809),
    s = n(695515),
    o = n(923531),
    l = n(500470),
    c = n(945276),
    u = n(191627);
function d(e) {
    let t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
    return r.useMemo(
        () =>
            Object.values(t)
                .filter((t) => null != t && t.link_status === e)
                .sort((e, t) => new Date(e.updated_at).getTime() - new Date(t.updated_at).getTime())
                .map((e) => e.user_id)
                .filter((e) => null != e),
        [t, e],
    );
}
let f = (e) => {
    let t = d(e);
    return (0, i.yK)([a.default], () => t.map((e) => a.default.getUser(e))).filter((e) => null != e);
};
function p() {
    return d(u.Ef.ACTIVE);
}
function _() {
    return f(u.Ef.ACTIVE);
}
let h = () => p().length > 0;
function m() {
    let e = (0, i.bG)([s.A], () => s.A.getLinkCode()),
        t = (0, i.bG)([a.default], () => a.default.getCurrentUser());
    return null == e || null == t ? null : (0, u.jZ)(t.id, e);
}
function g() {
    let e = (0, c.A)(),
        t = p(),
        n = e ? u.Y7 : u.kp;
    return t.length >= n;
}
function E() {
    let e = (0, i.bG)([a.default], () => a.default.getCurrentUser()),
        t = (0, i.bG)([s.A], () => s.A.getLinkedUsers());
    return null == e
        ? 0
        : Object.values(t).filter((t) => null != t && t.link_status === u.Ef.PENDING && e.id !== t.requestor_id).length;
}
function b() {
    return p().length;
}
function y(e) {
    let t = (0, l.k)(),
        n = (0, i.bG)([s.A], () => (null == t ? null : s.A.getRangeStartTimestamp()));
    return null == n ? null : (0, o.i6)(new Date(n).getTime(), () => e, 7);
}
function O(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getLinkTimestamp(e));
    return null != n ? (0, o.mV)(Date.parse(n), t === u.Ef.PENDING ? u.lu : u.dI) : null;
}
