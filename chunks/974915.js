var r = n(349519),
    i = n(651211),
    s = n(147818);
e.exports = function (e, t, n) {
    for (var l = -1, a = t.length, o = {}; ++l < a; ) {
        var c = t[l],
            u = r(e, c);
        n(u, c) && i(o, s(c, e), u);
    }
    return o;
};
