"use strict";
n.d(t, { A: () => l });
var r = n(627968),
    i = n(503698),
    s = n.n(i),
    a = n(144911);
let o = { black: a.gU, red: a.Wx };
function l(e) {
    let { color: t = "black", children: n, className: i, style: l } = e;
    return (0, r.jsx)("div", { className: s()(a.PQ, o[t], i), style: l, children: n });
}
