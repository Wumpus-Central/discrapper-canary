n.d(t, { Z: () => c }), n(953529);
var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    l = n(481060),
    a = n(589608),
    o = n(270434);
let c = (e) => {
    let { icon: t, iconClassName: n, header: r, description: c } = e;
    return (0, i.jsxs)('div', {
        className: s()(o.container, a.box),
        children: [
            (0, i.jsx)('div', {
                className: o.circle,
                children: (0, i.jsx)(t, {
                    className: s()(o.icon, n),
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(l.X6q, {
                        variant: 'heading-md/bold',
                        className: o.header,
                        children: (0, i.jsx)(l.y5t, { children: r })
                    }),
                    (0, i.jsx)(l.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: c
                    })
                ]
            })
        ]
    });
};
