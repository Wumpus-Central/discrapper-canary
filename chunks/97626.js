"use strict";
function n(e, t, r, n, a) {
    var s = e[t];
    if (void 0 === s) return a;
    let i = Number(s);
    if (isNaN(i) || i < r || i > n) throw RangeError(`${i} is outside of range [${r}, ${n}]`);
    return Math.floor(i);
}
r.d(t, { z: () => n });
