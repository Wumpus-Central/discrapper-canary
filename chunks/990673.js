n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    o = n(382790),
    a = n(430036),
    l = n(518084),
    c = n(176259);
function d(e) {
    let { dragStart: t, dragging: n, pinned: s, locked: d, className: u } = e;
    return (0, i.jsxs)(l.ZP, {
        className: r()(c.wrapper, u),
        children: [
            (0, i.jsx)(o.Z, {
                contained: !0,
                dragStart: t,
                locked: d
            }),
            (0, i.jsx)(a.Z, {
                dragStart: t,
                locked: d,
                pinned: s,
                dragging: n,
                contained: !0
            })
        ]
    });
}
