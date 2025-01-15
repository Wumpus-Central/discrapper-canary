e.exports = function (e, t, n, i) {
    for (var E = -1, r = null == e ? 0 : e.length; ++E < r; ) {
        var _ = e[E];
        t(i, _, n(_), e);
    }
    return i;
};
