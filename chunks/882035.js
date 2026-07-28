"use strict";
n.d(t, { h: () => c, n: () => l });
var r = n(582128),
    i = n(97729),
    a = n(976245);
let { useSyncExternalStoreWithSelector: o } = i,
    s = (e) => e;
function l(e, t = s, n) {
    let i = o(e.subscribe, e.getState, e.getInitialState, t, n);
    return r.useDebugValue(i), i;
}
let u = (e, t) => {
        let n = (0, a.y)(e),
            r = (e, r = t) => l(n, e, r);
        return Object.assign(r, n), r;
    },
    c = (e, t) => (e ? u(e, t) : u);
