n.d(t, { dH: () => s, kX: () => l });
var i = n(17928),
    r = n(800828),
    a = n(994500);
function s(e) {
    let [t, n] = e;
    return t.getPendingCount() + n.getPendingIncomingCount();
}
function l() {
    return (0, i.bG)([a.A, r.A], () => s([a.A, r.A]));
}
