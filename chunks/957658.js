"use strict";
n.d(t, { A: () => o, E: () => l });
var i = n(17928),
    r = n(738566),
    a = n(453028),
    s = n(731854);
function l(e) {
    let { enabled: t } = r.A.getConfig({ location: e }),
        n = a.Ay.supports(s.O5.SPATIAL_AUDIO);
    return t && n;
}
function o(e) {
    let { enabled: t } = r.A.useConfig({ location: e }),
        n = (0, i.bG)([a.Ay], () => a.Ay.supports(s.O5.SPATIAL_AUDIO));
    return t && n;
}
