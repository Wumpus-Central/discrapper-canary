"use strict";
n.d(t, { A: () => a });
var r = n(258585),
    i = n(787931),
    s = n(753070);
function a(e, t, n, a, o, l) {
    if (e === s.jQ.PRESET_AUTO) return (0, r.eO)({ location: "canStreamWithSettings" }).allowAutoQuality;
    for (let r of s.ZV)
        if ((null == r.preset || e === r.preset) && t === r.resolution && n === r.fps && (0, i.A)(r, a, o, l))
            return !0;
    return !1;
}
