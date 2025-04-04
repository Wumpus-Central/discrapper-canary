var e = n(324474),
    o = n(517522),
    i = n(475424),
    u = n(703046),
    s = n(65976),
    c = n(468790),
    f = n(174344),
    a = n(641623),
    p = n(318341),
    l = n(242958),
    v = Array;
t.exports = function (t) {
    var r,
        n,
        y,
        h,
        x,
        d,
        g = i(t),
        b = c(this),
        m = arguments.length,
        S = m > 1 ? arguments[1] : void 0,
        w = void 0 !== S;
    w && (S = e(S, m > 2 ? arguments[2] : void 0));
    var O = l(g),
        j = 0;
    if (O && !(this === v && s(O))) for (n = b ? new this() : [], x = (h = p(g, O)).next; !(y = o(x, h)).done; j++) (d = w ? u(h, S, [y.value, j], !0) : y.value), a(n, j, d);
    else for (r = f(g), n = b ? new this(r) : v(r); r > j; j++) (d = w ? S(g[j], j) : g[j]), a(n, j, d);
    return (n.length = j), n;
};
