n.d(t, {
    A: () => b,
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(421380),
    a = n(397927),
    c = n(793574),
    o = n(688810),
    d = n(721923),
    u = n(985018),
    f = n(283008);
let g = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: i,
            buttonProps: l = {
                color: s.XD.BRAND_INVERTED,
                text: u.intl.string(u.t.oqweNx),
            },
            useExpressiveButton: a,
        } = e,
        { color: c, text: o } = l,
        f = t.premiumTier + 1;
    return (0, r.jsx)(d.A, {
        color: c,
        analyticsLocation: n,
        guild: t,
        buttonText: o,
        targetBoostedGuildTier: f,
        className: i,
        useExpressiveButton: a,
    });
};

function b(e) {
    let {
            header: t,
            text: i,
            analyticsLocation: s,
            guild: d,
            className: u,
            textColor: b,
            headerColor: m,
            buttonProps: p,
            useExpressiveButton: x,
        } = e,
        { analyticsLocations: h } = (0, o.Ay)(c.A.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, r.jsx)(o.f5, {
        value: h,
        children: (0, r.jsxs)("div", {
            className: l()(f.vK, u),
            children: [
                (0, r.jsx)("img", {
                    className: f.__invalid_headerGraphic,
                    alt: "",
                    src: n(549408),
                }),
                (0, r.jsxs)("div", {
                    className: f.Qs,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: "text-lg/semibold",
                            color: null != m ? m : "always-white",
                            className: f.wx,
                            children: t,
                        }),
                        (0, r.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: null != b ? b : "always-white",
                            children: i,
                        }),
                    ],
                }),
                (0, r.jsx)("div", {
                    className: f.OQ,
                    children: (0, r.jsx)(g, {
                        guild: d,
                        analyticsLocation: s,
                        className: f.x6,
                        buttonProps: p,
                        useExpressiveButton: x,
                    }),
                }),
            ],
        }),
    });
}
