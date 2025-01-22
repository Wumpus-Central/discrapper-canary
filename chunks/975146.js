n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    l = n.n(r),
    a = n(481060),
    o = n(871499),
    s = n(388032),
    c = n(273128);
function u(e) {
    let { className: t, count: n } = e;
    return (0, i.jsxs)('div', {
        className: l()(c.root, c.comboIcon, t),
        children: [
            (0, i.jsx)(a.GroupIcon, {
                size: 'md',
                color: 'currentColor',
                className: c.icon
            }),
            null != n &&
                (0, i.jsx)(a.Text, {
                    color: 'none',
                    className: c.count,
                    variant: 'text-md/normal',
                    children: n
                })
        ]
    });
}
function d(e) {
    let { count: t, ...n } = e;
    return (0, i.jsx)(o.Z, {
        label: s.intl.string(s.t.jNqDh4),
        iconComponent: (e) => {
            let { className: n } = e;
            return (0, i.jsx)(u, {
                className: n,
                count: t
            });
        },
        tooltipPosition: 'bottom',
        ...n
    });
}
