"use strict";
n.d(t, { z: () => l });
var r = n(64700),
    i = n(575593),
    s = n(466459),
    a = n(790203),
    o = n(574499);
function l(e) {
    let { userId: t, product: n, selectedVariantIndex: l, location: u, onError: c } = e,
        d = r.useMemo(
            () => (n.type === i.R.VARIANTS_GROUP && null != l && n.variants?.[l] != null ? n.variants[l] : n),
            [n, l],
        ),
        _ = d.skuId,
        f = (0, o.c)({ userId: t, skuId: _, nuxGraphic: (0, a.b)({ product: d }), location: u, onError: c }),
        { isPurchased: p } = (0, s.h)(d);
    return { ...f, specificProductOrVariant: d, isPurchased: p };
}
