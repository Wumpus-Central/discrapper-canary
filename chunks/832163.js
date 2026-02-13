"use strict";
let r;
n.d(t, { A: () => j });
var i = n(311907),
    a = n(73153),
    s = n(773669),
    o = n(961350);
function l(e) {
    if (0 === e.length) throw Error("No user IDs provided");
    return e.length > 1 ? [...e].join(",") : e[0];
}
let u = {},
    c = {},
    d = {},
    _ = {},
    f = {},
    h = {},
    p = { state: "idle" };
function g() {
    (d = {}), (f = {}), (h = {}), (p = { state: "idle" });
}
function E(e) {
    let { skuId: t } = e;
    f = { ...f, [t]: "checking" };
}
function A(e) {
    let { skuId: t, interactionId: n } = e;
    if ("checking" !== f[t]) return !1;
    h[n] = t;
}
function I(e) {
    let { skuId: t } = e;
    f = { ...f, [t]: "error" };
}
function T(e) {
    let { skuId: t, recipientId: n, eligible: r } = e;
    if (o.default.getId() !== n) return !1;
    f = { ...f, [t]: r ? "eligible" : "ineligible" };
}
function y(e) {
    let { entitlement: t } = e;
    if (null == f[t.sku_id]) return !1;
    (f = { ...f }), delete f[t.sku_id];
}
function S(e) {
    let { interactionId: t } = e;
    if (null == h[t]) return !1;
    delete h[t];
}
function v(e) {
    let { interactionId: t } = e;
    if (null == t) return !1;
    let n = h[t];
    if (null == n) return !1;
    (f = { ...f, [n]: "error" }), delete h[t];
}
function C() {
    (f = {}), (h = {});
}
function b(e) {
    let { applicationId: t, userIds: n } = e;
    d = { ...d, [t]: { ...(d[t] ?? {}), [l(n)]: { state: "loading" } } };
}
function N(e) {
    let { skus: t, skusToRecommendationReasons: n, userIds: r, application: i, numItemsRequested: a } = e;
    d = {
        ...d,
        [i.id]: {
            ...(d[i.id] ?? {}),
            [l(r)]: { state: "success", data: { skus: t, skusToRecommendationReasons: n, numItemsRequested: a } },
        },
    };
}
function R(e) {
    let { applicationId: t, userIds: n } = e,
        r = l(n);
    if (null != d[t] && null != d[t][r] && "success" === d[t][r].state) return !1;
    d = { ...d, [t]: { ...(d[t] ?? {}), [r]: { state: "error" } } };
}
function O(e) {
    let { guildId: t } = e,
        n = c[t];
    (c[t] = { ...n, state: "loading" }), (c = { ...c });
}
function D(e) {
    let { guildId: t, storefront: n } = e;
    (c[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }), (c = { ...c });
}
function L(e) {
    let { guildId: t, storefront: n } = e,
        r = c[t];
    r?.storefront != null
        ? (c[t] = { ...r, storefront: { ...r.storefront, assets: { ...r.storefront.assets, ...n.assets } } })
        : (c[t] = { storefront: n, state: "partially-fetched", fetchedAt: null }),
        (c = { ...c });
}
function w(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = c[t];
        e?.state === "loading" && e?.storefront != null ? (c[t] = { ...e, state: "fetched" }) : delete c[t];
    } else c[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    c = { ...c };
}
function x(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (u[t] = { activePage: n, activeSkuId: r }), (u = { ...u });
}
function P(e) {
    let { guildId: t, announcement: n } = e;
    (_ = { ..._ })[t] = { state: "success", announcement: n };
}
function M(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "error" };
}
function k(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "loading" };
}
function U() {
    p = { state: "loading" };
}
function G(e) {
    let { config: t } = e;
    p = { state: "success", config: t, fetchedAt: Date.now() };
}
function F() {
    p = { state: "error", fetchedAt: Date.now() };
}
function V() {
    if (r === s.default.locale) return !1;
    (r = s.default.locale), (u = {}), (c = {}), (d = {});
}
class B extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, s.default), this.syncWith([s.default], V), (r = s.default.locale);
    }
    getStorefrontData(e) {
        return c[e];
    }
    getStorefrontState(e) {
        return u[e];
    }
    recommendationsByApplicationsAndUsers(e, t) {
        if (null != t && 0 !== t.length) return d[e]?.[l(t)];
    }
    getAnnouncement(e) {
        return _[e];
    }
    getConfig() {
        return "success" === p.state ? p.config : null;
    }
    getConfigFetchState() {
        return p;
    }
    getSKUEligibility(e) {
        return f[e];
    }
    getNormalizedSKUEligibility(e) {
        return "ineligible" !== f[e];
    }
}
let j = new B(a.h, {
    LOGOUT: g,
    POST_CONNECTION_OPEN: C,
    ENTITLEMENT_CREATE: y,
    INTERACTION_FAILURE: v,
    INTERACTION_SUCCESS: S,
    SOCIAL_LAYER_STOREFRONT_LOAD: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: D,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: L,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: w,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: x,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: N,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE: R,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START: b,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: k,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: P,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: M,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: U,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: G,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: F,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: E,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: A,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: I,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: T,
});
