n.d(t, {
    A: () => o,
});
var r = n(627968),
    i = n(261225),
    a = n(266341);
let o = (e) => {
    let { children: t, columns: n = 1, rows: o = 1 } = e,
        s = Math.max(1, Math.min(i.M, Math.floor(n))),
        l = Math.max(1, Math.min(i.M, Math.floor(o))),
        c = a["gridItemColumns".concat(s)],
        u = a["gridItemRows".concat(l)];
    return (0, r.jsx)("div", {
        className: "".concat(a.gridItem, " ").concat(c, " ").concat(u),
        children: t,
    });
};
