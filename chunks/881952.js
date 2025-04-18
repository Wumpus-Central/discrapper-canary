n.d(t, {
    Nd: () => a,
    bk: () => i,
    d3: () => o,
    oP: () => s
});
var r = n(246364);
function i(e) {
    return e === r.wB.APPROVED || e === r.wB.REJECTED;
}
function a(e) {
    return e === r.wB.SUBMITTED;
}
function o(e) {
    return e.applicationStatus === r.wB.APPROVED && null != e.lastSeen;
}
function s(e) {
    return i(e.applicationStatus) && null == e.lastSeen;
}
