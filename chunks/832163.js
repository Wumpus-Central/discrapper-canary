"use strict";
let i;
n.d(t, { A: () => v });
var r = n(17928),
    s = n(228366),
    a = n(773669),
    o = n(495544);
let l = {},
    u = {},
    c = {},
    d = {},
    _ = {},
    f = {},
    h = {},
    p = new Set(),
    E = { state: "idle" },
    m = new Set(),
    g = {},
    A = {},
    I = {},
    T = new Set(),
    S = null,
    N = { state: "idle" };
function y() {
    if (i === a.default.locale) return !1;
    (i = a.default.locale), (l = {}), (u = {}), (c = {}), (d = {});
}
class C extends r.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], y), (i = a.default.locale);
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
        return "success" === E.state ? E.config : null;
    }
    getConfigForApplicationId(e) {
        return I[e];
    }
    getApplicationIdFromDetectableId(e) {
        return A[e];
    }
    getDetectableIdsToApplicationIds() {
        return A;
    }
    getGuildIdFromApplicationId(e) {
        return "success" === E.state
            ? E.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.guildId
            : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return g[e];
    }
    getConfigFetchState() {
        return E;
    }
    getStorefrontApplicationIds() {
        return m;
    }
    getStorefrontGuildIds() {
        return T;
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
    getAnnouncementModalConfig() {
        return S;
    }
    getStorefrontAffinity() {
        return N;
    }
}
let v = new C(s.h, {
    LOGOUT: function () {
        (c = {}),
            (d = {}),
            (f = {}),
            (h = {}),
            (p = new Set()),
            (E = { state: "idle" }),
            (m = new Set()),
            (g = {}),
            (A = {}),
            (I = {}),
            (T = new Set()),
            (S = null),
            (N = { state: "idle" });
    },
    POST_CONNECTION_OPEN: function () {
        (f = {}), (h = {}), (p = new Set());
    },
    ENTITLEMENT_CREATE: function (e) {
        let { entitlement: t } = e;
        if (null == f[t.sku_id]) return !1;
        (f = { ...f }), delete f[t.sku_id];
    },
    INTERACTION_FAILURE: function (e) {
        let { interactionId: t } = e;
        if (null == t) return !1;
        let n = h[t];
        if (null == n) {
            if (Object.values(f).some((e) => "checking" === e.state)) {
                if (p.size >= 25) {
                    let e = p.values().next().value;
                    p.delete(e);
                }
                p.add(t);
            }
            return !1;
        }
        (f = { ...f, [n]: { state: "error", reason: "interaction_failure" } }), delete h[t];
    },
    INTERACTION_SUCCESS: function (e) {
        let { interactionId: t } = e;
        if (null == h[t]) return !1;
        delete h[t];
    },
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildId: t } = e,
            n = u[t];
        (u[t] = { ...n, state: "loading" }), (u = { ...u });
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildId: t, storefront: n } = e;
        (u[t] = { storefront: n, state: "fetched", fetchedAt: Date.now() }),
            (u = { ...u }),
            null != n.assets && (c = { ...c, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function (e) {
        let { assets: t } = e;
        c = { ...c, ...t };
    },
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function (e) {
        let { applicationId: t, storefrontMetadata: n } = e;
        d = { ...d, [t]: n };
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildId: t, eager: n } = e;
        if (n) {
            let e = u[t];
            e?.state === "loading" && e?.storefront != null ? (u[t] = { ...e, state: "fetched" }) : delete u[t];
        } else u[t] = { storefront: null, state: "error", fetchedAt: Date.now() };
        u = { ...u };
    },
    SET_SOCIAL_LAYER_STOREFRONT_STATE: function (e) {
        let { guildId: t, pageIndex: n, skuId: i } = e;
        (l[t] = { activePage: n, activeSkuId: i }), (l = { ...l });
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function (e) {
        let { guildId: t } = e;
        (_ = { ..._ })[t] = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function (e) {
        let { guildId: t, announcement: n } = e;
        (_ = { ..._ })[t] = { state: "success", announcement: n };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        (_ = { ..._ })[t] = { state: "error" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function () {
        E = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        (E = { state: "success", config: t, fetchedAt: Date.now() }),
            (m = new Set(t.storefronts.map((e) => e.applicationId))),
            (T = new Set(t.storefronts.map((e) => e.guildId))),
            (g = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
            (A = t.storefronts.reduce(
                (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
                {},
            )),
            (I = t.storefronts.reduce((e, t) => ((e[t.applicationId] = t), e), {})),
            (S = t.announcementModalConfig ?? null);
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function () {
        E = { state: "error", fetchedAt: Date.now() };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function (e) {
        let { skuId: t } = e;
        f = { ...f, [t]: { state: "checking" } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function (e) {
        let { skuId: t, interactionId: n } = e;
        if (f[t]?.state !== "checking") return !1;
        if (p.has(n)) {
            p.delete(n), (f = { ...f, [t]: { state: "error", reason: "interaction_failure" } });
            return;
        }
        h[n] = t;
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function (e) {
        let { skuId: t, reason: n = "http_error", httpStatus: i } = e,
            r = f[t];
        if (r?.state !== "checking" && "interaction_deadline" === n) return !1;
        f = { ...f, [t]: { state: "error", reason: n, httpStatus: i } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function (e) {
        let { skuId: t, recipientId: n, eligible: i, ineligibleReason: r } = e;
        if (o.default.getId() !== n) return !1;
        f = { ...f, [t]: i ? { state: "eligible" } : { state: "ineligible", ineligibleReason: r } };
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
