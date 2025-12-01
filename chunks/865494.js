var r = n(48657),
    i = n(580983),
    a = n(527160),
    o = n(11356),
    s = n(760725),
    l = n(234488),
    c = n(914331),
    u = n(480296),
    d = n(533610),
    f = n(800054),
    p = Array;
e.exports = function (e) {
    var t,
        n,
        _,
        m,
        h,
        g,
        E = a(e),
        b = l(this),
        y = arguments.length,
        O = y > 1 ? arguments[1] : void 0,
        v = void 0 !== O;
    v && (O = r(O, y > 2 ? arguments[2] : void 0));
    var S = f(E),
        I = 0;
    if (S && !(this === p && s(S)))
        for (n = b ? new this() : [], h = (m = d(E, S)).next; !(_ = i(h, m)).done; I++)
            (g = v ? o(m, O, [_.value, I], !0) : _.value), u(n, I, g);
    else for (t = c(E), n = b ? new this(t) : p(t); t > I; I++) (g = v ? O(E[I], I) : E[I]), u(n, I, g);
    return (n.length = I), n;
};
