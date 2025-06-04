var r = n(429614),
    i = n(483506);
function o(e, t, n, a, s) {
    var l = -1,
        c = e.length;
    for (n || (n = i), s || (s = []); ++l < c; ) {
        var u = e[l];
        t > 0 && n(u) ? (t > 1 ? o(u, t - 1, n, a, s) : r(s, u)) : a || (s[s.length] = u);
    }
    return s;
}
e.exports = o;
