i.d(a, { SocialLayerStorefrontCouponPurchaseCompleteModal: () => g });
var n = i(477900),
    e = i(582128),
    r = i(638495),
    l = i(772707),
    o = i(964486),
    c = i(429913),
    s = i(174459),
    p = i(317560),
    d = i(188275),
    u = i(652215),
    k = i(206285),
    f = i(105292);
function g(t) {
    let {
            transitionState: a,
            onClose: i,
            applicationId: g,
            skuId: m,
            discountPercent: C,
            surface: h,
            analyticsLocations: b,
        } = t,
        y = (0, r.k)(),
        v = (0, c.h)(g);
    (0, o.Ay)(() => {
        s.default.track(u.HAw.OPEN_MODAL, { type: d.nI, application_id: g, sku_id: m, location_stack: b });
    });
    let P = e.useCallback(async () => {
            ((0, p.j)(y), await i());
        }, [y, i]),
        S =
            null != C
                ? f.intl.formatToPlainString(k.default.NWcb7k, { discountPercent: C })
                : f.intl.string(f.t.Xtf9wP),
        _ = null != v ? f.intl.formatToPlainString(k.default.tm2lfr, { applicationName: v.name }) : void 0;
    return (0, n.jsx)(l.k, {
        transitionState: a,
        onClose: i,
        gradientColor: "blue",
        graphic: {
            type: "image",
            src: "https://cdn.discordapp.com/assets/content/809ee89fc8544552c77988e15d68e46fc05a1572d293a79162ca698b2b880194.svg",
            aspectRatio: "6/4",
        },
        title: S,
        subtitle: _,
        actions:
            "storefront" === h
                ? [{ text: f.intl.string(f.t["NX+WJN"]), variant: "primary", onClick: i }]
                : [
                      { text: f.intl.string(k.default.itMa3c), variant: "secondary", onClick: P },
                      { text: f.intl.string(f.t["3PatSz"]), variant: "primary", onClick: i },
                  ],
    });
}
