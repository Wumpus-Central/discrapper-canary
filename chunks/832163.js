"use strict";
let r;
n.d(t, { A: () => H });
var i = n(311907),
    s = n(73153),
    a = n(773669),
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
    p = {},
    h = new Set(),
    m = { state: "idle" };
function E() {
    (d = {}), (f = {}), (p = {}), (h = new Set()), (m = { state: "idle" });
}
function g(e) {
    let { skuId: t } = e;
    f = { ...f, [t]: { state: "checking" } };
}
function A(e) {
    let { skuId: t, interactionId: n } = e;
    if (f[t]?.state !== "checking") return !1;
    if (h.has(n)) {
        h.delete(n), (f = { ...f, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    p[n] = t;
}
function I(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = f[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    f = { ...f, [t]: { state: "error", reason: n, httpStatus: r } };
}
function T(e) {
    let { skuId: t, recipientId: n, eligible: r } = e;
    if (o.default.getId() !== n) return !1;
    f = { ...f, [t]: { state: r ? "eligible" : "ineligible" } };
}
function S(e) {
    let { entitlement: t } = e;
    if (null == f[t.sku_id]) return !1;
    (f = { ...f }), delete f[t.sku_id];
}
function y(e) {
    let { interactionId: t } = e;
    if (null == p[t]) return !1;
    delete p[t];
}
function v(e) {
    let { interactionId: t } = e;
    if (null == t) return !1;
    let n = p[t];
    if (null == n) {
        if (Object.values(f).some((e) => "checking" === e.state)) {
            if (h.size >= 25) {
                let e = h.values().next().value;
                h.delete(e);
            }
            h.add(t);
        }
        return !1;
    }
    (f = { ...f, [n]: { state: "error", reason: "interaction_failure" } }), delete p[t];
}
function N() {
    (f = {}), (p = {}), (h = new Set());
}
function C(e) {
    let { applicationId: t, userIds: n } = e;
    d = { ...d, [t]: { ...(d[t] ?? {}), [l(n)]: { state: "loading" } } };
}
function b(e) {
    let { skus: t, skusToRecommendationReasons: n, userIds: r, application: i, numItemsRequested: s } = e;
    d = {
        ...d,
        [i.id]: {
            ...(d[i.id] ?? {}),
            [l(r)]: {
                state: "success",
                data: { skus: t, skusToRecommendationReasons: n, numItemsRequested: s },
                fetchedAt: Date.now(),
            },
        },
    };
}
function R(e) {
    let { applicationId: t, userIds: n } = e,
        r = l(n);
    if (null != d[t] && null != d[t][r] && "success" === d[t][r].state) return !1;
    d = { ...d, [t]: { ...(d[t] ?? {}), [r]: { state: "error", fetchedAt: Date.now() } } };
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
function M(e) {
    let { guildId: t, announcement: n } = e;
    (_ = { ..._ })[t] = { state: "success", announcement: n };
}
function P(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "error" };
}
function k(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "loading" };
}
function U() {
    m = { state: "loading" };
}
function G(e) {
    let { config: t } = e;
    m = { state: "success", config: t, fetchedAt: Date.now() };
}
function F() {
    m = { state: "error", fetchedAt: Date.now() };
}
function V() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (u = {}), (c = {}), (d = {});
}
class B extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], V), (r = a.default.locale);
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
        return "success" === m.state ? m.config : null;
    }
    getConfigFetchState() {
        return m;
    }
    getSKUEligibility(e) {
        return f[e]?.state;
    }
    getSKUEligibilityEntry(e) {
        return f[e];
    }
    getNormalizedSKUEligibility(e) {
        return f[e]?.state !== "ineligible";
    }
}
let H = new B(s.h, {
    LOGOUT: E,
    POST_CONNECTION_OPEN: N,
    ENTITLEMENT_CREATE: S,
    INTERACTION_FAILURE: v,
    INTERACTION_SUCCESS: y,
    SOCIAL_LAYER_STOREFRONT_LOAD: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: D,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: L,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: w,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: x,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_SUCCESS: b,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_FAILURE: R,
    SOCIAL_LAYER_STOREFRONT_RECOMMENDATIONS_FETCH_START: C,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: k,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: M,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: P,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: U,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: G,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: F,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: g,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: A,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: I,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: T,
});
