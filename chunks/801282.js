e.exports = function (e, n, t) {
    var r = -1,
        i = e.length;
    n < 0 && (n = -n > i ? 0 : i + n), (t = t > i ? i : t) < 0 && (t += i), (i = n > t ? 0 : (t - n) >>> 0), (n >>>= 0);
    for (var a = Array(i); ++r < i; ) a[r] = e[r + n];
    return a;
};
