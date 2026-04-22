"use strict";
n.d(t, { A: () => s });
var i = n(284009),
    l = n.n(i);
function s(e, t) {
    if ((l()(e.length >= t, "Waveform smaller than samples"), e.length === t)) return e;
    let n = e.length / t,
        i = [],
        s = 0;
    for (; i.length < t; ) {
        let t = Math.round((i.length + 1) * n),
            l = 0,
            r = 0;
        for (let n = s; n < t && n < e.length; n++) (l += e[n]), r++;
        (i[i.length] = l / r), (s = t);
    }
    return i;
}
