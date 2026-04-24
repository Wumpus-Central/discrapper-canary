"use strict";
n.d(t, { A: () => i });
var l = n(515718);
function i(e, t) {
    let n = window.innerWidth - (e ? 76 : 24) * 2,
        i = window.innerHeight - 176;
    if (!(0, l.eJ)(t)) return { width: n, height: i };
    let { width: s, height: a } = t,
        r = window.innerWidth - 544,
        o = window.innerHeight - (e ? 88 : 36) * 2,
        c = (0, l.Uj)({ width: s, height: a, maxWidth: n, maxHeight: i }),
        u = (0, l.Uj)({ width: s, height: a, maxWidth: r, maxHeight: o });
    return c.width >= u.width ? c : u;
}
