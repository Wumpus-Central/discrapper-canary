s.d(l, { D: () => m });
var e = s(627968),
    i = s(64700),
    r = s(855522),
    n = s(534514),
    a = s(834730),
    o = s(963925);
function c(t) {
    let { benefits: l, description: s, imgSrc: i, title: c, tag: d, FallbackIcon: x } = t,
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
                            (0, e.jsx)(n.D, { color: "text-strong", variant: "heading-xl/semibold", children: c }),
                            null != s &&
                                "" !== s &&
                                (0, e.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: o.h_,
                                    children: s,
                                }),
                        ],
                    }),
                    null != l &&
                        (0, e.jsxs)("div", {
                            className: o.PX,
                            children: [
                                (0, e.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "eyebrow",
                                    children: r.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                l,
                            ],
                        }),
                ],
            }),
        ],
    });
}
var d = s(688810),
    x = s(174459),
    u = s(652215);
function m(t) {
    let { appId: l, skuId: s, ...r } = t,
        { analyticsLocations: n } = (0, d.Ay)();
    return (
        i.useEffect(() => {
            x.default.track(u.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: l,
                sku_id: s,
                location_stack: n,
            });
        }, [n, l, s]),
        (0, e.jsx)(c, { ...r })
    );
}
