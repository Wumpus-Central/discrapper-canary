var e = n(223944),
    o = n(474883),
    i = n(256110),
    u = Array,
    s = Math.max;
t.exports = function (t, r, n) {
    for (var c = o(t), f = e(r, c), a = e(void 0 === n ? c : n, c), p = u(s(a - f, 0)), v = 0; f < a; f++, v++) i(p, v, t[f]);
    return (p.length = v), p;
};
