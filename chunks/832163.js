let i;
n.d(t, { A: () => M });
var r = n(17928),
    a = n(228366),
    s = n(773669),
    l = n(280450);
let o = {},
    d = {},
    c = {},
    u = {},
    _ = {},
    E = {},
    A = {},
    h = {},
    I = {},
    f = {},
    p = {},
    T = new Set(),
    m = { state: "idle" },
    g = new Set(),
    S = {},
    N = {},
    C = {},
    O = {},
    R = new Set(),
    L = null;
function y(e) {
    return {
        guildId: "guild" === e.type ? e.guildId : N[e.applicationId],
        applicationId: "guild" === e.type ? S[e.guildId] : e.applicationId,
    };
}
function D(e, t, n) {
    null != e && (d[e] = { ...d[e], ...n }), null != t && (c[t] = { ...c[t], ...n }), (d = { ...d }), (c = { ...c });
}
function v() {
    if (i === s.default.locale) return !1;
    (i = s.default.locale), (o = {}), (d = {}), (c = {}), (u = {}), (_ = {}), (E = {}), (A = {}), (h = {});
}
class b extends r.Ay.Store {
    static displayName = "SocialLayerStorefrontStore";
    initialize() {
        this.waitFor(l.default, s.default), this.syncWith([s.default], v), (i = s.default.locale);
    }
    getStorefrontData(e) {
        return d[e];
    }
    getStorefrontDataForApplicationId(e) {
        return c[e];
    }
    getLoadedStorefrontApplicationIds() {
        return Object.keys(c);
    }
    getStorefrontFetchState(e) {
        let { guildId: t, applicationId: n } = y(e);
        return null != t ? d[t] : null != n ? c[n] : void 0;
    }
    getSkuAssets() {
        return A;
    }
    getStorefrontMetadata(e) {
        return h[e];
    }
    getStorefrontEntries(e) {
        return u[e];
    }
    getStorefrontById(e) {
        return _[e];
    }
    getPreviewStorefrontId(e) {
        return E[e] ?? null;
    }
    getStorefrontState(e) {
        if (null != e) return o[e];
    }
    getAnnouncement(e) {
        return I[e];
    }
    getConfig() {
        return "success" === m.state ? m.config : null;
    }
    getConfigForApplicationId(e) {
        return O[e];
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
        return m;
    }
    getStorefrontApplicationIds() {
        return g;
    }
    hasStorefrontForApplicationId(e) {
        return null != e && g.has(e);
    }
    getStorefrontGuildIds() {
        return R;
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
    getAnnouncementModalContentConfig() {
        return L;
    }
}
let M = new b(a.h, {
    LOGOUT: function () {
        (A = {}),
            (h = {}),
            (f = {}),
            (p = {}),
            (c = {}),
            (d = {}),
            (u = {}),
            (_ = {}),
            (E = {}),
            (T = new Set()),
            (m = { state: "idle" }),
            (g = new Set()),
            (S = {}),
            (N = {}),
            (C = {}),
            (O = {}),
            (R = new Set()),
            (L = null);
    },
    STOREFRONT_PROMOTION_ID_OVERRIDE_SET: function () {
        (c = {}), (d = {});
    },
    POST_CONNECTION_OPEN: function () {
        (f = {}), (p = {}), (T = new Set());
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
                if (T.size >= 25) {
                    let e = T.values().next().value;
                    T.delete(e);
                }
                T.add(t);
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
            { guildId: n, applicationId: i } = y(t);
        D(n, i, { state: "loading" });
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: function (e) {
        let { guildOrApplicationId: t, storefront: n } = e,
            i = "guild" === t.type ? t.guildId : y(t).guildId;
        null != i && null == S[i] && ((S[i] = n.applicationId), (S = { ...S })),
            null != n.applicationId &&
                null != i &&
                null == N[n.applicationId] &&
                ((N[n.applicationId] = i), (N = { ...N })),
            D(i, n.applicationId, { state: "fetched", fetchedAt: Date.now(), storefront: n }),
            null != n.assets && (A = { ...A, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_PARTIAL_LOAD_SUCCESS: function (e) {
        let { assets: t } = e;
        A = { ...A, ...t };
    },
    SOCIAL_LAYER_STOREFRONT_METADATA_LOAD_SUCCESS: function (e) {
        let { applicationId: t, storefrontMetadata: n } = e;
        h = { ...h, [t]: n };
    },
    SOCIAL_LAYER_STOREFRONT_LOAD_FAILURE: function (e) {
        let { guildOrApplicationId: t, eager: n } = e,
            { guildId: i, applicationId: r } = y(t),
            a = null != i ? d[i] : null != r ? c[r] : void 0;
        if (null == a) return !1;
        if (n)
            if ("loading" === a.state && null != a.storefront) D(i, r, { state: "fetched" });
            else null != i && delete d[i], null != r && delete c[r], (d = { ...d }), (c = { ...c });
        else D(i, r, { state: "error", fetchedAt: Date.now(), storefront: void 0 });
    },
    SET_SOCIAL_LAYER_STOREFRONT_STATE: function (e) {
        let { applicationId: t, pageIndex: n, skuId: i } = e;
        (o[t] = { activePage: n, activeSkuId: i }), (o = { ...o });
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_START: function (e) {
        let { guildId: t } = e;
        (I = { ...I })[t] = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_SUCCESS: function (e) {
        let { guildId: t, announcement: n } = e;
        (I = { ...I })[t] = { state: "success", announcement: n };
    },
    SOCIAL_LAYER_STOREFRONT_ANNOUNCEMENT_FETCH_FAILURE: function (e) {
        let { guildId: t } = e;
        (I = { ...I })[t] = { state: "error" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_START: function () {
        m = { state: "loading" };
    },
    SOCIAL_LAYER_STOREFRONT_CONFIG_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        (m = { state: "success", config: t, fetchedAt: Date.now() }),
            (g = new Set(t.storefronts.map((e) => e.applicationId))),
            (R = new Set(t.storefronts.filter((e) => null != e.guildId).map((e) => e.guildId))),
            (S = t.storefronts.reduce((e, t) => (null != t.guildId && (e[t.guildId] = t.applicationId), e), {})),
            (N = t.storefronts.reduce(
                (e, t) => (null != t.guildId && ((e[t.applicationId] = t.guildId), (e[t.gameId] = t.guildId)), e),
                {},
            )),
            (C = t.storefronts.reduce(
                (e, t) => ((e[t.gameId] = t.applicationId), (e[t.applicationId] = t.applicationId), e),
                {},
            )),
            (O = t.storefronts.reduce((e, t) => ((e[t.applicationId] = t), e), {}));
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
        if (T.has(n)) {
            T.delete(n), (f = { ...f, [t]: { state: "error", reason: "interaction_failure" } });
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
        if (l.default.getId() !== n) return !1;
        f = { ...f, [t]: i ? { state: "eligible" } : { state: "ineligible", ineligibleReason: r } };
    },
    SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD: function (e) {
        let { applicationId: t } = e;
        u = { ...u, [t]: { state: "loading" } };
    },
    SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_SUCCESS: function (e) {
        let { applicationId: t, entries: n } = e;
        u = { ...u, [t]: { state: "fetched", entries: n, fetchedAt: Date.now() } };
    },
    SOCIAL_LAYER_STOREFRONT_ENTRIES_LOAD_FAILURE: function (e) {
        let { applicationId: t } = e;
        u = { ...u, [t]: { state: "error", fetchedAt: Date.now() } };
    },
    SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD: function (e) {
        let { storefrontId: t } = e;
        _ = { ..._, [t]: { ..._[t], storefront: null, state: "loading", fetchedAt: null } };
    },
    SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_SUCCESS: function (e) {
        let { storefrontId: t, storefront: n } = e;
        (_ = { ..._, [t]: { storefront: n, state: "fetched", fetchedAt: Date.now() } }),
            null != n.assets && (A = { ...A, ...n.assets });
    },
    SOCIAL_LAYER_STOREFRONT_BY_ID_LOAD_FAILURE: function (e) {
        let { storefrontId: t } = e;
        _ = { ..._, [t]: { storefront: null, state: "error", fetchedAt: Date.now() } };
    },
    SOCIAL_LAYER_STOREFRONT_SET_PREVIEW: function (e) {
        let { applicationId: t, storefrontId: n } = e;
        (E = { ...E }), null == n ? delete E[t] : (E[t] = n);
    },
    SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_SUCCESS: function (e) {
        let { config: t } = e;
        L = t;
    },
    SOCIAL_LAYER_STOREFRONT_LAUNCH_ANNOUNCEMENT_FETCH_FAILURE: function () {
        L = null;
    },
});
