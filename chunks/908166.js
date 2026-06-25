"use strict";
n.d(t, { x: () => o });
var i = n(64700),
    r = n(655857),
    s = n(46332),
    a = n(219538);
let o = () => {
    let { displayCurrency: e } = (0, r.Jn)(),
        {
            selectedSkuId: t,
            skuIds: n,
            isGift: o,
        } = (0, s.t4)((e) => ({ selectedSkuId: e.selectedSkuId, skuIds: e.skuIds, isGift: e.isGift })),
        l = t ?? (1 === n.length ? n[0] : void 0);
    return {
        createSetupIntent: i.useCallback(() => (0, a.w)({ body: { currency: e, sku_id: l, is_gift: o } }), [e, l, o]),
    };
};
