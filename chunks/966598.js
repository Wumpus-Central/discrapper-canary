"use strict";
n.d(t, { A: () => r });
var i = n(64700);
function r(e) {
    let t = e?.getBoundingClientRect(),
        n = t?.left,
        r = t?.top;
    return (0, i.useMemo)(() => (null != n && null != r ? { x: n, y: r } : null), [n, r]);
}
