n.d(t, { KY: () => o, Sm: () => i, b4: () => c, ng: () => a });
let r = new Map();
function o(e) {
    return r.get(e);
}
function i(e, t) {
    r.set(e, t);
}
function a(e) {
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
