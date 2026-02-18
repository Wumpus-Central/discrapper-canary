t.d(r, { A: () => o });
var d = t(627968),
    l = t(261225),
    c = t(266341);
let o = (e) => {
    let { children: r, columns: t = 1, rows: o = 1 } = e,
        a = Math.max(1, Math.min(l.M, Math.floor(t))),
        n = Math.max(1, Math.min(l.M, Math.floor(o))),
        s = c[`gridItemColumns${a}`],
        u = c[`gridItemRows${n}`];
    return (0, d.jsx)("div", { className: `${c.gridItem} ${s} ${u}`, children: r });
};
