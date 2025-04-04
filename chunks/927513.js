n.d(t, { Z: () => u }), n(266796);
var r = n(200651),
    i = n(793030),
    o = n(958783),
    a = n(483444),
    s = n(787528),
    l = n(388032),
    c = n(381054);
let u = (e) => {
    let { profileBadge: t, tenureBadge: n } = e;
    return (0, r.jsxs)(o.Z, {
        assetComponent: (0, r.jsx)('img', {
            src: (0, s.J)(n.id),
            alt: ''
        }),
        tooltipWordmarkComponent: (0, r.jsx)(a.Z, {
            width: 56,
            className: c.tooltipWordmark
        }),
        children: [
            (0, r.jsx)(i.X6, {
                variant: 'heading-xl/extrabold',
                children: l.NW.string(n.nameUnformatted)
            }),
            (0, r.jsx)(i.xv, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: c.tooltipDescription,
                children: t.description
            })
        ]
    });
};
