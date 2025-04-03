n.d(t, { Z: () => s });
var r = n(200651);
n(192379);
var l = n(481060),
    i = n(99690),
    a = n(388032),
    o = n(178816);
let s = (e) => {
    let { user: t } = e;
    return (0, r.jsxs)('div', {
        className: o.container,
        children: [
            (0, r.jsx)(l.X6q, {
                className: o.header,
                variant: 'heading-sm/semibold',
                children: a.NW.string(a.t['Rsth7+'])
            }),
            (0, r.jsx)('div', {
                className: o.userContainer,
                children: (0, r.jsxs)('div', {
                    className: o.userInfo,
                    children: [
                        (0, r.jsx)(i.Z, {
                            className: o.userIcon,
                            user: t,
                            size: l.EFr.SIZE_40
                        }),
                        (0, r.jsxs)('div', {
                            children: [
                                null != t.globalName &&
                                    (0, r.jsx)(l.Text, {
                                        variant: 'text-md/semibold',
                                        color: 'header-primary',
                                        children: t.globalName
                                    }),
                                (0, r.jsx)(l.Text, {
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
