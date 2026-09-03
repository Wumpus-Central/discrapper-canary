let i;
n.d(t, { A: () => E });
var r = n(17928),
    a = n(228366);
let s = [],
    l = s,
    o = null,
    d = {},
    c = new Set(),
    u = {};
class _ extends r.Ay.Store {
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
        return null == e ? null : (u[e] ?? null);
    }
}
let E = new _(a.h, {
    COLLECTIBLES_SHOP_OPEN: function (e) {
        (l = e.analyticsLocations ?? s), (o = e.analyticsSource ?? null), (i = e.initialProductSkuId);
    },
    COLLECTIBLES_SHOP_CLOSE: function (e) {
        (l = s), (o = null), (i = void 0);
    },
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: function (e) {
        e.skuId === i && (i = void 0);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH: function (e) {
        let { tab: t } = e;
        c.add(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_SUCCESS: function (e) {
        let { tab: t, layoutId: n } = e;
        (d[t] = n), delete u[t], c.delete(t);
    },
    COLLECTIBLES_SHOP_TAB_LAYOUT_FETCH_FAILURE: function (e) {
        let { tab: t, apiError: n } = e;
        (u[t] = n), c.delete(t);
    },
    LOGOUT: function (e) {
        (l = s), (o = null), (i = void 0), (d = {}), (c = new Set()), (u = {});
    },
});
