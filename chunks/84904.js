n.d(t, { j: () => s });
var a = n(64700),
    l = n(311907),
    i = n(880405),
    r = n(422069);
function s(e) {
    let { hasFetched: t, skuIds: n } = (0, l.cf)([r.A], () => ({
        hasFetched: null != e && r.A.hasShopCollectionBeenFetched(e),
        skuIds: null != e ? r.A.getShopCollectionSkuIds(e) : void 0,
    }));
    return (
        (0, a.useEffect)(() => {
            null == e || t || r.A.isShopCollectionFetching(e) || (0, i.h)(e);
        }, [e, t]),
        n ?? []
    );
}
