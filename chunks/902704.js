n.d(t, {
    E: () => a,
    Z: () => i
}),
    n(539854);
let r = {};
function i(e, t, n) {
    let { shouldWarnLargeObjects: i, logCallback: a } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : r;
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let o = Object.keys(e),
        s = Object.keys(t);
    if (o.length !== s.length) return !1;
    let l = [];
    for (let r = 0; r < o.length; r++) {
        let i = o[r];
        if (e[i] !== t[i] && (null == n || !n.includes(i))) return !1;
    }
    return 0 === l.length;
}
function a(e, t) {
    let { logCallback: n, shouldWarnLargeObjects: i } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
