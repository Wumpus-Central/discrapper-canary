function i(e, t, n, i) {
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let r = Object.keys(e),
        a = Object.keys(t);
    if (r.length !== a.length) return null != i && i('shallowEqual: unequal key lengths '.concat(r.length, ' !=== ').concat(a.length)), !1;
    let s = [];
    for (let a = 0; a < r.length; a++) {
        let o = r[a];
        if (e[o] !== t[o] && (null == n || !n.includes(o))) {
            if (null == i) return !1;
            s.push(o);
        }
    }
    return null != i && s.length > 0 && i('shallowEqual: unequal keys: '.concat(s.join(', '))), 0 === s.length;
}
function r(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
n.d(t, {
    E: () => r,
    Z: () => i
}),
    n(653041);
