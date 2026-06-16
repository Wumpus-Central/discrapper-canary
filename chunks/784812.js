var i = n(795456),
    r = n(335186);
e.exports = function (e) {
    for (var t = r(e), n = t.length; n--; ) {
        var s = t[n],
            a = e[s];
        t[n] = [s, a, i(a)];
    }
    return t;
};
