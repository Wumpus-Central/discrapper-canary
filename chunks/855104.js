n.d(t, {
    gN: () => a,
    kj: () => s,
    r_: () => o,
});
var r = n(311907),
    i = n(505274);
function a() {
    return (0, r.bG)([i.A], () => i.A.balance);
}
function s(e) {
    return (0, r.bG)([i.A], () => {
        var t;
        return null != e && (null != (t = i.A.balance) ? t : 0) >= e;
    });
}
function o() {
    return i.A.getCurrentBalance();
}
