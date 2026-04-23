l.d(e, { D: () => _ });
var n = l(627968),
    r = l(64700),
    s = l(855522),
    i = l(534514),
    a = l(834730),
    o = l(963925);
function c(t) {
    let { benefits: e, description: l, imgSrc: r, title: c, tag: d, FallbackIcon: u } = t,
        x = null != r ? { "--custom-background-url": `url(${r.toString()})` } : void 0;
    return (0, n.jsxs)("div", {
        className: o.kL,
        children: [
            (0, n.jsxs)("div", {
                className: o.wx,
                children: [
                    (0, n.jsx)("div", { className: o.y2, style: x }),
                    (0, n.jsx)("div", {
                        className: o.F0,
                        children:
                            null != r
                                ? (0, n.jsx)("img", { src: r.toString(), alt: "" })
                                : (0, n.jsx)(u, { size: "custom", color: "var(--text-muted)", height: 96, width: 96 }),
                    }),
                ],
            }),
            (0, n.jsxs)("div", {
                className: o.Qs,
                children: [
                    (0, n.jsxs)("div", {
                        className: o.zH,
                        children: [
                            null != d && (0, n.jsx)("div", { children: d }),
                            (0, n.jsx)(i.D, { color: "text-strong", variant: "heading-xl/semibold", children: c }),
                            null != l &&
                                "" !== l &&
                                (0, n.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "text-md/normal",
                                    className: o.h_,
                                    children: l,
                                }),
                        ],
                    }),
                    null != e &&
                        (0, n.jsxs)("div", {
                            className: o.PX,
                            children: [
                                (0, n.jsx)(a.E, {
                                    color: "text-default",
                                    variant: "eyebrow",
                                    children: s.A.Messages.STOREFRONT_BENEFITS_TITLE,
                                }),
                                e,
                            ],
                        }),
                ],
            }),
        ],
    });
}
var d = l(688810),
    u = l(954571),
    x = l(652215);
function _(t) {
    let { appId: e, skuId: l, ...s } = t,
        { analyticsLocations: i } = (0, d.Ay)();
    return (
        r.useEffect(() => {
            u.default.track(x.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
                application_id: e,
                sku_id: l,
                location_stack: i,
            });
        }, [i, e, l]),
        (0, n.jsx)(c, { ...s })
    );
}
