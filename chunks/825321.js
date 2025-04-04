a.d(e, { a: () => E });
var r = a(140955),
    n = a(202937),
    _ = a(416987),
    o = a(596308),
    i = a(622574),
    c = a(662355);
let s = [1800, 3000],
    E = (t, e = {}) => {
        (0, c.A)(() => {
            let a,
                c = (0, _.Y)(),
                E = (0, o.I)('FCP'),
                l = (0, i.N)('paint', (t) => {
                    t.forEach((t) => {
                        'first-contentful-paint' === t.name && (l.disconnect(), t.startTime < c.firstHiddenTime && ((E.value = Math.max(t.startTime - (0, n.A)(), 0)), E.entries.push(t), a(!0)));
                    });
                });
            l && (a = (0, r._)(t, E, s, e.reportAllChanges));
        });
    };
