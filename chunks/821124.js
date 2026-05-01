n.d(t, { NK: () => s, Oe: () => l, ar: () => r, mf: () => a });
var i = n(513461);
function a(e) {
    return e === i.B5.APPROVED || e === i.B5.REJECTED;
}
function r(e) {
    return e === i.B5.SUBMITTED;
}
function s(e) {
    return e.applicationStatus === i.B5.APPROVED && null != e.lastSeen;
}
function l(e) {
    return a(e.applicationStatus) && null == e.lastSeen;
}
