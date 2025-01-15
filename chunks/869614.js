t.d(n, {
    Z: function () {
        return o;
    }
}),
    t(47120);
let r = new Set(['nvidia']);
function o(e) {
    for (let n of Object.keys(e)) {
        let t = e[n];
        if (null != t && null == t.error && r.has(n)) return !0;
    }
    return !1;
}
