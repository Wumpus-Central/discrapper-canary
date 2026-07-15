"use strict";
n.d(t, { C7: () => r, qS: () => a });
var i = n(926675);
function r(e) {
    if (null == e) return null;
    let t = e.trim().toLowerCase().replaceAll("_", " ").slice(0, 100);
    return t.length > 0 ? t : null;
}
function a(e) {
    return !i.Z.has(e.id);
}
