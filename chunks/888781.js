l.d(t, { D: () => m });
var e = l(477900),
    i = l(582128),
    n = l(855522),
    r = l(297264),
    a = l(834730),
    o = l(837091);
function c(s) {
    let { benefits: t, description: l, imgSrc: i, title: c, tag: d, FallbackIcon: x } = s,
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
                            null != l &&
                                "" !== l &&
                                (0, e.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: o.h_,
                                    children: l,
                                }),
                        ],
                    }),
                    null != t &&
                        (0, e.jsxs)("div", {
                            className: o.PX,
                            children: [
                                (0, e.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "eyebrow",
                                    children: n.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                t,
                            ],
                        }),
                ],
            }),
        ],
    });
}
var d = l(688810),
    x = l(174459),
    u = l(652215);
function m(s) {
    let { appId: t, skuId: l, ...n } = s,
        { analyticsLocations: r } = (0, d.Ay)();
    return (
        i.useEffect(() => {
            x.default.track(u.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: t,
                sku_id: l,
                location_stack: r,
            });
        }, [r, t, l]),
        (0, e.jsx)(c, { ...n })
    );
}
