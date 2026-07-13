"use strict";
function n(e, t, r, n, i) {
    var o = e[t];
    if (void 0 === o) return i;
    let a = Number(o);
    if (isNaN(a) || a < r || a > n) throw RangeError(`${a} is outside of range [${r}, ${n}]`);
    return Math.floor(a);
}
r.d(t, { z: () => n });
