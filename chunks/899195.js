r.d(t, {
    V: () => o,
    y: () => i,
});
var n = r(370336);
let a = "_sentryMetrics";
function i(e) {
    let t = e[a];
    if (!t) return;
    let r = {};
    for (let [, [e, a]] of t) (r[e] || (r[e] = [])).push((0, n.Jr)(a));
    return r;
}
function o(e, t, r, n, i, o, _) {
    let s = e[a] || (e[a] = new Map()),
        c = `${t}:${r}@${i}`,
        E = s.get(_);
    if (E) {
        let [, e] = E;
        s.set(_, [
            c,
            {
                min: Math.min(e.min, n),
                max: Math.max(e.max, n),
                count: (e.count += 1),
                sum: (e.sum += n),
                tags: e.tags,
            },
        ]);
    } else
        s.set(_, [
            c,
            {
                min: n,
                max: n,
                count: 1,
                sum: n,
                tags: o,
            },
        ]);
}
