var i = r(223944),
    a = r(474883),
    o = r(256110),
    s = Array,
    l = Math.max;
e.exports = function (e, n, r) {
    for (var u = a(e), c = i(n, u), d = i(void 0 === r ? u : r, u), f = s(l(d - c, 0)), p = 0; c < d; c++, p++) o(f, p, e[c]);
    return (f.length = p), f;
};
