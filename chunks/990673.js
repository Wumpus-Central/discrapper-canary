n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    o = n(382790),
    l = n(430036),
    a = n(518084),
    c = n(406231);
function d(e) {
    let { dragStart: t, dragging: n, pinned: r, locked: d, className: u } = e;
    return (0, i.jsxs)(a.ZP, {
        className: s()(c.wrapper, u),
        children: [
            (0, i.jsx)(o.Z, {
                contained: !0,
                dragStart: t,
                locked: d
            }),
            (0, i.jsx)(l.Z, {
                dragStart: t,
                locked: d,
                pinned: r,
                dragging: n,
                contained: !0
            })
        ]
    });
}
