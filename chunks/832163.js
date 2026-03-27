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
    f = {},
    p = new Set(),
    h = { state: "idle" },
    m = new Set(),
    E = {},
    g = {},
    A = new Set();
function I() {
    (c = {}),
        (_ = {}),
        (f = {}),
        (p = new Set()),
        (h = { state: "idle" }),
        (m = new Set()),
        (E = {}),
        (g = {}),
        (A = new Set());
}
function T(e) {
    let { skuId: t } = e;
    _ = { ..._, [t]: { state: "checking" } };
}
function S(e) {
    let { skuId: t, interactionId: n } = e;
    if (_[t]?.state !== "checking") return !1;
    if (p.has(n)) {
        p.delete(n), (_ = { ..._, [t]: { state: "error", reason: "interaction_failure" } });
        return;
    }
    f[n] = t;
}
function y(e) {
    let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
        i = _[t];
    if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
    _ = { ..._, [t]: { state: "error", reason: n, httpStatus: r } };
}
function v(e) {
    let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
    if (o.default.getId() !== n) return !1;
    _ = { ..._, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
}
function N(e) {
    let { entitlement: t } = e;
    if (null == _[t.sku_id]) return !1;
    (_ = { ..._ }), delete _[t.sku_id];
}
function C(e) {
    let { interactionId: t } = e;
    if (null == f[t]) return !1;
    delete f[t];
}
function R(e) {
    let { interactionId: t } = e;
    if (null == t) return !1;
    let n = f[t];
    if (null == n) {
        if (Object.values(_).some((e) => "checking" === e.state)) {
            if (p.size >= 25) {
                let e = p.values().next().value;
                p.delete(e);
            }
            p.add(t);
        }
        return !1;
    }
    (_ = { ..._, [n]: { state: "error", reason: "interaction_failure" } }), delete f[t];
}
function O() {
    (_ = {}), (f = {}), (p = new Set());
}
function b(e) {
    let { guildId: t } = e,
        n = u[t];
    (u[t] = { ...n, state: "loading" }), (u = { ...u });
}
function D(e) {
    let { guildId: t, storefront: n } = e;
    (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }),
        (u = { ...u }),
        null != n.assets && (c = { ...c, ...n.assets });
}
function L(e) {
    let { assets: t } = e;
    c = { ...c, ...t };
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
function P(e) {
    let { guildId: t, announcement: n } = e;
    (d = { ...d })[t] = { state: "success", announcement: n };
}
function x(e) {
    let { guildId: t } = e;
    (d = { ...d })[t] = { state: "error" };
}
function k(e) {
    let { guildId: t } = e;
    (d = { ...d })[t] = { state: "loading" };
}
function U() {
    h = { state: "loading" };
}
function G(e) {
    let { config: t } = e;
    (h = { state: "success", config: t, fetchedAt: Date.now() }),
        (m = new Set(t.storefronts.map((e) => e.applicationId))),
        (A = new Set(t.storefronts.map((e) => e.guildId))),
        (E = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
        (g = t.storefronts.reduce(
            (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
            {},
        ));
}
function F() {
    h = { state: "error", fetchedAt: Date.now() };
}
function V() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {}), (c = {});
}
class B extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], V), (r = a.default.locale);
    }
    getStorefrontData(e) {
        return u[e];
    }
    getSkuAssets() {
        return c;
    }
    getStorefrontState(e) {
        return l[e];
    }
    getAnnouncement(e) {
        return d[e];
    }
    getConfig() {
        return "success" === h.state ? h.config : null;
    }
    getApplicationIdFromDetectableId(e) {
        return g[e];
    }
    getDetectableIdsToApplicationIds() {
        return g;
    }
    getGuildIdFromApplicationId(e) {
        return "success" === h.state
            ? h.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.guildId
            : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return E[e];
    }
    getConfigFetchState() {
        return h;
    }
    getStorefrontApplicationIds() {
        return m;
    }
    getStorefrontGuildIds() {
        return A;
    }
    getSKUEligibility(e) {
        return _[e]?.state;
    }
    getSKUEligibilityEntry(e) {
        return _[e];
    }
    getNormalizedSKUEligibility(e) {
        return _[e]?.state !== "ineligible";
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
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: P,
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: x,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: U,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: G,
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: F,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: T,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: S,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: y,
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: v,
});
