n.d(t, {
    B: () => a,
    n: () => r
}),
    n(653041);
var i = n(192379);
function r(e) {
    let t = {};
    if (e) {
        var n;
        null === (n = i.Children.map(e, (e) => e)) ||
            void 0 === n ||
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
    function i(e) {
        return n.hasOwnProperty(e) ? n[e] : t[e];
    }
    let r = {},
        a = [];
    for (let e in t) n.hasOwnProperty(e) ? a.length && ((r[e] = a), (a = [])) : a.push(e);
    let s = {};
    for (let t in n) {
        if (r.hasOwnProperty(t))
            for (e = 0; e < r[t].length; e++) {
                let n = r[t][e];
                s[r[t][e]] = i(n);
            }
        s[t] = i(t);
    }
    for (e = 0; e < a.length; e++) s[a[e]] = i(a[e]);
    return s;
}
