n.d(t, { Z: () => d });
var i = n(951288);
n(647438);
var r = n(120356),
    l = n.n(r),
    o = n(382790),
    s = n(430036),
    a = n(518084),
    c = n(796959);
function d(e) {
    let { dragStart: t, dragging: n, pinned: r, locked: d, className: u } = e;
    return (0, i.jsxs)(a.ZP, {
        className: l()(c.wrapper, u),
        children: [
            (0, i.jsx)(o.Z, {
                contained: !0,
                dragStart: t,
                locked: d,
            }),
            (0, i.jsx)(s.Z, {
                dragStart: t,
                locked: d,
                pinned: r,
                dragging: n,
                contained: !0,
            }),
        ],
    });
}
