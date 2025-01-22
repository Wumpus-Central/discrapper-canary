r.d(n, {
    B: function () {
        return s;
    },
    n: function () {
        return o;
    }
});
var i = r(653041);
var a = r(192379);
function o(e) {
    let n = {};
    if (e) {
        var r;
        null === (r = a.Children.map(e, (e) => e)) ||
            void 0 === r ||
            r.forEach((e) => {
                let r = e.key;
                null != r && (n[r] = e);
            });
    }
    return n;
}
function s() {
    let e,
        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    function i(e) {
        return r.hasOwnProperty(e) ? r[e] : n[e];
    }
    let a = {},
        o = [];
    for (let e in n) r.hasOwnProperty(e) ? o.length && ((a[e] = o), (o = [])) : o.push(e);
    let s = {};
    for (let n in r) {
        if (a.hasOwnProperty(n))
            for (e = 0; e < a[n].length; e++) {
                let r = a[n][e];
                s[a[n][e]] = i(r);
            }
        s[n] = i(n);
    }
    for (e = 0; e < o.length; e++) s[o[e]] = i(o[e]);
    return s;
}
