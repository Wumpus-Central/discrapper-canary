n.d(t, {
    B: () => a,
    n: () => i
}),
    n(539854);
var r = n(73800);
function i(e) {
    let t = {};
    if (e) {
        var n;
        null == (n = r.Children.map(e, (e) => e)) ||
            n.forEach((e) => {
                let n = e.key;
                null != n && (t[n] = e);
            });
    }
    return t;
}
function a() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    function r(e) {
        return n.hasOwnProperty(e) ? n[e] : t[e];
    }
    let i = {},
        a = [];
    for (let e in t) n.hasOwnProperty(e) ? a.length && ((i[e] = a), (a = [])) : a.push(e);
    let o = {};
    for (let t in n) {
        if (i.hasOwnProperty(t))
            for (e = 0; e < i[t].length; e++) {
                let n = i[t][e];
                o[i[t][e]] = r(n);
            }
        o[t] = r(t);
    }
    for (e = 0; e < a.length; e++) o[a[e]] = r(a[e]);
    return o;
}
