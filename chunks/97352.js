"use strict";
n.d(t, { A: () => S }), n(321073);
var i = n(17928),
    r = n(228366),
    a = n(832946),
    s = n(583613),
    l = n(935208),
    o = n(652215),
    d = n(202541);
let c = {},
    u = {},
    _ = new Set(),
    E = new Set(),
    A = {},
    h = {};
function I(e) {
    let t = e.skuId;
    c[e.id] = e;
    let n = e.prices[o.lid.DEFAULT];
    if (null != n) {
        let t = new Set(Object.keys(n.paymentSourcePrices));
        A[e.id] = t;
        let i = Array.from(h[e.skuId] ?? new Set());
        h[e.skuId] = new Set([...i, ...Array.from(t)]);
    }
    let i = u[t];
    null != i ? i.add(e.id) : (u[t] = new Set([e.id]));
}
function f() {
    [d.hd[d.gD.NONE_MONTH], d.hd[d.gD.NONE_YEAR], d.hd[d.gD.NONE_3_MONTH], d.hd[d.gD.NONE_6_MONTH]].forEach((e) =>
        I(
            a.Ay.createFromServer({
                id: e.id,
                name: e.name,
                interval: e.interval,
                interval_count: e.intervalCount,
                tax_inclusive: !0,
                sku_id: e.skuId,
                currency: o.Yri.USD,
                price: 0,
                price_tier: 0,
            }),
        ),
    );
}
function p(e) {
    I(a.Ay.createFromServer(e));
}
function T() {
    (0, s.LP)(c), (0, s.LP)(u), _.clear(), E.clear(), (0, s.LP)(A), (0, s.LP)(h), f();
}
f();
let m = [d.WT.DAY, d.WT.MONTH, d.WT.YEAR];
class g extends i.Ay.Store {
    static displayName = "SubscriptionPlanStore";
    getPlanIdsForSkus(e) {
        let t = [];
        for (let n of e) {
            let e = Array.from(u[n] ?? new Set());
            e.sort((e, t) => {
                let n = c[e],
                    i = c[t];
                return m.indexOf(n.interval) - m.indexOf(i.interval) || n.intervalCount - i.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return l.default.keys(u);
    }
    getForSKU(e) {
        return Array.from(u[e] ?? []).map((e) => c[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find(
            (e) => e.id !== d.gD.PREMIUM_GROUP_MONTH && e.interval === t && e.intervalCount === n,
        );
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
        return !!E.has(e) || (!_.has(e) && null != u[e]);
    }
    isLoadedForSKUs(e) {
        return e.every((e) => this.isLoadedForSKU(e));
    }
    isFetchingForPremiumSKUs() {
        return d.oz.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForPremiumSKUs() {
        return d.oz.every((e) => this.isLoadedForSKU(e));
    }
    ignoreSKUFetch(e) {
        E.add(e);
    }
    getPaymentSourcesForPlanId(e) {
        return A.hasOwnProperty(e) ? A[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(A).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return d.pe.NONE === t || (null != h[t] && h[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
let S = new g(r.h, {
    SUBSCRIPTION_PLANS_FETCH: function (e) {
        let { skuId: t } = e;
        _.add(t);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: function (e) {
        let { skuId: t, subscriptionPlans: n } = e;
        (u[t] = new Set()), (h[t] = new Set()), n.forEach(p), _.delete(t), E.delete(t);
    },
    SUBSCRIPTION_PLANS_FETCH_FAILURE: function (e) {
        let { skuId: t } = e;
        _.delete(t), E.delete(t);
    },
    SUBSCRIPTION_PLANS_RESET: T,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        null != t.subscription_plan && p(t.subscription_plan);
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
        let { entitlements: t } = e;
        for (let e of t) null != e.subscription_plan && p(e.subscription_plan);
    },
    LOGOUT: T,
});
