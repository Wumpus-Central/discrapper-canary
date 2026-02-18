"use strict";
n.d(t, { A: () => s });
var r = n(284009),
    i = n.n(r);
function s(e, t) {
    if ((i()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
    let n = e.length / t,
        r = [],
        s = 0;
    for (; r.length < t; ) {
        let t = Math.round((r.length + 1) * n),
            i = 0,
            a = 0;
        for (let n = s; n < t && n < e.length; n++) (i += e[n]), a++;
        (r[r.length] = i / a), (s = t);
    }
    return r;
}
