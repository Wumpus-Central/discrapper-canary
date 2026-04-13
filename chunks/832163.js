"use strict";
let r;
n.d(t, { A: () => Y });
var i = n(311907),
    s = n(73153),
    a = n(773669),
    o = n(961350);
let l = {},
    u = {},
    c = {},
    d = {},
    _ = {},
    f = {},
    p = {},
    h = new Set(),
    m = { state: "idle" },
    E = new Set(),
    g = {},
    A = {},
    I = new Set();
function T() {
    (c = {}),
        (d = {}),
        (f = {}),
        (p = {}),
        (h = new Set()),
        (m = { state: "idle" }),
        (E = new Set()),
        (g = {}),
        (A = {}),
        (I = new Set());
}
function S(e) {
    let { skuId: t } = e;
    f = { ...f, [t]: { state: "checking" } };
}
function y(e) {
    let { skuId: t, interactionId: n } = e;
    if (f[t]?.state !== "checking") return !1;
    if (h.has(n)) {
        h.delete(n), (f = { ...f, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    p[n] = t;
}
function v(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = f[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    f = { ...f, [t]: { state: "error", reason: n, httpStatus: r } };
}
function N(e) {
    let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
    if (o.default.getId() !== n) return !1;
    f = { ...f, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
}
function C(e) {
    let { entitlement: t } = e;
    if (null == f[t.sku_id]) return !1;
    (f = { ...f }), delete f[t.sku_id];
}
function R(e) {
    let { interactionId: t } = e;
    if (null == p[t]) return !1;
    delete p[t];
}
function O(e) {
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
function b() {
    (f = {}), (p = {}), (h = new Set());
}
function D(e) {
    let { guildId: t } = e,
        n = u[t];
    (u[t] = { ...n, state: "loading" }), (u = { ...u });
}
function L(e) {
    let { guildId: t, storefront: n } = e;
    (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }),
        (u = { ...u }),
        null != n.assets && (c = { ...c, ...n.assets });
}
function w(e) {
    let { assets: t } = e;
    c = { ...c, ...t };
}
function M(e) {
    let { applicationId: t, storefrontMetadata: n } = e;
    d = { ...d, [t]: n };
}
function x(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = u[t];
        e?.state === "loading" && e?.storefront != null ? (u[t] = { ...e, state: "fetched" }) : delete u[t];
    } else u[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    u = { ...u };
}
function P(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (l[t] = { activePage: n, activeSkuId: r }), (l = { ...l });
}
function k(e) {
    let { guildId: t, announcement: n } = e;
    (_ = { ..._ })[t] = { state: "success", announcement: n };
}
function U(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "error" };
}
function G(e) {
    let { guildId: t } = e;
    (_ = { ..._ })[t] = { state: "loading" };
}
function F() {
    m = { state: "loading" };
}
function V(e) {
    let { config: t } = e;
    (m = { state: "success", config: t, fetchedAt: Date.now() }),
        (E = new Set(t.storefronts.map((e) => e.applicationId))),
        (I = new Set(t.storefronts.map((e) => e.guildId))),
        (g = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
        (A = t.storefronts.reduce(
            (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
            {},
        ));
}
function B() {
    m = { state: "error", fetchedAt: Date.now() };
}
function H() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {}), (c = {}), (d = {});
}
class j extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], H), (r = a.default.locale);
    }
    getStorefrontData(e) {
        return u[e];
    }
    getSkuAssets() {
        return c;
    }
    getStorefrontMetadata(e) {
        return d[e];
    }
    getStorefrontState(e) {
        return l[e];
    }
    getAnnouncement(e) {
        return _[e];
    }
    getConfig() {
        return "success" === m.state ? m.config : null;
    }
    getApplicationIdFromDetectableId(e) {
        return A[e];
    }
    getDetectableIdsToApplicationIds() {
        return A;
    }
    getGuildIdFromApplicationId(e) {
        return "success" === m.state
            ? m.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.guildId
            : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return g[e];
    }
    getConfigFetchState() {
        return m;
    }
    getStorefrontApplicationIds() {
        return E;
    }
    getStorefrontGuildIds() {
        return I;
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
let Y = new j(s.h, {
    LOGOUT: T,
    POST_CONNECTION_OPEN: b,
    ENTITLEMENT_CREATE: C,
    INTERACTION_FAILURE: O,
    INTERACTION_SUCCESS: R,
    SOCIAL_LAYER_STOREFRONT_LOAD: D,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: L,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: w,
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: M,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: x,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: P,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: G,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: k,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: U,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: F,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: V,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: B,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: S,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: y,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: v,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: N,
});
