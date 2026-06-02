"use strict";
let i;
n.d(t, { A: () => L });
var r = n(17928),
    s = n(228366),
    a = n(773669),
    o = n(495544);
let l = {},
    u = {},
    c = {},
    d = {},
    _ = {},
    h = {},
    f = {},
    p = {},
    E = {},
    m = new Set(),
    g = { state: "idle" },
    A = new Set(),
    I = {},
    T = {},
    S = {},
    y = {},
    N = new Set(),
    v = null,
    C = { state: "idle" };
function R(e) {
    return {
        guildId: "guild" === e.type ? e.guildId : T[e.applicationId],
        applicationId: "guild" === e.type ? I[e.guildId] : e.applicationId,
    };
}
function O(e, t, n) {
    null != e && (c[e] = { ...c[e], ...n }), null != t && (d[t] = { ...d[t], ...n }), (c = { ...c }), (d = { ...d });
}
function b() {
    if (i === a.default.locale) return !1;
    (i = a.default.locale), (l = {}), (u = {}), (c = {}), (d = {}), (_ = {}), (h = {});
}
class D extends r.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], b), (i = a.default.locale);
    }
    getStorefrontData(e) {
        return c[e];
    }
    getStorefrontDataForApplicationId(e) {
        return d[e];
    }
    getStorefrontFetchState(e) {
        let { guildId: t, applicationId: n } = R(e);
        return null != t ? c[t] : null != n ? d[n] : void 0;
    }
    getSkuAssets() {
        return _;
    }
    getStorefrontMetadata(e) {
        return h[e];
    }
    getStorefrontState(e) {
        return l[e];
    }
    getStorefrontStateForApplicationId(e) {
        return u[e];
    }
    getAnnouncement(e) {
        return f[e];
    }
    getConfig() {
        return "success" === g.state ? g.config : null;
    }
    getConfigForApplicationId(e) {
        return y[e];
    }
    getApplicationIdFromDetectableId(e) {
        return S[e];
    }
    getDetectableIdsToApplicationIds() {
        return S;
    }
    getGuildIdFromApplicationId(e) {
        return null != e ? T[e] : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return null != e ? I[e] : void 0;
    }
    getConfigFetchState() {
        return g;
    }
    getStorefrontApplicationIds() {
        return A;
    }
    getStorefrontGuildIds() {
        return N;
    }
    getSKUEligibility(e) {
        return p[e]?.state;
    }
    getSKUEligibilityEntry(e) {
        return p[e];
    }
    getNormalizedSKUEligibility(e) {
        return p[e]?.state !== "ineligible";
    }
    getAnnouncementModalConfig() {
        return v;
    }
    getStorefrontAffinity() {
        return C;
    }
}
let L = new D(s.h, {
    LOGOUT: function () {
        (_ = {}),
            (h = {}),
            (p = {}),
            (E = {}),
            (d = {}),
            (c = {}),
            (m = new Set()),
            (g = { state: "idle" }),
            (A = new Set()),
            (I = {}),
            (T = {}),
            (S = {}),
            (y = {}),
            (N = new Set()),
            (v = null),
            (C = { state: "idle" });
    },
    POST_CONNECTION_OPEN: function () {
        (p = {}), (E = {}), (m = new Set());
    },
    ENTITLEMENT_CREATE: function (e) {
        let { entitlement: t } = e;
        if (null == p[t.sku_id]) return !1;
        (p = { ...p }), delete p[t.sku_id];
    },
    INTERACTION_FAILURE: function (e) {
        let { interactionId: t } = e;
        if (null == t) return !1;
        let n = E[t];
        if (null == n) {
            if (Object.values(p).some((e) => "checking" === e.state)) {
                if (m.size >= 25) {
                    let e = m.values().next().value;
                    m.delete(e);
                }
                m.add(t);
            }
            return !1;
        }
        (p = { ...p, [n]: { state: "error", reason: "interaction_failure" } }), delete E[t];
    },
    INTERACTION_SUCCESS: function (e) {
        let { interactionId: t } = e;
        if (null == E[t]) return !1;
        delete E[t];
    },
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildOrApplicationId: t } = e,
            { guildId: n, applicationId: i } = R(t);
        O(n, i, { state: "loading" });
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildOrApplicationId: t, storefront: n } = e,
            i = "guild" === t.type ? t.guildId : R(t).guildId;
        null != i && null == I[i] && ((I[i] = n.applicationId), (I = { ...I })),
            null != n.applicationId &&
                null != i &&
                null == T[n.applicationId] &&
                ((T[n.applicationId] = i), (T = { ...T })),
            O(i, n.applicationId, { state: "fetched", fetchedAt: Date.now(), storefront: n }),
            null != n.assets && (_ = { ..._, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function (e) {
        let { assets: t } = e;
        _ = { ..._, ...t };
    },
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function (e) {
        let { applicationId: t, storefrontMetadata: n } = e;
        h = { ...h, [t]: n };
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildOrApplicationId: t, eager: n } = e,
            { guildId: i, applicationId: r } = R(t),
            s = null != i ? c[i] : null != r ? d[r] : void 0;
        if (null == s) return !1;
        if (n)
            if ("loading" === s.state && null != s.storefront) O(i, r, { state: "fetched" });
            else null != i && delete c[i], null != r && delete d[r], (c = { ...c }), (d = { ...d });
        else O(i, r, { state: "error", fetchedAt: Date.now(), storefront: void 0 });
    },
    SET_SOCIAL_LAYER_STOREFRONT_STATE: function (e) {
        let { guildId: t, pageIndex: n, skuId: i } = e,
            { applicationId: r } = R({ type: "guild", guildId: t });
        (l[t] = { activePage: n, activeSkuId: i }),
            null != r && ((u[r] = { activePage: n, activeSkuId: i }), (u = { ...u })),
            (l = { ...l });
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function (e) {
        let { guildId: t } = e;
        (f = { ...f })[t] = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function (e) {
        let { guildId: t, announcement: n } = e;
        (f = { ...f })[t] = { state: "success", announcement: n };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        (f = { ...f })[t] = { state: "error" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function () {
        g = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        (g = { state: "success", config: t, fetchedAt: Date.now() }),
            (A = new Set(t.storefronts.map((e) => e.applicationId))),
            (N = new Set(t.storefronts.map((e) => e.guildId))),
            (I = t.storefronts.reduce((e, t) => ((e[t.guildId] = t.applicationId), e), {})),
            (T = t.storefronts.reduce((e, t) => ((e[t.applicationId] = t.guildId), (e[t.gameId] = t.guildId), e), {})),
            (S = t.storefronts.reduce(
                (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
                {},
            )),
            (y = t.storefronts.reduce((e, t) => ((e[t.applicationId] = t), e), {})),
            (v = t.announcementModalConfig ?? null);
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function () {
        g = { state: "error", fetchedAt: Date.now() };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function (e) {
        let { skuId: t } = e;
        p = { ...p, [t]: { state: "checking" } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function (e) {
        let { skuId: t, interactionId: n } = e;
        if (p[t]?.state !== "checking") return !1;
        if (m.has(n)) {
            m.delete(n), (p = { ...p, [t]: { state: "error", reason: "interaction_failure" } });
            return;
        }
        E[n] = t;
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_FAILURE: function (e) {
        let { skuId: t, reason: n = "http_error", httpStatus: i } = e,
            r = p[t];
        if (r?.state !== "checking" && "interaction_deadline" === n) return !1;
        p = { ...p, [t]: { state: "error", reason: n, httpStatus: i } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_RESPONSE: function (e) {
        let { skuId: t, recipientId: n, eligible: i, ineligibleReason: r } = e;
        if (o.default.getId() !== n) return !1;
        p = { ...p, [t]: i ? { state: "eligible" } : { state: "ineligible", ineligibleReason: r } };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_START: function () {
        C = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_SUCCESS: function (e) {
        let { affinity: t } = e;
        C = { state: "success", affinity: t };
    },
    SOCIAL_LAYER_STOREFRONT_AFFINITY_FETCH_FAILURE: function () {
        C = { state: "error" };
    },
});
