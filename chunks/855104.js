n.d(t, { gN: () => r, kj: () => a, r_: () => s });
var l = n(17928),
    i = n(505274);
function r() {
    return (0, l.bG)([i.A], () => i.A.balance);
}
function a(e) {
    return (0, l.bG)([i.A], () => null != e && (i.A.balance ?? 0) >= e);
}
function s() {
    return i.A.getCurrentBalance();
}
