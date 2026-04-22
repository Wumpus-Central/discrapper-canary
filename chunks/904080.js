a.d(t, { R: () => c });
var n = a(627968);
a(64700);
var l = a(716970),
    i = a(311907),
    s = a(691885),
    r = a(979286),
    o = a(295811),
    d = a(172471);
let c = () => {
    let e = (0, i.bG)([o.A], () => o.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(l.C).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, n.jsx)("div", {
        className: d.kL,
        children: (0, n.jsx)(s.l, {
            label: "Shop Home Override",
            options: t,
            value: e,
            onSelectionChange: (e) => {
                (0, r.Or)(e);
            },
            selectionMode: "single",
            fullWidth: !0,
        }),
    });
};
