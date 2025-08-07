e.exports = function (e, t, n, a) {
    for (var i = -1, r = null == e ? 0 : e.length; ++i < r; ) {
        var s = e[i];
        t(a, s, n(s), e);
    }
    return a;
};
