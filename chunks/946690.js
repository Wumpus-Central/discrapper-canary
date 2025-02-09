n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    s = n(481060),
    l = n(401549),
    o = n(132515);
let c = (e) => {
    let { icon: t, iconClassName: n, header: r, description: c } = e;
    return (0, i.jsxs)('div', {
        className: a()(o.container, l.box),
        children: [
            (0, i.jsx)('div', {
                className: o.circle,
                children: (0, i.jsx)(t, {
                    className: a()(o.icon, n),
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, i.jsxs)('div', {
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: 'heading-md/bold',
                        className: o.header,
                        children: (0, i.jsx)(s.y5t, { children: r })
                    }),
                    (0, i.jsx)(s.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: c
                    })
                ]
            })
        ]
    });
};
