a.d(e, {
    V: () => o,
    y: () => n
});
var r = a(370336);
let _ = '_sentryMetrics';
function n(t) {
    let e = t[_];
    if (!e) return;
    let a = {};
    for (let [, [t, _]] of e) (a[t] || (a[t] = [])).push((0, r.Jr)(_));
    return a;
}
function o(t, e, a, r, n, o, i) {
    let c = t[_] || (t[_] = new Map()),
        s = `${e}:${a}@${n}`,
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
