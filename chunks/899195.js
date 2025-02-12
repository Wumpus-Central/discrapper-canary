a.d(e, {
    V: () => o,
    y: () => _
});
var r = a(370336);
let n = '_sentryMetrics';
function _(t) {
    let e = t[n];
    if (!e) return;
    let a = {};
    for (let [, [t, n]] of e) (a[t] || (a[t] = [])).push((0, r.Jr)(n));
    return a;
}
function o(t, e, a, r, _, o, i) {
    let c = t[n] || (t[n] = new Map()),
        s = `${e}:${a}@${_}`,
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
                tags: o
            }
        ]);
}
