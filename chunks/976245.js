"use strict";
r.d(t, { y: () => o });
let n = (e) => {
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
    o = (e) => (e ? n(e) : n);
