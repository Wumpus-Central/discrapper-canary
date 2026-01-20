n.d(t, { a: () => d }), n(388685);
var a = n(54381);
n(473749);
var r = n(920981),
    i = n(442837),
    l = n(481060),
    s = n(335131),
    o = n(52030),
    c = n(815778);
let d = () => {
    let e = (0, i.e7)([o.Z], () => o.Z.getShopHomeConfigOverride()),
        t = [
            {
                id: "none",
                label: "DISABLED (no override)",
                value: void 0,
            },
            ...Object.values(r.H)
                .filter((e) => e !== r.H.SUMMER_SALE_TAKEOVER)
                .map((e) => ({
                    id: e,
                    label: e,
                    value: e,
                })),
        ];
    return (0, a.jsx)("div", {
        className: c.container,
        children: (0, a.jsx)(l.PhF, {
            label: "Shop Home Override",
            options: t,
            value: e,
            onSelectionChange: (e) => {
                (0, s.fi)(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
