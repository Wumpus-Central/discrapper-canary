var u = t(349519),
    e = t(651211),
    i = t(147818);
r.exports = function (r, n, t) {
    for (var o = -1, a = n.length, v = {}; ++o < a; ) {
        var f = n[o],
            p = u(r, f);
        t(p, f) && e(v, i(f, r), p);
    }
    return v;
};
