let i;
n.d(t, { A: () => c });
var r = n(17928),
    a = n(73153);
let s = [],
    l = s,
    o = null;
class d extends r.Ay.Store {
    static displayName = "CollectiblesShopStore";
    get analyticsLocations() {
        return l;
    }
    get analyticsSource() {
        return o;
    }
    get initialProductSkuId() {
        return i;
    }
    getAnalytics() {
        return { analyticsLocations: l, analyticsSource: o };
    }
}
let c = new d(a.h, {
    COLLECTIBLES_SHOP_OPEN: function (e) {
        ((l = e.analyticsLocations ?? s), (o = e.analyticsSource ?? null), (i = e.initialProductSkuId));
    },
    COLLECTIBLES_SHOP_CLOSE: function (e) {
        ((l = s), (o = null), (i = void 0));
    },
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: function (e) {
        e.skuId === i && (i = void 0);
    },
    LOGOUT: function (e) {
        ((l = s), (o = null), (i = void 0));
    },
});
