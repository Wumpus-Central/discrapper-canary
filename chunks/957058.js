n.d(t, {
    u: function () {
        return o;
    }
});
var r = n(192379),
    i = n(557816),
    l = n.n(i),
    s = n(597688),
    a = n(228624);
let o = () => {
    let e = (0, a.ed)('CollectiblesFeedShop');
    return (0, r.useCallback)(
        (t) =>
            l()(
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
