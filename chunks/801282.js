e.exports = function (e, t, n) {
    var i = -1,
        a = e.length;
    t < 0 && (t = -t > a ? 0 : a + t), (n = n > a ? a : n) < 0 && (n += a), (a = t > n ? 0 : (n - t) >>> 0), (t >>>= 0);
    for (var l = Array(a); ++i < a; ) l[i] = e[i + t];
    return l;
};
