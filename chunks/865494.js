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
    _ = Array;
e.exports = function (e) {
    var t,
        n,
        p,
        h,
        m,
        g,
        E = a(e),
        b = l(this),
        y = arguments.length,
        O = y > 1 ? arguments[1] : void 0,
        v = void 0 !== O;
    v && (O = r(O, y > 2 ? arguments[2] : void 0));
    var I = f(E),
        S = 0;
    if (I && !(this === _ && s(I))) for (n = b ? new this() : [], m = (h = d(E, I)).next; !(p = i(m, h)).done; S++) (g = v ? o(h, O, [p.value, S], !0) : p.value), u(n, S, g);
    else for (t = c(E), n = b ? new this(t) : _(t); t > S; S++) (g = v ? O(E[S], S) : E[S]), u(n, S, g);
    return (n.length = S), n;
};
