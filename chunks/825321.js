a.d(e, { a: () => s });
var r = a(140955),
    _ = a(202937),
    n = a(416987),
    o = a(596308),
    i = a(622574),
    c = a(662355);
let E = [1800, 3000],
    s = (t, e = {}) => {
        (0, c.A)(() => {
            let a,
                c = (0, n.Y)(),
                s = (0, o.I)('FCP'),
                l = (0, i.N)('paint', (t) => {
                    t.forEach((t) => {
                        'first-contentful-paint' === t.name && (l.disconnect(), t.startTime < c.firstHiddenTime && ((s.value = Math.max(t.startTime - (0, _.A)(), 0)), s.entries.push(t), a(!0)));
                    });
                });
            l && (a = (0, r._)(t, s, E, e.reportAllChanges));
        });
    };
