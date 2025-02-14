n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var s = n(120356),
    l = n.n(s),
    a = n(382790),
    o = n(430036),
    r = n(518084),
    d = n(829501);
function c(e) {
    let { dragStart: t, dragging: n, pinned: s, locked: c, className: u } = e;
    return (0, i.jsxs)(r.ZP, {
        className: l()(d.wrapper, u),
        children: [
            (0, i.jsx)(a.Z, {
                contained: !0,
                dragStart: t,
                locked: c
            }),
            (0, i.jsx)(o.Z, {
                dragStart: t,
                locked: c,
                pinned: s,
                dragging: n,
                contained: !0
            })
        ]
    });
}
