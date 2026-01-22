var r = n(106769),
    i = n(523317),
    a = Math.abs,
    s = 2220446049250313e-31;
e.exports = function (e, t, n, o) {
    var l = +e,
        c = a(l),
        u = r(l);
    if (c < o) return u * i(c / o / t) * o * t;
    var d = (1 + t / s) * c,
        f = d - (d - c);
    return f > n || f != f ? (1 / 0) * u : u * f;
};
