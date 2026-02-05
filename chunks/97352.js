"use strict";
n.d(t, { A: () => N }), n(321073);
var r = n(311907),
    i = n(73153),
    a = n(832946),
    s = n(583613),
    o = n(661191),
    l = n(652215),
    u = n(788868);
let c = {},
    d = {},
    _ = new Set(),
    f = new Set(),
    p = {},
    h = {};
function m(e) {
    let t = e.skuId;
    c[e.id] = e;
    let n = e.prices[l.lid.DEFAULT];
    if (null != n) {
        let t = new Set(Object.keys(n.paymentSourcePrices));
        p[e.id] = t;
        let r = Array.from(h[e.skuId] ?? new Set());
        h[e.skuId] = new Set([...r, ...Array.from(t)]);
    }
    let r = d[t];
    null != r ? r.add(e.id) : (d[t] = new Set([e.id]));
}
function g() {
    [u.hd[u.gD.NONE_MONTH], u.hd[u.gD.NONE_YEAR], u.hd[u.gD.NONE_3_MONTH], u.hd[u.gD.NONE_6_MONTH]].forEach((e) =>
        m(
            a.Ay.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: l.Yri.USD,
                price: 0,
                price_tier: 0,
            }),
        ),
    );
}
function E(e) {
    m(a.Ay.createFromServer(e));
}
function A(e) {
    let { skuId: t } = e;
    _.add(t);
}
function I(e) {
    let { skuId: t, subscriptionPlans: n } = e;
    (d[t] = new Set()), (h[t] = new Set()), n.forEach(E), _.delete(t), f.delete(t);
}
function T(e) {
    let { giftCode: t } = e;
    null != t.subscription_plan && E(t.subscription_plan);
}
function y(e) {
    let { skuId: t } = e;
    _.delete(t), f.delete(t);
}
function S(e) {
    let { entitlements: t } = e;
    for (let e of t) null != e.subscription_plan && E(e.subscription_plan);
}
function v() {
    (0, s.LP)(c), (0, s.LP)(d), _.clear(), f.clear(), (0, s.LP)(p), (0, s.LP)(h), g();
}
g();
let C = [u.WT.DAY, u.WT.MONTH, u.WT.YEAR];
class b extends r.Ay.Store {
    static displayName = "SubscriptionPlanStore";
    getPlanIdsForSkus(e) {
        let t = [];
        for (let n of e) {
            let e = Array.from(d[n] ?? new Set());
            e.sort((e, t) => {
                let n = c[e],
                    r = c[t];
                return C.indexOf(n.interval) - C.indexOf(r.interval) || n.intervalCount - r.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return o.default.keys(d);
    }
    getForSKU(e) {
        return Array.from(d[e] ?? []).map((e) => c[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return c[e];
    }
    isFetchingForSKU(e) {
        return _.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!f.has(e) || (!_.has(e) && null != d[e]);
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
        f.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return p.hasOwnProperty(e) ? p[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(p).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return u.pe.NONE === t || (null != h[t] && h[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
let N = new b(i.h, {
    SUBSCRIPTION_PLANS_FETCH: A,
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: I,
    SUBSCRIPTION_PLANS_FETCH_FAILURE: y,
    SUBSCRIPTION_PLANS_RESET: v,
    GIFT_CODE_RESOLVE_SUCCESS: T,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: S,
    LOGOUT: v,
});
