"use strict";
n.d(t, { x: () => a });
var i = n(64700),
    r = n(655857),
    s = n(650170);
let a = () => {
    let { displayCurrency: e } = (0, r.Jn)(),
        {
            selectedSkuId: t,
            skuIds: n,
            isGift: a,
            getOrCreateSetupIntent: o,
        } = (0, s.t4)((e) => ({
            selectedSkuId: e.selectedSkuId,
            skuIds: e.skuIds,
            isGift: e.isGift,
            getOrCreateSetupIntent: e.getOrCreateSetupIntent,
        })),
        l = t ?? (1 === n.length ? n[0] : void 0),
        u = i.useMemo(() => ({ currency: e, sku_id: l, is_gift: a }), [e, l, a]);
    return {
        createSetupIntent: i.useCallback(() => o(u, { forceRecreate: !0 }), [o, u]),
        createSetupIntentDeduped: i.useCallback(() => o(u), [o, u]),
    };
};
