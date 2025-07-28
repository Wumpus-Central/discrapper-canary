n.d(t, { Z: () => r });
var i = n(255367),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(249274);
function r(e) {
    let { icon: t, title: n, onClick: a, active: r } = e;
    return (0, i.jsxs)(s.P3F, {
        className: o()(l.item, r && l.active),
        onClick: a,
        children: [
            (0, i.jsx)(t, {
                color: 'currentColor',
                size: 'refresh_sm'
            }),
            n
        ]
    });
}
