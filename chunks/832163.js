"use strict";
let r;
n.d(t, { A: () => B });
var i = n(311907),
    s = n(73153),
    a = n(773669),
    o = n(961350);
let l = {},
    u = {},
    c = {},
    d = {},
    _ = {},
    f = new Set(),
    p = { state: "idle" },
    h = new Set(),
    m = {},
    E = {},
    g = new Set();
function A() {
    (d = {}), (_ = {}), (f = new Set()), (p = { state: "idle" }), (h = new Set()), (m = {}), (E = {}), (g = new Set());
}
function I(e) {
    let { skuId: t } = e;
    d = { ...d, [t]: { state: "checking" } };
}
function T(e) {
    let { skuId: t, interactionId: n } = e;
    if (d[t]?.state !== "checking") return !1;
    if (f.has(n)) {
        f.delete(n), (d = { ...d, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    _[n] = t;
}
function S(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = d[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    d = { ...d, [t]: { state: "error", reason: n, httpStatus: r } };
}
function y(e) {
    let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
    if (o.default.getId() !== n) return !1;
    d = { ...d, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
}
function v(e) {
    let { entitlement: t } = e;
    if (null == d[t.sku_id]) return !1;
    (d = { ...d }), delete d[t.sku_id];
}
function N(e) {
    let { interactionId: t } = e;
    if (null == _[t]) return !1;
    delete _[t];
}
function C(e) {
    let { interactionId: t } = e;
    if (null == t) return !1;
    let n = _[t];
    if (null == n) {
        if (Object.values(d).some((e) => "checking" === e.state)) {
            if (f.size >= 25) {
                let e = f.values().next().value;
                f.delete(e);
            }
            f.add(t);
        }
        return !1;
    }
    (d = { ...d, [n]: { state: "error", reason: "interaction_failure" } }), delete _[t];
}
function R() {
    (d = {}), (_ = {}), (f = new Set());
}
function O(e) {
    let { guildId: t } = e,
        n = u[t];
    (u[t] = { ...n, state: "loading" }), (u = { ...u });
}
function b(e) {
    let { guildId: t, storefront: n } = e;
    (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }), (u = { ...u });
}
function D(e) {
    let { guildId: t, storefront: n } = e,
        r = u[t];
    r?.storefront != null
        ? (u[t] = { ...r, storefront: { ...r.storefront, assets: { ...r.storefront.assets, ...n.assets } } })
        : (u[t] = { storefront: n, state: "partially-fetched", fetchedAt: null }),
        (u = { ...u });
}
function L(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = u[t];
        e?.state === "loading" && e?.storefront != null ? (u[t] = { ...e, state: "fetched" }) : delete u[t];
    } else u[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    u = { ...u };
}
function w(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (l[t] = { activePage: n, activeSkuId: r }), (l = { ...l });
}
function M(e) {
    let { guildId: t, announcement: n } = e;
    (c = { ...c })[t] = { state: "success", announcement: n };
}
function x(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "error" };
}
function P(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "loading" };
}
function k() {
    p = { state: "loading" };
}
function U(e) {
    let { config: t } = e;
    (p = { state: "success", config: t, fetchedAt: Date.now() }),
        (h = new Set(t.storefronts.map((e) => e.applicationId))),
        (g = new Set(t.storefronts.map((e) => e.guildId))),
        (m = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
        (E = t.storefronts.reduce(
            (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
            {},
        ));
}
function G() {
    p = { state: "error", fetchedAt: Date.now() };
}
function F() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {});
}
class V extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], F), (r = a.default.locale);
    }
    getStorefrontData(e) {
        return u[e];
    }
    getStorefrontState(e) {
        return l[e];
    }
    getAnnouncement(e) {
        return c[e];
    }
    getConfig() {
        return "success" === p.state ? p.config : null;
    }
    getApplicationIdFromDetectableId(e) {
        return E[e];
    }
    getDetectableIdsToApplicationIds() {
        return E;
    }
    getGuildIdFromApplicationId(e) {
        return "success" === p.state
            ? p.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.guildId
            : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return m[e];
    }
    getConfigFetchState() {
        return p;
    }
    getStorefrontApplicationIds() {
        return h;
    }
    getStorefrontGuildIds() {
        return g;
    }
    getSKUEligibility(e) {
        return d[e]?.state;
    }
    getSKUEligibilityEntry(e) {
        return d[e];
    }
    getNormalizedSKUEligibility(e) {
        return d[e]?.state !== "ineligible";
    }
}
let B = new V(s.h, {
    LOGOUT: A,
    POST_CONNECTION_OPEN: R,
    ENTITLEMENT_CREATE: v,
    INTERACTION_FAILURE: C,
    INTERACTION_SUCCESS: N,
    SOCIAL_LAYER_STOREFRONT_LOAD: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: b,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: D,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: L,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: w,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: P,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: M,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: x,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: k,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: U,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: G,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: I,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: T,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: S,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: y,
});
