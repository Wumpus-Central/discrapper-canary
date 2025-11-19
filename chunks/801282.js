e.exports = function (e, t, u) {
    var r = -1,
        n = e.length;
    t < 0 && (t = -t > n ? 0 : n + t), (u = u > n ? n : u) < 0 && (u += n), (n = t > u ? 0 : (u - t) >>> 0), (t >>>= 0);
    for (var f = Array(n); ++r < n; ) f[r] = e[r + t];
    return f;
};
