n.d(t, { NK: () => s, Oe: () => _, ar: () => a, mf: () => r });
var i = n(513461);
function r(e) {
    return e === i.B5.APPROVED || e === i.B5.REJECTED;
}
function a(e) {
    return e === i.B5.SUBMITTED;
}
function s(e) {
    return e.applicationStatus === i.B5.APPROVED && null != e.lastSeen;
}
function _(e) {
    return r(e.applicationStatus) && null == e.lastSeen;
}
