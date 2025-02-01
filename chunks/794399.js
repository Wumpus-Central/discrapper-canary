var i = n(429614),
    r = n(483506);
function a(e, t, n, s, o) {
    var l = -1,
        u = e.length;
    for (n || (n = r), o || (o = []); ++l < u; ) {
        var c = e[l];
        t > 0 && n(c) ? (t > 1 ? a(c, t - 1, n, s, o) : i(o, c)) : s || (o[o.length] = c);
    }
    return o;
}
e.exports = a;
