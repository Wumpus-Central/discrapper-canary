r.d(n, {
    E: function () {
        return o;
    },
    Z: function () {
        return a;
    }
});
var i = r(653041);
function a(e, n, r, i) {
    if (e === n) return !0;
    if (void 0 === e || void 0 === n) return e === n;
    let a = Object.keys(e),
        o = Object.keys(n);
    if (a.length !== o.length) return null != i && i('shallowEqual: unequal key lengths '.concat(a.length, ' !=== ').concat(o.length)), !1;
    let s = [];
    for (let o = 0; o < a.length; o++) {
        let l = a[o];
        if (e[l] !== n[l] && (null == r || !r.includes(l))) {
            if (null == i) return !1;
            s.push(l);
        }
    }
    return null != i && s.length > 0 && i('shallowEqual: unequal keys: '.concat(s.join(', '))), 0 === s.length;
}
function o(e, n) {
    return null != n && e.length === n.length && !e.some((e, r) => n[r] !== e);
}
