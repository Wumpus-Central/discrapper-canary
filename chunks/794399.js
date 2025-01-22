var i = r(429614),
    a = r(483506);
function o(e, n, r, s, l) {
    var u = -1,
        c = e.length;
    for (r || (r = a), l || (l = []); ++u < c; ) {
        var d = e[u];
        n > 0 && r(d) ? (n > 1 ? o(d, n - 1, r, s, l) : i(l, d)) : !s && (l[l.length] = d);
    }
    return l;
}
e.exports = o;
