n.d(t, { x: () => h });
var a = n(582128),
    A = n(655857),
    i = n(721836);
function h() {
    let { displayCurrency: e } = (0, A.Jn)(),
        {
            selectedSkuId: t,
            skuIds: n,
            isGift: h,
            getOrCreateSetupIntent: o,
        } = (0, i.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            getOrCreateSetupIntent: e.getOrCreateSetupIntent,
        })),
        r = t ?? (1 === n.length ? n[0] : void 0),
        p = a.useMemo(() => ({ currency: e, sku_id: r, is_gift: h }), [e, r, h]);
    return {
        createSetupIntent: a.useCallback(() => o(p, { forceRecreate: !0 }), [o, p]),
        createSetupIntentDeduped: a.useCallback(() => o(p), [o, p]),
    };
}
