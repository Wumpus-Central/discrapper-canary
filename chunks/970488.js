"use strict";
r.d(t, { A: () => a });
var l = r(627968),
    s = r(261225),
    n = r(882724);
let a = (e) => {
    let { children: t, columns: r = 1, rows: a = 1 } = e,
        i = Math.max(1, Math.min(s.Mm, Math.floor(r))),
        c = Math.max(1, Math.min(s.Mm, Math.floor(a))),
        u = n[`gridItemColumns${i}`],
        d = n[`gridItemRows${c}`];
    return (0, l.jsx)("div", { className: `${n.gridItem} ${u} ${d}`, children: t });
};
