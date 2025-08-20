e.exports = function (e, t, n, r) {
    for (var i = -1, a = null == e ? 0 : e.length; ++i < a; ) {
        var o = e[i];
        t(r, o, n(o), e);
    }
    return r;
};
