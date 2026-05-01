let i;
n.d(t, { A: () => u });
var a = n(17928),
    r = n(228366);
let s = [],
    l = s,
    o = null,
    d = {},
    c = new Set(),
    _ = {};
class E extends a.Ay.Store {
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
    getLayout(e) {
        return null == e ? null : (d[e] ?? null);
    }
    isFetchingLayout(e) {
        return null != e && c.has(e);
    }
    getLayoutFetchError(e) {
        return null == e ? null : (_[e] ?? null);
    }
}
let u = new E(r.h, {
    COLLECTIBLES_SHOP_OPEN: (e) => {
        (l = e.analyticsLocations ?? s), (o = e.analyticsSource ?? null), (i = e.initialProductSkuId);
    },
    COLLECTIBLES_SHOP_CLOSE: (e) => {
        (l = s), (o = null), (i = void 0);
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
        (d[t] = n), delete _[t], c.delete(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: (e) => {
        let { tab: t, apiError: n } = e;
        (_[t] = n), c.delete(t);
    },
    LOGOUT: (e) => {
        (l = s), (o = null), (i = void 0), (d = {}), (c = new Set()), (_ = {});
    },
});
