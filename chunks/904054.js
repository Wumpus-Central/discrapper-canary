"use strict";
n.d(t, { A: () => s });
var i = n(885386),
    r = n(453028),
    a = n(824744);
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (i.dG.getSetting()?.volume ?? 100);
    return Math.min(e * ((0, a.M)(t) / 100) * Math.min(r.Ay.getOutputVolume() / 100, 1), 1);
}
