n.d(t, { e: () => r }), n(47120);
let i = '_errors';
function r(e) {
    return a(e, void 0);
}
function a(e, t) {
    let n = e[i];
    if (null != n && Array.isArray(n)) return n[0];
    for (let [n, r] of Object.entries(e)) if (n !== i && null != r && 'object' == typeof r) return a(r, null != t ? t : n);
    return null;
}
