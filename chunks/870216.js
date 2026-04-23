let i;
n.d(t, { A: () => u });
var r = n(17928),
    a = n(228366);
let s = [],
    _ = s,
    l = null,
    o = {},
    E = new Set(),
    d = {};
class c extends r.Ay.Store {
    static displayName = "CollectiblesShopStore";
    get analyticsLocations() {
        return _;
    }
    get analyticsSource() {
        return l;
    }
    get initialProductSkuId() {
        return i;
    }
    getAnalytics() {
        return { analyticsLocations: _, analyticsSource: l };
    }
    getLayout(e) {
        return null == e ? null : (o[e] ?? null);
    }
    isFetchingLayout(e) {
        return null != e && E.has(e);
    }
    getLayoutFetchError(e) {
        return null == e ? null : (d[e] ?? null);
    }
}
let u = new c(a.h, {
    COLLECTIBLES_SHOP_OPEN: (e) => {
        (_ = e.analyticsLocations ?? s), (l = e.analyticsSource ?? null), (i = e.initialProductSkuId);
    },
    COLLECTIBLES_SHOP_CLOSE: (e) => {
        (_ = s), (l = null), (i = void 0);
    },
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: (e) => {
        e.skuId === i && (i = void 0);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: (e) => {
        let { tab: t } = e;
        E.add(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: (e) => {
        let { tab: t, layoutId: n } = e;
        (o[t] = n), delete d[t], E.delete(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: (e) => {
        let { tab: t, apiError: n } = e;
        (d[t] = n), E.delete(t);
    },
    LOGOUT: (e) => {
        (_ = s), (l = null), (i = void 0), (o = {}), (E = new Set()), (d = {});
    },
});
