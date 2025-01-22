function n(e, n, r) {
    var i = -1,
        a = e.length;
    n < 0 && (n = -n > a ? 0 : a + n), (r = r > a ? a : r) < 0 && (r += a), (a = n > r ? 0 : (r - n) >>> 0), (n >>>= 0);
    for (var o = Array(a); ++i < a; ) o[i] = e[i + n];
    return o;
}
e.exports = n;
