"use strict";
function r(e, t, n, r, i) {
    var a = e[t];
    if (void 0 === a) return i;
    let u = Number(a);
    if (isNaN(u) || u < n || u > r) throw RangeError(`${u} is outside of range [${n}, ${r}]`);
    return Math.floor(u);
}
n.d(t, { z: () => r });
