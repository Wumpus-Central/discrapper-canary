n.d(t, { R: () => c });
var a = n(627968);
n(64700);
var i = n(716970),
    s = n(311907),
    l = n(397927),
    r = n(979286),
    o = n(295811),
    d = n(194878);
let c = () => {
    let e = (0, s.bG)([o.A], () => o.A.getShopHomeConfigOverride()),
        t = [
            { id: "none", label: "DISABLED (no override)", value: void 0 },
            ...Object.values(i.C).map((e) => ({ id: e, label: e, value: e })),
        ];
    return (0, a.jsx)("div", {
        className: d.kL,
        children: (0, a.jsx)(l.l6P, {
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
