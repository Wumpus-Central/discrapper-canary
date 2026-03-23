"use strict";
let r;
n.d(t, { A: () => H });
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
    g = new Set(),
    A = new Set();
function I() {
    (d = {}),
        (_ = {}),
        (f = new Set()),
        (p = { state: "idle" }),
        (h = new Set()),
        (m = {}),
        (E = {}),
        (g = new Set()),
        (A = new Set());
}
function T(e) {
    let { skuId: t } = e;
    d = { ...d, [t]: { state: "checking" } };
}
function S(e) {
    let { skuId: t, interactionId: n } = e;
    if (d[t]?.state !== "checking") return !1;
    if (f.has(n)) {
        f.delete(n), (d = { ...d, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    _[n] = t;
}
function y(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = d[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    d = { ...d, [t]: { state: "error", reason: n, httpStatus: r } };
}
function v(e) {
    let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
    if (o.default.getId() !== n) return !1;
    d = { ...d, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
}
function N(e) {
    let { entitlement: t } = e;
    if (null == d[t.sku_id]) return !1;
    (d = { ...d }), delete d[t.sku_id];
}
function C(e) {
    let { interactionId: t } = e;
    if (null == _[t]) return !1;
    delete _[t];
}
function R(e) {
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
function O() {
    (d = {}), (_ = {}), (f = new Set());
}
function b(e) {
    let { guildId: t } = e,
        n = u[t];
    (u[t] = { ...n, state: "loading" }), (u = { ...u });
}
function D(e) {
    let { guildId: t, storefront: n } = e;
    (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }), (u = { ...u });
}
function L(e) {
    let { guildId: t, storefront: n } = e,
        r = u[t];
    r?.storefront != null
        ? (u[t] = { ...r, storefront: { ...r.storefront, assets: { ...r.storefront.assets, ...n.assets } } })
        : (u[t] = { storefront: n, state: "partially-fetched", fetchedAt: null }),
        (u = { ...u });
}
function w(e) {
    let { guildId: t, eager: n } = e;
    if (n) {
        let e = u[t];
        e?.state === "loading" && e?.storefront != null ? (u[t] = { ...e, state: "fetched" }) : delete u[t];
    } else u[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
    u = { ...u };
}
function M(e) {
    let { guildId: t, pageIndex: n, skuId: r } = e;
    (l[t] = { activePage: n, activeSkuId: r }), (l = { ...l });
}
function x(e) {
    let { guildId: t, announcement: n } = e;
    (c = { ...c })[t] = { state: "success", announcement: n };
}
function P(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "error" };
}
function k(e) {
    let { guildId: t } = e;
    (c = { ...c })[t] = { state: "loading" };
}
function U() {
    p = { state: "loading" };
}
function G(e) {
    let { config: t } = e;
    (p = { state: "success", config: t, fetchedAt: Date.now() }),
        (h = new Set(t.storefronts.map((e) => e.applicationId))),
        (g = new Set(t.storefronts.map((e) => e.guildId))),
        (m = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
        (E = t.storefronts.reduce(
            (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
            {},
        )),
        (A = new Set([...t.storefronts.map((e) => e.gameId), ...t.storefronts.map((e) => e.applicationId)]));
}
function F() {
    p = { state: "error", fetchedAt: Date.now() };
}
function V() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {});
}
class B extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], V), (r = a.default.locale);
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
    getStorefrontDetectableGameAndApplicationIds() {
        return A;
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
let H = new B(s.h, {
    LOGOUT: I,
    POST_CONNECTION_OPEN: O,
    ENTITLEMENT_CREATE: N,
    INTERACTION_FAILURE: R,
    INTERACTION_SUCCESS: C,
    SOCIAL_LAYER_STOREFRONT_LOAD: b,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: D,
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: L,
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: w,
    SET_SOCIAL_LAYER_STOREFRONT_STATE: M,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: k,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: x,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: P,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: U,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: G,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: F,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: T,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: S,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: y,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: v,
});
