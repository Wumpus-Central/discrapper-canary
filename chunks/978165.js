"use strict";
n.d(t, { A: () => u, j: () => _ }), n(938796);
var i = n(665260),
    r = n(17928),
    s = n(164956),
    a = n(696451),
    o = n(927813),
    l = n(340837);
function d(e, t, n) {
    if (n.isFullServerPreview(e)) return !0;
    let r = t.getSelfMember(e);
    if (null == r) return !1;
    let s = t.getSelfMemberJoinedAt(e);
    return (
        !(null == s || (0, i.Lt)(r.flags ?? 0, l.D.COMPLETED_HOME_ACTIONS)) &&
        Date.now() - s.getTime() < o.A.Millis.WEEK
    );
}
function _(e) {
    return d(e, a.Ay, s.A);
}
function u(e) {
    return (0, r.bG)([a.Ay, s.A], () => d(e, a.Ay, s.A));
}
