t.d(n, { z: () => i });
function i(e, n, t, i, r) {
    var a = e[n];
    if (void 0 === a) return r;
    let s = Number(a);
    if (isNaN(s) || s < t || s > i) throw RangeError(`${s} is outside of range [${t}, ${i}]`);
    return Math.floor(s);
}
