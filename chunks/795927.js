a.d(e, { m: () => E });
var r = a(140955),
    n = a(596308),
    _ = a(622574),
    o = a(433691),
    i = a(135813),
    c = a(825321);
let s = [0.1, 0.25],
    E = (t, e = {}) => {
        (0, c.a)(
            (0, i.R)(() => {
                let a,
                    i = (0, n.I)('CLS', 0),
                    c = 0,
                    E = [],
                    l = (t) => {
                        t.forEach((t) => {
                            if (!t.hadRecentInput) {
                                let e = E[0],
                                    a = E[E.length - 1];
                                c && e && a && t.startTime - a.startTime < 1000 && t.startTime - e.startTime < 5000 ? ((c += t.value), E.push(t)) : ((c = t.value), (E = [t]));
                            }
                        }),
                            c > i.value && ((i.value = c), (i.entries = E), a());
                    },
                    u = (0, _.N)('layout-shift', l);
                u &&
                    ((a = (0, r._)(t, i, s, e.reportAllChanges)),
                    (0, o.u)(() => {
                        l(u.takeRecords()), a(!0);
                    }),
                    setTimeout(a, 0));
            })
        );
    };
