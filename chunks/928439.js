"use strict";
n.d(t, { n: () => a }), n(321073);
var i = n(228366);
let r = {},
    s = !1;
function a(e) {
    for (let t in e) {
        let n = e[t];
        n.actions,
            (function (e) {
                let t = e.actions ?? [];
                for (let n of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) &&
                    (t.includes("POST_CONNECTION_OPEN") || (t = [...t, "POST_CONNECTION_OPEN"]),
                    t.includes("OVERLAY_INITIALIZE") || (t = [...t, "OVERLAY_INITIALIZE"])),
                e.loadRightBeforeConnectionOpen &&
                    (t.includes("CONNECTION_OPEN") || (t = [...t, "CONNECTION_OPEN"]),
                    t.includes("OVERLAY_INITIALIZE") || (t = [...t, "OVERLAY_INITIALIZE"])),
                t))
                    n in r || (r[n] = []), r[n].push(e);
            })(n);
    }
    i.h.addInterceptor(o);
}
function o(e) {
    if ((("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (s = !0), e.type in r)) {
        let t = [];
        for (let n of r[e.type]) !s && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (r[e.type] = t) : delete r[e.type];
    }
    return !1;
}
