n.d(t, {
    E: () => o,
    Z: () => i
}),
    n(539854);
let r = {};
function i(e, t, n) {
    let { shouldWarnLargeObjects: i, logCallback: o } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r;
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let a = Object.keys(e),
        s = Object.keys(t);
    if (a.length !== s.length) return !1;
    let l = [];
    for (let r = 0; r < a.length; r++) {
        let i = a[r];
        if (e[i] !== t[i] && (null == n || !n.includes(i))) return !1;
    }
    return 0 === l.length;
}
function o(e, t) {
    let { logCallback: n, shouldWarnLargeObjects: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
    return null != t && e.length === t.length && e.every((e, n) => t[n] === e);
}
