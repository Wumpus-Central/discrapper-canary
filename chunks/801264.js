"use strict";
n.d(t, { A: () => d, k: () => l });
var r = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(51130),
    l = (function (e) {
        return (e.INFO = "info"), (e.WARNING = "warning"), e;
    })({});
let u = { info: o.pq, warning: o.$e },
    c = { info: s.mir, warning: s.EpV };
function d(e) {
    let { children: t, className: n, look: i = "info" } = e,
        l = c[i];
    return (0, r.jsxs)("div", {
        className: a()(o.zr, n, u[i]),
        children: [
            (0, r.jsx)(l, { className: o.Kk, color: "currentColor" }),
            (0, r.jsx)(s.Text, { className: o.Qq, variant: "text-sm/medium", color: "text-default", children: t }),
        ],
    });
}
