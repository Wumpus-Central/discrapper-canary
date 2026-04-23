n.d(t, { q: () => i });
function i(e) {
    let t,
        n = !1;
    return function () {
        for (var i = arguments.length, r = Array(i), a = 0; a < i; a++) r[a] = arguments[a];
        return n || ((n = !0), (t = e(...r))), t;
    };
}
