"use strict";
n.d(t, { A: () => s });
var r = n(702072),
    i = n(582062),
    a = n(652938);
let s = function (e, t, n) {
    if (r.A.randomUUID && !t && !e) return r.A.randomUUID();
    let s = (e = e || {}).random || (e.rng || i.A)();
    if (((s[6] = (15 & s[6]) | 64), (s[8] = (63 & s[8]) | 128), t)) {
        n = n || 0;
        for (let e = 0; e < 16; ++e) t[n + e] = s[e];
        return t;
    }
    return (0, a.k)(s);
};
