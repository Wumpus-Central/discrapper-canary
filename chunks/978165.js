n.d(t, { A: () => u, j: () => c }), n(938796);
var i = n(665260),
    r = n(17928),
    a = n(164956),
    s = n(696451),
    l = n(927813),
    o = n(340837);
function d(e, t, n) {
    if (n.isFullServerPreview(e)) return !0;
    let r = t.getSelfMember(e);
    if (null == r) return !1;
    let a = t.getSelfMemberJoinedAt(e);
    return (
        !(null == a || (0, i.Lt)(r.flags ?? 0, o.D.COMPLETED_HOME_ACTIONS)) &&
        Date.now() - a.getTime() < l.A.Millis.WEEK
    );
}
function c(e) {
    return d(e, s.Ay, a.A);
}
function u(e) {
    return (0, r.bG)([s.Ay, a.A], () => d(e, s.Ay, a.A));
}
