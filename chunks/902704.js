function r(e, t, n, r) {
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let i = Object.keys(e),
        a = Object.keys(t);
    if (i.length !== a.length) return null != r && r('shallowEqual: unequal key lengths '.concat(i.length, ' !=== ').concat(a.length)), !1;
    let o = [];
    for (let a = 0; a < i.length; a++) {
        let s = i[a];
        if (e[s] !== t[s] && (null == n || !n.includes(s)))
            if (null == r) return !1;
            else o.push(s);
    }
    return null != r && o.length > 0 && r('shallowEqual: unequal keys: '.concat(o.join(', '))), 0 === o.length;
}
function i(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
n.d(t, {
    E: () => i,
    Z: () => r
}),
    n(539854);
