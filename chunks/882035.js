r.d(t, { h: () => c, n: () => l });
var n = r(582128),
    i = r(97729),
    o = r(976245);
let { useSyncExternalStoreWithSelector: a } = i,
    s = (e) => e;
function l(e, t = s, r) {
    let i = a(e.subscribe, e.getState, e.getInitialState, t, r);
    return n.useDebugValue(i), i;
}
let u = (e, t) => {
        let r = (0, o.y)(e),
            n = (e, n = t) => l(r, e, n);
        return Object.assign(n, r), n;
    },
    c = (e, t) => (e ? u(e, t) : u);
