n.d(t, { Z: () => o });
var l = n(200651);
n(192379);
var i = n(481060),
    r = n(99690),
    a = n(388032),
    s = n(761309);
let o = (e) => {
    let { user: t } = e;
    return (0, l.jsxs)('div', {
        className: s.container,
        children: [
            (0, l.jsx)(i.X6q, {
                className: s.header,
                variant: 'heading-sm/semibold',
                children: a.intl.string(a.t['Rsth7+'])
            }),
            (0, l.jsx)('div', {
                className: s.userContainer,
                children: (0, l.jsxs)('div', {
                    className: s.userInfo,
                    children: [
                        (0, l.jsx)(r.Z, {
                            className: s.userIcon,
                            user: t,
                            size: i.EFr.SIZE_40
                        }),
                        (0, l.jsxs)('div', {
                            children: [
                                null != t.globalName &&
                                    (0, l.jsx)(i.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: t.globalName
                                    }),
                                (0, l.jsx)(i.Text, {
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
