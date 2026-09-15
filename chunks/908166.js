n.d(t, { x: () => i });
var a = n(582128),
    r = n(655857),
    l = n(721836);
function i() {
    let { displayCurrency: e } = (0, r.Jn)(),
        {
            selectedSkuId: t,
            skuIds: n,
            isGift: i,
            getOrCreateSetupIntent: u,
        } = (0, l.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            getOrCreateSetupIntent: e.getOrCreateSetupIntent,
        })),
        s = t ?? (1 === n.length ? n[0] : void 0),
        o = a.useMemo(() => ({ currency: e, sku_id: s, is_gift: i }), [e, s, i]);
    return {
        createSetupIntent: a.useCallback(() => u(o, { forceRecreate: !0 }), [u, o]),
        createSetupIntentDeduped: a.useCallback(() => u(o), [u, o]),
    };
}
