n.d(t, { R: () => c });
var r = n(64700),
    i = n(174459),
    l = n(440938),
    a = n(993408),
    s = n(331884),
    o = n(652215);
function c(e) {
    let { skuId: t, productSkuIds: n, analyticsLocations: c } = e,
        { cardId: u, sessionId: d } = (0, l.uM)() ?? {},
        m = (0, s.o)(),
        R = (0, a.xM)(m);
    return r.useCallback(
        (e) => {
            i.default.track(o.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
                sku_id: t,
                cta: e,
                shop_session_id: d,
                card_id: u,
                product_sku_ids: n,
                location_stack: c,
                discount_source: (0, a.b_)(R),
            });
        },
        [t, c, u, n, d, R],
    );
}
