"use strict";
n.d(t, { A: () => u });
var r = n(515718);
let i = 24,
    s = 36,
    a = 76,
    o = 88,
    l = 272;
function u(e, t) {
    let n = window.innerWidth - (e ? a : i) * 2,
        u = window.innerHeight - 2 * o;
    if (!(0, r.eJ)(t)) return { width: n, height: u };
    let { width: c, height: d } = t,
        _ = window.innerWidth - 2 * l,
        f = window.innerHeight - (e ? o : s) * 2,
        p = (0, r.Uj)({ width: c, height: d, maxWidth: n, maxHeight: u }),
        h = (0, r.Uj)({ width: c, height: d, maxWidth: _, maxHeight: f });
    return p.width >= h.width ? p : h;
}
