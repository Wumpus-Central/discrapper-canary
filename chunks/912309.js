"use strict";
n.d(t, { dH: () => a, kX: () => o });
var i = n(17928),
    r = n(800828),
    s = n(994500);
function a(e) {
    let [t, n] = e;
    return t.getPendingCount() + n.getPendingIncomingCount();
}
function o() {
    return (0, i.bG)([s.A, r.A], () => a([s.A, r.A]));
}
