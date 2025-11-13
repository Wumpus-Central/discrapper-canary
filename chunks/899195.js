a.d(e, {
    V: () => o,
    y: () => n,
});
var r = a(370336);
let _ = "_sentryMetrics";
function n(t) {
    let e = t[_];
    if (!e) return;
    let a = {};
    for (let [, [t, _]] of e) (a[t] || (a[t] = [])).push((0, r.Jr)(_));
    return a;
}
function o(t, e, a, r, n, o, i) {
    let E = t[_] || (t[_] = new Map()),
        c = `${e}:${a}@${n}`,
        s = E.get(i);
    if (s) {
        let [, t] = s;
        E.set(i, [
            c,
            {
                min: Math.min(t.min, r),
                max: Math.max(t.max, r),
                count: (t.count += 1),
                sum: (t.sum += r),
                tags: t.tags,
            },
        ]);
    } else
        E.set(i, [
            c,
            {
                min: r,
                max: r,
                count: 1,
                sum: r,
                tags: o,
            },
        ]);
}
