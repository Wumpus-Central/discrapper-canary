e.exports = function (e, t) {
    for (var n = e.length, r = -1; ++r < n; ) e[r] ^= t[r];
    return e;
};
