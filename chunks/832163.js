"use strict";
let r;
n.d(t, { A: () => F });
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
    m = new Set();
function E() {
    (d = {}), (_ = {}), (f = new Set()), (p = { state: "idle" }), (h = new Set()), (m = new Set());
}
function g(e) {
    let { skuId: t } = e;
    d = { ...d, [t]: { state: "checking" } };
}
function A(e) {
    let { skuId: t, interactionId: n } = e;
    if (d[t]?.state !== "checking") return !1;
    if (f.has(n)) {
        f.delete(n), (d = { ...d, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    _[n] = t;
}
function I(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = d[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    d = { ...d, [t]: { state: "error", reason: n, httpStatus: r } };
}
function T(e) {
    let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
    if (o.default.getId() !== n) return !1;
    d = { ...d, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
}
function S(e) {
    let { entitlement: t } = e;
    if (null == d[t.sku_id]) return !1;
    (d = { ...d }), delete d[t.sku_id];
}
function y(e) {
    let { interactionId: t } = e;
    if (null == _[t]) return !1;
    delete _[t];
}
function v(e) {
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
function N() {
    (d = {}), (_ = {}), (f = new Set());
}
function C(e) {
    let { guildId: t } = e,
        n = u[t];
    (u[t] = { ...n, state: "loading" }), (u = { ...u });
}
function R(e) {
    let { guildId: t, storefront: n } = e;
    (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }), (u = { ...u });
}
function O(e) {
    let { guildId: t, storefront: n } = e,
        r = u[t];
    r?.storefront != null
        ? (u[t] = { ...r, storefront: { ...r.storefront, assets: { ...r.storefront.assets, ...n.assets } } })
        : (u[t] = { storefront: n, state: "partially-fetched", fetchedAt: null }),
        (u = { ...u });
}
function b(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = u[t];
        e?.state === "loading" && e?.storefront != null ? (u[t] = { ...e, state: "fetched" }) : delete u[t];
    } else u[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    u = { ...u };
}
function D(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (l[t] = { activePage: n, activeSkuId: r }), (l = { ...l });
}
function L(e) {
    let { guildId: t, announcement: n } = e;
    (c = { ...c })[t] = { state: "success", announcement: n };
}
function w(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "error" };
}
function M(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "loading" };
}
function x() {
    p = { state: "loading" };
}
function P(e) {
    let { config: t } = e;
    (p = { state: "success", config: t, fetchedAt: Date.now() }),
        (h = new Set(t.storefronts.map((e) => e.applicationId))),
        (m = new Set([...t.storefronts.map((e) => e.gameId), ...t.storefronts.map((e) => e.applicationId)]));
}
function k() {
    p = { state: "error", fetchedAt: Date.now() };
}
function U() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {});
}
class G extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], U), (r = a.default.locale);
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
    getConfigFetchState() {
        return p;
    }
    getStorefrontApplicationIds() {
        return h;
    }
    getStorefrontDetectableGameAndApplicationIds() {
        return m;
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
let F = new G(s.h, {
    LOGOUT: E,
    POST_CONNECTION_OPEN: N,
    ENTITLEMENT_CREATE: S,
    INTERACTION_FAILURE: v,
    INTERACTION_SUCCESS: y,
    SOCIAL_LAYER_STOREFRONT_LOAD: C,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: R,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: b,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: D,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: M,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: L,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: w,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: x,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: P,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: k,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: g,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: A,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: I,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: T,
});
