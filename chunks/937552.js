var r = n(691593),
    o = n(475424),
    a = n(562690),
    i = n(174344),
    s = TypeError,
    c = 'Reduce of empty array with no initial value',
    l = function (e) {
        return function (t, n, l, u) {
            var d = o(t),
                p = a(d),
                h = i(d);
            if ((r(n), 0 === h && l < 2)) throw new s(c);
            var f = e ? h - 1 : 0,
                m = e ? -1 : 1;
            if (l < 2)
                for (;;) {
                    if (f in p) {
                        (u = p[f]), (f += m);
                        break;
                    }
                    if (((f += m), e ? f < 0 : h <= f)) throw new s(c);
                }
            for (; e ? f >= 0 : h > f; f += m) f in p && (u = n(u, p[f], f, d));
            return u;
        };
    };
e.exports = {
    left: l(!1),
    right: l(!0)
};
