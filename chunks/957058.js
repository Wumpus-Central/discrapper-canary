n.d(t, { u: () => o });
var l = n(192379),
    r = n(557816),
    i = n.n(r),
    a = n(597688),
    s = n(228624);
let o = () => {
    let e = (0, s.ed)('CollectiblesFeedShop');
    return (0, l.useCallback)(
        (t) =>
            i()(
                t
                    .map((t) => {
                        let n = a.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? a.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
