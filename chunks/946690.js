n.d(t, { Z: () => c }), n(266796);
var r = n(200651);
n(192379);
var i = n(120356),
    s = n.n(i),
    a = n(481060),
    l = n(589608),
    o = n(270434);
let c = (e) => {
    let { icon: t, iconClassName: n, header: i, description: c } = e;
    return (0, r.jsxs)('div', {
        className: s()(o.container, l.box),
        children: [
            (0, r.jsx)('div', {
                className: o.circle,
                children: (0, r.jsx)(t, {
                    className: s()(o.icon, n),
                    size: 'custom',
                    width: 20,
                    height: 20,
                    color: 'currentColor'
                })
            }),
            (0, r.jsxs)('div', {
                children: [
                    (0, r.jsx)(a.X6q, {
                        variant: 'heading-md/bold',
                        className: o.header,
                        children: (0, r.jsx)(a.y5t, { children: i })
                    }),
                    (0, r.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: c
                    })
                ]
            })
        ]
    });
};
