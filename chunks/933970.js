n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(510047);
function o(e) {
    let { icon: t, tooltip: n, onClick: s, className: o } = e,
        c = (e) => {
            e.preventDefault(), e.stopPropagation(), s(e);
        };
    return (0, i.jsx)(a.Tooltip, {
        text: n,
        children: (e) =>
            (0, i.jsx)(a.Clickable, {
                ...e,
                'aria-label': n,
                onClick: c,
                className: r()(l.actionButton, o),
                children: (0, i.jsx)(t, {
                    className: l.icon,
                    color: 'currentColor'
                })
            })
    });
}
