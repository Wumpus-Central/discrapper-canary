"use strict";
function r(e, t, n, r, i) {
    var a = e[t];
    if (void 0 === a) return i;
    let o = Number(a);
    if (isNaN(o) || o < n || o > r) throw RangeError(`${o} is outside of range [${n}, ${r}]`);
    return Math.floor(o);
}
n.d(t, { z: () => r });
