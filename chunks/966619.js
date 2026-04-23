n.d(t, { R: () => s });
var r = n(64700),
    i = n(954571),
    a = n(440938),
    l = n(652215);
function s(e) {
    let { skuId: t, productSkuIds: n, analyticsLocations: s } = e,
        { cardId: c, sessionId: o } = (0, a.uM)() ?? {};
    return r.useCallback(
        (e) => {
            i.default.track(l.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                sku_id: t,
                cta: e,
                shop_session_id: o,
                card_id: c,
                product_sku_ids: n,
                location_stack: s,
            });
        },
        [t, s, c, n, o],
    );
}
