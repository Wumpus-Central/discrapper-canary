n.d(t, { Z: () => l });
var a = n(255367),
    i = n(120356),
    r = n.n(i),
    s = n(481060),
    o = n(249274);
function l(e) {
    let { icon: t, title: n, onClick: i, active: l } = e;
    return (0, a.jsxs)(s.P3F, {
        className: r()(o.item, l && o.active),
        onClick: i,
        children: [
            (0, a.jsx)(t, {
                color: 'currentColor',
                size: 'refresh_sm'
            }),
            n
        ]
    });
}
