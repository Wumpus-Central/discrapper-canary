"use strict";
n.d(t, { A: () => s });
var r = n(627968),
    i = n(261225),
    a = n(266341);
let s = (e) => {
    let { children: t, columns: n = 1, rows: s = 1 } = e,
        o = Math.max(1, Math.min(i.M, Math.floor(n))),
        l = Math.max(1, Math.min(i.M, Math.floor(s))),
        u = a[`gridItemColumns${o}`],
        c = a[`gridItemRows${l}`];
    return (0, r.jsx)("div", { className: `${a.gridItem} ${u} ${c}`, children: t });
};
