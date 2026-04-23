"use strict";
n.d(t, { A: () => a });
var r = n(702072),
    i = n(582062),
    s = n(652938);
let a = function (e, t, n) {
    if (r.A.randomUUID && !t && !e) return r.A.randomUUID();
    let a = (e = e || {}).random || (e.rng || i.A)();
    if (((a[6] = (15 & a[6]) | 64), (a[8] = (63 & a[8]) | 128), t)) {
        n = n || 0;
        for (let e = 0; e < 16; ++e) t[n + e] = a[e];
        return t;
    }
    return (0, s.k)(a);
};
