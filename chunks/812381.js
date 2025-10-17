n.d(t, { a: () => d }), n(388685);
var a = n(951288);
n(647438);
var r = n(920981),
    i = n(442837),
    l = n(481060),
    o = n(335131),
    s = n(52030),
    c = n(978134);
let d = () => {
    let e = (0, i.e7)([s.Z], () => s.Z.getShopHomeConfigOverride()),
        t = [
            {
                label: "DISABLED (no override)",
                value: void 0,
            },
            ...Object.values(r.H)
                .filter((e) => e !== r.H.SUMMER_SALE_TAKEOVER)
                .map((e) => ({
                    label: e,
                    value: e,
                })),
        ];
    return (0, a.jsxs)("div", {
        className: c.container,
        children: [
            (0, a.jsx)(l.Text, {
                variant: "text-md/normal",
                children: "Shop Home Override",
            }),
            (0, a.jsx)(l.q4e, {
                className: c.selector,
                options: t,
                value: e,
                onChange: (e) => {
                    (0, o.fi)(e);
                },
            }),
        ],
    });
};
