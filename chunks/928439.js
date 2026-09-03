n.d(t, { n: () => s }), n(321073);
var i = n(228366);
let r = {},
    a = !1;
function s(e) {
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
    i.h.addInterceptor(l);
}
function l(e) {
    if ((("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (a = !0), e.type in r)) {
        let t = [];
        for (let n of r[e.type]) !a && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (r[e.type] = t) : delete r[e.type];
    }
    return !1;
}
