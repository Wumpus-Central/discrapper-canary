var r = n(48657),
    i = n(580983),
    o = n(527160),
    a = n(11356),
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
        E = o(e),
        b = l(this),
        y = arguments.length,
        v = y > 1 ? arguments[1] : void 0,
        O = void 0 !== v;
    O && (v = r(v, y > 2 ? arguments[2] : void 0));
    var I = f(E),
        S = 0;
    if (I && !(this === _ && s(I))) for (n = b ? new this() : [], m = (h = d(E, I)).next; !(p = i(m, h)).done; S++) (g = O ? a(h, v, [p.value, S], !0) : p.value), u(n, S, g);
    else for (t = c(E), n = b ? new this(t) : _(t); t > S; S++) (g = O ? v(E[S], S) : E[S]), u(n, S, g);
    return (n.length = S), n;
};
