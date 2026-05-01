"use strict";
let i;
n.d(t, { A: () => f });
var r = n(17928),
    s = n(228366);
let a = [],
    o = a,
    l = null,
    u = {},
    c = new Set(),
    d = {};
class _ extends r.Ay.Store {
    static displayName = "CollectiblesShopStore";
    get analyticsLocations() {
        return o;
    }
    get analyticsSource() {
        return l;
    }
    get initialProductSkuId() {
        return i;
    }
    getAnalytics() {
        return { analyticsLocations: o, analyticsSource: l };
    }
    getLayout(e) {
        return null == e ? null : (u[e] ?? null);
    }
    isFetchingLayout(e) {
        return null != e && c.has(e);
    }
    getLayoutFetchError(e) {
        return null == e ? null : (d[e] ?? null);
    }
}
let f = new _(s.h, {
    COLLECTIBLES_SHOP_OPEN: (e) => {
        (o = e.analyticsLocations ?? a), (l = e.analyticsSource ?? null), (i = e.initialProductSkuId);
    },
    COLLECTIBLES_SHOP_CLOSE: (e) => {
        (o = a), (l = null), (i = void 0);
    },
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: (e) => {
        e.skuId === i && (i = void 0);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: (e) => {
        let { tab: t } = e;
        c.add(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: (e) => {
        let { tab: t, layoutId: n } = e;
        (u[t] = n), delete d[t], c.delete(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: (e) => {
        let { tab: t, apiError: n } = e;
        (d[t] = n), c.delete(t);
    },
    LOGOUT: (e) => {
        (o = a), (l = null), (i = void 0), (u = {}), (c = new Set()), (d = {});
    },
});
