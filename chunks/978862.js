"use strict";
n.d(t, { B: () => i, O: () => r });
let r = globalThis;
function i(e, t, n) {
    let i = n || r,
        s = (i.__SENTRY__ = i.__SENTRY__ || {}),
        a = (s["8.55.0"] = s["8.55.0"] || {});
    return a[e] || (a[e] = t());
}
