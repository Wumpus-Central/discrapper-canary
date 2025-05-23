n.d(t, { Z: () => _ }), n(953529);
var r = n(255367),
    i = n(120356),
    o = n.n(i),
    a = n(793030),
    s = n(958783),
    l = n(483444),
    c = n(586502),
    u = n(787528),
    d = n(388032),
    f = n(987370);
let _ = (e) => {
    let { profileBadge: t, tenureBadge: n } = e,
        i = (0, c.Z)(),
        _ = (0, u.J)(n.id, { ambient: i });
    return (0, r.jsxs)(s.Z, {
        assetComponent: (0, r.jsx)('img', {
            src: _,
            alt: '',
            className: o()(f.badgeImage, { [f.ambient]: i }),
            height: i ? 80 : void 0
        }),
        tooltipWordmarkComponent: (0, r.jsx)(l.Z, {
            width: 56,
            className: f.tooltipWordmark
        }),
        children: [
            (0, r.jsx)(a.X6, {
                variant: 'heading-xl/extrabold',
                children: d.intl.string(n.nameUnformatted)
            }),
            (0, r.jsx)(a.xv, {
                variant: 'text-xs/normal',
                color: 'text-muted',
                className: f.tooltipDescription,
                children: t.description
            })
        ]
    });
};
