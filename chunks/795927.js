a.d(e, { m: () => s });
var r = a(140955),
    _ = a(596308),
    n = a(622574),
    o = a(433691),
    i = a(135813),
    c = a(825321);
let E = [0.1, 0.25],
    s = (t, e = {}) => {
        (0, c.a)(
            (0, i.R)(() => {
                let a,
                    i = (0, _.I)('CLS', 0),
                    c = 0,
                    s = [],
                    l = (t) => {
                        t.forEach((t) => {
                            if (!t.hadRecentInput) {
                                let e = s[0],
                                    a = s[s.length - 1];
                                c && e && a && t.startTime - a.startTime < 1000 && t.startTime - e.startTime < 5000 ? ((c += t.value), s.push(t)) : ((c = t.value), (s = [t]));
                            }
                        }),
                            c > i.value && ((i.value = c), (i.entries = s), a());
                    },
                    u = (0, n.N)('layout-shift', l);
                u &&
                    ((a = (0, r._)(t, i, E, e.reportAllChanges)),
                    (0, o.u)(() => {
                        l(u.takeRecords()), a(!0);
                    }),
                    setTimeout(a, 0));
            })
        );
    };
