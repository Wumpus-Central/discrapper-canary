var i,
    a = r(47120);
var s = r(653041);
var o = r(442837),
    l = r(570140),
    u = r(973616);
function c(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
}
let d = [],
    f = {},
    _ = {},
    h = {},
    p = {},
    m = {},
    g = { botUserIdToAppUsage: {} },
    E = 10;
function v(e) {
    let n = f[e.id];
    p[e.id] = Date.now();
    let r = e;
    for (let i of (null != n && (r = n.mergeFromApplicationUpdate(e)), (f[e.id] = r), (h[e.name.toLowerCase()] = r), e.aliases)) h[i.toLowerCase()] = r;
    delete m[e.id];
}
function I() {
    (f = {}), (_ = {}), (h = {}), (p = {}), (m = {});
}
function T(e) {
    let { applications: n } = e;
    for (let e of n) v(new u.ZP(e));
}
function b(e) {
    let { applicationId: n } = e,
        r = m[n];
    return (m[n] = !0), !0 !== r;
}
function y(e) {
    let { application: n } = e;
    A(n);
}
function S(e) {
    let { application: n } = e;
    A(n);
}
function A(e) {
    v(u.ZP.createFromServer(e));
}
function N(e) {
    let { userId: n, applicationId: r } = e,
        i = g.botUserIdToAppUsage[n];
    null == i
        ? (g.botUserIdToAppUsage[n] = {
              applicationId: r,
              lastUsedMs: Date.now()
          })
        : (g.botUserIdToAppUsage[n] = {
              applicationId: r,
              lastUsedMs: i.lastUsedMs
          });
    let a = new Map();
    for (let [e, n] of Object.entries(g.botUserIdToAppUsage)) a.set(e, n);
    let s = Array.from(a.entries()).sort((e, n) => n[1].lastUsedMs - e[1].lastUsedMs);
    for (let e = 0; e < s.length; e++)
        if (e >= E) {
            let n = s[e][0];
            delete g.botUserIdToAppUsage[n];
        }
}
function C(e) {
    let { applicationId: n } = e,
        r = m[n];
    return (m[n] = !1), !1 !== r;
}
function R(e) {
    let { applicationIds: n } = e,
        r = !1;
    for (let e of n) {
        let n = m[e];
        (m[e] = !0), (r = !0 !== n);
    }
    return r;
}
function O(e) {
    let { libraryApplications: n } = e;
    for (let e of n) v(u.ZP.createFromServer(e.application));
}
function D(e) {
    let { applications: n } = e;
    for (let e of n) v(u.ZP.createFromServer(e));
}
function L(e) {
    let { recommendations: n } = e;
    n.forEach((e) => {
        e.items.forEach((e) => {
            v(u.ZP.createFromServer(e.application));
        });
    });
}
function x(e) {
    let { user: n, application: r } = e;
    n.bot &&
        null != r &&
        N({
            userId: n.id,
            applicationId: r.id
        });
}
function w(e) {
    let { botUserId: n } = e,
        r = g.botUserIdToAppUsage[n];
    null != r &&
        (g.botUserIdToAppUsage[n] = {
            ...r,
            lastUsedMs: Date.now()
        });
}
function P(e) {
    let { applicationIds: n } = e,
        r = !1;
    for (let e of n) {
        let n = m[e];
        (m[e] = !1), (r = !1 !== n);
    }
    return r;
}
function M(e) {
    let { entitlements: n } = e,
        r = !1;
    for (let { sku: e } of n) (null == e ? void 0 : e.application) != null && (v(u.ZP.createFromServer(e.application)), (r = !0));
    return r;
}
function k(e) {
    let { guildId: n, applications: r } = e,
        i = [];
    for (let e of r) i.push(e.id), v(u.ZP.createFromServer(e));
    _[n] = i;
}
function U(e) {
    let { payments: n } = e,
        r = new Set();
    for (let e of n) {
        var i;
        let n = null === (i = e.sku) || void 0 === i ? void 0 : i.application;
        !(null == n || r.has(n.id)) && v(u.ZP.createFromServer(n));
    }
    return r.size > 0;
}
function B(e) {
    var n;
    let { payment: r } = e;
    if ((null === (n = r.sku) || void 0 === n ? void 0 : n.application) == null) return !1;
    v(u.ZP.createFromServer(r.sku.application));
}
function G(e) {
    var n;
    let { giftCode: r } = e;
    if ((null === (n = r.store_listing) || void 0 === n ? void 0 : n.sku.application) == null) return !1;
    v(u.ZP.createFromServer(r.store_listing.sku.application));
}
function Z(e) {
    let { invite: n } = e;
    if (null == n.target_application) return !1;
    v(u.ZP.createFromServer(n.target_application));
}
function F(e) {
    let { storeListing: n } = e;
    if (null == n.sku.application) return !1;
    v(u.ZP.createFromServer(n.sku.application));
}
function V(e) {
    let { messages: n } = e;
    n.forEach((e) => j(e));
}
function j(e) {
    var n;
    null === (n = e.attachments) ||
        void 0 === n ||
        n.forEach((e) => {
            null != e.application && v(u.ZP.createFromServer(e.application));
        });
}
function H(e) {
    e.apps.forEach((e) => {
        v(u.ZP.createFromServer(e.application));
        let n = e.application.bot;
        null != n &&
            N({
                userId: n.id,
                applicationId: e.application.id
            });
    });
}
class Y extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        if (null != e && 'object' == typeof e.botUserIdToAppUsage)
            for (let n in e.botUserIdToAppUsage) {
                let r = e.botUserIdToAppUsage[n],
                    i = r.applicationId,
                    a = r.lastUsedMs;
                'string' == typeof i &&
                    i.length > 0 &&
                    'number' == typeof a &&
                    a > 0 &&
                    (g.botUserIdToAppUsage[n] = {
                        applicationId: i,
                        lastUsedMs: a
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
    getGuildApplication(e, n) {
        if (null != e) {
            for (let r of Object.values(f)) if (r.guildId === e && r.type === n) return r;
        }
    }
    getGuildApplicationIds(e) {
        var n;
        return null == e ? d : null !== (n = _[e]) && void 0 !== n ? n : d;
    }
    getApplication(e) {
        if (null != e) return f[e];
    }
    getApplicationByName(e) {
        if (null == e) return;
        let n = e.toLowerCase();
        return Object.prototype.hasOwnProperty.call(h, n) ? h[n] : void 0;
    }
    getApplicationLastUpdated(e) {
        return p[e];
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
        var n;
        if (null != e) return null === (n = g.botUserIdToAppUsage[e]) || void 0 === n ? void 0 : n.applicationId;
    }
}
c(Y, 'displayName', 'ApplicationStore'),
    c(Y, 'persistKey', 'ApplicationStore'),
    (n.Z = new Y(l.Z, {
        LOGOUT: I,
        OVERLAY_INITIALIZE: T,
        APPLICATION_FETCH: b,
        APPLICATION_FETCH_SUCCESS: S,
        APPLICATION_FETCH_FAIL: C,
        APPLICATIONS_FETCH: R,
        APPLICATIONS_FETCH_SUCCESS: D,
        APPLICATIONS_FETCH_FAIL: P,
        APPLICATION_UPDATE: y,
        APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: M,
        ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: M,
        ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: M,
        GUILD_APPLICATIONS_FETCH_SUCCESS: k,
        BILLING_PAYMENTS_FETCH_SUCCESS: U,
        PAYMENT_UPDATE: B,
        INVITE_RESOLVE_SUCCESS: Z,
        GIFT_CODE_RESOLVE_SUCCESS: G,
        LIBRARY_FETCH_SUCCESS: O,
        STORE_LISTING_FETCH_SUCCESS: F,
        LOAD_MESSAGES_SUCCESS: V,
        APP_RECOMMENDATIONS_FETCH_RECOMMENDATIONS_SUCCESS: L,
        USER_PROFILE_FETCH_SUCCESS: x,
        APP_DM_OPEN: w,
        USER_AUTHORIZED_APPS_UPDATE: H
    }));
