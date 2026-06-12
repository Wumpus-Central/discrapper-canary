e.exports = function (e, t, n, i) {
    for (var r = e.length, s = n + (i ? 1 : -1); i ? s-- : ++s < r; ) if (t(e[s], s, e)) return s;
    return -1;
};
