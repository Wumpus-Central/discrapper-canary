n.d(t, { Z: () => s });
var r = n(255367);
n(73800);
var a = n(481060),
    i = n(99690),
    o = n(388032),
    l = n(178816);
let s = (e) => {
    let { user: t } = e;
    return (0, r.jsxs)('div', {
        className: l.container,
        children: [
            (0, r.jsx)(a.X6q, {
                className: l.header,
                variant: 'heading-sm/semibold',
                children: o.intl.string(o.t['Rsth7+'])
            }),
            (0, r.jsx)('div', {
                className: l.userContainer,
                children: (0, r.jsxs)('div', {
                    className: l.userInfo,
                    children: [
                        (0, r.jsx)(i.Z, {
                            className: l.userIcon,
                            user: t,
                            size: a.EFr.SIZE_40
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                null != t.globalName &&
                                    (0, r.jsx)(a.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: t.globalName
                                    }),
                                (0, r.jsx)(a.Text, {
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
