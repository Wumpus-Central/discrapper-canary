"use strict";
let i;
n.d(t, { A: () => w });
var r = n(17928),
    s = n(228366),
    a = n(773669),
    o = n(280450);
let l = {},
    u = {},
    d = {},
    c = {},
    _ = {},
    h = {},
    f = {},
    E = {},
    p = {},
    m = {},
    g = {},
    A = new Set(),
    I = { state: "idle" },
    T = new Set(),
    S = {},
    N = {},
    C = {},
    y = {},
    v = new Set(),
    R = null,
    O = { state: "idle" };
function b(e) {
    return {
        guildId: "guild" === e.type ? e.guildId : N[e.applicationId],
        applicationId: "guild" === e.type ? S[e.guildId] : e.applicationId,
    };
}
function L(e, t, n) {
    null != e && (u[e] = { ...u[e], ...n }), null != t && (d[t] = { ...d[t], ...n }), (u = { ...u }), (d = { ...d });
}
function D() {
    if (i === a.default.locale) return !1;
    (i = a.default.locale), (l = {}), (u = {}), (d = {}), (c = {}), (_ = {}), (h = {}), (f = {}), (E = {});
}
class P extends r.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], D), (i = a.default.locale);
    }
    getStorefrontData(e) {
        return u[e];
    }
    getStorefrontDataForApplicationId(e) {
        return d[e];
    }
    getStorefrontFetchState(e) {
        let { guildId: t, applicationId: n } = b(e);
        return null != t ? u[t] : null != n ? d[n] : void 0;
    }
    getSkuAssets() {
        return f;
    }
    getStorefrontMetadata(e) {
        return E[e];
    }
    getStorefrontEntries(e) {
        return c[e];
    }
    getStorefrontById(e) {
        return _[e];
    }
    getPreviewStorefrontId(e) {
        return h[e] ?? null;
    }
    getStorefrontState(e) {
        if (null != e) return l[e];
    }
    getAnnouncement(e) {
        return p[e];
    }
    getConfig() {
        return "success" === I.state ? I.config : null;
    }
    getConfigForApplicationId(e) {
        return y[e];
    }
    getApplicationIdFromDetectableId(e) {
        return C[e];
    }
    getDetectableIdsToApplicationIds() {
        return C;
    }
    getGuildIdFromApplicationId(e) {
        return null != e ? N[e] : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return null != e ? S[e] : void 0;
    }
    getConfigFetchState() {
        return I;
    }
    getStorefrontApplicationIds() {
        return T;
    }
    getStorefrontGuildIds() {
        return v;
    }
    getSKUEligibility(e) {
        return m[e]?.state;
    }
    getSKUEligibilityEntry(e) {
        return m[e];
    }
    getNormalizedSKUEligibility(e) {
        return m[e]?.state !== "ineligible";
    }
    getAnnouncementModalConfig() {
        return R;
    }
    getStorefrontAffinity() {
        return O;
    }
}
let w = new P(s.h, {
    LOGOUT: function () {
        (f = {}),
            (E = {}),
            (m = {}),
            (g = {}),
            (d = {}),
            (u = {}),
            (c = {}),
            (_ = {}),
            (h = {}),
            (A = new Set()),
            (I = { state: "idle" }),
            (T = new Set()),
            (S = {}),
            (N = {}),
            (C = {}),
            (y = {}),
            (v = new Set()),
            (R = null),
            (O = { state: "idle" });
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function () {
        (d = {}), (u = {});
    },
    POST_CONNECTION_OPEN: function () {
        (m = {}), (g = {}), (A = new Set());
    },
    ENTITLEMENT_CREATE: function (e) {
        let { entitlement: t } = e;
        if (null == m[t.sku_id]) return !1;
        (m = { ...m }), delete m[t.sku_id];
    },
    INTERACTION_FAILURE: function (e) {
        let { interactionId: t } = e;
        if (null == t) return !1;
        let n = g[t];
        if (null == n) {
            if (Object.values(m).some((e) => "checking" === e.state)) {
                if (A.size >= 25) {
                    let e = A.values().next().value;
                    A.delete(e);
                }
                A.add(t);
            }
            return !1;
        }
        (m = { ...m, [n]: { state: "error", reason: "interaction_failure" } }), delete g[t];
    },
    INTERACTION_SUCCESS: function (e) {
        let { interactionId: t } = e;
        if (null == g[t]) return !1;
        delete g[t];
    },
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildOrApplicationId: t } = e,
            { guildId: n, applicationId: i } = b(t);
        L(n, i, { state: "loading" });
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildOrApplicationId: t, storefront: n } = e,
            i = "guild" === t.type ? t.guildId : b(t).guildId;
        null != i && null == S[i] && ((S[i] = n.applicationId), (S = { ...S })),
            null != n.applicationId &&
                null != i &&
                null == N[n.applicationId] &&
                ((N[n.applicationId] = i), (N = { ...N })),
            L(i, n.applicationId, { state: "fetched", fetchedAt: Date.now(), storefront: n }),
            null != n.assets && (f = { ...f, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function (e) {
        let { assets: t } = e;
        f = { ...f, ...t };
    },
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function (e) {
        let { applicationId: t, storefrontMetadata: n } = e;
        E = { ...E, [t]: n };
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildOrApplicationId: t, eager: n } = e,
            { guildId: i, applicationId: r } = b(t),
            s = null != i ? u[i] : null != r ? d[r] : void 0;
        if (null == s) return !1;
        if (n)
            if ("loading" === s.state && null != s.storefront) L(i, r, { state: "fetched" });
            else null != i && delete u[i], null != r && delete d[r], (u = { ...u }), (d = { ...d });
        else L(i, r, { state: "error", fetchedAt: Date.now(), storefront: void 0 });
    },
    SET_SOCIAL_LAYER_STOREFRONT_STATE: function (e) {
        let { applicationId: t, pageIndex: n, skuId: i } = e;
        (l[t] = { activePage: n, activeSkuId: i }), (l = { ...l });
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function (e) {
        let { guildId: t } = e;
        (p = { ...p })[t] = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function (e) {
        let { guildId: t, announcement: n } = e;
        (p = { ...p })[t] = { state: "success", announcement: n };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        (p = { ...p })[t] = { state: "error" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function () {
        I = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        (I = { state: "success", config: t, fetchedAt: Date.now() }),
            (T = new Set(t.storefronts.map((e) => e.applicationId))),
            (v = new Set(t.storefronts.filter((e) => null != e.guildId).map((e) => e.guildId))),
            (S = t.storefronts.reduce((e, t) => (null != t.guildId && (e[t.guildId] = t.applicationId), e), {})),
            (N = t.storefronts.reduce(
                (e, t) => (null != t.guildId && ((e[t.applicationId] = t.guildId), (e[t.gameId] = t.guildId)), e),
                {},
            )),
            (C = t.storefronts.reduce(
                (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
                {},
            )),
            (y = t.storefronts.reduce((e, t) => ((e[t.applicationId] = t), e), {})),
            (R = t.announcementModalConfig ?? null);
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function () {
        I = { state: "error", fetchedAt: Date.now() };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function (e) {
        let { skuId: t } = e;
        m = { ...m, [t]: { state: "checking" } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function (e) {
        let { skuId: t, interactionId: n } = e;
        if (m[t]?.state !== "checking") return !1;
        if (A.has(n)) {
            A.delete(n), (m = { ...m, [t]: { state: "error", reason: "interaction_failure" } });
            return;
        }
        g[n] = t;
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function (e) {
        let { skuId: t, reason: n = "http_error", httpStatus: i } = e,
            r = m[t];
        if (r?.state !== "checking" && "interaction_deadline" === n) return !1;
        m = { ...m, [t]: { state: "error", reason: n, httpStatus: i } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function (e) {
        let { skuId: t, recipientId: n, eligible: i, ineligibleReason: r } = e;
        if (o.default.getId() !== n) return !1;
        m = { ...m, [t]: i ? { state: "eligible" } : { state: "ineligible", ineligibleReason: r } };
    },
    SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD: function (e) {
        let { applicationId: t } = e;
        c = { ...c, [t]: { state: "loading" } };
    },
    SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS: function (e) {
        let { applicationId: t, entries: n } = e;
        c = { ...c, [t]: { state: "fetched", entries: n, fetchedAt: Date.now() } };
    },
    SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE: function (e) {
        let { applicationId: t } = e;
        c = { ...c, [t]: { state: "error", fetchedAt: Date.now() } };
    },
    SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD: function (e) {
        let { storefrontId: t } = e;
        _ = { ..._, [t]: { ..._[t], storefront: null, state: "loading", fetchedAt: null } };
    },
    SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS: function (e) {
        let { storefrontId: t, storefront: n } = e;
        (_ = { ..._, [t]: { storefront: n, state: "fetched", fetchedAt: Date.now() } }),
            null != n.assets && (f = { ...f, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE: function (e) {
        let { storefrontId: t } = e;
        _ = { ..._, [t]: { storefront: null, state: "error", fetchedAt: Date.now() } };
    },
    SOCIAL_LAYER_STOREFRONT_SET_PREVIEW: function (e) {
        let { applicationId: t, storefrontId: n } = e;
        (h = { ...h }), null == n ? delete h[t] : (h[t] = n);
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START: function () {
        O = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: function (e) {
        let { affinity: t } = e;
        O = { state: "success", affinity: t };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE: function () {
        O = { state: "error" };
    },
});
