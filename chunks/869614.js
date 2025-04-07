n.d(t, { Z: () => i }), n(388685);
let r = new Set(['nvidia']);
function i(e) {
    for (let t of Object.keys(e)) {
        let n = e[t];
        if (null != n && null == n.error && r.has(t)) return !0;
    }
    return !1;
}
