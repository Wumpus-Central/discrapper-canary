"use strict";
let r;
n.d(t, { A: () => V });
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
    m = new Set(),
    E = new Set();
function g() {
    (d = {}), (_ = {}), (f = new Set()), (p = { state: "idle" }), (h = new Set()), (m = new Set()), (E = new Set());
}
function A(e) {
    let { skuId: t } = e;
    d = { ...d, [t]: { state: "checking" } };
}
function I(e) {
    let { skuId: t, interactionId: n } = e;
    if (d[t]?.state !== "checking") return !1;
    if (f.has(n)) {
        f.delete(n), (d = { ...d, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    _[n] = t;
}
function T(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = d[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    d = { ...d, [t]: { state: "error", reason: n, httpStatus: r } };
}
function S(e) {
    let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
    if (o.default.getId() !== n) return !1;
    d = { ...d, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
}
function y(e) {
    let { entitlement: t } = e;
    if (null == d[t.sku_id]) return !1;
    (d = { ...d }), delete d[t.sku_id];
}
function v(e) {
    let { interactionId: t } = e;
    if (null == _[t]) return !1;
    delete _[t];
}
function N(e) {
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
function C() {
    (d = {}), (_ = {}), (f = new Set());
}
function R(e) {
    let { guildId: t } = e,
        n = u[t];
    (u[t] = { ...n, state: "loading" }), (u = { ...u });
}
function O(e) {
    let { guildId: t, storefront: n } = e;
    (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }), (u = { ...u });
}
function b(e) {
    let { guildId: t, storefront: n } = e,
        r = u[t];
    r?.storefront != null
        ? (u[t] = { ...r, storefront: { ...r.storefront, assets: { ...r.storefront.assets, ...n.assets } } })
        : (u[t] = { storefront: n, state: "partially-fetched", fetchedAt: null }),
        (u = { ...u });
}
function D(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = u[t];
        e?.state === "loading" && e?.storefront != null ? (u[t] = { ...e, state: "fetched" }) : delete u[t];
    } else u[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    u = { ...u };
}
function L(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (l[t] = { activePage: n, activeSkuId: r }), (l = { ...l });
}
function w(e) {
    let { guildId: t, announcement: n } = e;
    (c = { ...c })[t] = { state: "success", announcement: n };
}
function M(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "error" };
}
function x(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "loading" };
}
function P() {
    p = { state: "loading" };
}
function k(e) {
    let { config: t } = e;
    (p = { state: "success", config: t, fetchedAt: Date.now() }),
        (h = new Set(t.storefronts.map((e) => e.applicationId))),
        (m = new Set(t.storefronts.map((e) => e.guildId))),
        (E = new Set([...t.storefronts.map((e) => e.gameId), ...t.storefronts.map((e) => e.applicationId)]));
}
function U() {
    p = { state: "error", fetchedAt: Date.now() };
}
function G() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {});
}
class F extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], G), (r = a.default.locale);
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
        if (null != e)
            return "success" === p.state
                ? p.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.applicationId
                : void 0;
    }
    getGuildIdFromApplicationId(e) {
        return "success" === p.state
            ? p.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.guildId
            : void 0;
    }
    getConfigFetchState() {
        return p;
    }
    getStorefrontApplicationIds() {
        return h;
    }
    getStorefrontGuildIds() {
        return m;
    }
    getStorefrontDetectableGameAndApplicationIds() {
        return E;
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
let V = new F(s.h, {
    LOGOUT: g,
    POST_CONNECTION_OPEN: C,
    ENTITLEMENT_CREATE: y,
    INTERACTION_FAILURE: N,
    INTERACTION_SUCCESS: v,
    SOCIAL_LAYER_STOREFRONT_LOAD: R,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: O,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: b,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: D,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: L,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: x,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: w,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: M,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: P,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: k,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: U,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: A,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: I,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: T,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: S,
});
