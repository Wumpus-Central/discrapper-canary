"use strict";
n.d(t, { B: () => r, O: () => i });
let i = globalThis;
function r(e, t, n) {
    let r = n || i,
        s = (r.__SENTRY__ = r.__SENTRY__ || {}),
        a = (s["8.55.0"] = s["8.55.0"] || {});
    return a[e] || (a[e] = t());
}
