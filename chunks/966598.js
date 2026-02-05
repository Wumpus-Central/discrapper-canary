"use strict";
n.d(t, { A: () => i });
var r = n(64700);
function i(e) {
    let t = e?.getBoundingClientRect(),
        n = t?.left,
        i = t?.top;
    return (0, r.useMemo)(() => (null != n && null != i ? { x: n, y: i } : null), [n, i]);
}
