_.d(e, { m: () => s });
var a = _(140955),
    r = _(596308),
    n = _(622574),
    o = _(433691),
    E = _(135813),
    i = _(825321);
let c = [0.1, 0.25],
    s = (t, e = {}) => {
        (0, i.a)(
            (0, E.R)(() => {
                let _,
                    E = (0, r.I)("CLS", 0),
                    i = 0,
                    s = [],
                    l = (t) => {
                        t.forEach((t) => {
                            if (!t.hadRecentInput) {
                                let e = s[0],
                                    _ = s[s.length - 1];
                                i && e && _ && t.startTime - _.startTime < 1000 && t.startTime - e.startTime < 5000
                                    ? ((i += t.value), s.push(t))
                                    : ((i = t.value), (s = [t]));
                            }
                        }),
                            i > E.value && ((E.value = i), (E.entries = s), _());
                    },
                    I = (0, n.N)("layout-shift", l);
                I &&
                    ((_ = (0, a._)(t, E, c, e.reportAllChanges)),
                    (0, o.u)(() => {
                        l(I.takeRecords()), _(!0);
                    }),
                    setTimeout(_, 0));
            }),
        );
    };
