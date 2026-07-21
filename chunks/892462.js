"use strict";
n.d(t, { _: () => a });
var i = n(885386),
    r = n(352505);
function a(e) {
    let t = r.r.getConfig({ location: e });
    return { ...t, enabled: t.enabled && i.BQ.getSetting() };
}
