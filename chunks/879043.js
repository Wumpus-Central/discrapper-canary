var n = l(855986),
    r = l(587895),
    u = l(288106),
    o = l(69236),
    a = l(741899),
    i = l(188275),
    c = l(25082),
    s = l(792996);
function d(t, e) {
    switch (e) {
        case "storefront.headerText":
            return t.storefront?.headerText ?? null;
        case "pdp.label":
            return t.pdp?.label ?? null;
        case "pdp.tooltip":
            return t.pdp?.tooltip ?? null;
        case "checkout.label":
            return t.checkout?.label ?? null;
        case "checkout.tooltip":
            return t.checkout?.tooltip ?? null;
        case "vcStream.tooltip":
            return t.vcStream?.tooltip ?? null;
    }
}
l.d(
    e,
    {},
    {
        P: function (t, e) {
            (0, a.N)(`slayer_storefront_${e}`, t === i.S3);
        },
        j: function (t, e) {
            let l = (0, a.N)("slayer_storefront_promotion_text", !1),
                f = (0, o.W8)(),
                p = (0, n.bG)([r.A], () => r.A.getApplication(i.S3)?.name);
            if (null == t) return null;
            if ("1560319795629527231" !== t.id || null == l) return d(t, e);
            let { discountPercent: h } = l,
                S = t.rewardStatus === u.GM.EARNED;
            switch (e) {
                case "storefront.headerText": {
                    let t = c.default.dWuM4X;
                    return (
                        S ? (t = c.default.siNyGT) : f && (t = c.default.vyOvli),
                        s.intl.formatToPlainString(t, { discountPercent: h })
                    );
                }
                case "pdp.label": {
                    let t = c.default.dWuM4X;
                    return (
                        S ? (t = c.default.EpCeMs) : f && (t = c.default["1HXutk"]),
                        s.intl.formatToPlainString(t, { discountPercent: h })
                    );
                }
                case "pdp.tooltip":
                    if (!S && f) return s.intl.string(c.default.jNgHOu);
                    return s.intl.formatToPlainString(S ? c.default["KcU3c+"] : c.default.Pld6Sd, {
                        discountPercent: h,
                    });
                case "checkout.label":
                    return s.intl.formatToPlainString(c.default.EpCeMs, { discountPercent: h });
                case "checkout.tooltip":
                    return s.intl.formatToPlainString(c.default["KcU3c+"], { discountPercent: h });
                case "vcStream.tooltip":
                    if (null == p) return d(t, e);
                    return s.intl.formatToPlainString(c.default.uBLTPw, { discountPercent: h, applicationName: p });
            }
        },
    },
);
