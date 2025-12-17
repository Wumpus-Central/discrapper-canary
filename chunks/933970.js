n.d(t, { Z: () => c });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    o = n(28664),
    s = n(481060),
    l = n(209731);
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
