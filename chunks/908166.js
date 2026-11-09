var l = t(582128),
    n = t(655857),
    r = t(516106);
t.d(
    a,
    {},
    {
        x: function () {
            let { displayCurrency: e } = (0, n.Jn)(),
                {
                    selectedSkuId: a,
                    skuIds: t,
                    isGift: s,
                    isRecurringGiftCheckout: i,
                    getOrCreateSetupIntent: h,
                } = (0, r.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    skuIds: e.skuIds,
                    isGift: e.isGift,
                    isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
                    getOrCreateSetupIntent: e.getOrCreateSetupIntent,
                })),
                u = a ?? (1 === t.length ? t[0] : void 0),
                o = l.useMemo(() => ({ currency: e, sku_id: u, is_gift: s, is_recurring: i }), [e, u, s, i]);
            return {
                createSetupIntent: l.useCallback(() => h(o, { forceRecreate: !0 }), [h, o]),
                createSetupIntentDeduped: l.useCallback(() => h(o), [h, o]),
            };
        },
    },
);
