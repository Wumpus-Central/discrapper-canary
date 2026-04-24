"use strict";
n.d(t, { A: () => i });
var l = n(64700);
function i(e) {
    let t = e?.getBoundingClientRect(),
        n = t?.left,
        i = t?.top;
    return (0, l.useMemo)(() => (null != n && null != i ? { x: n, y: i } : null), [n, i]);
}
