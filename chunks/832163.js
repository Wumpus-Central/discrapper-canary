"use strict";
let i;
n.d(t, { A: () => C });
var r = n(17928),
    s = n(228366),
    a = n(773669),
    o = n(495544);
let l = {},
    _ = {},
    d = {},
    u = {},
    c = {},
    E = {},
    h = {},
    m = new Set(),
    f = { state: "idle" },
    g = new Set(),
    A = {},
    I = {},
    p = {},
    T = new Set(),
    S = null,
    N = { state: "idle" };
function O() {
    if (i === a.default.locale) return !1;
    (i = a.default.locale), (l = {}), (_ = {}), (d = {}), (u = {});
}
class R extends r.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], O), (i = a.default.locale);
    }
    getStorefrontData(e) {
        return _[e];
    }
    getSkuAssets() {
        return d;
    }
    getStorefrontMetadata(e) {
        return u[e];
    }
    getStorefrontState(e) {
        return l[e];
    }
    getAnnouncement(e) {
        return c[e];
    }
    getConfig() {
        return "success" === f.state ? f.config : null;
    }
    getConfigForApplicationId(e) {
        return p[e];
    }
    getApplicationIdFromDetectableId(e) {
        return I[e];
    }
    getDetectableIdsToApplicationIds() {
        return I;
    }
    getGuildIdFromApplicationId(e) {
        return "success" === f.state
            ? f.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.guildId
            : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return A[e];
    }
    getConfigFetchState() {
        return f;
    }
    getStorefrontApplicationIds() {
        return g;
    }
    getStorefrontGuildIds() {
        return T;
    }
    getSKUEligibility(e) {
        return E[e]?.state;
    }
    getSKUEligibilityEntry(e) {
        return E[e];
    }
    getNormalizedSKUEligibility(e) {
        return E[e]?.state !== "ineligible";
    }
    getAnnouncementModalConfig() {
        return S;
    }
    getStorefrontAffinity() {
        return N;
    }
}
let C = new R(s.h, {
    LOGOUT: function () {
        (d = {}),
            (u = {}),
            (E = {}),
            (h = {}),
            (m = new Set()),
            (f = { state: "idle" }),
            (g = new Set()),
            (A = {}),
            (I = {}),
            (p = {}),
            (T = new Set()),
            (S = null),
            (N = { state: "idle" });
    },
    POST_CONNECTION_OPEN: function () {
        (E = {}), (h = {}), (m = new Set());
    },
    ENTITLEMENT_CREATE: function (e) {
        let { entitlement: t } = e;
        if (null == E[t.sku_id]) return !1;
        (E = { ...E }), delete E[t.sku_id];
    },
    INTERACTION_FAILURE: function (e) {
        let { interactionId: t } = e;
        if (null == t) return !1;
        let n = h[t];
        if (null == n) {
            if (Object.values(E).some((e) => "checking" === e.state)) {
                if (m.size >= 25) {
                    let e = m.values().next().value;
                    m.delete(e);
                }
                m.add(t);
            }
            return !1;
        }
        (E = { ...E, [n]: { state: "error", reason: "interaction_failure" } }), delete h[t];
    },
    INTERACTION_SUCCESS: function (e) {
        let { interactionId: t } = e;
        if (null == h[t]) return !1;
        delete h[t];
    },
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildId: t } = e,
            n = _[t];
        (_[t] = { ...n, state: "loading" }), (_ = { ..._ });
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildId: t, storefront: n } = e;
        (_[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }),
            (_ = { ..._ }),
            null != n.assets && (d = { ...d, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function (e) {
        let { assets: t } = e;
        d = { ...d, ...t };
    },
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function (e) {
        let { applicationId: t, storefrontMetadata: n } = e;
        u = { ...u, [t]: n };
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildId: t, eager: n } = e;
        if (n) {
            let e = _[t];
            e?.state === "loading" && e?.storefront != null ? (_[t] = { ...e, state: "fetched" }) : delete _[t];
        } else _[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
        _ = { ..._ };
    },
    SET_SOCIAL_LAYER_STOREFRONT_STATE: function (e) {
        let { guildId: t, pageIndex: n, skuId: i } = e;
        (l[t] = { activePage: n, activeSkuId: i }), (l = { ...l });
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function (e) {
        let { guildId: t } = e;
        (c = { ...c })[t] = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function (e) {
        let { guildId: t, announcement: n } = e;
        (c = { ...c })[t] = { state: "success", announcement: n };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        (c = { ...c })[t] = { state: "error" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function () {
        f = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        (f = { state: "success", config: t, fetchedAt: Date.now() }),
            (g = new Set(t.storefronts.map((e) => e.applicationId))),
            (T = new Set(t.storefronts.map((e) => e.guildId))),
            (A = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
            (I = t.storefronts.reduce(
                (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
                {},
            )),
            (p = t.storefronts.reduce((e, t) => ((e[t.applicationId] = t), e), {})),
            (S = t.announcementModalConfig ?? null);
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function () {
        f = { state: "error", fetchedAt: Date.now() };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function (e) {
        let { skuId: t } = e;
        E = { ...E, [t]: { state: "checking" } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function (e) {
        let { skuId: t, interactionId: n } = e;
        if (E[t]?.state !== "checking") return !1;
        if (m.has(n)) {
            m.delete(n), (E = { ...E, [t]: { state: "error", reason: "interaction_failure" } });
            return;
        }
        h[n] = t;
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function (e) {
        let { skuId: t, reason: n = "http_error", httpStatus: i } = e,
            r = E[t];
        if (r?.state !== "checking" && "interaction_deadline" === n) return !1;
        E = { ...E, [t]: { state: "error", reason: n, httpStatus: i } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function (e) {
        let { skuId: t, recipientId: n, eligible: i, ineligibleReason: r } = e;
        if (o.default.getId() !== n) return !1;
        E = { ...E, [t]: i ? { state: "eligible" } : { state: "ineligible", ineligibleReason: r } };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START: function () {
        N = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: function (e) {
        let { affinity: t } = e;
        N = { state: "success", affinity: t };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE: function () {
        N = { state: "error" };
    },
});
