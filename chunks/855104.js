"use strict";
n.d(t, { gN: () => s, kj: () => a, r_: () => o });
var r = n(311907),
    i = n(505274);
function s() {
    return (0, r.bG)([i.A], () => i.A.balance);
}
function a(e) {
    return (0, r.bG)([i.A], () => null != e && (i.A.balance ?? 0) >= e);
}
function o() {
    return i.A.getCurrentBalance();
}
