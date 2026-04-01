t.d(e, { W: () => a });
function a(n, e, t, a) {
    if (void 0 === n) return a;
    let r = Number(n);
    if (isNaN(r) || r < e || r > t) throw RangeError(`${r} is outside of range [${e}, ${t}]`);
    return Math.floor(r);
}
