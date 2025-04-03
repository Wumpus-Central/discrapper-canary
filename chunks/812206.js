n.d(t, { Z: () => K }), n(47120), n(230036), n(653041);
var r,
    i = n(442837),
    o = n(570140),
    a = n(973616);
function s(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    f = {},
    _ = {},
    p = {},
    h = {},
    m = {},
    g = { botUserIdToAppUsage: {} },
    E = 10;
function b(e) {
    let t = f[e.id];
    h[e.id] = Date.now();
    let n = e;
    for (let r of (null != t && (n = t.mergeFromApplicationUpdate(e)), (f[e.id] = n), (p[e.name.toLowerCase()] = n), e.aliases)) p[r.toLowerCase()] = n;
    delete m[e.id];
}
function y() {
    (f = {}), (_ = {}), (p = {}), (h = {}), (m = {});
}
function v(e) {
    let { applications: t } = e;
    for (let e of t) b(new a.ZP(e));
}
function O(e) {
    let { applicationId: t } = e,
        n = m[t];
    return (m[t] = !0), !0 !== n;
}
function I(e) {
    let { application: t } = e;
    T(t);
}
function S(e) {
    let { application: t } = e;
    T(t);
}
function T(e) {
    b(a.ZP.createFromServer(e));
}
function N(e) {
    let { userId: t, applicationId: n } = e,
        r = g.botUserIdToAppUsage[t];
    null == r
        ? (g.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: Date.now()
          })
        : (g.botUserIdToAppUsage[t] = {
              applicationId: n,
              lastUsedMs: r.lastUsedMs
          });
    let i = new Map();
    for (let [e, t] of Object.entries(g.botUserIdToAppUsage)) i.set(e, t);
    let o = Array.from(i.entries()).sort((e, t) => t[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < o.length; e++)
        if (e >= E) {
            let t = o[e][0];
            delete g.botUserIdToAppUsage[t];
        }
}
function A(e) {
    let { applicationId: t } = e,
        n = m[t];
    return (m[t] = !1), !1 !== n;
}
function C(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = m[e];
        (m[e] = !0), (n = !0 !== t);
    }
    return n;
}
function R(e) {
    let { libraryApplications: t } = e;
    for (let e of t) b(a.ZP.createFromServer(e.application));
}
function P(e) {
    let { applications: t } = e;
    for (let e of t) b(a.ZP.createFromServer(e));
}
function w(e) {
    let { recommendations: t } = e;
    t.forEach((e) => {
        e.items.forEach((e) => {
            b(a.ZP.createFromServer(e.application));
        });
    });
}
function D(e) {
    let { userProfile: t } = e,
        { user: n, application: r } = t;
    n.bot &&
        null != r &&
        N({
            userId: n.id,
            applicationId: r.id
        });
}
function L(e) {
    let { botUserId: t } = e,
        n = g.botUserIdToAppUsage[t];
    null != n && (g.botUserIdToAppUsage[t] = u(l({}, n), { lastUsedMs: Date.now() }));
}
function x(e) {
    let { applicationIds: t } = e,
        n = !1;
    for (let e of t) {
        let t = m[e];
        (m[e] = !1), (n = !1 !== t);
    }
    return n;
}
function M(e) {
    let { entitlements: t } = e,
        n = !1;
    for (let { sku: e } of t) (null == e ? void 0 : e.application) != null && (b(a.ZP.createFromServer(e.application)), (n = !0));
    return n;
}
function k(e) {
    let { guildId: t, applications: n } = e,
        r = [];
    for (let e of n) r.push(e.id), b(a.ZP.createFromServer(e));
    _[t] = r;
}
function j(e) {
    let { payments: t } = e,
        n = new Set();
    for (let e of t) {
        var r;
        let t = null == (r = e.sku) ? void 0 : r.application;
        null == t || n.has(t.id) || b(a.ZP.createFromServer(t));
    }
    return n.size > 0;
}
function U(e) {
    var t;
    let { payment: n } = e;
    if ((null == (t = n.sku) ? void 0 : t.application) == null) return !1;
    b(a.ZP.createFromServer(n.sku.application));
}
function G(e) {
    var t;
    let { giftCode: n } = e;
    if ((null == (t = n.store_listing) ? void 0 : t.sku.application) == null) return !1;
    b(a.ZP.createFromServer(n.store_listing.sku.application));
}
function B(e) {
    let { invite: t } = e;
    if (null == t.target_application) return !1;
    b(a.ZP.createFromServer(t.target_application));
}
function F(e) {
    let { storeListing: t } = e;
    if (null == t.sku.application) return !1;
    b(a.ZP.createFromServer(t.sku.application));
}
function V(e) {
    let { messages: t } = e;
    t.forEach((e) => Z(e));
}
function Z(e) {
    var t;
    null == (t = e.attachments) ||
        t.forEach((e) => {
            null != e.application && b(a.ZP.createFromServer(e.application));
        });
}
function H(e) {
    e.apps.forEach((e) => {
        b(a.ZP.createFromServer(e.application));
        let t = e.application.bot;
        null != t &&
            N({
                userId: t.id,
                applicationId: e.application.id
            });
    });
}
function W(e) {
    e.items.forEach((e) => {
        null != e.application && b(a.ZP.createFromServer(e.application));
    });
}
class Y extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (null != e && 'object' == typeof e.botUserIdToAppUsage)
            for (let t in e.botUserIdToAppUsage) {
                let n = e.botUserIdToAppUsage[t],
                    r = n.applicationId,
                    i = n.lastUsedMs;
                'string' == typeof r &&
                    r.length > 0 &&
                    'number' == typeof i &&
                    i > 0 &&
                    (g.botUserIdToAppUsage[t] = {
                        applicationId: r,
                        lastUsedMs: i
                    });
            }
    }
    getState() {
        return g;
    }
    _getAllApplications() {
        return Object.values(f);
    }
    getApplications() {
        return f;
    }
    getGuildApplication(e, t) {
        if (null != e) {
            for (let n of Object.values(f)) if (n.guildId === e && n.type === t) return n;
        }
    }
    getGuildApplicationIds(e) {
        var t;
        return null == e ? d : null != (t = _[e]) ? t : d;
    }
    getApplication(e) {
        if (null != e) return f[e];
    }
    getApplicationByName(e) {
        if (null == e) return;
        let t = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(p, t) ? p[t] : void 0;
    }
    getApplicationLastUpdated(e) {
        return h[e];
    }
    isFetchingApplication(e) {
        return !0 === m[e];
    }
    didFetchingApplicationFail(e) {
        return !1 === m[e];
    }
    getFetchingOrFailedFetchingIds() {
        return Object.keys(m);
    }
    getAppIdForBotUserId(e) {
        var t;
        if (null != e) return null == (t = g.botUserIdToAppUsage[e]) ? void 0 : t.applicationId;
    }
}
s(Y, 'displayName', 'ApplicationStore'), s(Y, 'persistKey', 'ApplicationStore');
let K = new Y(o.Z, {
    LOGOUT: y,
    OVERLAY_INITIALIZE: v,
    APPLICATION_FETCH: O,
    APPLICATION_FETCH_SUCCESS: S,
    APPLICATION_FETCH_FAIL: A,
    APPLICATIONS_FETCH: C,
    APPLICATIONS_FETCH_SUCCESS: P,
    APPLICATIONS_FETCH_FAIL: x,
    APPLICATION_UPDATE: I,
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: M,
    ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
    ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: M,
    GUILD_APPLICATIONS_FETCH_SUCCESS: k,
    BILLING_PAYMENTS_FETCH_SUCCESS: j,
    PAYMENT_UPDATE: U,
    INVITE_RESOLVE_SUCCESS: B,
    GIFT_CODE_RESOLVE_SUCCESS: G,
    LIBRARY_FETCH_SUCCESS: R,
    STORE_LISTING_FETCH_SUCCESS: F,
    LOAD_MESSAGES_SUCCESS: V,
    APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: w,
    USER_PROFILE_FETCH_SUCCESS: D,
    APP_DM_OPEN: L,
    USER_AUTHORIZED_APPS_UPDATE: H,
    LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: W
});
