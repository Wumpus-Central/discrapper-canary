n.d(t, { KY: () => a, Sm: () => i, b4: () => c, ng: () => o });
let r = new Map();
function a(e) {
    return r.get(e);
}
function i(e, t) {
    r.set(e, t);
}
function o(e) {
    r.delete(e);
}
function c(e, t, n) {
    let a = r.get(e);
    try {
        if (null == a) throw Error("Not connected");
        return (n(a), !0);
    } catch (e) {
        return (console.error(`[vibegrations] ${t} send failed`, e), !1);
    }
}
