n.d(t, { Z: () => r }), n(47120);
let o = new Set(['nvidia']);
function r(e) {
    for (let t of Object.keys(e)) {
        let n = e[t];
        if (null != n && null == n.error && o.has(t)) return !0;
    }
    return !1;
}
