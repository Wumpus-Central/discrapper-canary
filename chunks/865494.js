var n = r(48657),
    i = r(580983),
    s = r(527160),
    a = r(11356),
    o = r(760725),
    u = r(234488),
    h = r(914331),
    c = r(480296),
    f = r(533610),
    l = r(800054),
    p = Array;
t.exports = function (t) {
    var e,
        r,
        v,
        g,
        d,
        m,
        y = s(t),
        b = u(this),
        w = arguments.length,
        x = w > 1 ? arguments[1] : void 0,
        S = void 0 !== x;
    S && (x = n(x, w > 2 ? arguments[2] : void 0));
    var R = l(y),
        k = 0;
    if (R && !(this === p && o(R))) for (r = b ? new this() : [], d = (g = f(y, R)).next; !(v = i(d, g)).done; k++) (m = S ? a(g, x, [v.value, k], !0) : v.value), c(r, k, m);
    else for (e = h(y), r = b ? new this(e) : p(e); e > k; k++) (m = S ? x(y[k], k) : y[k]), c(r, k, m);
    return (r.length = k), r;
};
