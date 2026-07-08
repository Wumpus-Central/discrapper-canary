t.d(n, { z: () => a });
function a(e, n, t, a, r) {
    var i = e[n];
    if (void 0 === i) return r;
    let u = Number(i);
    if (isNaN(u) || u < t || u > a) throw RangeError(`${u} is outside of range [${t}, ${a}]`);
    return Math.floor(u);
}
