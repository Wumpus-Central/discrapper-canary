n.d(t, { Z: () => q }), n(388685), n(642613), n(539854);
var r,
    i = n(442837),
    a = n(570140),
    o = n(973616);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                s(e, t, n[t]);
            });
    }
    return e;
}
function c(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function u(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : c(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let d = [],
    f = new Map(),
    _ = new Map(),
    p = new Map(),
    h = new Map(),
    m = new Map(),
    g = { botUserIdToAppUsage: {} },
    E = 10;
function b(e) {
    let t = f.get(e.id);
    h.set(e.id, Date.now());
    let n = e;
    for (let r of (null != t && (n = t.mergeFromApplicationUpdate(e)),
    f.set(e.id, n),
    p.set(e.name.toLowerCase(), n),
    e.aliases))
        p.set(r.toLowerCase(), n);
    if (null != e.linkedGames)
        for (let t of e.linkedGames)
            null != t.application &&
                b(t.application instanceof o.ZP ? t.application : o.ZP.createFromServer(t.application));
    m.delete(e.id);
}
function y() {
    f.clear(), _.clear(), p.clear(), h.clear(), m.clear();
}
function O(e) {
    let {
        wishlistData: { applications: t },
    } = e;
    if (null == t || 0 === t.length) return !1;
    for (let e of t) b(e);
}
function v(e) {
    let {
        storefront: { application: t },
    } = e;
    if (null == t) return !1;
    b(t);
}
function I(e) {
    let { applications: t } = e;
    for (let e of t) b(new o.ZP(e));
}
function T(e) {
    let { applicationId: t } = e,
        n = m.get(t);
    return m.set(t, !0), !0 !== n;
}
function S(e) {
    let { application: t } = e;
    C(t);
}
function A(e) {
    let { application: t } = e;
    C(t);
}
function C(e) {
    b(o.ZP.createFromServer(e));
}
function N(e) {
    let { userId: t, applicationId: n } = e,
        r = g.botUserIdToAppUsage[t];
    null == r
        ? (g.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: Date.now(),
          })
        : (g.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: r.lastUsedMs,
          });
    let i = new Map();
    for (let [e, t] of Object.entries(g.botUserIdToAppUsage)) i.set(e, t);
    let a = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < a.length; e++)
        if (e >= E) {
            let t = a[e][0];
            delete g.botUserIdToAppUsage[t];
        }
}
function R(e) {
    let { applicationId: t } = e,
        n = m.get(t);
    return m.set(t, !1), !1 !== n;
}
function P(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = m.get(e);
        m.set(e, !0), (n = !0 !== t);
    }
    return n;
}
function D(e) {
    let { libraryApplications: t } = e;
    for (let e of t) b(o.ZP.createFromServer(e.application));
}
function w(e) {
    let { applications: t } = e;
    for (let e of t) b(o.ZP.createFromServer(e));
}
function L(e) {
    let { userProfile: t } = e,
        { user: n, application: r } = t;
    n.bot &&
        null != r &&
        N({
            userId: n.id,
            applicationId: r.id,
        });
}
function x(e) {
    let { botUserId: t } = e,
        n = g.botUserIdToAppUsage[t];
    null != n && (g.botUserIdToAppUsage[t] = u(l({}, n), { lastUsedMs: Date.now() }));
}
function M(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = m.get(e);
        m.set(e, !1), (n = !1 !== t);
    }
    return n;
}
function j(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t)
        (null == e ? void 0 : e.application) != null && (b(o.ZP.createFromServer(e.application)), (n = !0));
    return n;
}
function k(e) {
    let { guildId: t, applications: n } = e,
        r = [];
    for (let e of n) r.push(e.id), b(o.ZP.createFromServer(e));
    _.set(t, r);
}
function U(e) {
    let { payments: t } = e,
        n = new Set();
    for (let e of t) {
        var r;
        let t = null == (r = e.sku) ? void 0 : r.application;
        null == t || n.has(t.id) || b(o.ZP.createFromServer(t));
    }
    return n.size > 0;
}
function G(e) {
    var t;
    let { payment: n } = e;
    if ((null == (t = n.sku) ? void 0 : t.application) == null) return !1;
    b(o.ZP.createFromServer(n.sku.application));
}
function B(e) {
    var t;
    let { giftCode: n } = e;
    if ((null == (t = n.store_listing) ? void 0 : t.sku.application) == null) return !1;
    b(o.ZP.createFromServer(n.store_listing.sku.application));
}
function Z(e) {
    let { invite: t } = e;
    if (null == t.target_application) return !1;
    b(o.ZP.createFromServer(t.target_application));
}
function F(e) {
    let { storeListing: t } = e;
    if (null == t.sku.application) return !1;
    b(o.ZP.createFromServer(t.sku.application));
}
function V(e) {
    let { messages: t } = e;
    t.forEach((e) => H(e));
}
function H(e) {
    var t;
    null == (t = e.attachments) ||
        t.forEach((e) => {
            null != e.application && b(o.ZP.createFromServer(e.application));
        });
}
function Y(e) {
    let { application: t } = e;
    b(o.ZP.createFromServer(t));
}
function W(e) {
    e.tokens.forEach((e) => {
        b(o.ZP.createFromServer(e.application));
        let t = e.application.bot;
        null != t &&
            N({
                userId: t.id,
                applicationId: e.application.id,
            });
    });
}
function K(e) {
    e.items.forEach((e) => {
        null != e.application && b(o.ZP.createFromServer(e.application));
    });
}
class z extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e && "object" == typeof e.botUserIdToAppUsage)
            for (let t in e.botUserIdToAppUsage) {
                let n = e.botUserIdToAppUsage[t],
                    r = n.applicationId,
                    i = n.lastUsedMs;
                "string" == typeof r &&
                    r.length > 0 &&
                    "number" == typeof i &&
                    i > 0 &&
                    (g.botUserIdToAppUsage[t] = {
                        applicationId: r,
                        lastUsedMs: i,
                    });
            }
    }
    getState() {
        return g;
    }
    _getAllApplications() {
        return Array.from(f.values());
    }
    getGuildApplication(e, t) {
        if (null != e) {
            for (let n of f.values()) if (n.guildId === e && n.type === t) return n;
        }
    }
    getGuildApplicationIds(e) {
        var t;
        return null == e ? d : null != (t = _.get(e)) ? t : d;
    }
    getApplication(e) {
        if (null != e) return f.get(e);
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return p.has(t) ? p.get(t) : void 0;
    }
    getApplicationLastUpdated(e) {
        return h.get(e);
    }
    isFetchingApplication(e) {
        return !0 === m.get(e);
    }
    didFetchingApplicationFail(e) {
        return !1 === m.get(e);
    }
    getFetchingOrFailedFetchingIds() {
        return Array.from(m.keys());
    }
    getAppIdForBotUserId(e) {
        var t;
        if (null != e) return null == (t = g.botUserIdToAppUsage[e]) ? void 0 : t.applicationId;
    }
}
s(z, "displayName", "ApplicationStore"), s(z, "persistKey", "ApplicationStore");
let q = new z(a.Z, {
    LOGOUT: y,
    OVERLAY_INITIALIZE: I,
    APPLICATION_FETCH: T,
    APPLICATION_FETCH_SUCCESS: A,
    APPLICATION_FETCH_FAIL: R,
    APPLICATIONS_FETCH: P,
    APPLICATIONS_FETCH_SUCCESS: w,
    APPLICATIONS_FETCH_FAIL: M,
    APPLICATION_UPDATE: S,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: j,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: j,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: j,
    GUILD_APPLICATIONS_FETCH_SUCCESS: k,
    BILLING_PAYMENTS_FETCH_SUCCESS: U,
    PAYMENT_UPDATE: G,
    INVITE_RESOLVE_SUCCESS: Z,
    GIFT_CODE_RESOLVE_SUCCESS: B,
    LIBRARY_FETCH_SUCCESS: D,
    STORE_LISTING_FETCH_SUCCESS: F,
    LOAD_MESSAGES_SUCCESS: V,
    USER_PROFILE_FETCH_SUCCESS: L,
    APP_DM_OPEN: x,
    USER_AUTHORIZED_APPS_UPDATE: W,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: K,
    OAUTH2_TOKEN_CREATE: Y,
    WISHLIST_FETCH_SUCCESS: O,
    WISHLIST_ADD_SKU_SUCCESS: O,
    WISHLIST_REMOVE_SKU_SUCCESS: O,
    SOCIAL_LAYER_STOREFRONT_LOAD_SUCCESS: v,
});
