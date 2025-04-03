n.d(t, {
    B: () => o,
    n: () => i
}),
    n(653041);
var r = n(192379);
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
function o() {
    let e,
        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    function r(e) {
        return n.hasOwnProperty(e) ? n[e] : t[e];
    }
    let i = {},
        o = [];
    for (let e in t) n.hasOwnProperty(e) ? o.length && ((i[e] = o), (o = [])) : o.push(e);
    let a = {};
    for (let t in n) {
        if (i.hasOwnProperty(t))
            for (e = 0; e < i[t].length; e++) {
                let n = i[t][e];
                a[i[t][e]] = r(n);
            }
        a[t] = r(t);
    }
    for (e = 0; e < o.length; e++) a[o[e]] = r(o[e]);
    return a;
}
