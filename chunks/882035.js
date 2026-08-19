"use strict";
r.d(t, { h: () => c, n: () => l });
var n = r(582128),
    o = r(97729),
    i = r(976245);
let { useSyncExternalStoreWithSelector: a } = o,
    s = (e) => e;
function l(e, t = s, r) {
    let o = a(e.subscribe, e.getState, e.getInitialState, t, r);
    return n.useDebugValue(o), o;
}
let u = (e, t) => {
        let r = (0, i.y)(e),
            n = (e, n = t) => l(r, e, n);
        return Object.assign(n, r), n;
    },
    c = (e, t) => (e ? u(e, t) : u);
