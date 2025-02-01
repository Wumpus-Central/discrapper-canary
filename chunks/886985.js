function t(e, t) {
    for (var n = -1, i = null == e ? 0 : e.length, r = Array(i); ++n < i; ) r[n] = t(e[n], n, e);
    return r;
}
e.exports = t;
