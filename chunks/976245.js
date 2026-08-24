"use strict";
r.d(t, { y: () => i });
let n = (e) => {
        let t,
            r = new Set(),
            n = (e, n) => {
                let i = "function" == typeof e ? e(t) : e;
                if (!Object.is(i, t)) {
                    let e = t;
                    (t = (null != n ? n : "object" != typeof i || null === i) ? i : Object.assign({}, t, i)),
                        r.forEach((r) => r(t, e));
                }
            },
            i = () => t,
            o = { setState: n, getState: i, getInitialState: () => a, subscribe: (e) => (r.add(e), () => r.delete(e)) },
            a = (t = e(n, i, o));
        return o;
    },
    i = (e) => (e ? n(e) : n);
