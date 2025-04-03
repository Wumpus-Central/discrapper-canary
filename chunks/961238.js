e.exports = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, r = {}; ++t < n; ) {
        var i = e[t];
        r[i[0]] = i[1];
    }
    return r;
};
