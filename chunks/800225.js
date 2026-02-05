"use strict";
r.d(t, { A: () => n });
let n = function (e, t) {
    for (var r = -1, n = null == e ? 0 : e.length, o = Array(n); ++r < n; ) o[r] = t(e[r], r, e);
    return o;
};
