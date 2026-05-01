n.d(t, { dH: () => s, kX: () => l });
var i = n(17928),
    a = n(800828),
    r = n(994500);
function s(e) {
    let [t, n] = e;
    return t.getPendingCount() + n.getPendingIncomingCount();
}
function l() {
    return (0, i.bG)([r.A, a.A], () => s([r.A, a.A]));
}
