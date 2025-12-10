var r = n(98405),
    i = n(580983),
    a = n(46015),
    o = n(497464),
    s = n(880181),
    l = n(655152),
    c = n(933009),
    u = n(382698),
    d = n(3831),
    f = n(817282),
    p = n(814559),
    _ = n(751736),
    m = n(511696),
    h = _("replace"),
    g = TypeError,
    E = a("".indexOf),
    b = a("".replace),
    y = a("".slice),
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
                a,
                _,
                v,
                S,
                I,
                T,
                C,
                A = o(this),
                N = 0,
                P = "";
            if (!l(e)) {
                if ((n = c(e)) && !~E(u(o(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
                if ((r = d(e, h))) return i(r, e, A, t);
                if (m && n) return b(u(A), e, t);
            }
            for (a = u(A), _ = u(e), (v = s(t)) || (t = u(t)), I = O(1, (S = _.length)), T = E(a, _); -1 !== T; )
                (C = v ? u(t(_, T, a)) : p(_, a, T, [], void 0, t)),
                    (P += y(a, N, T) + C),
                    (N = T + S),
                    (T = T + I > a.length ? -1 : E(a, _, T + I));
            return N < a.length && (P += y(a, N)), P;
        },
    },
);
