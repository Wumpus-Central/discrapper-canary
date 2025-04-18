n.d(t, { a: () => d });
var a = n(200651);
n(192379);
var r = n(920981),
    l = n(442837),
    i = n(481060),
    s = n(335131),
    o = n(52030),
    c = n(198768);
let d = () => {
    let e = (0, l.e7)([o.Z], () => o.Z.getShopHomeConfigOverride()),
        t = Object.values(r.H).map((e) => ({
            label: e,
            value: e
        }));
    return (0, a.jsxs)('div', {
        className: c.container,
        children: [
            (0, a.jsx)(i.Text, {
                variant: 'text-md/normal',
                children: 'Shop home layout override'
            }),
            (0, a.jsx)(i.q4e, {
                options: t,
                value: e,
                onChange: (e) => {
                    (0, s.fi)(e);
                }
            }),
            (0, a.jsx)(i.zxk, {
                look: i.zxk.Looks.LINK,
                style: { padding: '8px 0' },
                onClick: () => {
                    (0, s.fi)(void 0);
                },
                children: 'Reset shop home layout override'
            })
        ]
    });
};
