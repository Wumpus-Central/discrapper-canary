"use strict";
let r;
n.d(t, { A: () => f });
var i = n(311907),
    s = n(73153);
let a = [],
    o = a,
    l = null,
    u = {},
    d = new Set(),
    c = {};
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
    getLayout(e) {
        return null == e ? null : (u[e] ?? null);
    }
    isFetchingLayout(e) {
        return null != e && d.has(e);
    }
    getLayoutFetchError(e) {
        return null == e ? null : (c[e] ?? null);
    }
}
let f = new _(s.h, {
    COLLECTIBLES_SHOP_OPEN: (e) => {
        (o = e.analyticsLocations ?? a), (l = e.analyticsSource ?? null), (r = e.initialProductSkuId);
    },
    COLLECTIBLES_SHOP_CLOSE: (e) => {
        (o = a), (l = null), (r = void 0);
    },
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: (e) => {
        e.skuId === r && (r = void 0);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: (e) => {
        let { tab: t } = e;
        d.add(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: (e) => {
        let { tab: t, layoutId: n } = e;
        (u[t] = n), delete c[t], d.delete(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: (e) => {
        let { tab: t, apiError: n } = e;
        (c[t] = n), d.delete(t);
    },
    LOGOUT: (e) => {
        (o = a), (l = null), (r = void 0), (u = {}), (d = new Set()), (c = {});
    },
});
