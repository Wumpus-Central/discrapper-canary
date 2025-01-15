var i = n(200651);
n(192379);
var s = n(120356),
    r = n.n(s),
    a = n(481060),
    l = n(297247);
t.Z = (e) => {
    let { icon: t, iconClassName: n, header: s, description: o } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)('div', {
                className: l.circle,
                children: (0, i.jsx)(t, {
                    className: r()(l.icon, n),
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
                        className: l.header,
                        children: (0, i.jsx)(a.HeadingLevel, { children: s })
                    }),
                    (0, i.jsx)(a.Text, {
                        variant: 'text-sm/medium',
                        color: 'text-muted',
                        children: o
                    })
                ]
            })
        ]
    });
};
