"use strict";
n.d(t, { dH: () => r, kX: () => a });
var i = n(311907),
    s = n(800828),
    l = n(994500);
function r(e) {
    let [t, n] = e;
    return t.getPendingCount() + n.getPendingIncomingCount();
}
function a() {
    return (0, i.bG)([l.A, s.A], () => r([l.A, s.A]));
}
