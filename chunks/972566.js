e.exports = function (e, t) {
    for (var n = e.length, i = -1; ++i < n; ) e[i] ^= t[i];
    return e;
};
