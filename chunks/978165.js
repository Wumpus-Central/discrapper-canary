n.d(t, {
    A: () => d,
    j: () => u,
}),
    n(938796);
var r = n(665260),
    i = n(311907),
    a = n(164956),
    s = n(696451),
    o = n(927813),
    l = n(340837);
function c(e, t, n) {
    var i;
    if (n.isFullServerPreview(e)) return !0;
    let a = t.getSelfMember(e);
    if (null == a) return !1;
    let s = t.getSelfMemberJoinedAt(e);
    return (
        !(null == s || (0, r.Lt)(null != (i = a.flags) ? i : 0, l.D.COMPLETED_HOME_ACTIONS)) &&
        Date.now() - s.getTime() < o.A.Millis.WEEK
    );
}
function u(e) {
    return c(e, s.Ay, a.A);
}
function d(e) {
    return (0, i.bG)([s.Ay, a.A], () => c(e, s.Ay, a.A));
}
