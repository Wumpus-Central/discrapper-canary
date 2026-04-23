"use strict";
n.d(t, { A: () => d, j: () => c }), n(938796);
var r = n(665260),
    i = n(311907),
    s = n(164956),
    a = n(696451),
    o = n(927813),
    l = n(340837);
function u(e, t, n) {
    if (n.isFullServerPreview(e)) return !0;
    let i = t.getSelfMember(e);
    if (null == i) return !1;
    let s = t.getSelfMemberJoinedAt(e);
    return (
        !(null == s || (0, r.Lt)(i.flags ?? 0, l.D.COMPLETED_HOME_ACTIONS)) &&
        Date.now() - s.getTime() < o.A.Millis.WEEK
    );
}
function c(e) {
    return u(e, a.Ay, s.A);
}
function d(e) {
    return (0, i.bG)([a.Ay, s.A], () => u(e, a.Ay, s.A));
}
