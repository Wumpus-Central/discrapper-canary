var r = n(433714),
    i = n(366110),
    a = n(221637);
e.exports = function (e, t, n) {
    for (var s = -1, o = t.length, l = {}; ++s < o; ) {
        var c = t[s],
            u = r(e, c);
        n(u, c) && i(l, a(c, e), u);
    }
    return l;
};
