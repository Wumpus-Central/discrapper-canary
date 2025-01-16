var i = r(200651);
r(192379);
var a = r(481060),
    s = r(99690),
    o = r(388032),
    l = r(729093);
let u = (e) => {
    let { user: n } = e;
    return (0, i.jsxs)('div', {
        className: l.container,
        children: [
            (0, i.jsx)(a.Heading, {
                className: l.header,
                variant: 'heading-sm/semibold',
                children: o.intl.string(o.t['Rsth7+'])
            }),
            (0, i.jsx)('div', {
                className: l.userContainer,
                children: (0, i.jsxs)('div', {
                    className: l.userInfo,
                    children: [
                        (0, i.jsx)(s.Z, {
                            className: l.userIcon,
                            user: n,
                            size: a.AvatarSizes.SIZE_40
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                null != n.globalName &&
                                    (0, i.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: n.globalName
                                    }),
                                (0, i.jsx)(a.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: n.username
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
n.Z = u;
