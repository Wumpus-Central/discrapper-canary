"use strict";
n.d(t, { A: () => x });
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(421380),
    a = n(397927),
    o = n(793574),
    d = n(688810),
    c = n(721923),
    u = n(985018),
    m = n(77582);
let g = (e) => {
    let {
            guild: t,
            analyticsLocation: n,
            className: s,
            buttonProps: l = { color: r.XD.BRAND_INVERTED, text: u.intl.string(u.t.oqweNx) },
            useExpressiveButton: a,
        } = e,
        { color: o, text: d } = l,
        m = t.premiumTier + 1;
    return (0, i.jsx)(c.A, {
        color: o,
        analyticsLocation: n,
        guild: t,
        buttonText: d,
        targetBoostedGuildTier: m,
        className: s,
        useExpressiveButton: a,
    });
};
function x(e) {
    let {
            header: t,
            text: s,
            analyticsLocation: r,
            guild: c,
            className: u,
            textColor: x,
            headerColor: h,
            buttonProps: _,
            useExpressiveButton: p,
        } = e,
        { analyticsLocations: A } = (0, d.Ay)(o.A.GUILD_BOOSTING_UPSELL_BANNER);
    return (0, i.jsx)(d.f5, {
        value: A,
        children: (0, i.jsxs)("div", {
            className: l()(m.vK, u),
            children: [
                (0, i.jsx)("img", { className: m.__invalid_headerGraphic, alt: "", src: n(549408) }),
                (0, i.jsxs)("div", {
                    className: m.Qs,
                    children: [
                        (0, i.jsx)(a.Text, {
                            variant: "text-lg/semibold",
                            color: h ?? "always-white",
                            className: m.wx,
                            children: t,
                        }),
                        (0, i.jsx)(a.Text, { variant: "text-sm/normal", color: x ?? "always-white", children: s }),
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
