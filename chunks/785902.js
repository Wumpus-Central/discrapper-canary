i.exports = function (i, a, n, o) {
    for (var c = -1, t = null == i ? 0 : i.length; ++c < t; ) {
        var s = i[c];
        a(o, s, n(s), i);
    }
    return o;
};
