n.d(t, { e: () => i }), n(388685);
let r = '_errors';
function i(e) {
    return a(e, void 0);
}
function a(e, t) {
    let n = e[r];
    if (null != n && Array.isArray(n)) return n[0];
    for (let [n, i] of Object.entries(e)) if (n !== r && null != i && 'object' == typeof i) return a(i, null != t ? t : n);
    return null;
}
