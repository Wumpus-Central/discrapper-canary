"use strict";
let r;
n.d(t, { A: () => I });
var i = n(311907),
    s = n(73153);
let a = [],
    o = a,
    l = null,
    u = {},
    c = new Set(),
    d = {},
    _ = (e) => {
        (o = e.analyticsLocations ?? a), (l = e.analyticsSource ?? null), (r = e.initialProductSkuId);
    },
    f = (e) => {
        (o = a), (l = null), (r = void 0);
    },
    p = (e) => {
        e.skuId === r && (r = void 0);
    },
    h = (e) => {
        let { tab: t } = e;
        c.add(t);
    },
    m = (e) => {
        let { tab: t, layoutId: n } = e;
        (u[t] = n), delete d[t], c.delete(t);
    },
    E = (e) => {
        let { tab: t, apiError: n } = e;
        (d[t] = n), c.delete(t);
    },
    g = (e) => {
        (o = a), (l = null), (r = void 0), (u = {}), (c = new Set()), (d = {});
    };
class A extends i.Ay.Store {
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
        return null != e && c.has(e);
    }
    getLayoutFetchError(e) {
        return null == e ? null : (d[e] ?? null);
    }
}
let I = new A(s.h, {
    COLLECTIBLES_SHOP_OPEN: _,
    COLLECTIBLES_SHOP_CLOSE: f,
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: p,
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: h,
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: m,
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: E,
    LOGOUT: g,
});
