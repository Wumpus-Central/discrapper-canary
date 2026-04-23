"use strict";
n.d(t, { X: () => a, g: () => o });
var r = n(690094);
let i = "_sentryMetrics";
function o(e) {
    let t = e[i];
    if (!t) return;
    let n = {};
    for (let [, [e, i]] of t) (n[e] || (n[e] = [])).push((0, r.Ce)(i));
    return n;
}
function a(e, t, n, r, o, a, s) {
    let l = e[i] || (e[i] = new Map()),
        c = `${t}:${n}@${o}`,
        u = l.get(s);
    if (u) {
        let [, e] = u;
        l.set(s, [
            c,
            {
                min: Math.min(e.min, r),
                max: Math.max(e.max, r),
                count: (e.count += 1),
                sum: (e.sum += r),
                tags: e.tags,
            },
        ]);
    } else l.set(s, [c, { min: r, max: r, count: 1, sum: r, tags: a }]);
}
