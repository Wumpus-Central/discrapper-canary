function t(e) {
    for (var t = -1, n = null == e ? 0 : e.length, i = {}; ++t < n; ) {
        var r = e[t];
        i[r[0]] = r[1];
    }
    return i;
}
e.exports = t;
