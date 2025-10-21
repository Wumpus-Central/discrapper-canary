n.d(t, { Z: () => u }), n(953529);
var r = n(951288),
    i = n(793030),
    a = n(958783),
    o = n(483444),
    s = n(787528),
    l = n(388032),
    c = n(854826);
let u = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        u = (0, s.J)(n.id);
    return (0, r.jsxs)(a.Z, {
        assetComponent: (0, r.jsx)("img", {
            src: u,
            alt: "",
        }),
        tooltipWordmarkComponent: (0, r.jsx)(o.Z, {
            width: 56,
            className: c.tooltipWordmark,
        }),
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-xl/extrabold",
                children: l.intl.string(n.nameUnformatted),
            }),
            (0, r.jsx)(i.xvT, {
                variant: "text-xs/normal",
                color: "text-muted",
                className: c.tooltipDescription,
                children: t.description,
            }),
        ],
    });
};
