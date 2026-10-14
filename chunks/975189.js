n.d(t, { KY: () => o, Sm: () => a, b4: () => c, ng: () => i });
let r = new Map();
function o(e) {
    return r.get(e);
}
function a(e, t) {
    r.set(e, t);
}
function i(e) {
    r.delete(e);
}
function c(e, t, n) {
    let o = r.get(e);
    try {
        if (null == o) throw Error("Not connected");
        return (n(o), !0);
    } catch (e) {
        return (console.error(`[conjure] ${t} send failed`, e), !1);
    }
}
