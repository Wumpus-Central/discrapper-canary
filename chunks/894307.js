"use strict";
n.d(t, { J_: () => y, N4: () => T, l9: () => I });
var i = n(636537),
    r = n(228366),
    s = n(615405),
    a = n(927813),
    o = n(561573),
    l = n(937427);
n(321073);
var u = n(17928);
let c = {};
function d() {
    c = {};
}
class _ extends u.Ay.Store {
    static displayName = "StorefrontPromotionStore";
    getFetchState(e) {
        return c[e]?.state;
    }
    getFetchedAt(e) {
        let t = c[e];
        if (t?.state === "success" || t?.state === "error") return t.fetchedAt;
    }
    getPromotionsForApplication(e) {
        let t = c[e];
        return t?.state === "success" || t?.state === "loading" ? (t.promotions ?? null) : null;
    }
}
new _(r.h, {
    LOGOUT: d,
    STOREFRONT_PROMOTIONS_FETCH_START: function (e) {
        let { applicationIds: t } = e;
        for (let e of t) {
            let t = c[e];
            c[e] = { state: "loading", promotions: t?.state === "success" ? [...t.promotions] : void 0 };
        }
    },
    STOREFRONT_PROMOTIONS_FETCH_SUCCESS: function (e) {
        let { applicationIds: t, promotions: n } = e,
            i = Date.now(),
            r = { ...c };
        for (let e of t) r[e] = { state: "success", promotions: [], fetchedAt: i };
        for (let e of n) {
            let t = e.applicationId;
            r[t]?.state === "success" && r[t].promotions.push(e);
        }
        c = r;
    },
    STOREFRONT_PROMOTIONS_FETCH_FAIL: function (e) {
        let { applicationIds: t } = e,
            n = Date.now();
        for (let e of t) c[e] = { state: "error", fetchedAt: n };
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: d,
});
var h = n(117218),
    f = n(315069);
class p extends f.A {
    id;
    applicationId;
    displayName;
    rewardType;
    rewardConfig;
    skuIds;
    appliesToAllSkus;
    startsAt;
    endsAt;
    static createFromServer(e) {
        var t;
        return new p({
            id: e.id,
            applicationId: e.application_id,
            displayName: e.display_name ?? null,
            rewardType: e.reward_type,
            rewardConfig:
                null != e.reward_config
                    ? null == (t = e.reward_config)
                        ? null
                        : {
                              discount:
                                  null != t.discount
                                      ? { id: t.discount.id, type: t.discount.type, amount: t.discount.amount }
                                      : null,
                          }
                    : null,
            skuIds: (function (e) {
                if (null == e) return null;
                let t = {};
                for (let [n, i] of Object.entries(e)) t[n] = { priceTiers: i.price_tiers };
                return t;
            })(e.sku_ids),
            appliesToAllSkus: e.applies_to_all_skus,
            startsAt: null != e.starts_at ? new Date(e.starts_at) : null,
            endsAt: null != e.ends_at ? new Date(e.ends_at) : null,
        });
    }
    constructor(e) {
        super(),
            (this.id = e.id),
            (this.applicationId = e.applicationId),
            (this.displayName = e.displayName),
            (this.rewardType = e.rewardType),
            (this.rewardConfig = e.rewardConfig),
            (this.skuIds = e.skuIds),
            (this.appliesToAllSkus = e.appliesToAllSkus),
            (this.startsAt = e.startsAt),
            (this.endsAt = e.endsAt);
    }
}
var E = n(652215);
a.A.Millis.HOUR;
let m = 10 * a.A.Millis.MINUTE,
    g = a.A.Millis.MINUTE;
function A(e) {
    return e?.type === "error" ? m : g;
}
async function I(e) {
    let { applicationId: t } = e;
    await S({ type: "application", applicationId: t });
}
async function T(e) {
    let { skuIds: t } = e;
    await S({ type: "skus", skuIds: t });
}
async function S(e) {
    let {
        shouldFetch: t,
        filteredSkuIds: n,
        applicationId: a,
    } = (function (e) {
        if ("application" === e.type) {
            let t = o.A.getFetchStateForApplicationId(e.applicationId),
                n = A(t);
            return null != t && ("loading" === t.type || t.fetchedAt > Date.now() - n)
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: e.applicationId }
                : { shouldFetch: !0, filteredSkuIds: [], applicationId: e.applicationId };
        }
        {
            let t = e.skuIds
                .filter((e) => {
                    let t = o.A.getFetchStateForSkuId(e);
                    if (null == t) return !0;
                    let n = A(t);
                    return "loading" !== t.type && t.fetchedAt < Date.now() - n;
                })
                .sort((e, t) => {
                    let n = o.A.getFetchStateForSkuId(e),
                        i = o.A.getFetchStateForSkuId(t);
                    return null == n && null != i ? -1 : +(null != n && null == i);
                });
            return 0 === t.length
                ? { shouldFetch: !1, filteredSkuIds: [], applicationId: null }
                : { shouldFetch: !0, filteredSkuIds: t.slice(0, 50), applicationId: null };
        }
    })(e);
    if (!t) return;
    let u = null != a ? { type: "application", applicationId: a } : { type: "skus", skuIds: n };
    try {
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_START", priceId: u });
        let e = l.A.getPromotionIdOverride(),
            t = (
                await i.Bo.get({
                    url: E.Rsh.STOREFRONT_PRICES,
                    query: {
                        ...(null != a ? { application_id: a } : { sku_ids: n }),
                        country_code: s.A.ipCountryCode ?? void 0,
                        ...(null != e ? { promotion_id_override: e } : {}),
                    },
                    rejectWithError: !0,
                })
            ).body;
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_SUCCESS", priceId: u, data: (0, h.Oj)(t) });
    } catch {
        r.h.dispatch({ type: "SKUS_PRICING_FETCH_FAIL", priceId: u });
    }
}
function y(e) {
    r.h.dispatch({ type: "STOREFRONT_PROMOTION_ID_OVERRIDE_SET", promotionIdOverride: e });
}
