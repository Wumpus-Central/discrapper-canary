e.exports = function (e) {
    for (var t = -1, n = null == e ? 0 : e.length, i = 0, r = []; ++t < n; ) {
        var s = e[t];
        s && (r[i++] = s);
    }
    return r;
};
