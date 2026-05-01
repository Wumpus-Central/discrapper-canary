"use strict";
n.d(t, { NK: () => a, Oe: () => o, ar: () => s, mf: () => r });
var i = n(513461);
function r(e) {
    return e === i.B5.APPROVED || e === i.B5.REJECTED;
}
function s(e) {
    return e === i.B5.SUBMITTED;
}
function a(e) {
    return e.applicationStatus === i.B5.APPROVED && null != e.lastSeen;
}
function o(e) {
    return r(e.applicationStatus) && null == e.lastSeen;
}
