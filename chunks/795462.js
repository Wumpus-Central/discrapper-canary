var e = n(324474),
    o = n(517522),
    i = n(921413),
    u = n(684022),
    s = n(65976),
    c = n(174344),
    f = n(658538),
    a = n(318341),
    p = n(242958),
    l = n(272763),
    v = TypeError,
    y = function (t, r) {
        (this.stopped = t), (this.result = r);
    },
    h = y.prototype;
t.exports = function (t, r, n) {
    var x,
        d,
        g,
        b,
        m,
        S,
        w,
        O = n && n.that,
        j = !!(n && n.AS_ENTRIES),
        A = !!(n && n.IS_RECORD),
        E = !!(n && n.IS_ITERATOR),
        T = !!(n && n.INTERRUPTED),
        P = e(r, O),
        k = function (t) {
            return x && l(x, 'normal', t), new y(!0, t);
        },
        I = function (t) {
            return j ? (i(t), T ? P(t[0], t[1], k) : P(t[0], t[1])) : T ? P(t, k) : P(t);
        };
    if (A) x = t.iterator;
    else if (E) x = t;
    else {
        if (!(d = p(t))) throw new v(u(t) + ' is not iterable');
        if (s(d)) {
            for (g = 0, b = c(t); b > g; g++) if ((m = I(t[g])) && f(h, m)) return m;
            return new y(!1);
        }
        x = a(t, d);
    }
    for (S = A ? t.next : x.next; !(w = o(S, x)).done; ) {
        try {
            m = I(w.value);
        } catch (t) {
            l(x, 'throw', t);
        }
        if ('object' == typeof m && m && f(h, m)) return m;
    }
    return new y(!1);
};
