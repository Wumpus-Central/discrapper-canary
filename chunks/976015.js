n.d(t, { Z: () => c });
var r = n(200651),
    i = n(793030),
    o = n(958783),
    a = n(499997),
    s = n(388032),
    l = n(526361);
let c = (e) => {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(o.Z, {
        assetComponent: (0, r.jsx)(a.Z, { className: l.orbBadgeAsset }),
        tooltipWordmarkComponent: (0, r.jsx)(i.X6, {
            variant: 'heading-md/extrabold',
            className: l.tooltipWordmark,
            children: s.NW.string(s.t.ElYQFR)
        }),
        children: [
            (0, r.jsx)(i.X6, {
                variant: 'heading-xl/extrabold',
                className: t ? void 0 : l.orbHeaderWithSpacing,
                children: s.NW.string(s.t.lTHkqa)
            }),
            t
                ? (0, r.jsx)(i.xv, {
                      variant: 'text-xs/normal',
                      className: l.orbSubtext,
                      children: s.NW.string(s.t.MEV0GB)
                  })
                : void 0
        ]
    });
};
