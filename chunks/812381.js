n.d(t, { a: () => d }), n(388685);
var a = n(951288);
n(647438);
var i = n(920981),
    r = n(442837),
    l = n(481060),
    s = n(335131),
    o = n(52030),
    c = n(978134);
let d = () => {
    let e = (0, r.e7)([o.Z], () => o.Z.getShopHomeConfigOverride()),
        t = [
            {
                label: "DISABLED (no override)",
                value: void 0,
            },
            ...Object.values(i.H)
                .filter((e) => e !== i.H.SUMMER_SALE_TAKEOVER)
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
                    (0, s.fi)(e);
                },
            }),
        ],
    });
};
