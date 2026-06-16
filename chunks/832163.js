"use strict";
let i;
n.d(t, { A: () => D });
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
    E = new Set(),
    m = { state: "idle" },
    g = new Set(),
    A = {},
    I = {},
    T = {},
    S = {},
    y = new Set(),
    C = null,
    N = { state: "idle" };
function v(e) {
    return {
        guildId: "guild" === e.type ? e.guildId : I[e.applicationId],
        applicationId: "guild" === e.type ? A[e.guildId] : e.applicationId,
    };
}
function R(e, t, n) {
    null != e && (u[e] = { ...u[e], ...n }), null != t && (c[t] = { ...c[t], ...n }), (u = { ...u }), (c = { ...c });
}
function O() {
    if (i === a.default.locale) return !1;
    (i = a.default.locale), (l = {}), (u = {}), (c = {}), (d = {}), (_ = {});
}
class b extends r.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(o.default, a.default), this.syncWith([a.default], O), (i = a.default.locale);
    }
    getStorefrontData(e) {
        return u[e];
    }
    getStorefrontDataForApplicationId(e) {
        return c[e];
    }
    getStorefrontFetchState(e) {
        let { guildId: t, applicationId: n } = v(e);
        return null != t ? u[t] : null != n ? c[n] : void 0;
    }
    getSkuAssets() {
        return d;
    }
    getStorefrontMetadata(e) {
        return _[e];
    }
    getStorefrontState(e) {
        if (null != e) return l[e];
    }
    getAnnouncement(e) {
        return h[e];
    }
    getConfig() {
        return "success" === m.state ? m.config : null;
    }
    getConfigForApplicationId(e) {
        return S[e];
    }
    getApplicationIdFromDetectableId(e) {
        return T[e];
    }
    getDetectableIdsToApplicationIds() {
        return T;
    }
    getGuildIdFromApplicationId(e) {
        return null != e ? I[e] : void 0;
    }
    getApplicationIdFromGuildId(e) {
        return null != e ? A[e] : void 0;
    }
    getConfigFetchState() {
        return m;
    }
    getStorefrontApplicationIds() {
        return g;
    }
    getStorefrontGuildIds() {
        return y;
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
        return C;
    }
    getStorefrontAffinity() {
        return N;
    }
}
let D = new b(s.h, {
    LOGOUT: function () {
        (d = {}),
            (_ = {}),
            (f = {}),
            (p = {}),
            (c = {}),
            (u = {}),
            (E = new Set()),
            (m = { state: "idle" }),
            (g = new Set()),
            (A = {}),
            (I = {}),
            (T = {}),
            (S = {}),
            (y = new Set()),
            (C = null),
            (N = { state: "idle" });
    },
    POST_CONNECTION_OPEN: function () {
        (f = {}), (p = {}), (E = new Set());
    },
    ENTITLEMENT_CREATE: function (e) {
        let { entitlement: t } = e;
        if (null == f[t.sku_id]) return !1;
        (f = { ...f }), delete f[t.sku_id];
    },
    INTERACTION_FAILURE: function (e) {
        let { interactionId: t } = e;
        if (null == t) return !1;
        let n = p[t];
        if (null == n) {
            if (Object.values(f).some((e) => "checking" === e.state)) {
                if (E.size >= 25) {
                    let e = E.values().next().value;
                    E.delete(e);
                }
                E.add(t);
            }
            return !1;
        }
        (f = { ...f, [n]: { state: "error", reason: "interaction_failure" } }), delete p[t];
    },
    INTERACTION_SUCCESS: function (e) {
        let { interactionId: t } = e;
        if (null == p[t]) return !1;
        delete p[t];
    },
    SOCIAL_LAYER_STOREFRONT_LOAD: function (e) {
        let { guildOrApplicationId: t } = e,
            { guildId: n, applicationId: i } = v(t);
        R(n, i, { state: "loading" });
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildOrApplicationId: t, storefront: n } = e,
            i = "guild" === t.type ? t.guildId : v(t).guildId;
        null != i && null == A[i] && ((A[i] = n.applicationId), (A = { ...A })),
            null != n.applicationId &&
                null != i &&
                null == I[n.applicationId] &&
                ((I[n.applicationId] = i), (I = { ...I })),
            R(i, n.applicationId, { state: "fetched", fetchedAt: Date.now(), storefront: n }),
            null != n.assets && (d = { ...d, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function (e) {
        let { assets: t } = e;
        d = { ...d, ...t };
    },
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function (e) {
        let { applicationId: t, storefrontMetadata: n } = e;
        _ = { ..._, [t]: n };
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildOrApplicationId: t, eager: n } = e,
            { guildId: i, applicationId: r } = v(t),
            s = null != i ? u[i] : null != r ? c[r] : void 0;
        if (null == s) return !1;
        if (n)
            if ("loading" === s.state && null != s.storefront) R(i, r, { state: "fetched" });
            else null != i && delete u[i], null != r && delete c[r], (u = { ...u }), (c = { ...c });
        else R(i, r, { state: "error", fetchedAt: Date.now(), storefront: void 0 });
    },
    SET_SOCIAL_LAYER_STOREFRONT_STATE: function (e) {
        let { applicationId: t, pageIndex: n, skuId: i } = e;
        (l[t] = { activePage: n, activeSkuId: i }), (l = { ...l });
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function (e) {
        let { guildId: t } = e;
        (h = { ...h })[t] = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function (e) {
        let { guildId: t, announcement: n } = e;
        (h = { ...h })[t] = { state: "success", announcement: n };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        (h = { ...h })[t] = { state: "error" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function () {
        m = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        (m = { state: "success", config: t, fetchedAt: Date.now() }),
            (g = new Set(t.storefronts.map((e) => e.applicationId))),
            (y = new Set(t.storefronts.filter((e) => null != e.guildId).map((e) => e.guildId))),
            (A = t.storefronts.reduce((e, t) => (null != t.guildId && (e[t.guildId] = t.applicationId), e), {})),
            (I = t.storefronts.reduce(
                (e, t) => (null != t.guildId && ((e[t.applicationId] = t.guildId), (e[t.gameId] = t.guildId)), e),
                {},
            )),
            (T = t.storefronts.reduce(
                (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
                {},
            )),
            (S = t.storefronts.reduce((e, t) => ((e[t.applicationId] = t), e), {})),
            (C = t.announcementModalConfig ?? null);
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_FAILURE: function () {
        m = { state: "error", fetchedAt: Date.now() };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_START: function (e) {
        let { skuId: t } = e;
        f = { ...f, [t]: { state: "checking" } };
    },
    SOCIAL_LAYER_SKU_PURCHASE_ELIGIBILITY_CHECK_CREATE: function (e) {
        let { skuId: t, interactionId: n } = e;
        if (f[t]?.state !== "checking") return !1;
        if (E.has(n)) {
            E.delete(n), (f = { ...f, [t]: { state: "error", reason: "interaction_failure" } });
            return;
        }
        p[n] = t;
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
