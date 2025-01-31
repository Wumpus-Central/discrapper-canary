a.d(e, {
    V: () => _,
    y: () => o
});
var r = a(370336);
let n = '_sentryMetrics';
function o(t) {
    let e = t[n];
    if (!e) return;
    let a = {};
    for (let [, [t, n]] of e) (a[t] || (a[t] = [])).push((0, r.Jr)(n));
    return a;
}
function _(t, e, a, r, o, _, i) {
    let c = t[n] || (t[n] = new Map()),
        s = `${e}:${a}@${o}`,
        E = c.get(i);
    if (E) {
        let [, t] = E;
        c.set(i, [
            s,
            {
                min: Math.min(t.min, r),
                max: Math.max(t.max, r),
                count: (t.count += 1),
                sum: (t.sum += r),
                tags: t.tags
            }
        ]);
    } else
        c.set(i, [
            s,
            {
                min: r,
                max: r,
                count: 1,
                sum: r,
                tags: _
            }
        ]);
}
