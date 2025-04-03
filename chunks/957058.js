n.d(t, { u: () => s });
var r = n(192379),
    l = n(557816),
    a = n.n(l),
    o = n(597688),
    i = n(228624);
let s = () => {
    let e = (0, i.ed)('CollectiblesFeedShop');
    return (0, r.useCallback)(
        (t) =>
            a()(
                t
                    .map((t) => {
                        let n = o.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? o.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
