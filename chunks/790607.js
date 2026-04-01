"use strict";
function r(e, t, n, r) {
    if (void 0 === e) return r;
    let i = Number(e);
    if (isNaN(i) || i < t || i > n) throw RangeError(`${i} is outside of range [${t}, ${n}]`);
    return Math.floor(i);
}
n.d(t, { W: () => r });
