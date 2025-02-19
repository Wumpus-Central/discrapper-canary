var r = n(498576),
    i = n(49693),
    o = n(886960),
    a = n(566885),
    s = function (e, t, n, l, c, u, d, f) {
        for (var p, _, h = c, m = 0, g = !!d && a(d, f); m < l; ) m in n && ((p = g ? g(n[m], m, t) : n[m]), u > 0 && r(p) ? ((_ = i(p)), (h = s(e, t, p, _, h, u - 1) - 1)) : (o(h + 1), (e[h] = p)), h++), m++;
        return h;
    };
e.exports = s;
