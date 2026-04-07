n.d(t, { R: () => l });
var r = n(64700),
    a = n(954571),
    i = n(440938),
    s = n(652215);
function l(e) {
    let { skuId: t, productSkuIds: n, analyticsLocations: l } = e,
        { cardId: o, sessionId: c } = (0, i.uM)() ?? {};
    return r.useCallback(
        (e) => {
            a.default.track(s.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                sku_id: t,
                cta: e,
                shop_session_id: c,
                card_id: o,
                product_sku_ids: n,
                location_stack: l,
            });
        },
        [t, l, o, n, c],
    );
}
