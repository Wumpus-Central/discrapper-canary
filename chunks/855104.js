"use strict";
n.d(t, { gN: () => s, kj: () => a, r_: () => o });
var i = n(17928),
    r = n(505274);
function s() {
    return (0, i.bG)([r.A], () => r.A.balance);
}
function a(e) {
    return (0, i.bG)([r.A], () => null != e && (r.A.balance ?? 0) >= e);
}
function o() {
    return r.A.getCurrentBalance();
}
