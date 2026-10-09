(n.d(e, { WO: () => i, XZ: () => s, hN: () => u }), n(321073), n(134528), n(947204));
let l = new Map();
function u(t, e) {
    let n = (l.get(t) ?? []).filter((t) => t !== e);
    (n.push(e), l.set(t, n));
}
function i(t, e) {
    let n = l.get(t)?.filter((t) => t !== e);
    null == n || 0 === n.length ? l.delete(t) : l.set(t, n);
}
function s(t) {
    return l.get(t)?.at(-1) ?? null;
}
