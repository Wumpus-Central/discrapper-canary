n.d(t, {
    Nd: () => a,
    bk: () => r,
    d3: () => s,
    oP: () => o
});
var i = n(246364);
function r(e) {
    return e === i.wB.APPROVED || e === i.wB.REJECTED;
}
function a(e) {
    return e === i.wB.SUBMITTED;
}
function s(e) {
    return e.applicationStatus === i.wB.APPROVED && null != e.lastSeen;
}
function o(e) {
    return r(e.applicationStatus) && null == e.lastSeen;
}
