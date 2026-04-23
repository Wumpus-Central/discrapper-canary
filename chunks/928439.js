"use strict";
n.d(t, { n: () => a }), n(321073);
var r = n(73153);
let i = {},
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
                    n in i || (i[n] = []), i[n].push(e);
            })(n);
    }
    r.h.addInterceptor(o);
}
function o(e) {
    if ((("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (s = !0), e.type in i)) {
        let t = [];
        for (let n of i[e.type]) !s && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (i[e.type] = t) : delete i[e.type];
    }
    return !1;
}
