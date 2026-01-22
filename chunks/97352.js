n.d(t, { A: () => R }), n(896048), n(638769), n(321073);
var r,
    i = n(311907),
    a = n(73153),
    s = n(832946),
    o = n(583613),
    l = n(661191),
    c = n(652215),
    u = n(788868);
function d(e, t, n) {
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
let f = {},
    p = {},
    _ = new Set(),
    h = new Set(),
    m = {},
    g = {};
function E(e) {
    let t = e.skuId;
    f[e.id] = e;
    let n = e.prices[c.lid.DEFAULT];
    if (null != n) {
        var r;
        let t = new Set(Object.keys(n.paymentSourcePrices));
        m[e.id] = t;
        let i = Array.from(null != (r = g[e.skuId]) ? r : new Set());
        g[e.skuId] = new Set([...i, ...Array.from(t)]);
    }
    let i = p[t];
    null != i ? i.add(e.id) : (p[t] = new Set([e.id]));
}
function b() {
    [u.hd[u.gD.NONE_MONTH], u.hd[u.gD.NONE_YEAR], u.hd[u.gD.NONE_3_MONTH], u.hd[u.gD.NONE_6_MONTH]].forEach((e) =>
        E(
            s.Ay.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: c.Yri.USD,
                price: 0,
                price_tier: 0,
            }),
        ),
    );
}
function y(e) {
    E(s.Ay.createFromServer(e));
}
function O(e) {
    let { skuId: t } = e;
    _.add(t);
}
function A(e) {
    let { skuId: t, subscriptionPlans: n } = e;
    (p[t] = new Set()), (g[t] = new Set()), n.forEach(y), _.delete(t), h.delete(t);
}
function v(e) {
    let { giftCode: t } = e;
    null != t.subscription_plan && y(t.subscription_plan);
}
function S(e) {
    let { skuId: t } = e;
    _.delete(t), h.delete(t);
}
function I(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.subscription_plan && y(e.subscription_plan);
}
function T() {
    (0, o.LP)(f), (0, o.LP)(p), _.clear(), h.clear(), (0, o.LP)(m), (0, o.LP)(g), b();
}
b();
let C = [u.WT.DAY, u.WT.MONTH, u.WT.YEAR];
class N extends (r = i.Ay.Store) {
    getPlanIdsForSkus(e) {
        let t = [];
        for (let r of e) {
            var n;
            let e = Array.from(null != (n = p[r]) ? n : new Set());
            e.sort((e, t) => {
                let n = f[e],
                    r = f[t];
                return C.indexOf(n.interval) - C.indexOf(r.interval) || n.intervalCount - r.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return l.default.keys(p);
    }
    getForSKU(e) {
        var t;
        return Array.from(null != (t = p[e]) ? t : []).map((e) => f[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return f[e];
    }
    isFetchingForSKU(e) {
        return _.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!h.has(e) || (!_.has(e) && null != p[e]);
    }
    isLoadedForSKUs(e) {
        return e.every((e) => this.isLoadedForSKU(e));
    }
    isFetchingForPremiumSKUs() {
        return u.oz.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForPremiumSKUs() {
        return u.oz.every((e) => this.isLoadedForSKU(e));
    }
    ignoreSKUFetch(e) {
        h.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return m.hasOwnProperty(e) ? m[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(m).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return u.pe.NONE === t || (null != g[t] && g[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
d(N, "displayName", "SubscriptionPlanStore");
let R = new N(a.h, {
    SUBSCRIPTION_PLANS_FETCH: O,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: A,
    SUBSCRIPTION_PLANS_FETCH_FAILURE: S,
    SUBSCRIPTION_PLANS_RESET: T,
    GIFT_CODE_RESOLVE_SUCCESS: v,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: I,
    LOGOUT: T,
});
