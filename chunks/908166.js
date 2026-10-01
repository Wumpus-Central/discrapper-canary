n.d(t, { x: () => l });
var a = n(582128),
    r = n(655857),
    i = n(263532);
function l() {
    let { displayCurrency: e } = (0, r.Jn)(),
        {
            selectedSkuId: t,
            skuIds: n,
            isGift: l,
            getOrCreateSetupIntent: u,
        } = (0, i.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            getOrCreateSetupIntent: e.getOrCreateSetupIntent,
        })),
        s = t ?? (1 === n.length ? n[0] : void 0),
        o = a.useMemo(() => ({ currency: e, sku_id: s, is_gift: l }), [e, s, l]);
    return {
        createSetupIntent: a.useCallback(() => u(o, { forceRecreate: !0 }), [u, o]),
        createSetupIntentDeduped: a.useCallback(() => u(o), [u, o]),
    };
}
