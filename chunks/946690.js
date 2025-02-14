n.d(t, { Z: () => c });
var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    l = n(481060),
    a = n(308803),
    o = n(300025);
let c = (e) => {
    let { icon: t, iconClassName: n, header: s, description: c } = e;
    return (0, i.jsxs)('div', {
        className: r()(o.container, a.box),
        children: [
            (0, i.jsx)('div', {
                className: o.circle,
                children: (0, i.jsx)(t, {
                    className: r()(o.icon, n),
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
                        children: (0, i.jsx)(l.y5t, { children: s })
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
