var l = t(582128),
    n = t(655857),
    r = t(316363);
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
                    getOrCreateSetupIntent: u,
                } = (0, r.t4)((e) => ({
                    selectedSkuId: e.selectedSkuId,
                    skuIds: e.skuIds,
                    isGift: e.isGift,
                    isRecurringGiftCheckout: e.getIsRecurringGiftCheckout(),
                    getOrCreateSetupIntent: e.getOrCreateSetupIntent,
                })),
                o = a ?? (1 === t.length ? t[0] : void 0),
                c = l.useMemo(() => ({ currency: e, sku_id: o, is_gift: s, is_recurring: i }), [e, o, s, i]);
            return {
                createSetupIntent: l.useCallback(() => u(c, { forceRecreate: !0 }), [u, c]),
                createSetupIntentDeduped: l.useCallback(() => u(c), [u, c]),
            };
        },
    },
);
