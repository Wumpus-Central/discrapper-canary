n.d(t, { a: () => u }), n(388685);
var a = n(54381);
n(473749);
var l = n(920981),
    r = n(442837),
    i = n(199849),
    s = n(481060),
    o = n(335131),
    c = n(52030),
    d = n(978134);
let u = () => {
    let e = (0, r.e7)([c.Z], () => c.Z.getShopHomeConfigOverride()),
        t = [
            {
                label: "DISABLED (no override)",
                value: void 0,
            },
            ...Object.values(l.H)
                .filter((e) => e !== l.H.SUMMER_SALE_TAKEOVER)
                .map((e) => ({
                    label: e,
                    value: e,
                })),
        ];
    return (0, a.jsxs)("div", {
        className: d.container,
        children: [
            (0, a.jsx)(s.Text, {
                variant: "text-md/normal",
                children: "Shop Home Override",
            }),
            (0, a.jsx)(i.y6, {
                className: d.selector,
                options: t,
                value: e,
                onChange: (e) => {
                    (0, o.fi)(e);
                },
            }),
        ],
    });
};
