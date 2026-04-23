n.d(t, { dH: () => r, kX: () => a });
var i = n(17928),
    l = n(800828),
    s = n(994500);
function r(e) {
    let [t, n] = e;
    return t.getPendingCount() + n.getPendingIncomingCount();
}
function a() {
    return (0, i.bG)([s.A, l.A], () => r([s.A, l.A]));
}
