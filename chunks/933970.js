n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(510047);
function o(e) {
    let { icon: t, tooltip: n, onClick: s, className: o } = e,
        c = (e) => {
            e.preventDefault(), e.stopPropagation(), s(e);
        };
    return (0, i.jsx)(l.ua7, {
        text: n,
        children: (e) =>
            (0, i.jsx)(l.P3F, {
                ...e,
                'aria-label': n,
                onClick: c,
                className: r()(a.actionButton, o),
                children: (0, i.jsx)(t, {
                    className: a.icon,
                    color: 'currentColor'
                })
            })
    });
}
