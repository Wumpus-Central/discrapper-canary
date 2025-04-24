n.d(t, { a: () => d }), n(388685);
var a = n(200651);
n(192379);
var r = n(920981),
    l = n(442837),
    i = n(481060),
    s = n(335131),
    o = n(52030),
    c = n(977003);
let d = () => {
    let e = (0, l.e7)([o.Z], () => o.Z.getShopHomeConfigOverride()),
        t = [
            {
                label: 'DISABLED (no override)',
                value: void 0
            },
            ...Object.values(r.H).map((e) => ({
                label: e,
                value: e
            }))
        ];
    return (0, a.jsxs)('div', {
        className: c.container,
        children: [
            (0, a.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: 'Shop Home Override'
            }),
            (0, a.jsx)(i.q4e, {
                className: c.selector,
                options: t,
                value: e,
                onChange: (e) => {
                    (0, s.fi)(e);
                }
            })
        ]
    });
};
