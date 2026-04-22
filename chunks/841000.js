i.d(e, { z: () => o });
var r = i(64700),
    s = i(575593),
    n = i(466459),
    l = i(790203),
    a = i(574499);
function o(t) {
    let { userId: e, product: i, selectedVariantIndex: o, location: u, onError: d } = t,
        c = r.useMemo(
            () => (i.type === s.R.VARIANTS_GROUP && null != o && i.variants?.[o] != null ? i.variants[o] : i),
            [i, o],
        ),
        p = c.skuId,
        S = (0, a.c)({ userId: e, skuId: p, nuxGraphic: (0, l.b)({ product: c }), location: u, onError: d }),
        { isPurchased: h } = (0, n.h)(c);
    return { ...S, specificProductOrVariant: c, isPurchased: h };
}
