var r = n(860511),
    i = n(487127),
    a = n(712573),
    s = n(39139),
    o = n(706938),
    l = n(174168),
    c = n(380744)("iterator"),
    u = s.values,
    d = function (e, t) {
        if (e) {
            if (e[c] !== u)
                try {
                    o(e, c, u);
                } catch (t) {
                    e[c] = u;
                }
            if ((l(e, t, !0), i[t])) {
                for (var n in s)
                    if (e[n] !== s[n])
                        try {
                            o(e, n, s[n]);
                        } catch (t) {
                            e[n] = s[n];
                        }
            }
        }
    };
for (var f in i) d(r[f] && r[f].prototype, f);
d(a, "DOMTokenList");
