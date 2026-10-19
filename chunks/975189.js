n.d(t, { KY: () => r, Sm: () => a, b4: () => l, ng: () => s });
let i = new Map();
function r(e) {
    return i.get(e);
}
function a(e, t) {
    i.set(e, t);
}
function s(e) {
    i.delete(e);
}
function l(e, t, n) {
    let r = i.get(e);
    try {
        if (null == r) throw Error("Not connected");
        return (n(r), !0);
    } catch (e) {
        return (console.error(`[conjure] ${t} send failed`, e), !1);
    }
}
