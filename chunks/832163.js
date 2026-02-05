"use strict";
let r;
n.d(t, { A: () => U });
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
    p = {};
function h() {
    (d = {}), (f = {}), (p = {});
}
function m(e) {
    let { skuId: t } = e;
    f = { ...f, [t]: "checking" };
}
function g(e) {
    let { skuId: t, interactionId: n } = e;
    if ("checking" !== f[t]) return !1;
    p[n] = t;
}
function E(e) {
    let { skuId: t } = e;
    f = { ...f, [t]: "error" };
}
function A(e) {
    let { skuId: t, recipientId: n, eligible: r } = e;
    if (o.default.getId() !== n) return !1;
    f = { ...f, [t]: r ? "eligible" : "ineligible" };
}
function I(e) {
    let { entitlement: t } = e;
    if (null == f[t.sku_id]) return !1;
    (f = { ...f }), delete f[t.sku_id];
}
function T(e) {
    let { interactionId: t } = e;
    if (null == p[t]) return !1;
    delete p[t];
}
function y(e) {
    let { interactionId: t } = e;
    if (null == t) return !1;
    let n = p[t];
    if (null == n) return !1;
    (f = { ...f, [n]: "error" }), delete p[t];
}
function S() {
    (f = {}), (p = {});
}
function v(e) {
    let { applicationId: t, userIds: n } = e;
    d = { ...d, [t]: { ...(d[t] ?? {}), [l(n)]: { state: "loading" } } };
}
function C(e) {
    let { skus: t, skusToRecommendationReasons: n, userIds: r, application: i, numItemsRequested: a } = e;
    d = {
        ...d,
        [i.id]: {
            ...(d[i.id] ?? {}),
            [l(r)]: { state: "success", data: { skus: t, skusToRecommendationReasons: n, numItemsRequested: a } },
        },
    };
}
function b(e) {
    let { applicationId: t, userIds: n } = e,
        r = l(n);
    if (null != d[t] && null != d[t][r] && "success" === d[t][r].state) return !1;
    d = { ...d, [t]: { ...(d[t] ?? {}), [r]: { state: "error" } } };
}
function N(e) {
    let { guildId: t } = e,
        n = c[t];
    (c[t] = { ...n, state: "loading" }), (c = { ...c });
}
function R(e) {
    let { guildId: t, storefront: n } = e;
    (c[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }), (c = { ...c });
}
function O(e) {
    let { guildId: t, storefront: n } = e,
        r = c[t];
    r?.storefront != null
        ? (c[t] = { ...r, storefront: { ...r.storefront, assets: { ...r.storefront.assets, ...n.assets } } })
        : (c[t] = { storefront: n, state: "partially-fetched", fetchedAt: null }),
        (c = { ...c });
}
function D(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = c[t];
        e?.state === "loading" && e?.storefront != null ? (c[t] = { ...e, state: "fetched" }) : delete c[t];
    } else c[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    c = { ...c };
}
function L(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (u[t] = { activePage: n, activeSkuId: r }), (u = { ...u });
}
function w(e) {
    let { guildId: t, announcement: n } = e;
    (_ = { ..._ })[t] = { state: "success", announcement: n };
}
function x(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "error" };
}
function P(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "loading" };
}
function M() {
    if (r === s.default.locale) return !1;
    (r = s.default.locale), (u = {}), (c = {}), (d = {});
}
class k extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, s.default), this.syncWith([s.default], M), (r = s.default.locale);
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
    getSKUEligibility(e) {
        return f[e];
    }
    getNormalizedSKUEligibility(e) {
        return "ineligible" !== f[e];
    }
}
let U = new k(a.h, {
    LOGOUT: h,
    POST_CONNECTION_OPEN: S,
    ENTITLEMENT_CREATE: I,
    INTERACTION_FAILURE: y,
    INTERACTION_SUCCESS: T,
    SOCIAL_LAYER_STOREFRONT_LOAD: N,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: R,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: D,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: L,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: C,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE: b,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START: v,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: P,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: w,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: x,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: m,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: g,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: E,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: A,
});
