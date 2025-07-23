e.exports = function (e, t, n, r) {
    for (var i = -1, o = null == e ? 0 : e.length; ++i < o; ) {
        var a = e[i];
        t(r, a, n(a), e);
    }
    return r;
};
