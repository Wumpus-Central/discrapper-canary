_.d(e, { a: () => s });
var a = _(140955),
    r = _(202937),
    n = _(416987),
    o = _(596308),
    E = _(622574),
    i = _(662355);
let c = [1800, 3000],
    s = (t, e = {}) => {
        (0, i.A)(() => {
            let _,
                i = (0, n.Y)(),
                s = (0, o.I)("FCP"),
                l = (0, E.N)("paint", (t) => {
                    t.forEach((t) => {
                        "first-contentful-paint" === t.name &&
                            (l.disconnect(),
                            t.startTime < i.firstHiddenTime &&
                                ((s.value = Math.max(t.startTime - (0, r.A)(), 0)), s.entries.push(t), _(!0)));
                    });
                });
            l && (_ = (0, a._)(t, s, c, e.reportAllChanges));
        });
    };
