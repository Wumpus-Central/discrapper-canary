"use strict";
r.d(t, { v: () => a });
var n = r(582128);
let o = (e) => {
        let t,
            r = new Set(),
            n = (e, n) => {
                let o = "function" == typeof e ? e(t) : e;
                if (!Object.is(o, t)) {
                    let e = t;
                    (t = (null != n ? n : "object" != typeof o || null === o) ? o : Object.assign({}, t, o)),
                        r.forEach((r) => r(t, e));
                }
            },
            o = () => t,
            i = { setState: n, getState: o, getInitialState: () => a, subscribe: (e) => (r.add(e), () => r.delete(e)) },
            a = (t = e(n, o, i));
        return i;
    },
    i = (e) => {
        let t = e ? o(e) : o,
            r = (e) =>
                (function (e, t = (e) => e) {
                    let r = n.useSyncExternalStore(
                        e.subscribe,
                        () => t(e.getState()),
                        () => t(e.getInitialState()),
                    );
                    return n.useDebugValue(r), r;
                })(t, e);
        return Object.assign(r, t), r;
    },
    a = (e) => (e ? i(e) : i);
