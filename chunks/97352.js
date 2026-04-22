"use strict";
n.d(t, { A: () => S }), n(321073);
var r = n(311907),
    i = n(73153),
    s = n(832946),
    a = n(583613),
    o = n(661191),
    l = n(652215),
    u = n(788868);
let d = {},
    c = {},
    _ = new Set(),
    f = new Set(),
    E = {},
    h = {};
function p(e) {
    let t = e.skuId;
    d[e.id] = e;
    let n = e.prices[l.lid.DEFAULT];
    if (null != n) {
        let t = new Set(Object.keys(n.paymentSourcePrices));
        E[e.id] = t;
        let r = Array.from(h[e.skuId] ?? new Set());
        h[e.skuId] = new Set([...r, ...Array.from(t)]);
    }
    let r = c[t];
    null != r ? r.add(e.id) : (c[t] = new Set([e.id]));
}
function m() {
    [u.hd[u.gD.NONE_MONTH], u.hd[u.gD.NONE_YEAR], u.hd[u.gD.NONE_3_MONTH], u.hd[u.gD.NONE_6_MONTH]].forEach((e) =>
        p(
            s.Ay.createFromServer({
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
function g(e) {
    p(s.Ay.createFromServer(e));
}
function A() {
    (0, a.LP)(d), (0, a.LP)(c), _.clear(), f.clear(), (0, a.LP)(E), (0, a.LP)(h), m();
}
m();
let I = [u.WT.DAY, u.WT.MONTH, u.WT.YEAR];
class T extends r.Ay.Store {
    static displayName = "SubscriptionPlanStore";
    getPlanIdsForSkus(e) {
        let t = [];
        for (let n of e) {
            let e = Array.from(c[n] ?? new Set());
            e.sort((e, t) => {
                let n = d[e],
                    r = d[t];
                return I.indexOf(n.interval) - I.indexOf(r.interval) || n.intervalCount - r.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return o.default.keys(c);
    }
    getForSKU(e) {
        return Array.from(c[e] ?? []).map((e) => d[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return d[e];
    }
    isFetchingForSKU(e) {
        return _.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!f.has(e) || (!_.has(e) && null != c[e]);
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
        return E.hasOwnProperty(e) ? E[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(E).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return u.pe.NONE === t || (null != h[t] && h[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
let S = new T(i.h, {
    SUBSCRIPTION_PLANS_FETCH: function (e) {
        let { skuId: t } = e;
        _.add(t);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: function (e) {
        let { skuId: t, subscriptionPlans: n } = e;
        (c[t] = new Set()), (h[t] = new Set()), n.forEach(g), _.delete(t), f.delete(t);
    },
    SUBSCRIPTION_PLANS_FETCH_FAILURE: function (e) {
        let { skuId: t } = e;
        _.delete(t), f.delete(t);
    },
    SUBSCRIPTION_PLANS_RESET: A,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        null != t.subscription_plan && g(t.subscription_plan);
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
        let { entitlements: t } = e;
        for (let e of t) null != e.subscription_plan && g(e.subscription_plan);
    },
    LOGOUT: A,
});
