n.d(t, { Z: () => c });
var r = n(54381),
    i = n(793030),
    a = n(958783),
    o = n(499997),
    s = n(388032),
    l = n(813180);
let c = (e) => {
    let { showSubtext: t = !1 } = e;
    return (0, r.jsxs)(a.Z, {
        assetComponent: (0, r.jsx)(o.Z, { className: l.orbBadgeAsset }),
        tooltipWordmarkComponent: (0, r.jsx)(i.X6q, {
            variant: "heading-md/extrabold",
            className: l.tooltipWordmark,
            children: s.intl.string(s.t.ElYQFS),
        }),
        children: [
            (0, r.jsx)(i.X6q, {
                variant: "heading-xl/extrabold",
                className: t ? void 0 : l.orbHeaderWithSpacing,
                children: s.intl.string(s.t.lTHkqd),
            }),
            t
                ? (0, r.jsx)(i.xvT, {
                      variant: "text-xs/normal",
                      className: l.orbSubtext,
                      children: s.intl.string(s.t.MEV0GI),
                  })
                : void 0,
        ],
    });
};
