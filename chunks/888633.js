"use strict";
n.d(t, { v: () => o });
var r = n(582128);
let i = (e) => {
        let t,
            n = new Set(),
            r = (e, r) => {
                let i = "function" == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    (t = (null != r ? r : "object" != typeof i || null === i) ? i : Object.assign({}, t, i)),
                        n.forEach((n) => n(t, e));
                }
            },
            i = () => t,
            a = { setState: r, getState: i, getInitialState: () => o, subscribe: (e) => (n.add(e), () => n.delete(e)) },
            o = (t = e(r, i, a));
        return a;
    },
    a = (e) => {
        let t = e ? i(e) : i,
            n = (e) =>
                (function (e, t = (e) => e) {
                    let n = r.useSyncExternalStore(
                        e.subscribe,
                        () => t(e.getState()),
                        () => t(e.getInitialState()),
                    );
                    return r.useDebugValue(n), n;
                })(t, e);
        return Object.assign(n, t), n;
    },
    o = (e) => (e ? a(e) : a);
