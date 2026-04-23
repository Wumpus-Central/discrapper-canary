"use strict";
n.d(t, { B: () => s, J: () => a });
var r = n(630449),
    i = n(326447),
    o = n(272469);
function a(e, t) {
    !0 === t.debug &&
        (i.T
            ? o.vF.enable()
            : (0, o.pq)(() => {
                  console.warn("[Sentry] Cannot initialize SDK with `debug` option using a non-debug bundle.");
              })),
        (0, r.o5)().update(t.initialScope);
    let n = new e(t);
    return s(n), n.init(), n;
}
function s(e) {
    (0, r.o5)().setClient(e);
}
