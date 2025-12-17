n.d(t, { Z: () => d });
var i = n(54381);
n(473749);
var r = n(120356),
    a = n.n(r),
    s = n(382790),
    o = n(430036),
    l = n(518084),
    c = n(148078);
function d(e) {
    let { dragStart: t, dragging: n, pinned: r, locked: d, className: u } = e;
    return (0, i.jsxs)(l.ZP, {
        className: a()(c.wrapper, u),
        children: [
            (0, i.jsx)(s.Z, {
                contained: !0,
                dragStart: t,
                locked: d,
            }),
            (0, i.jsx)(o.Z, {
                dragStart: t,
                locked: d,
                pinned: r,
                dragging: n,
                contained: !0,
            }),
        ],
    });
}
