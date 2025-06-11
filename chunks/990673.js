n.d(t, { Z: () => d });
var i = n(255367);
n(73800);
var r = n(120356),
    o = n.n(r),
    l = n(382790),
    s = n(430036),
    a = n(518084),
    c = n(724194);
function d(e) {
    let { dragStart: t, dragging: n, pinned: r, locked: d, className: u } = e;
    return (0, i.jsxs)(a.ZP, {
        className: o()(c.wrapper, u),
        children: [
            (0, i.jsx)(l.Z, {
                contained: !0,
                dragStart: t,
                locked: d
            }),
            (0, i.jsx)(s.Z, {
                dragStart: t,
                locked: d,
                pinned: r,
                dragging: n,
                contained: !0
            })
        ]
    });
}
