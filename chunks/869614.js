n.d(t, {
    Z: function () {
        return o;
    }
}),
    n(47120);
let r = new Set(['nvidia']);
function o(e) {
    for (let t of Object.keys(e)) {
        let n = e[t];
        if (null != n && null == n.error && r.has(t)) return !0;
    }
    return !1;
}
