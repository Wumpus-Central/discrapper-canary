t.d(l, { D: () => m });
var e = t(477900),
    i = t(582128),
    n = t(855522),
    r = t(534514),
    a = t(834730),
    o = t(837091);
function c(s) {
    let { benefits: l, description: t, imgSrc: i, title: c, tag: d, FallbackIcon: x } = s,
        u = null != i ? { "--custom-background-url": `url(${i.toString()})` } : void 0;
    return (0, e.jsxs)("div", {
        className: o.kL,
        children: [
            (0, e.jsxs)("div", {
                className: o.wx,
                children: [
                    (0, e.jsx)("div", { className: o.y2, style: u }),
                    (0, e.jsx)("div", {
                        className: o.F0,
                        children:
                            null != i
                                ? (0, e.jsx)("img", { src: i.toString(), alt: "" })
                                : (0, e.jsx)(x, { size: "custom", color: "var(--text-muted)", height: 96, width: 96 }),
                    }),
                ],
            }),
            (0, e.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, e.jsxs)("div", {
                        className: o.zH,
                        children: [
                            null != d && (0, e.jsx)("div", { children: d }),
                            (0, e.jsx)(r.D, { color: "text-strong", variant: "heading-xl/semibold", children: c }),
                            null != t &&
                                "" !== t &&
                                (0, e.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "body-md/normal",
                                    className: o.h_,
                                    children: t,
                                }),
                        ],
                    }),
                    null != l &&
                        (0, e.jsxs)("div", {
                            className: o.PX,
                            children: [
                                (0, e.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "body-sm/medium",
                                    children: n.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                l,
                            ],
                        }),
                ],
            }),
        ],
    });
}
var d = t(688810),
    x = t(174459),
    u = t(652215);
function m(s) {
    let { appId: l, skuId: t, ...n } = s,
        { analyticsLocations: r } = (0, d.Ay)();
    return (
        i.useEffect(() => {
            x.default.track(u.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: l,
                sku_id: t,
                location_stack: r,
            });
        }, [r, l, t]),
        (0, e.jsx)(c, { ...n })
    );
}
