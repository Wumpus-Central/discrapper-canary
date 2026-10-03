n.d(t, { Q: () => o, l: () => u });
var l = n(582128);
let a = new Set(),
    i = new Set();
function s() {
    for (let e of i) e();
}
function r(e) {
    return (
        i.add(e),
        () => {
            i.delete(e);
        }
    );
}
async function o(e, t) {
    if (a.has(e)) return null;
    (a.add(e), s());
    try {
        return await t();
    } finally {
        (a.delete(e), s());
    }
}
function u(e) {
    let t = l.useCallback(() => a.has(e), [e]);
    return l.useSyncExternalStore(r, t);
}
