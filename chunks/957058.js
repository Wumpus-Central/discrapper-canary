n.d(t, { u: () => o });
var r = n(192379),
    l = n(557816),
    i = n.n(l),
    s = n(597688),
    a = n(228624);
let o = () => {
    let e = (0, a.ed)('CollectiblesFeedShop');
    return (0, r.useCallback)(
        (t) =>
            i()(
                t
                    .map((t) => {
                        let n = s.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? s.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
