n.d(t, { q: () => i });
function i(e) {
    let t,
        n = !1;
    return function () {
        for (var i = arguments.length, s = Array(i), r = 0; r < i; r++) s[r] = arguments[r];
        return n || ((n = !0), (t = e(...s))), t;
    };
}
