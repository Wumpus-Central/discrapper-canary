n.d(t, { a: () => d });
var r = n(200651);
n(192379);
var a = n(920981),
    l = n(442837),
    i = n(481060),
    o = n(335131),
    s = n(52030),
    c = n(977003);
let d = () => {
    let e = (0, l.e7)([s.Z], () => s.Z.getShopHomeConfigOverride()),
        t = Object.values(a.H).map((e) => ({
            label: e,
            value: e
        }));
    return (0, r.jsxs)('div', {
        className: c.container,
        children: [
            (0, r.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: 'Shop home layout override'
            }),
            (0, r.jsx)(i.q4e, {
                options: t,
                value: e,
                onChange: (e) => {
                    (0, o.fi)(e);
                }
            }),
            (0, r.jsx)(i.zxk, {
                look: i.zxk.Looks.LINK,
                style: { padding: '8px 0' },
                onClick: () => {
                    (0, o.fi)(void 0);
                },
                children: 'Reset shop home layout override'
            })
        ]
    });
};
