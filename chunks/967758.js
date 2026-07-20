"use strict";
n.d(t, { A: () => r });
var i = n(515718);
function r(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : window,
        { innerWidth: r, innerHeight: a } = n,
        s = r - (e ? 76 : 24) * 2,
        l = a - 176;
    if (!(0, i.eJ)(t)) return { width: s, height: l };
    let { width: o, height: d } = t,
        c = (0, i.Uj)({ width: o, height: d, maxWidth: s, maxHeight: l }),
        u = (0, i.Uj)({ width: o, height: d, maxWidth: r - 544, maxHeight: a - (e ? 88 : 36) * 2 });
    return c.width >= u.width ? c : u;
}
