e.exports = function (e, t, n, i) {
    for (var l = -1, s = null == e ? 0 : e.length; ++l < s; ) {
        var a = e[l];
        t(i, a, n(a), e);
    }
    return i;
};
