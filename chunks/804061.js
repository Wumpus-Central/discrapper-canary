var r = n(98405),
    i = n(580983),
    o = n(46015),
    a = n(497464),
    s = n(880181),
    l = n(655152),
    c = n(933009),
    u = n(382698),
    d = n(3831),
    f = n(817282),
    _ = n(814559),
    p = n(751736),
    h = n(511696),
    m = p("replace"),
    g = TypeError,
    E = o("".indexOf),
    b = o("".replace),
    y = o("".slice),
    O = Math.max;
r(
    {
        target: "String",
        proto: !0,
    },
    {
        replaceAll: function (e, t) {
            var n,
                r,
                o,
                p,
                v,
                I,
                T,
                S,
                A,
                N = a(this),
                C = 0,
                R = "";
            if (!l(e)) {
                if ((n = c(e)) && !~E(u(a(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
                if ((r = d(e, m))) return i(r, e, N, t);
                if (h && n) return b(u(N), e, t);
            }
            for (o = u(N), p = u(e), (v = s(t)) || (t = u(t)), T = O(1, (I = p.length)), S = E(o, p); -1 !== S; )
                (A = v ? u(t(p, S, o)) : _(p, o, S, [], void 0, t)),
                    (R += y(o, C, S) + A),
                    (C = S + I),
                    (S = S + T > o.length ? -1 : E(o, p, S + T));
            return C < o.length && (R += y(o, C)), R;
        },
    },
);
