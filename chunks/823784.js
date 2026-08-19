"use strict";
n.d(t, { $N: () => s, l6: () => l, tv: () => o });
var i = n(132500),
    r = n(604594);
let a = null;
function s() {
    let e = Date.now();
    return null == a
        ? {
              searchSession: (a = { uuid: (0, i.A)(), createdAtTimestamp: e, lastUsedTimestamp: e, version: r.Ir }),
              isNew: !0,
          }
        : ((a.lastUsedTimestamp = e), { searchSession: a, isNew: !1 });
}
function l() {
    a = null;
}
function o() {
    return a;
}
