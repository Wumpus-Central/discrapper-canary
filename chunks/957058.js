n.d(t, { u: () => o });
var r = n(192379),
    l = n(557816),
    a = n.n(l),
    i = n(597688),
    s = n(228624);
let o = () => {
    let e = (0, s.ed)('CollectiblesFeedShop');
    return (0, r.useCallback)(
        (t) =>
            a()(
                t
                    .map((t) => {
                        let n = i.Z.getProduct(t);
                        return e && null != n && null != n.variantGroupStoreListingId ? i.Z.getProductByStoreListingId(n.variantGroupStoreListingId) : n;
                    })
                    .filter((e) => null != e),
                'storeListingId'
            ),
        [e]
    );
};
