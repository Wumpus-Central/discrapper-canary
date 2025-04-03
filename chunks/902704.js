function r(e, t, n, r) {
    if (e === t) return !0;
    if (void 0 === e || void 0 === t) return e === t;
    let i = Object.keys(e),
        o = Object.keys(t);
    if (i.length !== o.length) return null != r && r('shallowEqual: unequal key lengths '.concat(i.length, ' !=== ').concat(o.length)), !1;
    let a = [];
    for (let o = 0; o < i.length; o++) {
        let s = i[o];
        if (e[s] !== t[s] && (null == n || !n.includes(s)))
            if (null == r) return !1;
            else a.push(s);
    }
    return null != r && a.length > 0 && r('shallowEqual: unequal keys: '.concat(a.join(', '))), 0 === a.length;
}
function i(e, t) {
    return null != t && e.length === t.length && !e.some((e, n) => t[n] !== e);
}
n.d(t, {
    E: () => i,
    Z: () => r
}),
    n(653041);
