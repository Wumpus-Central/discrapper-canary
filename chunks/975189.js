n.d(t, { KY: () => i, Sm: () => a, b4: () => c, ng: () => o });
let r = new Map();
function i(e) {
    return r.get(e);
}
function a(e, t) {
    r.set(e, t);
}
function o(e) {
    r.delete(e);
}
function c(e, t, n) {
    let i = r.get(e);
    try {
        if (null == i) throw Error("Not connected");
        return (n(i), !0);
    } catch (e) {
        return (console.error(`[vibegrations] ${t} send failed`, e), !1);
    }
}
