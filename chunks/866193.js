var r = n(557939),
    i = n(446474),
    a = n(410323),
    s = n(321727),
    o = n(339626),
    l = n(652320),
    c = n(432663),
    u = n(304880),
    d = n(95959),
    f = n(565079),
    p = n(470103),
    _ = n(380744),
    h = n(105712),
    m = _("replace"),
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
                A,
                v,
                S,
                I,
                T,
                C = s(this),
                N = 0,
                R = "";
            if (!l(e)) {
                if ((n = c(e)) && !~E(u(s(f(e))), "g")) throw new g("`.replaceAll` does not allow non-global regexes");
                if ((r = d(e, m))) return i(r, e, C, t);
                if (h && n) return b(u(C), e, t);
            }
            for (a = u(C), _ = u(e), (A = o(t)) || (t = u(t)), S = O(1, (v = _.length)), I = E(a, _); -1 !== I; )
                (T = A ? u(t(_, I, a)) : p(_, a, I, [], void 0, t)),
                    (R += y(a, N, I) + T),
                    (N = I + v),
                    (I = I + S > a.length ? -1 : E(a, _, I + S));
            return N < a.length && (R += y(a, N)), R;
        },
    },
);
