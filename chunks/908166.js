n.d(t, { x: () => h });
var a = n(582128),
    i = n(655857),
    A = n(87725);
function h() {
    let { displayCurrency: e } = (0, i.Jn)(),
        {
            selectedSkuId: t,
            skuIds: n,
            isGift: h,
            getOrCreateSetupIntent: o,
        } = (0, A.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            getOrCreateSetupIntent: e.getOrCreateSetupIntent,
        })),
        s = t ?? (1 === n.length ? n[0] : void 0),
        r = a.useMemo(() => ({ currency: e, sku_id: s, is_gift: h }), [e, s, h]);
    return {
        createSetupIntent: a.useCallback(() => o(r, { forceRecreate: !0 }), [o, r]),
        createSetupIntentDeduped: a.useCallback(() => o(r), [o, r]),
    };
}
