"use strict";
let r;
n.d(t, { A: () => U });
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
    p = { state: "idle" };
function h() {
    (d = {}), (_ = {}), (f = new Set()), (p = { state: "idle" });
}
function m(e) {
    let { skuId: t } = e;
    d = { ...d, [t]: { state: "checking" } };
}
function E(e) {
    let { skuId: t, interactionId: n } = e;
    if (d[t]?.state !== "checking") return !1;
    if (f.has(n)) {
        f.delete(n), (d = { ...d, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    _[n] = t;
}
function g(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = d[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    d = { ...d, [t]: { state: "error", reason: n, httpStatus: r } };
}
function A(e) {
    let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
    if (o.default.getId() !== n) return !1;
    d = { ...d, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
}
function I(e) {
    let { entitlement: t } = e;
    if (null == d[t.sku_id]) return !1;
    (d = { ...d }), delete d[t.sku_id];
}
function T(e) {
    let { interactionId: t } = e;
    if (null == _[t]) return !1;
    delete _[t];
}
function S(e) {
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
function y() {
    (d = {}), (_ = {}), (f = new Set());
}
function v(e) {
    let { guildId: t } = e,
        n = u[t];
    (u[t] = { ...n, state: "loading" }), (u = { ...u });
}
function N(e) {
    let { guildId: t, storefront: n } = e;
    (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }), (u = { ...u });
}
function C(e) {
    let { guildId: t, storefront: n } = e,
        r = u[t];
    r?.storefront != null
        ? (u[t] = { ...r, storefront: { ...r.storefront, assets: { ...r.storefront.assets, ...n.assets } } })
        : (u[t] = { storefront: n, state: "partially-fetched", fetchedAt: null }),
        (u = { ...u });
}
function R(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = u[t];
        e?.state === "loading" && e?.storefront != null ? (u[t] = { ...e, state: "fetched" }) : delete u[t];
    } else u[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    u = { ...u };
}
function O(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (l[t] = { activePage: n, activeSkuId: r }), (l = { ...l });
}
function b(e) {
    let { guildId: t, announcement: n } = e;
    (c = { ...c })[t] = { state: "success", announcement: n };
}
function D(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "error" };
}
function L(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "loading" };
}
function w() {
    p = { state: "loading" };
}
function M(e) {
    let { config: t } = e;
    p = { state: "success", config: t, fetchedAt: Date.now() };
}
function x() {
    p = { state: "error", fetchedAt: Date.now() };
}
function P() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {});
}
class k extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], P), (r = a.default.locale);
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
let U = new k(s.h, {
    LOGOUT: h,
    POST_CONNECTION_OPEN: y,
    ENTITLEMENT_CREATE: I,
    INTERACTION_FAILURE: S,
    INTERACTION_SUCCESS: T,
    SOCIAL_LAYER_STOREFRONT_LOAD: v,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: N,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: C,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: R,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: O,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: L,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: b,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: D,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: w,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: M,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: x,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: m,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: E,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: g,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: A,
});
