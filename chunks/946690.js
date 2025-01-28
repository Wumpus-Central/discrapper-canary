var i = n(200651);
n(192379);
var r = n(120356),
    s = n.n(r),
    a = n(481060),
    l = n(441685),
    o = n(297247);
t.Z = (e) => {
    let { icon: t, iconClassName: n, header: r, description: c } = e;
    return (0, i.jsxs)('div', {
        className: s()(o.container, l.box),
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
                    (0, i.jsx)(a.Heading, {
                        variant: 'heading-md/bold',
                        className: o.header,
                        children: (0, i.jsx)(a.HeadingLevel, { children: r })
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: c
                    })
                ]
            })
        ]
    });
};
