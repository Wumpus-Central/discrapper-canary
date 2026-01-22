n.d(t, { n: () => s }), n(896048), n(638769), n(65821), n(321073);
var r = n(73153);
let i = {},
    a = !1;
function s(e) {
    for (let t in e) {
        let n = e[t];
        o(t, n), l(n);
    }
    r.h.addInterceptor(c);
}
function o(e, t) {
    var n;
    t.actions;
}
function l(e) {
    var t;
    let n = null != (t = e.actions) ? t : [];
    for (let t of ((e.hasStoreChangeListeners || e.loadAfterConnectionOpen) &&
        (n.includes("POST_CONNECTION_OPEN") || (n = [...n, "POST_CONNECTION_OPEN"]),
        n.includes("OVERLAY_INITIALIZE") || (n = [...n, "OVERLAY_INITIALIZE"])),
    e.loadRightBeforeConnectionOpen &&
        (n.includes("CONNECTION_OPEN") || (n = [...n, "CONNECTION_OPEN"]),
        n.includes("OVERLAY_INITIALIZE") || (n = [...n, "OVERLAY_INITIALIZE"])),
    n))
        t in i || (i[t] = []), i[t].push(e);
}
function c(e) {
    if ((("CONNECTION_OPEN" === e.type || "OVERLAY_INITIALIZE" === e.type) && (a = !0), e.type in i)) {
        let t = [];
        for (let n of i[e.type]) !a && n.neverLoadBeforeConnectionOpen ? t.push(n) : n.inlineRequire().initialize();
        t.length > 0 ? (i[e.type] = t) : delete i[e.type];
    }
    return !1;
}
