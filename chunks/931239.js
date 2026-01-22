n.d(t, { v: () => l });
var r = n(64700),
    i = n(93023);
let a = (e) => e;
function s(e, t = a) {
    let n = r.useSyncExternalStore(
        e.subscribe,
        () => t(e.getState()),
        () => t(e.getInitialState()),
    );
    return r.useDebugValue(n), n;
}
let o = (e) => {
        let t = (0, i.y)(e),
            n = (e) => s(t, e);
        return Object.assign(n, t), n;
    },
    l = (e) => (e ? o(e) : o);
