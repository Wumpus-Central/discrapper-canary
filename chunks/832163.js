"use strict";
let r;
n.d(t, { A: () => y });
var i = n(311907),
    s = n(73153),
    a = n(773669),
    o = n(961350);
let l = {},
    u = {},
    d = {},
    c = {},
    _ = {},
    f = {},
    E = {},
    h = new Set(),
    p = { state: "idle" },
    m = new Set(),
    g = {},
    A = {},
    I = new Set();
function T() {
    if (r === a.default.locale) return !1;
    (r = a.default.locale), (l = {}), (u = {}), (d = {}), (c = {});
}
class S extends i.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], T), (r = a.default.locale);
    }
    getStorefrontData(e) {
        return u[e];
    }
    getSkuAssets() {
        return d;
    }
    getStorefrontMetadata(e) {
        return c[e];
    }
    getStorefrontState(e) {
        return l[e];
    }
    getAnnouncement(e) {
        return _[e];
    }
    getConfig() {
        return "success" === p.state ? p.config : null;
    }
    getApplicationIdFromDetectableId(e) {
        return A[e];
    }
    getDetectableIdsToApplicationIds() {
        return A;
    }
    getGuildIdFromApplicationId(e) {
        return "success" === p.state
            ? p.config.storefronts.find((t) => t.applicationId === e || t.gameId === e)?.guildId
            : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return g[e];
    }
    getConfigFetchState() {
        return p;
    }
    getStorefrontApplicationIds() {
        return m;
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
let y = new S(s.h, {
    LOGOUT: function () {
        (d = {}),
            (c = {}),
            (f = {}),
            (E = {}),
            (h = new Set()),
            (p = { state: "idle" }),
            (m = new Set()),
            (g = {}),
            (A = {}),
            (I = new Set());
    },
    POST_CONNECTION_OPEN: function () {
        (f = {}), (E = {}), (h = new Set());
    },
    ENTITLEMENT_CREATE: function (e) {
        let { entitlement: t } = e;
        if (null == f[t.sku_id]) return !1;
        (f = { ...f }), delete f[t.sku_id];
    },
    INTERACTION_FAILURE: function (e) {
        let { interactionId: t } = e;
        if (null == t) return !1;
        let n = E[t];
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
        (f = { ...f, [n]: { state: "error", reason: "interaction_failure" } }), delete E[t];
    },
    INTERACTION_SUCCESS: function (e) {
        let { interactionId: t } = e;
        if (null == E[t]) return !1;
        delete E[t];
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
            null != n.assets && (d = { ...d, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function (e) {
        let { assets: t } = e;
        d = { ...d, ...t };
    },
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function (e) {
        let { applicationId: t, storefrontMetadata: n } = e;
        c = { ...c, [t]: n };
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
        let { guildId: t, pageIndex: n, skuId: r } = e;
        (l[t] = { activePage: n, activeSkuId: r }), (l = { ...l });
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
        p = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        (p = { state: "success", config: t, fetchedAt: Date.now() }),
            (m = new Set(t.storefronts.map((e) => e.applicationId))),
            (I = new Set(t.storefronts.map((e) => e.guildId))),
            (g = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
            (A = t.storefronts.reduce(
                (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
                {},
            ));
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function () {
        p = { state: "error", fetchedAt: Date.now() };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function (e) {
        let { skuId: t } = e;
        f = { ...f, [t]: { state: "checking" } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function (e) {
        let { skuId: t, interactionId: n } = e;
        if (f[t]?.state !== "checking") return !1;
        if (h.has(n)) {
            h.delete(n), (f = { ...f, [t]: { state: "error", reason: "interaction_failure" } });
            return;
        }
        E[n] = t;
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function (e) {
        let { skuId: t, reason: n = "http_error", httpStatus: r } = e,
            i = f[t];
        if (i?.state !== "checking" && "interaction_deadline" === n) return !1;
        f = { ...f, [t]: { state: "error", reason: n, httpStatus: r } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function (e) {
        let { skuId: t, recipientId: n, eligible: r, ineligibleReason: i } = e;
        if (o.default.getId() !== n) return !1;
        f = { ...f, [t]: r ? { state: "eligible" } : { state: "ineligible", ineligibleReason: i } };
    },
});
