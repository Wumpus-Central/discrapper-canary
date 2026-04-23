n.d(t, { j: () => s });
var l = n(64700),
    a = n(311907),
    i = n(880405),
    r = n(422069);
function s(e) {
    let { hasFetched: t, skuIds: n } = (0, a.cf)([r.A], () => ({
        hasFetched: null != e && r.A.hasShopCollectionBeenFetched(e),
        skuIds: null != e ? r.A.getShopCollectionSkuIds(e) : void 0,
    }));
    return (
        (0, l.useEffect)(() => {
            null == e || t || r.A.isShopCollectionFetching(e) || (0, i.hd)(e);
        }, [e, t]),
        n ?? []
    );
}
