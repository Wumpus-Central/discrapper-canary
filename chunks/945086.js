n.d(t, { A: () => h });
var i = n(627968);
n(64700);
var l = n(503698),
    s = n.n(l),
    r = n(862482),
    a = n(834730),
    o = n(793574),
    d = n(688810),
    c = n(721923),
    u = n(985018),
    m = n(569031);
let g = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: l,
            buttonProps: s = { color: r.XD.BRAND_INVERTED, text: u.intl.string(u.t.oqweNx) },
            useExpressiveButton: a,
        } = e,
        { color: o, text: d } = s,
        m = t.premiumTier + 1;
    return (0, i.jsx)(c.A, {
        color: o,
        analyticsLocation: n,
        guild: t,
        buttonText: d,
        targetBoostedGuildTier: m,
        className: l,
        useExpressiveButton: a,
    });
};
function h(e) {
    let {
            header: t,
            text: l,
            analyticsLocation: r,
            guild: c,
            className: u,
            textColor: h,
            headerColor: x,
            buttonProps: _,
            useExpressiveButton: p,
        } = e,
        { analyticsLocations: A } = (0, d.Ay)(o.A.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, i.jsx)(d.f5, {
        value: A,
        children: (0, i.jsxs)("div", {
            className: s()(m.vK, u),
            children: [
                (0, i.jsx)("img", { className: m.__invalid_headerGraphic, alt: "", src: n(549408) }),
                (0, i.jsxs)("div", {
                    className: m.Qs,
                    children: [
                        (0, i.jsx)(a.E, {
                            variant: "text-lg/semibold",
                            color: x ?? "always-white",
                            className: m.wx,
                            children: t,
                        }),
                        (0, i.jsx)(a.E, { variant: "text-sm/normal", color: h ?? "always-white", children: l }),
                    ],
                }),
                (0, i.jsx)("div", {
                    className: m.OQ,
                    children: (0, i.jsx)(g, {
                        guild: c,
                        analyticsLocation: r,
                        className: m.x6,
                        buttonProps: _,
                        useExpressiveButton: p,
                    }),
                }),
            ],
        }),
    });
}
