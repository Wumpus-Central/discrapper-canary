"use strict";
n.d(t, { NK: () => s, Oe: () => o, ar: () => a, mf: () => i });
var r = n(513461);
function i(e) {
    return e === r.B5.APPROVED || e === r.B5.REJECTED;
}
function a(e) {
    return e === r.B5.SUBMITTED;
}
function s(e) {
    return e.applicationStatus === r.B5.APPROVED && null != e.lastSeen;
}
function o(e) {
    return i(e.applicationStatus) && null == e.lastSeen;
}
