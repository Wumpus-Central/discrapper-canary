n.d(t, { Z: () => l });
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(99690),
    s = n(388032),
    o = n(729093);
let l = (e) => {
    let { user: t } = e;
    return (0, i.jsxs)('div', {
        className: o.container,
        children: [
            (0, i.jsx)(r.X6q, {
                className: o.header,
                variant: 'heading-sm/semibold',
                children: s.intl.string(s.t['Rsth7+'])
            }),
            (0, i.jsx)('div', {
                className: o.userContainer,
                children: (0, i.jsxs)('div', {
                    className: o.userInfo,
                    children: [
                        (0, i.jsx)(a.Z, {
                            className: o.userIcon,
                            user: t,
                            size: r.EFr.SIZE_40
                        }),
                        (0, i.jsxs)('div', {
                            children: [
                                null != t.globalName &&
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: t.globalName
                                    }),
                                (0, i.jsx)(r.Text, {
                                    color: 'header-secondary',
                                    variant: 'text-sm/normal',
                                    children: t.username
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
