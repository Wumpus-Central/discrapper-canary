"use strict";
n.d(t, { A: () => l });
var i = n(515718);
function l(e, t) {
    let n = window.innerWidth - (e ? 76 : 24) * 2,
        l = window.innerHeight - 176;
    if (!(0, i.eJ)(t)) return { width: n, height: l };
    let { width: s, height: r } = t,
        a = window.innerWidth - 544,
        o = window.innerHeight - (e ? 88 : 36) * 2,
        c = (0, i.Uj)({ width: s, height: r, maxWidth: n, maxHeight: l }),
        u = (0, i.Uj)({ width: s, height: r, maxWidth: a, maxHeight: o });
    return c.width >= u.width ? c : u;
}
