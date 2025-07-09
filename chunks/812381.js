(a.d(t, { a: () => d }), a(388685));
var n = a(255367);
a(73800);
var r = a(920981),
    l = a(442837),
    i = a(481060),
    s = a(335131),
    o = a(52030),
    c = a(977003);
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
    return (0, n.jsxs)('div', {
        className: c.container,
        children: [
            (0, n.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: 'Shop Home Override'
            }),
            (0, n.jsx)(i.q4e, {
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
