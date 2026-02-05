"use strict";
let r;
n.d(t, { A: () => f });
var i = n(311907),
    a = n(73153);
let s = [],
    o = s,
    l = null,
    u = (e) => {
        (o = e.analyticsLocations ?? s), (l = e.analyticsSource ?? null), (r = e.initialProductSkuId);
    },
    c = (e) => {
        (o = s), (l = null);
    },
    d = (e) => {
        e.skuId === r && (r = void 0);
    };
class _ extends i.Ay.Store {
    static displayName = "CollectiblesShopStore";
    get analyticsLocations() {
        return o;
    }
    get analyticsSource() {
        return l;
    }
    get initialProductSkuId() {
        return r;
    }
    getAnalytics() {
        return { analyticsLocations: o, analyticsSource: l };
    }
}
let f = new _(a.h, {
    COLLECTIBLES_SHOP_OPEN: u,
    COLLECTIBLES_SHOP_CLOSE: c,
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: d,
    LOGOUT: c,
});
