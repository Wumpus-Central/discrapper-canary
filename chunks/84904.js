n.d(t, { j: () => s });
var a = n(64700),
    i = n(311907),
    l = n(880405),
    r = n(422069);
function s(e) {
    let { hasFetched: t, skuIds: n } = (0, i.cf)([r.A], () => ({
        hasFetched: null != e && r.A.hasShopCollectionBeenFetched(e),
        skuIds: null != e ? r.A.getShopCollectionSkuIds(e) : void 0,
    }));
    return (
        (0, a.useEffect)(() => {
            null == e || t || r.A.isShopCollectionFetching(e) || (0, l.hd)(e);
        }, [e, t]),
        n ?? []
    );
}
