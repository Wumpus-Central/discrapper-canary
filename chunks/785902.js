e.exports = function (e, t, n, i) {
    for (var r = -1, a = null == e ? 0 : e.length; ++r < a; ) {
        var s = e[r];
        t(i, s, n(s), e);
    }
    return i;
};
