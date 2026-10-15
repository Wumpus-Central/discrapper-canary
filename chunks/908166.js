t.d(a, { x: () => s });
var l = t(582128),
    n = t(655857),
    r = t(123816);
function s() {
    let { displayCurrency: e } = (0, n.Jn)(),
        {
            selectedSkuId: a,
            skuIds: t,
            isGift: s,
            getOrCreateSetupIntent: i,
        } = (0, r.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            getOrCreateSetupIntent: e.getOrCreateSetupIntent,
        })),
        h = a ?? (1 === t.length ? t[0] : void 0),
        c = l.useMemo(() => ({ currency: e, sku_id: h, is_gift: s }), [e, h, s]);
    return {
        createSetupIntent: l.useCallback(() => i(c, { forceRecreate: !0 }), [i, c]),
        createSetupIntentDeduped: l.useCallback(() => i(c), [i, c]),
    };
}
