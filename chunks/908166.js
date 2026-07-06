n.d(t, { x: () => a });
var l = n(64700),
    i = n(655857),
    r = n(650170);
let a = () => {
    let { displayCurrency: e } = (0, i.Jn)(),
        {
            selectedSkuId: t,
            skuIds: n,
            isGift: a,
            getOrCreateSetupIntent: s,
        } = (0, r.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            getOrCreateSetupIntent: e.getOrCreateSetupIntent,
        })),
        o = t ?? (1 === n.length ? n[0] : void 0),
        u = l.useMemo(() => ({ currency: e, sku_id: o, is_gift: a }), [e, o, a]);
    return {
        createSetupIntent: l.useCallback(() => s(u, { forceRecreate: !0 }), [s, u]),
        createSetupIntentDeduped: l.useCallback(() => s(u), [s, u]),
    };
};
