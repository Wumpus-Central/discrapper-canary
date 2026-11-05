var r = l(855986),
    n = l(587895),
    u = l(288106),
    a = l(69236),
    i = l(741899),
    o = l(188275),
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
            (0, i.N)(`slayer_storefront_${e}`, t === o.S3);
        },
        j: function (t, e) {
            let l = (0, i.N)("slayer_storefront_promotion_text", !1),
                f = (0, a.W8)(),
                p = (0, r.bG)([n.A], () => n.A.getApplication(o.S3)?.name);
            if (null == t) return null;
            if ("1560319795629527231" !== t.id || null == l) return d(t, e);
            let { discountPercent: S } = l,
                h = t.rewardStatus === u.GM.EARNED;
            switch (e) {
                case "storefront.headerText": {
                    let t = c.default.dWuM4X;
                    return (
                        h ? (t = c.default.siNyGT) : f && (t = c.default.vyOvli),
                        s.intl.formatToPlainString(t, { discountPercent: S })
                    );
                }
                case "pdp.label": {
                    let t = c.default.dWuM4X;
                    return (
                        h ? (t = c.default.EpCeMs) : f && (t = c.default["1HXutk"]),
                        s.intl.formatToPlainString(t, { discountPercent: S })
                    );
                }
                case "pdp.tooltip":
                    if (!h && f) return s.intl.string(c.default.jNgHOu);
                    return s.intl.formatToPlainString(h ? c.default["KcU3c+"] : c.default.Pld6Sd, {
                        discountPercent: S,
                    });
                case "checkout.label":
                    return s.intl.formatToPlainString(c.default.EpCeMs, { discountPercent: S });
                case "checkout.tooltip":
                    return s.intl.formatToPlainString(c.default["KcU3c+"], { discountPercent: S });
                case "vcStream.tooltip":
                    if (null == p) return d(t, e);
                    return s.intl.formatToPlainString(c.default.uBLTPw, { discountPercent: S, applicationName: p });
            }
        },
    },
);
