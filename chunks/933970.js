n.d(t, { Z: () => c });
var r = n(951288);
n(647438);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(489719);
function c(e) {
    let { icon: t, tooltip: n, onClick: i, className: c } = e,
        u = (e) => {
            e.preventDefault(), e.stopPropagation(), i(e);
        };
    return (0, r.jsx)(o.u, {
        text: n,
        children: (0, r.jsx)(s.P3F, {
            "aria-label": n,
            onClick: u,
            className: a()(l.actionButton, c),
            children: (0, r.jsx)(t, {
                className: l.icon,
                color: "currentColor",
            }),
        }),
    });
}
