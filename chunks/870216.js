let r;
n.d(t, { A: () => h });
var i,
    a = n(311907),
    s = n(73153);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
let l = [],
    c = l,
    u = null,
    d = (e) => {
        var t, n;
        (c = null != (t = e.analyticsLocations) ? t : l),
            (u = null != (n = e.analyticsSource) ? n : null),
            (r = e.initialProductSkuId);
    },
    f = (e) => {
        (c = l), (u = null);
    },
    p = (e) => {
        e.item.skuId === r && (r = void 0);
    };
class _ extends (i = a.Ay.Store) {
    get analyticsLocations() {
        return c;
    }
    get analyticsSource() {
        return u;
    }
    get initialProductSkuId() {
        return r;
    }
    getAnalytics() {
        return {
            analyticsLocations: c,
            analyticsSource: u,
        };
    }
}
o(_, "displayName", "CollectiblesShopStore");
let h = new _(s.h, {
    COLLECTIBLES_SHOP_OPEN: d,
    COLLECTIBLES_SHOP_CLOSE: f,
    COLLECTIBLES_PRODUCT_DETAILS_OPEN: p,
    LOGOUT: f,
});
