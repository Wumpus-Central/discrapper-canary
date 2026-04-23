"use strict";
n.d(t, { A: () => S }), n(321073);
var i = n(17928),
    r = n(228366),
    s = n(832946),
    a = n(583613),
    o = n(935208),
    l = n(652215),
    d = n(788868);
let _ = {},
    u = {},
    c = new Set(),
    E = new Set(),
    h = {},
    m = {};
function f(e) {
    let t = e.skuId;
    _[e.id] = e;
    let n = e.prices[l.lid.DEFAULT];
    if (null != n) {
        let t = new Set(Object.keys(n.paymentSourcePrices));
        h[e.id] = t;
        let i = Array.from(m[e.skuId] ?? new Set());
        m[e.skuId] = new Set([...i, ...Array.from(t)]);
    }
    let i = u[t];
    null != i ? i.add(e.id) : (u[t] = new Set([e.id]));
}
function g() {
    [d.hd[d.gD.NONE_MONTH], d.hd[d.gD.NONE_YEAR], d.hd[d.gD.NONE_3_MONTH], d.hd[d.gD.NONE_6_MONTH]].forEach((e) =>
        f(
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
function p(e) {
    f(s.Ay.createFromServer(e));
}
function A() {
    (0, a.LP)(_), (0, a.LP)(u), c.clear(), E.clear(), (0, a.LP)(h), (0, a.LP)(m), g();
}
g();
let I = [d.WT.DAY, d.WT.MONTH, d.WT.YEAR];
class T extends i.Ay.Store {
    static displayName = "SubscriptionPlanStore";
    getPlanIdsForSkus(e) {
        let t = [];
        for (let n of e) {
            let e = Array.from(u[n] ?? new Set());
            e.sort((e, t) => {
                let n = _[e],
                    i = _[t];
                return I.indexOf(n.interval) - I.indexOf(i.interval) || n.intervalCount - i.intervalCount;
            }),
                t.push(...e);
        }
        return t;
    }
    getFetchedSKUIDs() {
        return o.default.keys(u);
    }
    getForSKU(e) {
        return Array.from(u[e] ?? []).map((e) => _[e]);
    }
    getForSkuAndInterval(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
        return this.getForSKU(e).find((e) => e.interval === t && e.intervalCount === n);
    }
    get(e) {
        return _[e];
    }
    isFetchingForSKU(e) {
        return c.has(e);
    }
    isFetchingForSKUs(e) {
        return e.some((e) => this.isFetchingForSKU(e));
    }
    isLoadedForSKU(e) {
        return !!E.has(e) || (!c.has(e) && null != u[e]);
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
        return h.hasOwnProperty(e) ? h[e] : null;
    }
    getPaymentSourceIds() {
        let e = new Set();
        return Object.values(h).forEach((t) => t.forEach((t) => e.add(t))), e;
    }
    hasPaymentSourceForSKUId(e, t) {
        return d.pe.NONE === t || (null != m[t] && m[t].has(e));
    }
    hasPaymentSourceForSKUIds(e, t) {
        return t.every((t) => this.hasPaymentSourceForSKUId(e, t));
    }
}
let S = new T(r.h, {
    SUBSCRIPTION_PLANS_FETCH: function (e) {
        let { skuId: t } = e;
        c.add(t);
    },
    SUBSCRIPTION_PLANS_FETCH_SUCCESS: function (e) {
        let { skuId: t, subscriptionPlans: n } = e;
        (u[t] = new Set()), (m[t] = new Set()), n.forEach(p), c.delete(t), E.delete(t);
    },
    SUBSCRIPTION_PLANS_FETCH_FAILURE: function (e) {
        let { skuId: t } = e;
        c.delete(t), E.delete(t);
    },
    SUBSCRIPTION_PLANS_RESET: A,
    GIFT_CODE_RESOLVE_SUCCESS: function (e) {
        let { giftCode: t } = e;
        null != t.subscription_plan && p(t.subscription_plan);
    },
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: function (e) {
        let { entitlements: t } = e;
        for (let e of t) null != e.subscription_plan && p(e.subscription_plan);
    },
    LOGOUT: A,
});
