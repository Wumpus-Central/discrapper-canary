_.d(e, {
    V: () => o,
    y: () => n,
});
var a = _(370336);
let r = "_sentryMetrics";
function n(t) {
    let e = t[r];
    if (!e) return;
    let _ = {};
    for (let [, [t, r]] of e) (_[t] || (_[t] = [])).push((0, a.Jr)(r));
    return _;
}
function o(t, e, _, a, n, o, E) {
    let i = t[r] || (t[r] = new Map()),
        c = `${e}:${_}@${n}`,
        s = i.get(E);
    if (s) {
        let [, t] = s;
        i.set(E, [
            c,
            {
                min: Math.min(t.min, a),
                max: Math.max(t.max, a),
                count: (t.count += 1),
                sum: (t.sum += a),
                tags: t.tags,
            },
        ]);
    } else
        i.set(E, [
            c,
            {
                min: a,
                max: a,
                count: 1,
                sum: a,
                tags: o,
            },
        ]);
}
