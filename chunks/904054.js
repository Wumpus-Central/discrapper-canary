"use strict";
n.d(t, { A: () => a });
var i = n(885386),
    r = n(235058),
    s = n(824744);
function a(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : (i.dG.getSetting()?.volume ?? 100);
    return Math.min(e * ((0, s.M)(t) / 100) * Math.min(r.Ay.getOutputVolume() / 100, 1), 1);
}
