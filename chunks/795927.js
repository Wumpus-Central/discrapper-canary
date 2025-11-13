a.d(e, { m: () => s });
var r = a(140955),
    _ = a(596308),
    n = a(622574),
    o = a(433691),
    i = a(135813),
    E = a(825321);
let c = [0.1, 0.25],
    s = (t, e = {}) => {
        (0, E.a)(
            (0, i.R)(() => {
                let a,
                    i = (0, _.I)("CLS", 0),
                    E = 0,
                    s = [],
                    l = (t) => {
                        t.forEach((t) => {
                            if (!t.hadRecentInput) {
                                let e = s[0],
                                    a = s[s.length - 1];
                                E && e && a && t.startTime - a.startTime < 1000 && t.startTime - e.startTime < 5000
                                    ? ((E += t.value), s.push(t))
                                    : ((E = t.value), (s = [t]));
                            }
                        }),
                            E > i.value && ((i.value = E), (i.entries = s), a());
                    },
                    I = (0, n.N)("layout-shift", l);
                I &&
                    ((a = (0, r._)(t, i, c, e.reportAllChanges)),
                    (0, o.u)(() => {
                        l(I.takeRecords()), a(!0);
                    }),
                    setTimeout(a, 0));
            }),
        );
    };
