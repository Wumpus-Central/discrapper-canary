n.d(t, { R: () => d }), n(896048);
var a = n(627968);
n(64700);
var l = n(716970),
    i = n(311907),
    r = n(397927),
    s = n(979286),
    o = n(295811),
    c = n(194878);
let d = () => {
    let e = (0, i.bG)([o.A], () => o.A.getShopHomeConfigOverride()),
        t = [
            {
                id: "none",
                label: "DISABLED (no override)",
                value: void 0,
            },
            ...Object.values(l.C)
                .filter((e) => e !== l.C.SUMMER_SALE_TAKEOVER)
                .map((e) => ({
                    id: e,
                    label: e,
                    value: e,
                })),
        ];
    return (0, a.jsx)("div", {
        className: c.k,
        children: (0, a.jsx)(r.l6P, {
            label: "Shop Home Override",
            options: t,
            value: e,
            onSelectionChange: (e) => {
                (0, s.Or)(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
