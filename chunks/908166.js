t.d(e, { x: () => r });
var l = t(582128),
    n = t(655857),
    s = t(504560);
function r() {
    let { displayCurrency: a } = (0, n.Jn)(),
        {
            selectedSkuId: e,
            skuIds: t,
            isGift: r,
            getOrCreateSetupIntent: h,
        } = (0, s.t4)((a) => ({
            selectedSkuId: a.selectedSkuId,
            skuIds: a.skuIds,
            isGift: a.isGift,
            getOrCreateSetupIntent: a.getOrCreateSetupIntent,
        })),
        i = e ?? (1 === t.length ? t[0] : void 0),
        c = l.useMemo(() => ({ currency: a, sku_id: i, is_gift: r }), [a, i, r]);
    return {
        createSetupIntent: l.useCallback(() => h(c, { forceRecreate: !0 }), [h, c]),
        createSetupIntentDeduped: l.useCallback(() => h(c), [h, c]),
    };
}
