l.d(e, { P: () => s, j: () => p });
var n = l(17928),
    r = l(587895),
    u = l(288106),
    o = l(69236),
    i = l(741899),
    a = l(188275),
    c = l(961270),
    f = l(105292);
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
function s(t, e) {
    (0, i.N)(`slayer_storefront_${e}`, t === a.S3);
}
function p(t, e) {
    let l = (0, i.N)("slayer_storefront_promotion_text", !1),
        s = (0, o.W8)(),
        p = (0, n.bG)([r.A], () => r.A.getApplication(a.S3)?.name);
    if (null == t) return null;
    if ("1560319795629527231" !== t.id || null == l) return d(t, e);
    let { discountPercent: S } = l,
        g = t.rewardStatus === u.GM.EARNED;
    switch (e) {
        case "storefront.headerText": {
            let t = c.default.dWuM4X;
            return (
                g ? (t = c.default.siNyGT) : s && (t = c.default.vyOvli),
                f.intl.formatToPlainString(t, { discountPercent: S })
            );
        }
        case "pdp.label": {
            let t = c.default.dWuM4X;
            return (
                g ? (t = c.default.EpCeMs) : s && (t = c.default["1HXutk"]),
                f.intl.formatToPlainString(t, { discountPercent: S })
            );
        }
        case "pdp.tooltip":
            if (!g && s) return f.intl.string(c.default.jNgHOu);
            return f.intl.formatToPlainString(g ? c.default["KcU3c+"] : c.default.Pld6Sd, { discountPercent: S });
        case "checkout.label":
            return f.intl.formatToPlainString(c.default.EpCeMs, { discountPercent: S });
        case "checkout.tooltip":
            return f.intl.formatToPlainString(c.default["KcU3c+"], { discountPercent: S });
        case "vcStream.tooltip":
            if (null == p) return d(t, e);
            return f.intl.formatToPlainString(c.default.uBLTPw, { discountPercent: S, applicationName: p });
    }
}
