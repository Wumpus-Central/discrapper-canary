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
    _ = n(814559),
    p = n(751736),
    h = n(511696),
    m = p('replace'),
    g = TypeError,
    E = a(''.indexOf),
    b = a(''.replace),
    y = a(''.slice),
    O = Math.max;
r(
    {
        target: 'String',
        proto: !0
    },
    {
        replaceAll: function (e, t) {
            var n,
                r,
                a,
                p,
                v,
                I,
                S,
                T,
                A,
                N = o(this),
                C = 0,
                R = '';
            if (!l(e)) {
                if ((n = c(e)) && !~E(u(o(f(e))), 'g')) throw new g('`.replaceAll` does not allow non-global regexes');
                if ((r = d(e, m))) return i(r, e, N, t);
                if (h && n) return b(u(N), e, t);
            }
            for (a = u(N), p = u(e), (v = s(t)) || (t = u(t)), S = O(1, (I = p.length)), T = E(a, p); -1 !== T; ) (A = v ? u(t(p, T, a)) : _(p, a, T, [], void 0, t)), (R += y(a, C, T) + A), (C = T + I), (T = T + S > a.length ? -1 : E(a, p, T + S));
            return C < a.length && (R += y(a, C)), R;
        }
    }
);
