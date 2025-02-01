function t(e, t, n) {
    var i = -1,
        r = e.length;
    t < 0 && (t = -t > r ? 0 : r + t), (n = n > r ? r : n) < 0 && (n += r), (r = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
    for (var a = Array(r); ++i < r; ) a[i] = e[i + t];
    return a;
}
e.exports = t;
