n.d(t, { Z: () => u });
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    o = n(382790),
    l = n(430036),
    a = n(518084),
    c = n(724194);
function u(e) {
    let { dragStart: t, dragging: n, pinned: r, locked: u, className: d } = e;
    return (0, i.jsxs)(a.ZP, {
        className: s()(c.wrapper, d),
        children: [
            (0, i.jsx)(o.Z, {
                contained: !0,
                dragStart: t,
                locked: u
            }),
            (0, i.jsx)(l.Z, {
                dragStart: t,
                locked: u,
                pinned: r,
                dragging: n,
                contained: !0
            })
        ]
    });
}
